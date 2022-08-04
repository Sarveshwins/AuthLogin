import React from 'react'
import { View } from 'react-native'
import GoogleSignIn from './Google'

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
      webClientId={'777892754604-a526m4088eg9t0m3uslq7b0ea0e0rjo9.apps.googleusercontent.com'}
      iosClientId={ '777892754604-93h0323gd6ktbbhpo2m3na0no2fqjej1.apps.googleusercontent.com'}
      />
    </View>
  )
}

export default App
