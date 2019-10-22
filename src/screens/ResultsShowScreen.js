import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);

    // when coming from ResultsList, we passed id through navigation
    // we then pull the navigation prop
    // getParams gets the 2nd argument that we assigned in ResultsList, which was 'id'
    const id = navigation.getParam('id');

    //we call the specific object
    //and call it response
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    //this is to make sure it's only called once
    useEffect(() => {
        getResult(id);
    }, []);

    return (
        <View>
            <Text>results show screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
})

export default ResultsShowScreen
