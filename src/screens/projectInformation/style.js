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
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
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
      row: {
          paddingVertical: '5%',
          borderBottomColor: '#DBDBDB',
          borderBottomWidth: 1,
      },
      bulletTitle: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      bullet: {
          width: 10,
          height: 10,
          backgroundColor: '#FF7F00',
          borderRadius: 50
      },
      title: {
          fontSize: 17,
          lineHeight: 24,
          color: '#191919',
          marginLeft: 20,
          letterSpacing: 1,
        //   fontFamily: 'mulish'
      },
      description: {
          fontSize: 14,
        //   fontWeight: '300',
          color: '#5B5B5B',
          marginLeft: 28,
          marginTop: 5
      }
})

export default styles;