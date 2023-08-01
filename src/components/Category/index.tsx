import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
    title: string,
    icon: React.FC<SvgProps>,
    checked?: boolean,
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    ...rest
}: Props) {
    return(
        <RectButton style={styles.container} {...rest}>

            <LinearGradient
                style={styles.container}
                colors={[theme.color.secondary30, theme.color.secondary60]}>

                <View style={[styles.content, { opacity: checked ? 1 : 0.5}]}>

                    <View style={checked ? styles.checked : styles.check}/>
                        <Icon 
                            width={48} 
                            height={48}
                        />

                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
       
            </LinearGradient>
    
        </RectButton>

    )
}