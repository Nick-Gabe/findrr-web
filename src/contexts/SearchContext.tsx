import { createContext, useState } from "react";

export interface ISearchContext {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<ISearchContext>({
  search: "",
  setSearch() {},
});

interface IProps {
  children?: JSX.Element | JSX.Element[];
}

export const SearchContextProvider: React.FC<IProps> = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
