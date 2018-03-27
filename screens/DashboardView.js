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
import { Agenda } from 'react-native-calendars';
import Pie from 'react-native-pie'
import DefaultStyles from '../config/styles'

export default class DashboardView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: false, items: {}}
  }

  componentDidMount(){
    this.setState({ dataSource: [{'project': 'IAS - Mobile', 'task' : 'DEV', 'time': '08:00'}]})
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = 1;
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: this.state.dataSource[0]['project'] + '\n' + this.state.dataSource[0]['task'] + " " + this.state.dataSource[0]['time'],
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  /**
   * Navigation Actions
   */

  openSearchReport() {
    //ToDo
  }

  openSendReport() {
    this.props.navigation.navigate('ReportModal')
  }

  openAppSettings() {
    //ToDo
  }

  /**
   * Render UI
   */

  render() {
    return (
      <View style={{flex: 1}}>

        <View style={styles.calendarContainer} >
        
          <View style= {styles.navigationContainer}>
            <Button>
              <Image source={require('../assets/profile.png')} style={styles.profileImage}/>
            </Button>
            <View style={styles.bigTitleContainer} >
              <Text style={styles.bigTitleText}>Inicio</Text>
            </View>
          </View>

          <View style={styles.actionToolbarContainer} >
            <Button onPress={() => this.openSearchReport()} >
              <Image source={require('../assets/search.png')} style={styles.actionImage} />
            </Button>
            <Button onPress={() => this.openSendReport()} >
              <Image source={require('../assets/send.png')} style={styles.actionImage} />
            </Button>
            <Button onPress={() => this.openAppSettings()} >
              <Image source={require('../assets/gear.png')} style={styles.actionImage} />
            </Button>
          </View>

          <View style={styles.pieGraphContainer} >
            <Pie
              radius={50}
              innerRadius={45}
              series={[80]}
              colors={[DefaultStyles.mainColor()]}
              backgroundColor='#ddd' />
            <View style={styles.gauge}>
              <Text style={styles.gaugeText}>80%</Text>
            </View>
          </View>

        </View>

        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={new Date()}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          // markingType={'period'}
          // markedDates={{
          //    '2017-05-08': {textColor: '#666'},
          //    '2017-05-09': {textColor: '#666'},
          //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
          //    '2017-05-21': {startingDay: true, color: 'blue'},
          //    '2017-05-22': {endingDay: true, color: 'gray'},
          //    '2017-05-24': {startingDay: true, color: 'gray'},
          //    '2017-05-25': {color: 'gray'},
          //    '2017-05-26': {endingDay: true, color: 'gray'}}}
          // monthFormat={'yyyy'}
          // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
          //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendarContainer: {
    height: 300,
    backgroundColor: DefaultStyles.lightGrayColor(),
  },
  navigationContainer: {
    flex: 0.175,
    marginTop: 25,
    flexDirection: 'row',
  },
  bigTitleContainer: {
    paddingLeft: 10,
    paddingTop: 2
  },
  actionToolbarContainer: {
    marginLeft: 20,
    marginRight: 20,
    flex: 0.175,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pieGraphContainer: {
    flex: 0.65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gaugeContainer: {
    position: 'absolute',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 40,
    width: 40,
  },
  actionImage: {
    width: 30,
    height: 30,
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
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  }, 
});