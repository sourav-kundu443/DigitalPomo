import {Dimensions, StyleSheet} from 'react-native';
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  topContainer: {
    width: WIDTH,
    height: '35%',
    alignItems: 'center',
  },
  searchBarView: {
    width: '80%',
    height: '70%',
    justifyContent: 'flex-end',
  },
  searchBar: {},
  bottomContainer: {
    width: WIDTH,
    height: '65%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    marginTop: '5%',
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#CCCCCC',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textView: {
    flexDirection: 'row',
  },
  marginText: {
    marginLeft: '3%',
  },
  textName: {
    fontWeight: 'bold',
    color: '#191919',
    fontSize: 16,
    marginRight: '4%',
  },
  textCommon: {
    color: '#5B5B5B',
    fontSize: 14,
  },
});

export default styles;
