import React,{useState,useEffect} from 'react';
import {View,Text} from 'react-native';
import {GoogleSignin,GoogleSigninButton} from '@react-native-community/google-signin';
GoogleSignin.configure({
  webClientId:"586759577101-dn1r30e68fv6m74tljjactnluir1hph5.apps.googleusercontent.com",
  offlineAccess:true
})

function Google() {

  const [userInfo,setUserInfo] = useState({});
  const [loaded,setLoaded] = useState(false);
  const signIn = {}

  // useEffect(
  //    signIn = async() =>{
  //      console.log("haii")
  //     try {
  //     await GoogleSignin.hasPlayServices();
  //     const gUserInfo = await GoogleSignin.signIn();
  //     setLoaded(true);
  //     setUserInfo(gUserInfo);
  //     }
  //     catch(e) {
  //       console.log("error hitting");
  //     }
  //   },[])



  return (
    <View>
      <Text>Google Login</Text>
      <GoogleSigninButton 
      onPress={signIn}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}

      />
      {loaded  ?
        <View>
        <Text>{userInfo.user.name}</Text>
        </View> :
      <View>
      <Text> Not signed In</Text>
      </View>}
    </View>
  );
}

export default Google;