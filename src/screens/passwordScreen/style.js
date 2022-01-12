import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: '5%',
  },
  message: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingHorizontal: '5%',
    marginVertical: '8%'
  },
  loginForm: {
    paddingHorizontal: '5%',
    
  },
  formField: { 
    marginTop: '5%'
  },
  formLabel: {
    marginVertical: '3%',
    color: "#8C8C8C",
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: '600'
  },
  textInputField: {
    backgroundColor: '#fff',
    borderRadius: 5,
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
      height: 40,
      borderRadius: 5,
      marginVertical: '4%',
  },
});

export default styles;
