import React from 'react';
import { styles } from './styles'
import { theme } from '../../global/styles/theme';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    urlImage: string;
}

export function Avatar({urlImage}: Props){
    return(
       <LinearGradient
        style={styles.container}
        colors={[theme.color.secondary30, theme.color.secondary60]}
       >
        <Image 
            source={{uri: urlImage}}
            style={styles.avatar}
        />
       </LinearGradient>
    )
}