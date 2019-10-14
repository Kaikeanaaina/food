import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    // we could write it out as
    // const [businesses, setBusiness] = useState([]), or restaurants, 
    const [errorMessage, setErrorMessage] = useState('');

    // putting the async allows us to use the await syntax
    // we are waiting for some response to come back
    // we will assign the results to the response variable
    // the axios response will be a .data on it
    // we are going to set the new state to the response.data.business, 
    // which are the list of businesses we get in the response

    // when you request yelp.get, you have to pass in params
    // it will add to the url
    // so limit: 50 would look like, '/search?limit=50'
    const searchApi = async (searchTerm) => {
        try {
        // try is for the error handling
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                    // location is hardcoded
                }
            })
            // this is how you set the state
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong')
        }
    }

    // call searchApi when component
    // is first rendered BAD CODE!!!
    // searchApi('pasta')
    // this will cause us to go into an infinite looop
    
    useEffect(() => {
        searchApi('pasta');
    }, [])

    // useEffect in this case calls the searchApi() only one time when the component renders

    // useState(() => {})
    // run the arrow function EVERY TIME the component is rendered

    // useState(() => {}, [])
    // run the arrow function ONLY when the component if FIRST rendered

    // useState(() => {}, [value])
    // run the arrow function ONLY when the component is
    // FIRST rendered, AND when the 'VALUE' CHANGES

    return [searchApi, results, errorMessage]
    // need to return these to pass into the component
    // because this is what the SearchScreen is using, names are only variables
}