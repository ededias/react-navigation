import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';

const Stack = createStackNavigator();

export default props => (
    <Stack.Navigator initialRouteName="TelaA" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="TelaA" options={{
            title: 'Informações inícias'
        }}> 
        { 
            props => (
                <PassoStack { ...props } avancar="TelaB"> 
                    <TelaA />
                </PassoStack>
            )
        }
        </Stack.Screen>
        <Stack.Screen name="TelaB">
            {
                props => (
                    <PassoStack {...props} avancar="TelaC" avancarParam={100} voltar>
                        <TelaB />
                    </PassoStack>
                )
            }
        </Stack.Screen>
        <Stack.Screen name="TelaC">
            {
                props => (
                    <PassoStack {...props} avancar="TelaC" voltar>
                        <TelaC {...props} />
                    </PassoStack>
                )
            }
        </Stack.Screen>
    </Stack.Navigator>
)