import React from 'react'
import { Button, View } from 'react-native'
import TextoCentral from '../components/TextoCentral'


export default props => (

    <View style={{flex: 1}}>
        
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Button title="Abrir" 
                onPress={() => props.navigation.openDrawer()}
                
            />
        </View>

        <View style={{flex: 1}}>
            <TextoCentral corDeFundo="#33fa72" corDoTexto="#000">
                Tela D
            </TextoCentral>
        </View>
    </View>

)