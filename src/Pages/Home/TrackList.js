import React from 'react'
import { Card, IconButton } from 'react-native-paper'
import Page from '../../components/Container'
import styles from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, View } from 'react-native';
import { Audio } from 'expo-av';
import ChooseTrack, { ClearTracks } from '../../components/ChooseTrack';
import { SwipeListView } from 'react-native-swipe-list-view';

export default function TrackList({ setTime, setTracks, tracks, setDuration }) {
    const [sound, setSound] = React.useState();
    const playSound = async (uri, name) => {
        console.log('Loading Sound');
        const { sound, status } = await Audio.Sound.createAsync({ uri: uri }, {}, (res) => setTime(res.positionMillis));
        Audio.setAudioModeAsync({staysActiveInBackground:true})
        setDuration(status.durationMillis)
        setSound(sound);

        console.log('Playing ' + name);
        await sound.playAsync();
    }

    const deleteTrack = async (size) => {
        AsyncStorage.getItem('tracks')
            .then(res => {
                let parsedTracks = JSON.parse(res)
                let deletingTrack = parsedTracks.filter(res => res.size === size)
                let withoutTrack = parsedTracks.filter(res => res.size !== size)
                console.log(withoutTrack)
                AsyncStorage.setItem('tracks', JSON.stringify(withoutTrack))
                setTracks(withoutTrack)
            })
    }

    React.useEffect(() => {
        AsyncStorage.getItem('tracks')
            .then((res) => {
                let tracks = JSON.parse(res)
                setTracks(tracks)
            })
    }, [])
    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);
    return <SwipeListView
        disableRightSwipe={true}
        leftOpenValue={75}
        stopRightSwipe={-80}
        rightOpenValue={-75}
        data={tracks}
        renderItem={({ item }) => (
            <Card onPress={() => playSound(item.uri, item.name)}>
                <Card.Title title={item.name} />
            </Card>
        )}
        renderHiddenItem={() => (
            <IconButton style={{ alignSelf: 'flex-end' }} icon="delete" onPress={() => deleteTrack(item.size)} />
        )}
    />
}
