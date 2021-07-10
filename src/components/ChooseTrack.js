import React from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAB } from 'react-native-paper';

export default function ChooseTrack({ setTracks }) {
    const picker = () => {
        DocumentPicker
            .getDocumentAsync({ type: 'audio/mpeg', copyToCacheDirectory: false })
            .then(async (res) => {
                if (res.type === 'success') {
                    // AsyncStorage.clear()
                    let currentStringifiedTracks = await AsyncStorage.getItem('tracks');
                    let currentParsedTracks = JSON.parse(currentStringifiedTracks);
                    if (currentParsedTracks != null) {
                        currentParsedTracks.push(res)
                    } else {
                        currentParsedTracks = [];
                        currentParsedTracks.push(res)
                    }
                    let newStringifiedTracks = JSON.stringify(currentParsedTracks)
                    AsyncStorage.setItem('tracks', newStringifiedTracks).then(() => console.log('done'))
                    setTracks(currentParsedTracks)
                }
            })
    }
    return <FAB style={{
        alignSelf:'flex-end',
    }} icon="plus" onPress={() => picker()} title="Select track" />
}

export function ClearTracks({ setTracks }) {
    return  <FAB style={{
        alignSelf:'flex-end',
    }} icon="delete" onPress={() => {
        AsyncStorage.clear();
        setTracks([])}} />
}