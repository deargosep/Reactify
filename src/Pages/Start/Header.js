import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Paragraph, Title, Headline, Button } from 'react-native-paper'
import Swiper from 'react-native-swiper'
import ChooseTrack from '../../components/ChooseTrack'
import styles from '../../styles'

export default function Header({navigation}) {
    return(
        <Swiper loop={false}>
            <View style={[
                style.carousel,
                styles.primary]}>
                <Headline style={{
                    color:'white'
                }}>Welcome, user!</Headline>
                <Paragraph style={{
                    color:'white'
                }}>This app is a brand new music player.</Paragraph>
            </View>
            <View style={[
                style.carousel,
                styles.darkPrimary
            ]}>
                <Title style={[style.carouselText]}>Where is your music stored?</Title>
                <ChooseTrack/>
            </View>
            <View style={[
                {flexGrow:1,
                display:'flex',
            justifyContent:'space-between'},
                styles.darkPrimary
            ]}>
                <Title style={[style.carouselText, {marginTop:'100%'}]}>Let's start!</Title>
                <Button style={{alignSelf:'center', marginBottom:'30%'}} labelStyle={{color:'white'}} onPress={() => navigation.replace('Home')}>Start</Button>
            </View>
        </Swiper>
    )
}

const style= StyleSheet.create({
    carousel:{
        flexGrow:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    carouselText:{
        color:'white',
        width:'100%',
        textAlign:'center'
    }
})