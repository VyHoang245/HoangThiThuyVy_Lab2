import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
    button: {
        width: 70,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        borderColor: '#000',
        borderWidth: 1,
    }
    ,
    calButton: {
        width: 70,
        height: 60,
        backgroundColor: '#f0f0f0',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        borderColor: '#000',
        borderWidth: 1,
    },
    clearButton: {
        flex: 4,
        backgroundColor: '#f0f0f0',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        borderColor: '#000',
        borderWidth: 1,
    },
    textButton: {
        color: '#000',
        fontSize: 26,
    },
    text: {
        color: 'orange',
        fontSize: 26,
        // fontWeight: 'bold',
    },
    zeroButton: {
        flex: 2,
        height: 60,
        backgroundColor: '#f0f0f0',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        borderColor: '#000',
        borderWidth: 1,
    },
    equalButton: {
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        color: '#fff',
        width: 40,
        height: 60,
    },
})

export default styles;