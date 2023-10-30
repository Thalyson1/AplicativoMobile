import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:24,
    paddingTop:75,
    backgroundColor:'#131016'
  },
  title:{
    color:'#FDFCFE',
    fontSize:34,
    fontWeight:'bold'
  },
  date:{
    color:'#6B6B6B',
    fontSize:16,
    lineHeight:16,
  },
  containerRegistertecnologias:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:44,
    marginBottom:34
  },
  subTitleListTecnologias:{
    color:'#808080',
    fontSize:14,
    fontWeight:'bold',
    textAlign: 'center'
  },
  containerListTecnologias:{
    marginTop:24,
  },
  input:{
    flex:1,
    height:56,
    backgroundColor:'#1F1E25',
    fontSize:14,
    color:'#FDFCFE',
    padding:12,
    borderRadius:6,
    borderWidth: 1
  },

  inputFocused: {
    borderColor: 'white', 
  },

  listEmpty:{
    color:'#808080',
    fontSize:14,
    textAlign:'center',
    flexDirection:'column',
  },
  valoresTecnologias:{
    color:'#ffffff',
    fontSize: 14,
    marginLeft:'auto',
    flex: 1, 
  },
  addButton:{
    fontSize: 32,
    color: 'white',
    borderWidth: 1,
    borderColor:'white',
    marginLeft: 8,
    borderRadius: 10,
    //backgroundColor: 'white',
    padding: 11
  }
  
  
})