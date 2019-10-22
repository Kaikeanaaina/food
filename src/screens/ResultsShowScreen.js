import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
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

    // a Check
    // if it gets past this that means we called something other than null like our object
    if(!result) {
        return null
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{ uri: item}} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width:300
    }
})

export default ResultsShowScreen
