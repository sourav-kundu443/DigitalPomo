import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '7%',
    alignItems: 'center',
    maxHeight: '10%',
    marginTop: '8%'
  },
  logo: {
    width: '12%',
  },
  backIcon: {
    width: 25,
    height: 25,
  },
  message: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingHorizontal: '7%',
    marginTop: '8%'
  },
  content: {
    paddingHorizontal: '5%',
    top: '10%',
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputBox: {
    backgroundColor: '#fff',
    height: 55,
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    
    elevation: 17,
  },
  textInput: {
    width: 45,
  },
  timeResend: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '3%'
  },
  resend: {
      color: '#36A9E1',
      fontWeight: '600',
      fontSize: 16
  }
});

export default styles;
