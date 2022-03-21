import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    PageName:{
      color:'#F0A500',
      fontWeight:'700',
      textAlign:'center',
      margin:7
    },

    pageTitle:{
      color:'white',
      margin:10,
      backgroundColor: 'black',
      width:'30%',
      borderRadius:100,
      borderColor: '#F0A500',
      borderWidth:3,

    },

    mainView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'black',
    },

    cardTitle: {
      color: 'white',
      fontWeight:'700',
      textAlign:'center',
      fontSize:15,
      margin:10
    },

    cardImage:{
      height: '98%',
      width: '39%',
      resizeMode:'contain',
      borderRadius: 15,
      alignSelf:'center',
      margin:10,
    },

    cardView: {
      backgroundColor: 'rgba(71, 71, 71, 0.7)',
      width: '97%',
      height: '22%',
      borderRadius: 10,
      flexDirection: 'row',
      borderColor: '#F0A500',
      borderWidth:3,
      margin:4,
    },


    cardRightSection: {
      flex:1,
    },

    components:{
      color:'grey',
      fontWeight:'500',
      marginRight:5,
      fontSize:10,
    },

    componentSecion: {
      flexDirection:'row',
      marginBottom:5
    },

    componentDescription:{
      color: 'white',
      fontSize:11,
    }
  });

  export default styles;