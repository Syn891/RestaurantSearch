import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultDetail=({result})=> {
    return (
    <View style={styles.container} >
        <Image style={styles.imageStyle} source={{ uri: result.image_url }}/>
        <Text style={styles.nameStyle}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Ratings</Text>
    </View>
    )}

const styles = StyleSheet.create({

    container: {
        marginLeft: 10,
        marginBottom: 10
    },

    imageStyle: {
        width: 250,
        borderRadius: 4,
        height: 200,
        marginBottom: 5
    },
    
    nameStyle : {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default ResultDetail;