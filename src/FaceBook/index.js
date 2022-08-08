import React from 'react'
import { View, Text } from 'react-native'
import { LoginButton, AccessToken } from 'react-native-fbsdk';

const FaceBookLogIn = ({onResponse,getAccessToken}) => {

  return (
    <View>
 
      <LoginButton
        onLoginFinished={
          (error, result) => {
            onResponse(error,result)
            if (error) {
            
            } else if (result.isCancelled) {
              
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  getAccessToken&&getAccessToken(data.accessToken.toString())
                }
              )
            }
          }
        }
        onLogoutFinished={() => console.log("logout.")} 
        />
    </View>
  )
}

export default FaceBookLogIn
