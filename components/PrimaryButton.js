import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

export const PrimaryButton = (props) => {
    const {children} = props

    const onPress = () => {

    }

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
        backgroundColor: '#72063C',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        elevation: 2
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
    }
})