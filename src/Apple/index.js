import React from 'react'
import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import appleAuth, {
    AppleButton,
    AppleAuthError,
    AppleAuthRequestScope,
    AppleAuthRequestOperation,
  } from '@invertase/react-native-apple-authentication'

const AppleLogIn = ({
  buttonComponent,
  buttonStyle ,
  buttonTitle = "SignIn With Apple",
  onResponse,
  getAccessToken,}) => {


    const onAppleButtonPress=async()=>{
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
      console.log("Resp>>>",appleAuthRequestResponse)
    }

    return (
        <View>
        <TouchableOpacity
        onPress={() => {
          onAppleButtonPress()
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