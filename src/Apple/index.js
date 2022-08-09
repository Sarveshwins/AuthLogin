import React from 'react'
import { View, Text,StyleSheet ,TouchableOpacity, Platform} from 'react-native'
import appleAuth,{ appleAuthAndroid } from '@invertase/react-native-apple-authentication'
import { v4 as uuid } from 'uuid'
const AppleLogIn = ({
  buttonComponent,
  buttonStyle ,
  buttonTitle = "SignIn With Apple",
  onResponse,
  getAccessToken
}) => {

    const onIOSAppleButtonPress=()=>{
    appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      }).then((res)=>{
        onResponse(null,res)
        getAccessToken(res?.identityToken)
      }).catch((error)=>{
        onResponse(e,null)
    })
    }
    const onAndroidAppleButtonPress=()=>{
      const rawNonce = uuid();
      const state = uuid();
      appleAuthAndroid.configure({
        clientId: 'com.signInApple.socialLogin',
        redirectUri: 'https://test.example.com',
        responseType: appleAuthAndroid.ResponseType.ALL,
        scope: appleAuthAndroid.Scope.ALL,
        nonce: rawNonce,
        state,
      });
      appleAuthAndroid.signIn().then((res)=>{
        console.log("Res",res)
      }).catch((err)=>{
        console.log("Error",err)
      })
    }
    return (
        <View>
        <TouchableOpacity
        onPress={() => {
         Platform.OS==='ios'? onIOSAppleButtonPress() :onAndroidAppleButtonPress()
        }}
      >
        {buttonComponent ? (
          buttonComponent()
        ) : (
          <View
            style={
              buttonStyle || {
                height: 40,
                width: 200,
                backgroundColor: "white",
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                borderColor: "#1b69de",
              }
            }
          >
            <Text style={{ fontWeight: "bold", color: "#1b69de" }}>
              {buttonTitle }
            </Text>
          </View>
        )}
      </TouchableOpacity>
        </View>
    )
}

export default AppleLogIn
const styles=StyleSheet.create({
    appleButton: {
        width: '100%',
        height: 45,
        shadowColor: '#555',
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 0,
          height: 3
        },
        marginVertical: 15,
        backgroundColor:'red'
      }
})