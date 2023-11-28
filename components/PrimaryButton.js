import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {Colors} from "../constants/color";

export const PrimaryButton = (props) => {
    const {children, onPress} = props

    return (
        <TouchableOpacity
            onPress={onPress}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.primary500,
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        elevation: 2
    },
    buttonText: {
        color: Colors.white,
        textAlign: 'center',
    }
})