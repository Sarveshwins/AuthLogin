import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import appleAuth, {
    AppleButton,
    AppleAuthError,
    AppleAuthRequestScope,
    AppleAuthRequestOperation,
  } from '@invertase/react-native-apple-authentication'
const AppleLogIn = () => {
    const onAppleButtonPress = async () => {
        try {
            const appleAuthRequestResponse = await appleAuth.performRequest({
                requestedOperation: AppleAuthRequestOperation.LOGIN,
                requestedScopes: [
                  AppleAuthRequestScope.EMAIL,
                  AppleAuthRequestScope.FULL_NAME
                ],
              });
              const {
                identityToken,
              } = appleAuthRequestResponse;
console.log("Token",identityToken)
        } catch (error) {
          if (error.code === AppleAuthError.CANCELED) {
            // user cancelled Apple Sign-in
        
          } else {
            // other unknown error
          }
        }
     }
    return (
        <View>
          <AppleButton
      buttonStyle={AppleButton.Style.WHITE}
      buttonType={AppleButton.Type.SIGN_IN}
      style={{
        width: 160, // You must specify a width
        height: 45, // You must specify a height
      }}
      onPress={() => onAppleButtonPress()}
    />
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