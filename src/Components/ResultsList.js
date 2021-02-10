import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultDetail from '../Components/ResultsDetail'
import {withNavigation} from 'react-navigation'

const ResultsList = ({title, results, navigation}) => {
    
    if(!results.length){
        return null;
    }

   return <View>
       <Text style={styles.titleStyle}>{title}</Text> 
         
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(result) => results.id}
            data={results}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={()=> navigation.navigate('Results', {id: item.id})}>
                    <ResultDetail result={item}/>
                    </TouchableOpacity>
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

export default withNavigation(ResultsList);