import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ScreenDetail from '../Components/ScreenDetail'
import yelp from '../api/yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errMessage, setErrMessage] = useState('');

    const searchApi = async () => {
    
        try {
       const response = await yelp.get('/search', {
           params: {
               limit: 50,
               term,
               location: 'san jose'
           }
       });
        setResults(response.data.businesses);
    } catch(err) {
        setErrMessage('Something went wrong')
    }
    };
    
   return (
    <View>
    <ScreenDetail 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={() => searchApi()}/>
        
    {errMessage ? <Text>{errMessage}</Text> : null}
    <Text>We have found {results.length} results</Text>  
    </View>
   )
}

export default SearchScreen;
