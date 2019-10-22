import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results, navigation }) => {
    // this is a checker
    // if it doesn't load anything from the search
    // the category won't render
    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal //this is same as horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id} //pick something from the data where it won't change after rerendered
                renderItem={({ item }) => {   //item is each individual item from the array of data
                    //passing in a 2nd argument to give information while navigating to the next screen
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow',{ id: item.id})}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
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

// WithNavigation will allow the Navigation prop to be directly accessible to a child component
// skipping any components in the between this component and the parent
// injecting the navigation prop to components that will actually use it
export default withNavigation(ResultsList)
