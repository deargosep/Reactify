import React from 'react'
import { NavigationContainer as NavigationProvider  } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from './src/components/Navigation';
import AppLoading from 'expo-app-loading';


export default function Wrapper() {
  const [ready, setReady] = React.useState(false)
  const [firstOpen, setFirstOpen] = React.useState(false)
  React.useEffect(()=>{
    // setFirstOpen(true)
    setReady(true)
  }, [])

  if(!ready) return <AppLoading/>
  return <NavigationProvider>
    <PaperProvider>
      <Navigation initialRouteName={firstOpen ? 'Start' : 'Home'} />
    </PaperProvider>
  </NavigationProvider>
}

