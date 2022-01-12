import {StyleSheet} from 'react-native';

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
    height: '30%',
    alignItems: 'center',
  },
  bottomContainer: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    backgroundColor: '#fff',
    paddingHorizontal: '5%',
  },
  logo: {
    width: '8%',
    height: '5%',
    top: '3%',
    left: '85%',
  },
  userImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    position: 'absolute',
    flex: 2,
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    top: '28%',
    alignItems: 'center',
  },
  signUpText: {
    marginTop: '7%',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 30,
    color: '#000000',
    letterSpacing: 1,
    marginBottom: '6%',
  },
  formField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 55,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#cccccc',
    marginVertical: '2%',
  },
  textInput: {
    width: '100%',
    paddingRight: 50,
    paddingLeft: 10,
    fontSize: 18,
    color: '#000',
  },
  icon: {
    position: 'absolute',
    left: '90%',
  },
});

export default styles;
