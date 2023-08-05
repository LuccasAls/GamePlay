import React from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './styles';
import { Guild, GuildsProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider'

type Props = {
  handleGuildSelect: (guild: GuildsProps) => void;
}

export function Guilds({handleGuildSelect} : Props) {
    const guilds = [
      {
        id: '1',
        name: 'Lendários',
        icon: 'image.png',
        owner: true,
    },
    {
      id: '2',
      name: 'Call of Duty',
      icon: 'image.png',
      owner: false,
    },
    {
      id: '3',
      name: 'Free Fire',
      icon: 'image.png',
      owner: false,
    },
    ]


  return (
    <View style={styles.container}>
        <FlatList
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <Guild 
                  data={item}
                  onPress={() => handleGuildSelect(item)}
                />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider isCentered/>}
            ListHeaderComponent={() => <ListDivider isCentered/>}
            contentContainerStyle={{paddingBottom: 68, paddingTop: 104}} 
            style={styles.guilds}
        />

    </View>
  );
}