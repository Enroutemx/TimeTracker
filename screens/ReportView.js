import React, { Component } from 'react';
import { AppRegistry, View, Button, Text, StyleSheet } from 'react-native';

export default class ReportView extends React.Component {

    constructor(props) {
      super(props);
    }

    _goBack() {
      this.props.navigation.goBack()
    }
  
    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.bigTitleText}>Welcome to Report!</Text>
            <Button
                styles={styles.bigTitleText}
                onPress={() => this._goBack()}
                title = "Close"
            />
        </View>
      );
  º}
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