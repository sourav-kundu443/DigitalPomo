import {StyleSheet} from 'react-native';
import {WIDTH} from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  topContainer: {
    width: '100%',
    height: '40%',
    // alignItems: 'center',
  },
  filterText: {
    color: '#D8D8D8',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
  },

  bottomContainer: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    backgroundColor: '#fff',
  },
  imageContainer: {
    margin: 5,
  },
  image: {
    width: WIDTH / 5,
    height: 80,
  },
});

export default styles;
