import {StyleSheet} from 'react-native';

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
  },
  bottomContainer: {
    width: '100%',
    height: '65%',
    backgroundColor: '#fff',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  constructionImage: {
    marginTop: '10%',
    alignSelf: 'center',
  },
  formField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 55,
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#CCCCCC',
  },
  textInput: {
    width: '100%',
    paddingRight: 50,
    paddingLeft: 10,
    fontSize: 18,
    color: '#000',
  },
  icon: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

export default styles;
