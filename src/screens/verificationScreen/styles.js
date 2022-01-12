import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100%',
    
        
    },
    header: {
        flex: 0.3,
        backgroundColor: '#000',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        
        
    },
    headerLogo: {
        width: '10%',
        bottom: '20%',
        left: '85%'
    },
    headerText: {
        width: '85%',
        position: 'absolute',
        color: '#fff',
        fontSize: 25,
        fontWeight: '700',
        letterSpacing: 1,
        alignSelf: 'center',
        top: '40%',
        textAlign: 'center',
        lineHeight: 35
    },
    footer: {
        flex: 0.7,
        width: '100%',
        paddingHorizontal: '5%'
    },
    
    userContainer: {
        borderWidth: 3,
        borderColor: '#FF9838',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 50,
        marginBottom: '20%',
        alignSelf: 'center',
        top: '10%'
    },
    footerText: {
        alignSelf: 'center',
        top: '10%',
        fontSize: 20,
        color: '#000',
        lineHeight: 25,
        fontWeight: "600",
    },
    btnView: {
        top: '15%'
    }  
})

export default styles;