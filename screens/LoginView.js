import React, { Component } from 'react';
import { AppRegistry, View, Button, Text, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class LoginView extends React.Component {

    _login() {
        this.props.navigation.dispatch(
            NavigationActions.reset({
                index: 0,
                key: null,
                actions: [
                    NavigationActions.navigate({ routeName: 'RootStack' })
                ]
           })
        )
    }

    render() {
        return (
          <View style={styles.container}>
              <Text style={styles.bigTitleText}>Welcome to Login!</Text>
              <Button
                  styles={styles.bigTitleText}
                  onPress={() => this._login()}
                  title = "Login"
              />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bigTitleText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30,
    }, 
  });