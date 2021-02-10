import React from 'react'
import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native'
import yelp from '../api/yelp';


const ResultsShowScreen =({navigation}) => {
const id =  navigation.getParam('id');
const [results, setResults] = useState(null);


const getResults = async (id) => {

    const response = await yelp.get(`/${id}`)
    setResults(response.data)

}

useEffect(()=> {
    getResults(id)
}, [])

if(!results) {
    return null;
}

return (
    <>
        <Text style={styles.name}>{results.name}</Text>
        <FlatList 
            data={results.photos}
            keyExtractor={photo => photo}
            renderItem={({ item }) => {
                return <Image style={styles.imageStyle} source={{uri: item}} />
            }}
        />
    </>
)}

const styles = StyleSheet.create({

    imageStyle: {
        height: 200,
        width: 300,
        marginBottom: 20,
        marginLeft: 10,
        borderRadius: 5
    },

    name: {

        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
        marginVertical: 10
    }
})

export default ResultsShowScreen