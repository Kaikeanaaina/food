import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    // this is how we make a new state
    const [results, setResults] = useState([])
    // we could write it out as
    // const [businesses, setBusiness] = useState([]), or restaurants, 

    // putting the async allows us to use the await syntax
    // we are waiting for some response to come back
    // we will assign the results to the response variable
    // the axios response will be a .data on it
    // we are going to set the new state to the response.data.business, 
    // which are the list of businesses we get in the response
    
    // when you request yelp.get, you have to pass in params
    // it will add to the url
    // so limit: 50 would look like, '/search?limit=50'
    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'san jose'
                // location is hardcoded
            }
        })
        // this is how you set the state
        setResults(response.data.businesses);
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                // onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={searchApi}
                // onTermSubmit={() => searchApi()}
            />
            <Text>Search Screen</Text>
            <Text>We have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})


export default SearchScreen