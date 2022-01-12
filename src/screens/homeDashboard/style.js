import {StyleSheet, Dimensions} from 'react-native';
// import WIDTH from '../../constants';
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  topContainer: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
  },
  bottomContainer: {
    width: '100%',
    height: '60%',
    backgroundColor: '#fff',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    // paddingHorizontal: '2%',
    alignItems: 'center',
  },
  imageContainer: {
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 280,
    height: 180,
  },

  text: {
    textTransform: 'uppercase',
    fontSize: 15,
    color: '#333333',
    fontWeight: '500',
    paddingHorizontal: '2%',
    marginVertical: '6%',
  },
  card: {
    alignItems: 'center',
    paddingHorizontal: '2%',
    paddingVertical: '4%',
  },
  cardBody: {
    width: WIDTH / 3.5,
    height: WIDTH / 3.5,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: '5%',
    elevation: 13,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  imageView: {
    height: '50%',
  },
  textView: {
    height: '50%',
    justifyContent: 'center',
  },
  cardText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#565656',
    fontWeight: '600',
    letterSpacing: 1,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
});

export default styles;
