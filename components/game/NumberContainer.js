import {Dimensions, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../constants/color";

export const NumberContainer = (props) => {
    const {children} = props

    return (
        <View style={styles.container}>
            <Text
                style={styles.numberText}>
                {children}
            </Text>
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width
console.log('WIDTH', deviceWidth)

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontFamily: 'open-sans-bold',
    }
})