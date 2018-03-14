import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 22
   },
   cellContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
   },
   taskText: {
     padding: 10,
     fontSize: 18,
     height: 70,
   },
   timeText: {
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 18,
    height: 70,
   }
})