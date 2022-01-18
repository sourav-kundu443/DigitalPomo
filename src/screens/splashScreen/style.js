import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  SplashContainer: {
    flex: 1,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    color: '#FF7F00',
    fontWeight: '700',
    // lineHeight: 25,
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
  },
  details: {
    color: '#fff',
    width: 320,
    textAlign: 'center',
    fontSize: 15,
    marginTop: 25,
    lineHeight: 23,
    letterSpacing: 1,
    fontFamily: 'OpenSans-Regular',
  },
  splashLowerPart: {
    position: 'absolute',
    width: '100%',
    height: 150,
    left: 0,
    top: 600,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStarted: {
    flexDirection: 'row',
  },
  getStartedText: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 25,
    lineHeight: 30,
    letterSpacing: 1,
  },
  arrowIcon: {
    marginLeft: 15,
  },
});

export default styles;
