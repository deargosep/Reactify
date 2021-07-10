import React from 'react'
import { Card } from 'react-native-paper'
import {View} from 'react-native'
import Page from '../../components/Container'
import styles from '../../styles';
import TrackList from './TrackList';
import Player from './Player';
import ChooseTrack, {ClearTracks} from '../../components/ChooseTrack';
export default function HomePage() {
  const [time, setTime] = React.useState(0)
  const [duration, setDuration] = React.useState(0)
  const [tracks, setTracks] = React.useState([])

  return <Page appBar primary={styles.lightPrimary.backgroundColor} name="Home">
    <View style={{
      flexGrow:1
    }} >
    <TrackList tracks={tracks} setTracks={setTracks} setDuration={setDuration} setTime={setTime} />
    <Player time={time} duration={duration} />
    </View>
    <ChooseTrack setTracks={setTracks}/>
    <ClearTracks setTracks={setTracks} />
  </Page>
}
