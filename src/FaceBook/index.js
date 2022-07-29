import React from 'react'
import { View, Text } from 'react-native'
import { LoginButton, AccessToken } from 'react-native-fbsdk';
// import { Settings } from 'react-native-fbsdk';
const FaceBookLogIn = ({onResponse,getAccessToken}) => {
  // Settings.setAppID('1545249995894157');
  return (
    <View>
      <Text style={{
        fontSize: 20,
        color: "Green",
        marginVertical: 20
      }}>Login With Facebook</Text>
      <LoginButton
        onLoginFinished={
          (error, result) => {
            onResponse(error,result)
            if (error) {
              console.log("login has error: " + result.error);
            } else if (result.isCancelled) {
              console.log("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  getAccessToken&&getAccessToken(data.accessToken.toString())
                }
              )
            }
          }
        }
        onLogoutFinished={() => console.log("logout.")} />
    </View>
  )
}

export default FaceBookLogIn
