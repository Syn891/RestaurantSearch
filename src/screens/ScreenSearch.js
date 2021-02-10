import React, {useState} from 'react'
import {Text, StyleSheet, ScrollView} from 'react-native'
import ResultsList from '../Components/ResultsList'
import ScreenDetail from '../Components/ScreenDetail'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errMessage] = useResults();

    const filterResultsByPrice =(price)=>{
        // price == '$' || '$$' || '$$$'
     return results.filter(result => {
         return result.price === price;
     })
    };

   return (
    <>
    <ScreenDetail 
        term={term} 
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}/>

    {errMessage ? <Text>{errMessage}</Text> : null}
    
    <ScrollView>
        <ResultsList results={filterResultsByPrice('£')} title="Cost Effective" />
        <ResultsList results={filterResultsByPrice('££')} title="Bit Pricier" />
        <ResultsList results={filterResultsByPrice('£££')} title="Big Spender" />
        <ResultsList results={filterResultsByPrice('££££')} title="Break the Bank" />
        <ResultsList results={filterResultsByPrice()} title="Price Band Unknown" />
    </ScrollView>
    
    </>
   )
}

const style = StyleSheet.create({})

export default SearchScreen;
