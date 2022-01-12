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
  titleText: {
    position: 'absolute',
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 1,
    lineHeight: 30,
    marginTop: '3%',
  },
  formField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: WIDTH / 1.13,
    height: WIDTH / 5,
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 8,
  },
  textTitle: {
    paddingLeft: 10,
    fontSize: 18,
    color: '#191919',
  },
  text: {
    width: '100%',
    paddingLeft: 10,
    fontSize: 14,
    color: '#5B5B5B',
  },
  icon: {
    padding: 10,
    margin: 5,
    height: WIDTH / 12,
    width: WIDTH / 12,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  discipline: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  downArrowIcon: {
    height: WIDTH / 15,
    width: WIDTH / 15,
  },
});

export default styles;
