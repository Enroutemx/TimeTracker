import React, { Component } from 'react';
import { AppRegistry, FlatList, Text, Image, View } from 'react-native';
import styles from './styles';
import Button from 'react-native-button'
import { StackNavigator } from 'react-navigation';

export default class TaskView extends Component  {

  constructor(props) {
    super(props);
  }

  _handlePress() {
    this.props.navigation.navigate('ReportModal')
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.dataSource}
          renderItem={({item}) => 
            <View style={styles.cellContainer}>
              <Text style={styles.taskText}>{item.project} {"\n"} {item.task}</Text> 
              <Button
                onPress={() => this._handlePress()} >
                <Text style={styles.timeText}> {item.time}</Text>
                <Image source={require('../../assets/down.png')} />
              </Button>
            </View>
          }
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
