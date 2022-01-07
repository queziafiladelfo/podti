import React from 'react';
import { 
    View,
    StatusBar, 
    StyleSheet,
    Text,
    FlatList
} from  'react-native';
import { FeedFlatlist } from '../../Components/FeedFlatlist';
import { getFeeds } from '../../api';


  export default class Feed extends React.Component{   
    
    //inicializar a classe de feeds
    constructor(props) {
        super(props);
        
        this.state = { 
            nextPage: 1,
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

        
        getFeeds(nextPage).then((maisFeed) => {
            if (maisFeed.length) {
                //teste console
                console.log( "##--1--##");
                console.log("Add " + maisFeed.length + " feed");
                console.log("# " + maisFeed + " ||");
                console.log( "getFeeds.feed");
                console.log( getFeeds.feed);
                console.log( feed);
                console.log( "##--1--##");
    
            // incrementar pagina 
            this.setState({
                nextPage: nextPage + 1,
                feed: [...feed, ...maisFeed],
                loading: false
            })
            }   
        }).catch((erro) => {
            console.error("getFeeds error: " + erro);
        }) 
                                 
    }

    /*
        componentDidMount() É invocado imediatamente após um componente ser 
        montado (inserido na árvore). Inicializações que exijam nós do DOM 
        devem vir aqui. Se precisar carregar data de um endpoint remoto, 
        este é um bom lugar para instanciar a requisição.
    */
    componentDidMount = () => {
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
            <Text style={styles.title}>Podti</Text> 
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
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    title: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        fontSize: 25,
        fontWeight: '600',
        color: '#ff8c00'
    }
  });