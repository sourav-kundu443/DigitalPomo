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
        width: WIDTH,
        height: WIDTH/2.1,
        alignSelf: 'center',
        top: '10%',
      },
      footer: {
        position: 'absolute',
        top: '40%',
        height: '100%',
        width: WIDTH,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: '5%',
        paddingVertical: '4%'
    },
    footerTitle: {
      fontSize: 24,
      color: '#191919',
      fontWeight: '700',
      letterSpacing: 1,
      lineHeight: 30,
      // marginTop: '8%',
      marginBottom: '4%',
      
    },
    centerField: {
      width: WIDTH,
      alignItems: 'center'
    },
    formField: {
      width: '94%',
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    textCard: {
      width: '73%',
      borderRadius: 5,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0,
      shadowRadius: 7,
      elevation: 2,
    },
    textRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    textBold: {
      fontSize: 14,
      fontWeight: '600'
    },
    imageCard: {
      // height: WIDTH/3.7,
      // width: WIDTH/4.2,
      
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.5,
      shadowRadius:15,
      elevation: 8,
    },
    footerImage: {
      borderRadius: 5,
      height: WIDTH/3.7,
      width: WIDTH/4.2,
      resizeMode: 'stretch',
    },
    
    
});

export default styles;