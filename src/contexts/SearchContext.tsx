import { createContext, useState } from 'react'

export interface ISearchContext {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const SearchContext = createContext<ISearchContext>({
  search: '',
  setSearch: () => null,
})

export const SearchContextProvider: React.FC<IGenericProps> = ({
  children,
}) => {
  const [search, setSearch] = useState('')

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}
