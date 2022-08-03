import React from 'react'
import { View } from 'react-native'
import GoogleSignIn from './Google'

const onResponse = (error, result) => {
  if (error) {
    // Do something on error
  } else if (result.isCancelled) {
    // Do something if login is cancelled
  } else {
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
      <GoogleSignIn buttonTitle={"SignIn with Google"} buttonStyle={{
        height: 40,
        width: 220,
        backgroundColor: "white",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderColor: "#1b69de"
      }} 
      onResponse={(error, result)=>onResponse(error, result)}
      getAccessToken={(accessToken)=>getAccessToken(accessToken)}
      androidClientId={'YOUR_ANDROID_CLIENT_ID'}
      iosClientId={'YOUR_IOS_CLIENT_ID'}
      />
    </View>
  )
}

export default App
