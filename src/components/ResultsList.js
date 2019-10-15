import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal //this is same as horizontal={true}
                showsHorizontalScrollIndicator={false}
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
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
})

export default ResultsList
