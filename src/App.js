import React from 'react'
import { View } from 'react-native'
import AppleLogIn from './Apple'
import GoogleSignIn from './Google'

const onResponse = (error, result) => {
  console.log("result==-",result);
  console.log("error==-",error);
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
      <GoogleSignIn 
      buttonTitle={"SignIn with Google"} 
      buttonStyle={{
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
      webClientId={"YOUR_WEB_CLIENT_ID"}
      iosClientId={ 'YOUR_iOS_CLIENT_ID'}
      />
      {/* <AppleLogIn/> */}
    </View>
  )
}

export default App
