import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchDetail = ({term, onTermChange, onTermSubmit}) => {

   return (

    <View style={styles.searchBoxStyle}>
        <Feather style={styles.iconStyle} name='search'/>
        <TextInput 
            placeholder= "Search"  
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.textInput}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
   )}

const styles = StyleSheet.create({

    searchBoxStyle: {

        height: 50,
        backgroundColor: '#D7D7D7',
        borderRadius: 5,
        marginTop: 20,
        marginHorizontal: 10,
        flexDirection: 'row'
       
    },

    iconStyle: {

        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15

    },

    textInput: {

        fontSize: 18,
        flex: 1
    }

})

export default SearchDetail;
