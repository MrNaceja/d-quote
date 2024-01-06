export type TQuote = {
    phrase: string,
    image: string
}

export type TFetchQuotes = (searchTerm?: string) => void
export type TUseQuotes = () => {
    quotes: TQuote[],
    hasQuotes: boolean,
    loading: boolean,
    clearQuotes: () => void,
    fetchQuotes: TFetchQuotes,
}