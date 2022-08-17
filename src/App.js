import React from 'react'
import { View,Text } from 'react-native'
import AppleLogIn from './Apple'
import FirebaseLogIn from './Firebase'
import GoogleSignIn from './Google'
const signInButton=()=>{
  return(
    <View  style={ {
      height: 40,
      width: 200,
      backgroundColor: "white",
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      borderColor: "#1b69de"
  }}>
<Text style={{ fontWeight: "bold", color: "#1b69de" }}>
      { "Sign In With Apple"}
  </Text>
  </View>
  )
}
const onResponse = (error, result) => {
  if (error) {
    // Do something on error
  }  else {
    // Do something with result returned on successful login
  }
}

const getAccessToken = (accessToken) => {
  // Do sommething with access token returned
  console.log("ACCESSTOKEN",accessToken)
}

const App = () => {

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    {/* <AppleLogIn
      buttonComponent={signInButton}
      onResponse={(error, result)=>onResponse(error, result)}
      getAccessToken={(accessToken)=>getAccessToken(accessToken)}
    /> */}
     <FirebaseLogIn
      buttonComponent={signInButton}
      onResponse={(error, result)=>onResponse(error, result)}
      getAccessToken={(accessToken)=>getAccessToken(accessToken)}
    />
    </View>
  )
}

export default App
