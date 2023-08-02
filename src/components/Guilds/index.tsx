import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native';

import { styles } from './styles';
import { GuildIcon } from '../GuildIcon';

export type GuildsProps = {
  id: string,
  name: string,
  icon: string | null,
  owner: boolean,
}

type Props = TouchableOpacityProps & {
  data: GuildsProps;
}

export function Guilds({data, ...rest}: Props) {
  return (
    <TouchableOpacity 
      {...rest}
      style={styles.container}
      activeOpacity={0.7}  
    >
      <GuildIcon />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            {data.name}
          </Text>
          <Text style={styles.type}>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}