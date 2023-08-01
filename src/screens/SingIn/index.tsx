import React from 'react';
import { 
    View, 
    Text, 
    Image,
} from 'react-native';
import { styles } from './style';
import Illustration from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';

export function SingIn() {
    const  navigation = useNavigation()

    function handleSingIn() {
        navigation.navigate('Home')
    }


    return (
        <Background>
            <View style={styles.container}>

            
                <Image 
                    resizeMode={'stretch'}
                    source={Illustration}
                    style={styles.image}
                />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {`\n`}
                        e organize suas {`\n`}
                        jogatinas
                    </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon
                    title='Entrar com Discord'
                    onPress={handleSingIn}

                />

                </View>
            </View>
        </Background>
    )
}