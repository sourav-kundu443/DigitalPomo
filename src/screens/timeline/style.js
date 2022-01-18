import {Dimensions, StyleSheet} from 'react-native';
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  topContainer: {
    width: '100%',
    height: '35%',
    alignItems: 'center',
  },
  imageView: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    width: '100%',
    height: '65%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
});

export default styles;
