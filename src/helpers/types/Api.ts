import { TQuote } from "./Quote";

export type TApi = (limit: number, offset: number, searchTerm: string) => Promise<{quotesFounded: TQuote[], hasMore: boolean}>
export type TFetchPageHtml = (searchTerm: string, page: number) => Promise<string>
export type TExtractPhrasesFromHtml = (
    htmlContent: string,
    numberPhrases: number
  ) => Promise<{ phrases: string[]; hasMorePagination: boolean }>