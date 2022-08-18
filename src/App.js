import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AppleLogIn from "./Apple";
import FirebaseLogIn from "./Firebase";
import GoogleSignIn from "./Google";
const signInButton = () => {
  return (
    <View
      style={{
        height: 40,
        width: 200,
        backgroundColor: "white",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderColor: "#1b69de",
      }}
    >
      <Text style={{ fontWeight: "bold", color: "#1b69de" }}>{"Sign In"}</Text>
    </View>
  );
};
const signUpButton = () => {
  return (
    <View
      style={{
        height: 40,
        width: 200,
        backgroundColor: "white",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderColor: "#1b69de",
      }}
    >
      <Text style={{ fontWeight: "bold", color: "#1b69de" }}>{"Sign Up"}</Text>
    </View>
  );
};
const onResponse = (error, result) => {
  if (error) {
    // Do something on error
  } else {
    // Do something with result returned on successful login
  }
};

const getAccessToken = (accessToken) => {
  console.log("ACCESSTOKEN", accessToken);
};

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [actionType, setActionType] = useState("SignIn");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <View style={styles.inputContainerStyle}>
        <TextInput
          autoCapitalize={"none"}
          placeholder={"Email Address"}
          onChangeText={(text) => {
            setEmail(text);
          }}
          style={{ width: "100%" }}
          value={email}
        />
      </View>
      <View style={styles.inputContainerStyle}>
        <TextInput
          autoCapitalize={"none"}
          placeholder={"Password"}
          onChangeText={(text) => {
            setPassword(text);
          }}
          style={{ width: "100%" }}
          value={password}
          secureTextEntry
        />
      </View>
      <FirebaseLogIn
        buttonComponent={actionType == "SignUp" ? signUpButton : signInButton}
        onResponse={(error, result) => onResponse(error, result)}
        getAccessToken={(accessToken) => getAccessToken(accessToken)}
        actionType={actionType}
        email={email}
        password={password}
      />

     <View style={{marginTop:20}}>
     {actionType == "SignIn" ? (
        <View style={{flexDirection:"row"}}>
        <Text>
          New ?
        </Text>
        <TouchableOpacity onPress={() => setActionType("SignUp")}>
            <Text style={{
color:"#1b69de",
            }}> Sign Up</Text>
          </TouchableOpacity>
      </View>
      ) : (
        <View style={{flexDirection:"row"}}>
          <Text>
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => setActionType("SignIn")}>
              <Text style={{
color:"#1b69de",
              }}> Sign In</Text>
            </TouchableOpacity>
        </View>
      )}
     </View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  inputContainerStyle: {
    width: "100%",
    padding: 5,
    justifyContent: "center",
    borderWidth: 0.5,
    borderRadius: 10,
    margin: 10,
  },
});
