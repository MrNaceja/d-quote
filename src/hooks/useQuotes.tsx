import { TFetchQuotes, TQuote, TUseQuotes } from "@/helpers/types/Quote"
import { useCallback, useState } from "react"
import { useNotify } from "./useNotify"
import { api } from "@/services/api"

export const useQuotes : TUseQuotes = () => {
    const [quotes, setQuotes] = useState<TQuote[]>([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const notify = useNotify()

    const clearQuotes = useCallback(() => quotes.length > 0 && setQuotes([]), [setQuotes, quotes])

    const fetchQuotes : TFetchQuotes = useCallback(async (searchTerm) => {
        if (!searchTerm) return setPage(1)
        if (loading)     return

        setLoading(true)
        try {
            const { quotesFounded, hasMore } = await api(2, page, searchTerm)
            if (quotesFounded.length == 0) {
                notify.showInfo('Termo de busca', `Não foram encontradas nenhuma frase para o termo de busca "${searchTerm}".`)
            }
            if (hasMore) {
                setPage(prev => ++prev)
            }
            setQuotes(prev => [...prev, ...quotesFounded])
        }
        catch (error) {
            notify.showError(error instanceof Error ? error.message : 'Erro não tratado')
        }
        finally {
            setLoading(false)
        }
    }, [clearQuotes, setQuotes, setLoading, notify])

    return {
        quotes,
        hasQuotes: quotes.length > 0,
        loading, 
        clearQuotes,
        fetchQuotes
    }

}