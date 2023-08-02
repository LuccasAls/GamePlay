import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons'
import { 
    ImageBackground, 
    Text ,
    View, 
    FlatList
} from 'react-native';

import { styles } from './styles';

import { theme } from '../../global/styles/theme';
import Banner from '../../assets/banner.png'

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { Members } from '../../components/Members';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

export function AppointmentDetails() {

    const members = [
        {
            id: '1',
            username: 'Luccas',
            avatar_url: 'http://github.com/luccasals.png',
            status: 'online',
        }, {
            id: '2',
            username: 'Luccas',
            avatar_url: 'http://github.com/luccasals.png',
            status: 'offlin',
        },
    ]

  return (
    <Background>
        <Header 
            title="Details"
            action={
                <BorderlessButton>

                    <Fontisto 
                        name='share'
                        size={24}
                        color={theme.color.primary}
                    />

                </BorderlessButton>
            }
        />

        <ImageBackground
            source={Banner}
            style={styles.banner}
        >
            <View style={styles.bannerContent}>

                <Text style={styles.title}>
                    Lendários
                </Text>
                <Text style={styles.subtitle}>
                    É hoje que vamos chegar ao challenger sem perder uma parida da md10
                </Text>

            </View>
        </ImageBackground>

        <ListHeader 
            title='Jogadores'
            subtitle='Total 3'
        />
        <FlatList 
            data={members}
            keyExtractor={item => item.id }
            renderItem={({item}) => (
                <Members 

                    data={item}
                />
            )}
            ItemSeparatorComponent={()=> <ListDivider/>}
            style={styles.members}

        />
        <View style={styles.footer}>
            <ButtonIcon
                title='Entrar na partida'
            />
        </View>
    </Background>
  );
}