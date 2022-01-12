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
  TtextContainer: {
    width: '70%',
    left: '5%',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 24
  },
  paraText: {
    color: '#fff',
    lineHeight: 25,
    marginTop: 15,
    fontSize: 17
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
    paddingHorizontal: '10%'
  },
  loginForm: {
    marginTop: '8%',
    // paddingHorizontal: '10%',
  },
  formField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 55,
    borderRadius: 5,
    marginVertical: 10,
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
  forgotPassword: {
    alignItems: 'flex-end',
    marginTop: '5%'
  },
  linkableText: {
      color: '#36A9E1',
      fontWeight: '600',
      fontSize: 16,
  },
  normalText: {
      color: '#000',
      marginRight: 5
  },
  bottomtext: {
      flexDirection: 'row',
      marginTop: '20%'
  }
})

export default styles;
