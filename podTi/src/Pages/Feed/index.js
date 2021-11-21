import React from 'react';
import { 
    View,
    StatusBar, 
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,     
    TextInput,     
    Button,
    ImageBackground,
    FlatList
} from  'react-native';
import dataFeed from '../../Assets/Dictionaries/feed.json'
import { FeedFlatlist } from '../../Components/FeedFlatlist';
//import pod01 from '../../Assets/img/pod01.png';

const qtdFeed = 5;

//export default function Feed({navigation}){ 
  export default class Feed extends React.Component{   
    
    //inicializar a classe de feeds
    constructor(props) {
        super(props);
        
        this.state = { 
            nextPage: 0,
            feed: [],
            loading: false 
        }
    }
    
    //carrega os feeds
    loadingFeed = () => {
        
        const { nextPage, feed } = this.state;

        //aviso de carregamento
        this.setState({
            loading: true
        });

        // carregar qtd no feed
        const idI = nextPage * qtdFeed + 1;
        const idF = idI + qtdFeed - 1;
        const maisFeed = dataFeed.feed.filter((feed) => feed._id >= idI &&
                                       feed._id <= idF );
        
        if (maisFeed.length) {
            console.log("Add " + maisFeed.length + " feed");
            console.log("# " + maisFeed + " ||");
            console.log( dataFeed.feed);

        // incrementar pagina
        this.setState({
            nextPage: nextPage + 1,
            feed: [...feed, ...maisFeed],
            loading: false
        })
        }                                    
    }

    /*
        componentDidMount() É invocado imediatamente após um componente ser 
        montado (inserido na árvore). Inicializações que exijam nós do DOM 
        devem vir aqui. Se precisar carregar data de um endpoint remoto, 
        este é um bom lugar para instanciar a requisição.
    */
    componentDidMount = () => {
        const { loading } = this.state;
        
        if (loading) {
            return;
        } else {
            this.setState({
                loading: false
            })
        }

        this.loadingFeed();
    }

    render = () => {
        const { feed } = this.state;

        if (feed.length) {
            console.log("exibindo " + feed.length + " feeds");
        
        return(

        //fragment <></>
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" /> 
            <View style={styles.container}>
            <Text>Teste 1.1</Text>
            {/* <Image source={pod01}/> */}
                <FlatList
                    data={feed}
                    // onEndReached={() => this.loadingMoreFeed()}
                    // onEndReachedThreshold={0.2}
                    keyExtractor={(item) => String(item._id)}
                    renderItem={({item}) =>{
                        return(                           
                            <FeedFlatlist feed={item} />                            
                        )}}
                />
                    
               
{/*             

            <TouchableOpacity>
            <Image
                style={styles.image}
                source={require('../../Assets/img/f01.png')}                 
            />
            </TouchableOpacity>    

            <Button 
            title='Proximo'
            onPress={ () => navigation.navigate('Details')}
            /> 
            <FlatList
                data={dataFeed}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <TouchableOpacity  >
                    <View>
                        {item}
                    </View>
                    </TouchableOpacity> 
                )}
            /> */}

            </View>

        </>
    )
    } else {
        return (
            <Text>Não funcionou</Text>
        )
    }
  }  
}

//
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
       backgroundColor: '#1F1e25',
       color: '#fff',
       fontSize: 18,
       padding: 15,
       marginTop: 20,
       borderRadius: 10,
    },
    image: {
        width: 300,
        height: 150,
        padding: 30,
        marginTop: 20,
        borderRadius: 10
    }
  });