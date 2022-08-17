import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import stringSimilarity from 'string-similarity'

export interface IScoredSuggestions extends ISuggestionDto {
  isAtStart: boolean
  score: number
}

export interface ISuggestionsContext {
  suggestions: ISuggestionDto[]
  setSuggestions: React.Dispatch<React.SetStateAction<ISuggestionDto[]>>
  addSuggestion: (x: ISuggestionDto) => void
  findSuggestions: (x: string) => Promise<IScoredSuggestions[]>
}

export const SuggestionsContext = createContext<ISuggestionsContext>({
  suggestions: [],
  setSuggestions: () => null,
  addSuggestion: () => null,
  findSuggestions: async () => [],
})

export const SuggestionsContextProvider: React.FC<IGenericProps> = ({
  children,
}) => {
  const [suggestions, setSuggestions] = useState<ISuggestionDto[]>([])

  useEffect(() => {
    ;(async function () {
      setSuggestions(await (await axios.get('/api/suggestions')).data)
    })()
  }, [])

  function addSuggestion(newSuggestion: ISuggestionDto) {
    setSuggestions([...suggestions, newSuggestion])
  }

  async function findSuggestions(search: string) {
    if (!search || search.length <= 3) return []

    const filteredSuggestions: IScoredSuggestions[] = []

    suggestions.forEach((el) => {
      const title = el?.title?.toLowerCase()
      const lowercaseSearch = search.toLowerCase()
      const searchRegex = new RegExp(`^${search}`, 'i')
      const entireScore = stringSimilarity.compareTwoStrings(
        title,
        lowercaseSearch
      )
      const croppedScore = stringSimilarity.compareTwoStrings(
        title.slice(0, search.length),
        lowercaseSearch
      )

      if (searchRegex.test(title) || entireScore > 0.7 || croppedScore > 0.8) {
        filteredSuggestions.push({
          ...el,
          isAtStart: searchRegex.test(title),
          score: entireScore,
        })
      }
    })

    filteredSuggestions.sort((a, b) => (a.score > b.score ? -1 : 1))
    return filteredSuggestions
  }

  return (
    <SuggestionsContext.Provider
      value={{
        suggestions,
        setSuggestions,
        addSuggestion,
        findSuggestions,
      }}
    >
      {children}
    </SuggestionsContext.Provider>
  )
}
