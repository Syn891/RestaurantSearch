import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ResultsList from '../Components/ResultsList'
import ScreenDetail from '../Components/ScreenDetail'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errMessage] = useResults();

   return (
    <View>
    <ScreenDetail 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={() => searchApi()}/>

    {errMessage ? <Text>{errMessage}</Text> : null}
    <Text>We have found {results.length} results</Text>  
    <ResultsList title="Cost Effective"/>
    <ResultsList title="Bit Pricier"/>
    <ResultsList title="Big Spender"/>
    </View>
   )
}

export default SearchScreen;
