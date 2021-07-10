import React from 'react';
import Slider from '@react-native-community/slider';
import {Text, View} from 'react-native'

const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    //ES6 interpolated literals/template literals 
    //If seconds is less than 10 put a zero in front.
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}

export default function Player({time, duration}) {
    return(
        <View>
            <Slider minimumValue={0} maximumValue={duration} value={time} />
            <Text>{millisToMinutesAndSeconds(duration)}</Text>
        </View>
    )
}