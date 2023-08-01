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
    hasCheckBox?: boolean,
    checked?: boolean,
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    hasCheckBox = false,
    ...rest
}: Props) {
    return(
        <RectButton style={styles.container} {...rest}>

            <LinearGradient
                style={styles.container}
                colors={[theme.color.secondary30, theme.color.secondary60]}>

                <LinearGradient 
                    style={[styles.content, { opacity: checked ? 1 : 0.5}]}
                    colors={[checked ? theme.color.secondary85: theme.color.secondary50, theme.color.secondary40]}

                >
                    {
                        hasCheckBox &&
                        <View style={checked ? styles.checked : styles.check}/>
                    }

                        <Icon 
                            width={48} 
                            height={48}
                        />

                    <Text style={styles.title}>
                        {title}
                    </Text>
                </LinearGradient>
       
            </LinearGradient>
    
        </RectButton>

    )
}