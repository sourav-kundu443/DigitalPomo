import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    position: 'relative',
  },
  constructionImage: {
    position: 'absolute',
    alignSelf: 'center',
    top: '4%',
  },
  footer: {
    width: '100%',
    top: '15%',
    backgroundColor: '#fff',
    height: '100%',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    paddingHorizontal: '5%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  heading: {
    fontSize: 24,
    color: '#191919',
    fontWeight: '700',
    letterSpacing: 1,
    lineHeight: 30,
    marginTop: '8%',
    marginBottom: '4%',
    paddingHorizontal: '7%'
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
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  btn: {
      marginBottom: '25%'
  }
});

export default styles;
