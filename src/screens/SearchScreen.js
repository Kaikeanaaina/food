import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    // this is how we make a new state

    const [searchApi, results, errorMessage] = useResults();
    // this is how you call in the hooks we just made

    // this is a helper filter
    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        // use flex: 1 to the most parent view, so it call fill the screen
        <View style={{ flex:1 }}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                // onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            // onTermSubmit={() => searchApi()}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

})


export default SearchScreen