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
        top: '3%',
      },
      footer: {
        top: '20%',
        height: '100%',
        width: WIDTH,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: '8%'
    },
    footerTitle: {
      fontSize: 24,
      color: '#191919',
      fontWeight: '700',
      letterSpacing: 1,
      lineHeight: 30,
      marginTop: '8%',
      marginBottom: '4%',
      
    },
});

export default styles;