import React, {useState} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList
} from 'react-native';
import { Button } from '../../Components/Button';
import { CommentsCard } from '../../Components/CommentsCard';

export default function FeedFlatlist({ route }){
    //estado para armazenar  novo comentario
    const [newComment, setNewComment] = useState('');
    //estado para armazenar todos os comentarios
    const [myComment, setMyComment] = useState([]);
    
    /* 
        handle é uma boa convenção, usado quando a função é disparada 
        por uma ação do usuário.
    */
        function handleAddNewComment(){

            setMyComment(oldState => [...oldState, newComment]);
        }

    return(
      <View style={styles.container}>
        <Text style={styles.title}>Reviews</Text>

        <TextInput 
                style={styles.input} 
                placeholder='Comente aqui'
                placeholderTextColor='#555'
                onChangeText={setNewComment}
        />

        <Button onPress={handleAddNewComment} />  

        <Text style={[styles.title, { marginVertical: 30 }]}>        
            Meus Comentários
        </Text>

        <FlatList 
        data={myComment}
        keyExtractor={item => item}
        renderItem={({item}) => (
            <CommentsCard comment={item} />
        )}
      />

      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 60,
        paddingHorizontal: 30,
    },
    title: {
        color: '#121015',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
       backgroundColor: '#ff8c00',
       color: '#fff',
       fontSize: 18,
       padding: 15,
       marginTop: 30,
       borderRadius: 7,
    },
});