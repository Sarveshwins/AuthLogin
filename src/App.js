import React from 'react'
import { View, Text } from 'react-native'
import FaceBookLogIn from './FaceBook'

const App = () => {
  const onResponse=(error,result)=>{
    if (error) {
     
    } else if (result.isCancelled) {
     
    } else {
      
    }
  }
  return (
  <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
  <FaceBookLogIn onResponse={(error,result)=>onResponse(error,result)} getAccessToken={(accessToken)=>console.log("Access Token",accessToken)}/>
  </View>
  )
}

export default App
