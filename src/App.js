import React from 'react'
import { View} from 'react-native'
import FaceBookLogIn from './FaceBook/index'

const onResponse=(error,result)=>{
  if (error) {
     console.log("Error",error)
  } else if (result.isCancelled) {
     console.log("Login Cancelled.")
  } else {
     console.log("Result",result)
  }
}

const getAccessToken = (accessToken) => {
  console.log("Access Token",accessToken)
}

const App = () => {

  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <FaceBookLogIn 
    onResponse={(error,result)=>onResponse(error,result)} 
    getAccessToken={(accessToken)=>getAccessToken(accessToken)}
    />
    </View>
    )
}

export default App
