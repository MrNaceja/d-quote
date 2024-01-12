import { useCallback, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { FlatList } from "@gluestack-ui/themed";

import { SCREEN } from "@/constants/SCREEN";
import { TQuote } from "@/helpers/types/Quote";
import { useQuotes } from "@/hooks/useQuotes";

import { FooterLoading, FullScreenLoading } from "@/components/Loading";
import { QuoteScreen } from "@/components/QuoteScreen";
import { CopyButton } from "@/components/CopyButton";
import { SearchTerm } from "@/components/SearchTerm";
import { NoSearchTerm } from "@/components/NoSearchTerm";
import { FullScreen } from "@/components/FullScreen";
import { Logo } from "@/components/Logo";

export default function HomeScreen() {
    const { quotes, hasQuotes, fetchQuotes, clearQuotes, loading } = useQuotes()
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')

    const currentQuoteText = quotes[currentQuoteIndex]?.phrase || ''
    const hasSearchTerm = searchTerm.length > 0

    const handleConfirmSearchTerm = useCallback(() => {
        clearQuotes()
        fetchQuotes(searchTerm)
    }, [clearQuotes, fetchQuotes, searchTerm])

    const handleReachEnd = useCallback(() => fetchQuotes(searchTerm), [fetchQuotes, searchTerm])

    const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const indexScrolled = parseInt((event.nativeEvent.contentOffset.y / SCREEN.height).toFixed(0))
        if (currentQuoteIndex != indexScrolled) {
            setCurrentQuoteIndex(indexScrolled)
        }
    }, [currentQuoteIndex, setCurrentQuoteIndex])

    return (
        <FullScreen>
            <SearchTerm value={searchTerm} onChangeText={setSearchTerm} onConfirm={handleConfirmSearchTerm} />
            <FlatList
                ListEmptyComponent={loading ? <FullScreenLoading /> : <NoSearchTerm />}
                onMomentumScrollEnd={handleScroll}
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
                decelerationRate={0.5}
                pagingEnabled
                data={quotes}
                showsVerticalScrollIndicator={false}
                snapToAlignment="center"
                onEndReachedThreshold={0.8}
                onEndReached={handleReachEnd}
                ListFooterComponent={(hasSearchTerm && quotes.length) ? <FooterLoading /> : null}
                keyExtractor={(item, index: number) => item + "_" + index}
                renderItem={({ item: quote }) => <QuoteScreen quote={quote as TQuote} />}
            />
            <Logo />
            <CopyButton textToCopy={currentQuoteText} isDisabled={loading || !hasQuotes} />
        </FullScreen>
    )
}