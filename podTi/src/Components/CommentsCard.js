import React from  'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export function CommentsCard({comment}){
    return(
        <TouchableOpacity  style={styles.buttonComments}>
        <Text style={styles.textComments}>
            {comment}
        </Text>
        </TouchableOpacity>  
    )
}

const styles = StyleSheet.create({
    buttonComments: {
        backgroundColor: '#121015',
        padding: 15,
        borderRadius: 35,
        alignItems: 'center',
        marginVertical: 10,
    },
    textComments: {
        color: '#fff',       
        fontSize: 20,
        fontWeight: 'bold',        
    },

});