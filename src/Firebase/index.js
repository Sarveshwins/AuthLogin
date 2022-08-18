import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import auth, { firebase } from "@react-native-firebase/auth"
const __doCreateUser = async (email, password) => {
    try {
        let response = await auth().createUserWithEmailAndPassword(email, password);
        if (response) {
            console.log("?", response)
            alert("SignIn Succesful")
        }
    } catch (e) {
        console.log("eee", e)
        console.error(e.message);
        alert(e.message)
    }
}
const __doSingIn = async (email, password) => {
    try {
        let response = await auth().signInWithEmailAndPassword(email, password)
        if (response && response.user) {
            console.log("response==-", response);
            alert("SignUp Succesful")
        }
    } catch (e) {
        console.log("e==-", e);
        alert(e.message)
    }
}
const __doCheckSignIn = () => {
    let user = firebase.auth()?.currentUser?.uid;
    if (user) {
        console.log("signInTrue", user);
    } else {
        console.log("signInFalse", user);
    }
}
const __doSignOut = async () => {
    try {
        let user = await firebase.auth().signOut();
        console.log("SignOutTrue", user);
    } catch (e) {
        console.log("err==-", e);
    }

}

const FirebaseLogIn = ({buttonComponent,buttonText,actionType,email,password}) => {
    return (
        <View>
             <TouchableOpacity
        onPress={() => {
            actionType=="SignUp"?__doCreateUser(email,password):__doSingIn(email,password)
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
              {buttonText }
            </Text>
          </View>
        )}
      </TouchableOpacity>
        </View>
    )
}

export default FirebaseLogIn
