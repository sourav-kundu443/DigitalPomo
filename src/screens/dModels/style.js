import { Dimensions, StyleSheet } from "react-native";
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header: {
        flex: 0.1,
        backgroundColor: '#000'
    },
    imageContainer: {
        flex: 0.9,
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
        
    },
    iconContainer: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: WIDTH/1.03,
        paddingHorizontal: 10,
        // marginTop: 20
    },
    plusMinusIcons: {
        
    },
    iconStyle: {
        // padding: 15,
        borderRadius: 8,
        backgroundColor: '#00000026',
    },
    rightSideIcons: {
        borderRadius: 8,
        
    },
    marginTop: {
        // marginTop: 10
    },
    dotIcon: {
    }
})

export default styles;