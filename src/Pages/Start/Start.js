import React from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import Page from '../../components/Container'
import styles from '../../styles';
import Header from './Header';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

export default function StartPage({navigation}) {
    return <Header navigation={navigation} />
}
