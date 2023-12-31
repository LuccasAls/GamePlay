import React from 'react';
import { styles } from './styles'
import { 
    View,
    Text
} from 'react-native';

type Props = {
    isCentered?: boolean
}

export function ListDivider({ isCentered } : Props){
    return (
        <View 
            style={[
                styles.container, 

                isCentered ? {
                    marginVertical: 12,
                }: { 
                    marginTop: 2,
                    marginBottom: 31        
                }
            ]}
        />
            
    )
}