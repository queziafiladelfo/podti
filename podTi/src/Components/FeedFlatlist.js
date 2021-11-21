import React from  'react';
import {
    TouchableOpacity,
    ImageBackground,
    Text,
    View,
    StyleSheet,
    Image,
    
} from 'react-native';
//import pod01 from '../Assets/img/pod01.png';
import pod01 from '../../src/Assets/img/pod01.png';

export function FeedFlatlist({feed}){
    return(
        <TouchableOpacity  style={styles.buttonSkill}> 
                
            <Text>{feed.title}</Text>
            <ImageBackground 
                source={pod01}
                style={styles.image}
            />           
                                 
        </TouchableOpacity>  
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#EEEDE7',
        //padding: 25,
        //borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
        height: 200,
        position: 'relative',
    },
    textSkill: {
        // color: '#fff',       
        fontSize: 16,
        fontWeight: 'bold',        
    },
    image: {
        opacity: 0.8,
        width: 200,
        height: 180,
        //padding: 30,
        marginTop: 20,
        borderRadius: 10,
        position: 'absolute',

    },

});