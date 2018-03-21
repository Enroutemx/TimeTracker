import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, TextInput, ActivityIndicator, Alert } from 'react-native';
import Button from 'react-native-button'
import { NavigationActions } from 'react-navigation';
import FireRoute from '../lib/FireRoute/source/fireroute'
import DefaultStyles from '../config/styles'

export default class LoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = { emailText: '', passwordText: '', hidePassword: true, loading: false};
        this._login = this._login.bind(this);
    }

    _login(state) {
        var that = this;
        this.setState({loading: true})
        FireRoute.login(this.state.emailText, this.state.passwordText, function(success, response){
            that.setState({loading: false})
            if (success) {
                that.props.navigation.dispatch(
                    NavigationActions.reset({
                        index: 0,
                        key: null,
                        actions: [
                            NavigationActions.navigate({ routeName: 'RootStack' })
                        ]
                   })
                )
            } else {
                Alert.alert(
                    'Error',
                    response.message,
                    [{text: 'Cancel', style: 'cancel'},],
                    { cancelable: false }
                  )
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.bigTitleText}>Enroute</Text>
                <TextInput
                    style={styles.emailInput}
                    placeholder="Email"
                    onChangeText={(text) => this.setState({emailText: text})}
                    underlineColorAndroid="transparent"
                     />
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    secureTextEntry={this.state.hidePassword}
                    onChangeText={(text) => this.setState({passwordText: text})}
                    underlineColorAndroid="transparent"
                     />
                <Button
                    containerStyle={styles.loginButtonContainer}
                    disabledContainerStyle={styles.loginButtonDisabledContainer}
                    style={styles.loginButtonText}
                    onPress={this._login}>
                    Login
                </Button>
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
      backgroundColor: DefaultStyles.mainColor()
    },
    bigTitleText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30,
    }, 
    emailInput: {
        marginTop: 20,
        paddingLeft: 10,
        height: 40, 
        width: 250, 
        backgroundColor: 'white', 
        borderWidth: 1
    },
    passwordInput: {
        marginTop: 10,
        paddingLeft: 10,
        height: 40, 
        width: 250, 
        backgroundColor: 'white', 
        borderWidth: 1
    },
    loginButtonContainer: {
        margin: 10,
        height: 40, 
        width: 250, 
        borderRadius:4, 
        backgroundColor: 'grey'
    },
    loginButtonDisabledContainer: {
        backgroundColor: 'grey'
    },
    loginButtonText: {
        fontSize: 20,
        color: 'white',
        paddingTop: 5,
    }
  });