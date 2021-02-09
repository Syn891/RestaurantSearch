import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResultsList = ({title}) => {

   return <View style={styles.componentView}>
       <Text style={styles.titleStyle}>{title}</Text>

    </View>
}

const styles = StyleSheet.create({

    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    componentView: {

        display: 'flex',
        flexDirection: 'row',
        borderColor: 'grey',
        borderWidth: 1,
        marginHorizontal: 10

    }
});

export default ResultsList;