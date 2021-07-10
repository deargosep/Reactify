import React from 'react'
import {View} from 'react-native'
import { Appbar } from 'react-native-paper'

export function Container(props) {
    return <View style={{
        padding:24
    }}>
    {props.children}
    </View>
}
export default function Page(props) {
    return <View style={{flexGrow:1}}>
        {props.appBar ? 
        <Appbar.Header style={{
            backgroundColor:props.primary
        }} >
            <Appbar.Content title={props.name}>
            </Appbar.Content>
            <Appbar.Action>
                {props.action}
            </Appbar.Action>
        </Appbar.Header>:<></>    
    }
        <Container style={{flexGrow:1}}>
        {props.children}
        </Container>
    </View>
}