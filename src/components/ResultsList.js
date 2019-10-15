import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal //this is same as horizontal={true}
                data={results}
                keyExtractor={result => result.id} //pick something from the data where it won't change after rerendered
                renderItem={({ item }) => {   //item is each individual item from the array of data
                    return <ResultsDetail result={item} />
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ResultsList
