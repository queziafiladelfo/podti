import React from 'react';
import { 
    StyleSheet,
    View, 
    Text, 
    ImageBackground,
    Button,
    TouchableOpacity
} from  'react-native';

//import pod01 from '../../src/Assets/img/pod01.png';
import pod02 from '../../Assets/img/pod02.png';
import  Icon  from 'react-native-vector-icons/FontAwesome';

export default function Details({ navigation, route }){        
        return(
            <>
                <ImageBackground 
                source={pod02}
                style={styles.image}
                >
                    <Button
                        title="Assinar" 
                        style={styles.btnAssinar}
                    />
                </ImageBackground>

                <View style={styles.container} >
                    <Icon 
                                name="play-circle" 
                                style={styles.icon} 
                                size={45} 
                                color="#ff8c00" 
                    />
                    <View>
                    <Text style={styles.title}>{ route.params.title }</Text>
                    <Text >{ route.params.subtitle }</Text>
                    </View>                                   
                </View>

                <View style={styles.description}>
                    <Text>Descrição</Text>
                    <Text style={styles.descriptionText}>
                        { route.params.description }
                    </Text>
                </View>

                <View style={styles.comments}>
                    <Icon 
                                    name="download" 
                                    style={styles.icon} 
                                    size={45} 
                                    color="#ff8c00" 
                    />
                    {/* <TouchableOpacity
                        onPress={ () => navigation.navigate('Comments')}
                    > */}
                        <Icon 
                                        name="comments" 
                                        style={styles.icon} 
                                        size={45} 
                                        color="#ff8c00"
                                        onPress ={
                                            () => {
                                                navigation.navigate('Comments')
                                            }
                                        } 
                        />
                    {/* </TouchableOpacity> */}
                </View>
                
                
                
            </>
        )
    }     


const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 220,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 12,
    },
    icon:{
        paddingLeft: 7,
        paddingRight: 17
    },
    title: {
        fontSize: 20,
    },
    subtitle: {
        fontSize: 16,
    },
    btnAssinar:{
        backgroundColor: '#ff8c00',
        marginTop: 10
    },
    description: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 15
    },
    descriptionText: {
        fontSize: 20,
        fontWeight: '500'
    },
    comments:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        //margin: 10
        padding: 20
    }
 })