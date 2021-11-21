import React from  'react';
import {
    TouchableOpacity,
    ImageBackground,
    Text,
    View,
    StyleSheet,
    Image,
    
} from 'react-native';

import  Icon  from 'react-native-vector-icons/FontAwesome';
import pod01 from '../../src/Assets/img/pod01.png';

export function FeedFlatlist({navegador , feed}){
    console.log("## | " + feed.title )
    return(
        <TouchableOpacity  
            style={styles.buttonSkill}
            feed={feed}
            onPress={ () => navegador.navigate('Details', { sub: feed.subtitle })}
             
        > 
                
            <ImageBackground
                source={pod01}
                style={styles.image}
            >
                <View style={styles.content}> 
                                       
                    {/* <View style={styles.content}> */}
                        <Icon name="play" style={styles.icon} size={32} color="#ff8c00" />                    
                        <Text style={styles.textTitle}>
                            {feed.title}</Text>
                        <Text style={styles.textSubTitle}>{feed.subtitle}
                        </Text>
                    {/* </View> */}
                </View>
            </ImageBackground>           
                                 
        </TouchableOpacity>  
    )
}

const styles = StyleSheet.create({
    buttonSkill: {        
        backgroundColor: '#fff',
        alignItems: 'center',
        marginVertical: 10,
        height: 200,
        position: 'relative',
    },
    textTitle: {
        color: '#ffff00',       
        fontSize: 20,
        fontWeight: 'bold',   
        paddingLeft: 20       
    },
    textSubTitle: {
        color: '#fff',       
        fontSize: 16,
        fontWeight: 'bold',  
        paddingLeft: 20      
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end',
        opacity: 0.9,
        width: 300,
        height: 200,
        //padding: 30,
        marginTop: 20,
        borderRadius: 10,
        position: 'absolute',

    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'space-around'
    },
    icon: {
        left: 25
    }

});