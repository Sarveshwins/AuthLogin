import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import auth, { firebase } from "@react-native-firebase/auth"
const __doCreateUser = async (email, password) => {
    try {
        let response = await auth().createUserWithEmailAndPassword(email, password);
        if (response) {
            console.log("?", response)
        }
    } catch (e) {
        console.log("eee", e)
        console.error(e.message);
    }
}
const __doSingIn = async (email, password) => {
    try {
        let response = await auth().signInWithEmailAndPassword(email, password)
        if (response && response.user) {
            console.log("response==-", response);
        }
    } catch (e) {
        console.log("e==-", e);
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
const FirebaseLogIn = () => {
    return (
        <View>
            <TouchableOpacity onPress={() => { __doCreateUser("navi@test.com", "passwordd") }}>
                <Text>
                    Signup
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { __doSingIn("navi@test.com", "passwordd") }}>
                <Text>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { __doCheckSignIn("navi@test.com", "passwordd") }}>
                <Text>
                    Check if user already signin
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { __doSignOut("navi@test.com", "passwordd") }}>
                <Text>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default FirebaseLogIn
