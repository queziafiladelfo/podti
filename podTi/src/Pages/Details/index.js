import React from 'react';
import { View, Text} from  'react-native';

export default function Details({route}){        
        return(
            <View>
                <Text>Deu certo 2</Text>
                <Text>Deu certo: { route.params.sub }</Text>
            </View>
        )
    }     

//}
