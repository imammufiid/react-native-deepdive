import {StyleSheet, View} from "react-native";
import {Colors} from "../../constants/color";

export const Card = (props) => {
    const {children} = props
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        marginTop: 36,
        padding: 16,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
})