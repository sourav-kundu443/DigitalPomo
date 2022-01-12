import {StyleSheet} from 'react-native';
import {WIDTH} from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
    alignItems: 'center',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  bottomContainerTop: {
    width: '85%',
    alignItems: 'center',
    marginBottom: '5%',
  },
  top: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#8C8C8C',
    fontWeight: '600',
    letterSpacing: 1,
  },
  project: {
    width: WIDTH / 3.2,
    height: WIDTH / 2.4,
    alignItems: 'center',
  },
  projectImage: {
    width: WIDTH / 4.5,
    height: WIDTH / 4.5,
    borderRadius: 100,
    borderColor: '#CCCCCC',
    borderWidth: 1,
  },
  projectNum: {
    fontSize: 14,
    color: '#565656',
    fontWeight: '600',
    marginTop: '10%',
  },
});

export default styles;
