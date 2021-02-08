import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ScreenDetail from '../Components/ScreenDetail'

const SearchScreen = () => {
    const [term, setTerm] = useState('');

   return (
    <View>
    <ScreenDetail 
        term={term} 
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={ console.log('button pressed')}/>
    <Text>{term}</Text>  
    </View>
   )
}

export default SearchScreen;
