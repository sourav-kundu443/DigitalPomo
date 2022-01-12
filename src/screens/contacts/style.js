import { Dimensions, StyleSheet } from "react-native";
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        position: 'relative',
      },
      image: {
        position: 'absolute',
        width: WIDTH/1.9,
        height: WIDTH/2.1,
        alignSelf: 'center',
        top: '3%',
      },
      footer: {
        top: '20%',
        height: '100%',
        width: WIDTH,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: '3%'
    },
    footerTitle: {
      fontSize: 24,
      color: '#191919',
      fontWeight: '700',
      letterSpacing: 1,
      lineHeight: 30,
      marginTop: '8%',
      marginBottom: '4%',
      paddingHorizontal: '4%'
      
    },
    formField: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      width: WIDTH/1.13,
      height: WIDTH/5,
      borderRadius: 5,
      margin: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
  
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.5,
      shadowRadius:15,
      elevation: 8,
    },
    textTitle: {
      paddingLeft: 10,
      fontSize: 18,
      color: '#191919',
    },
    text: {
      width: '100%',
      paddingLeft: 10,
      fontSize: 14,
      color: '#5B5B5B',
    },
    icon: {
      padding: 10,
      margin: 5,
      height: WIDTH/12,
      width: WIDTH/12,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
    discipline: {
      width: '80%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    downArrowIcon: {
      height: WIDTH/15,
      width: WIDTH/15,
    }
});

export default styles;