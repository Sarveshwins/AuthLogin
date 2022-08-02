import React from 'react'
import { View} from 'react-native'
import FaceBookLogIn from './FaceBook/index'

const onResponse=(error,result)=>{
  if (error) {
     // Do something on error
  } else if (result.isCancelled) {
     // Do something if login is cancelled
  } else {
    // Do something with resulth returned on successful login
  }
}

const getAccessToken = (accessToken) => {
  // Do sommething with access token returned
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
