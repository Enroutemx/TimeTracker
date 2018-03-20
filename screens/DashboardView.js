import React, { Component } from 'react';
import { AppRegistry, 
  View, 
  BackHandler,
  Text, 
  Image, 
  StyleSheet 
} from 'react-native';
import Button from 'react-native-button'
import TaskView from '../components/TaskView/index'
import ReportView from './ReportView'

export default class DashboardView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: false }
  }

  componentDidMount(){
    this.setState({ dataSource: [{'project': 'IAS - Mobile', 'task' : 'DEV', 'time': '08:00'}]})
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.calendarContainer} >

          <View style= {styles.navigationContainer}>

            <Button containerStyle={styles.profileButton}>
              <Image source={require('../assets/profile.png')} />
            </Button>

            <View style={styles.bigTitleContainer} >
              <Text style={styles.bigTitleText}>Enroute</Text>
            </View>
          </View>

          <View style={styles.pieGraphContainer} >
          </View>

          <View style={styles.calendarNavigationContainer} >
            <Button>
              <Image source={require('../assets/back.png')} />
            </Button>
            <Text style={styles.smallTitleText}>02-03-2018 {"\n"} Friday</Text>
            <Button>
              <Image source={require('../assets/next.png')} />
            </Button>
          </View>

        </View>

        <TaskView dataSource = {this.state.dataSource} navigation={this.props.navigation}></TaskView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendarContainer: {
    height: 350,
    backgroundColor: 'rgba(192, 192, 192, 1.0)',
  },
  navigationContainer: {
    flex: 0.2,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileButton: {
    width: 50,
  },
  bigTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 50,
    alignItems: 'center',
  },
  pieGraphContainer: {
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  bigTitleText: {
    color: 'rgb(254, 225, 51)',
    fontWeight: 'bold',
    fontSize: 30,
  }, 
  smallTitleText: {
    color: 'rgb(35, 35, 35)',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  calendarNavigationContainer: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});