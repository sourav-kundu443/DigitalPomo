import {Dimensions, StyleSheet} from 'react-native';
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  topContainer: {
    width: WIDTH,
    height: '35%',
    alignItems: 'center',
  },
  bottomContainer: {
    width: WIDTH,
    height: '65%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: '8%',
    paddingTop: '5%',
  },
  image: {
    width: WIDTH / 1.8,
    height: WIDTH / 2.1,
  },
  footerTitle: {
    fontSize: 24,
    color: '#191919',
    fontWeight: '700',
    letterSpacing: 1,
    lineHeight: 30,
    marginVertical: '6%',
  },
  row: {
    paddingVertical: '5%',
    borderBottomColor: '#DBDBDB',
    borderBottomWidth: 1,
  },
  bulletTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    width: 10,
    height: 10,
    backgroundColor: '#FF7F00',
    borderRadius: 50,
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
    marginTop: 5,
  },
});

export default styles;
