import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    position: 'relative',
  },
  topPart: {
    flex: 1,
  },
  logo: {
    position: 'absolute',
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
  signUpForm: {
    paddingHorizontal: 30,
  },
  formField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 55,
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
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
  btn: {
    marginBottom: '35%'
  }
});

export default styles;
