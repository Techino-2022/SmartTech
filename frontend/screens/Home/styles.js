import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black'
    },

    cardTitle: {
      color: 'white',
      fontWeight:'700',
      textAlign:'center',
      margin:10
    },

    cardImage:{
      height: '98%',
      width: '40%',
      resizeMode:'contain',
      borderRadius: 15,
      alignSelf:'center',
      margin:10,
    },

    cardView: {
      backgroundColor: 'rgba(71, 71, 71, 0.7)',
      width: '85%',
      height: '20%',
      borderRadius: 10,
      flexDirection: 'row',
      borderColor: '#F0A500',
      borderWidth:3,
    },


    cardRightSection: {
      flex:1,
    },

    components:{
      color:'grey',
      fontWeight:'500',
      marginRight:5
    },

    componentSecion: {
      flexDirection:'row',
      marginBottom:5
    },

    componentDescription:{
      color: 'white'
    }
  });

  export default styles;