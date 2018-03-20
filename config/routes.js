import React from "react";
import { Platform, StatusBar } from "react-native";
import { StackNavigator } from 'react-navigation';
import DashboardView from '../screens/DashboardView'
import LoginView from '../screens/LoginView'
import ReportView from '../screens/ReportView'
import TaskView from '../components/TaskView/index'

const headerStyle = {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const LoginStack = StackNavigator({
    Login: {
      screen: LoginView,
    },
},
{
    headerMode: 'none'
});

export const MainStack = StackNavigator({
    DashboardView: {
        screen: DashboardView,
    },
    ReportView: {
        screen: ReportView,
    },
},
{
    initialRouteName: 'DashboardView',
    headerMode: 'none' 
});
  
export const RootStack = StackNavigator({
    Main: {
        screen: MainStack,
    },
    ReportModal: {
        screen: ReportView,
    },
},
{
    mode: 'modal',
    headerMode: 'none',
});


export const createRootNavigator = (signedIn = false) => {
    return StackNavigator(
      {
        RootStack: {
          screen: RootStack,
          navigationOptions: {
            gesturesEnabled: false,
          }
        },
        LoginStack: {
          screen: LoginStack,
          navigationOptions: {
            gesturesEnabled: false
          }
        }
      },
      {
        headerMode: "none",
        mode: "modal",
        initialRouteName: signedIn ? "RootStack" : "LoginStack"
      }
    );
  };