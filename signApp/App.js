import React from "react";
import {View} from 'react-native'
// import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import { createStackNavigator } from "react-navigation-stack";

import Google from './src/screen/Google';
import Facebook from './src/screen/Facebook';

// const SwitchNavigator = createSwitchNavigator({
//   loginFlow: createStackNavigator({
//     login: Login,
//     // home:createBottomTabNavigator({
//     //   home:Google,
//     //   list:List,
//     //   profile:Profile
//     // })
//   })
// });

const App = () =>{
  return(
    <View>
    <Google />
    <Facebook />
    </View>
  )
}

export default () => {
  return (
    <>
      <App />
    </>
  );
};
