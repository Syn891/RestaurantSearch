import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultDetail from '../Components/ResultsDetail'

const ResultsList = ({title, results}) => {

   return <View>
       <Text style={styles.titleStyle}>{title}</Text> 
         
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(result) => results.id}
            data={results}
            renderItem={({item}) => {
                return (
                    <ResultDetail result={item}/>
                
            )}}/>
    </View>

    
}

const styles = StyleSheet.create({

    titleStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5

    }
});

export default ResultsList;