import React from 'react'
import { View, Text, Button, TouchableHighlightComponent, TouchableOpacity } from 'react-native'
import {
    GoogleSignin,
} from '@react-native-google-signin/google-signin';
const GoogleSignIn = ({ buttonStyle="SignIn With Google", buttonTitle,onResponse,getAccessToken,androidClientId,iosClientId}) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    GoogleSignin.configure({
                        androidClientId: androidClientId,
                        iosClientId: iosClientId,    
                    });
                    GoogleSignin.hasPlayServices().then((hasPlayService) => {
                        if (hasPlayService) {
                            GoogleSignin.signIn().then((userInfo) => {
                                onResponse(null, JSON.stringify(userInfo))
                                getAccessToken(userInfo?.idToken)
                            }).catch((e) => {
                                onResponse(
                                    JSON.stringify(e)
                                )
                            })
                        }
                    }).catch((e) => {
                        onResponse(
                            JSON.stringify(e)
                        )
                    })
                }}
                style={buttonStyle || {
                    height: 40,
                    width: 200,
                    backgroundColor: "white",
                    borderWidth: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                    borderColor: "#1b69de"
                }}
            >
                <Text style={{ fontWeight: "bold", color: "#1b69de" }}>
                    {buttonTitle}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default GoogleSignIn
