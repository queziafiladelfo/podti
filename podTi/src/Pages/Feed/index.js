import React from 'react';
import { 
    View,
    StatusBar, 
    StyleSheet,
    Text,
    FlatList
} from  'react-native';
import dataFeed from '../../Assets/Dictionaries/feed.json'
import { FeedFlatlist } from '../../Components/FeedFlatlist';
//import pod01 from '../../Assets/img/pod01.png';

const qtdFeed = 4;

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
            //teste console
            console.log( "##--1--##");
            console.log("Add " + maisFeed.length + " feed");
            console.log("# " + maisFeed + " ||");
            console.log( dataFeed.feed);
            console.log( feed);
            console.log( "##--1--##");

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
        // const { loading } = this.state;        
        // if (loading) {
        //     return;
        // } else {
        //     this.setState({
        //         loading: false
        //     })
        // }
        // this.loadingFeed();
        this.loadingMoreFeed();
    }

    loadingMoreFeed = () => {
        const { loading } = this.state;
        if (loading) {
            return;
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
                <Text>Versão 1.1</Text>
            
                <FlatList
                    data={feed}
                    onEndReached={() => this.loadingMoreFeed()}
                    onEndReachedThreshold={0.1}
                    keyExtractor={(item) => String(item._id)}
                    renderItem={({item}) =>{
                        return(                           
                            <FeedFlatlist feed={item} navegador={this.props.navigation}/>                            
                        )}}
                />                   
            </View>
        </>
    )
    } else {
        return (null)
    }
  }  
}

//
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
  });