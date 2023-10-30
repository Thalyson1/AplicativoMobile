import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    shadowColor: 'rgba(10, 80, 20, 0.2)',
    borderRadius:8,
  },
  name:{
    color:'black',
    fontSize: 18
  },
  check:{
    backgroundColor: 'transparent', 
  },
  iconContainer: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
  },
  removeButton: {
    backgroundColor: 'red', 
    padding: 10,
    borderRadius: 5,
  },
  strikedText: {
    textDecorationLine: 'line-through',
    color: '#808080',
  },
  normalText: {
    textDecorationLine: 'none',
    color: 'black',
  },
});