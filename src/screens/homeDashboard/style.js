import { StyleSheet, Dimensions } from "react-native";

const numColumns = 3;
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    imageContainer: {
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 200
    },
    footer: {
        backgroundColor: '#fff',
        height: '100%',
        marginTop: '7%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        
    },
    text: {
        textTransform: 'uppercase',
        fontSize: 15,
        color: '#333333',
        fontWeight: '500',
        paddingHorizontal: '2%',
        marginTop: '6%',
        letterSpacing: 1
    },
    cardContainer: {
        width: WIDTH,
        height: '100%',
        // justifyContent: 'center',
        marginVertical: '5%',
        paddingHorizontal: '3%'
    },
    card: {
        // flex: 1,
        height:120,
        width:"30%",
        flexDirection:'column',
        alignItems: 'center',
        backgroundColor:"white",
        borderRadius:15,
        padding: 10,
        elevation:13,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        marginVertical: '3%',
        marginHorizontal: '1.5%'
    },
    cardText: {
        textAlign: 'center',
        fontSize: 14,  
        color: '#565656',
        fontWeight: '600',
        letterSpacing: 1,
    },
    itemInvisible: {
        backgroundColor: 'transparent'
    },
})

export default styles;