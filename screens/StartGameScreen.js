import {View, TextInput, StyleSheet} from "react-native";
import {PrimaryButton} from "../components/PrimaryButton";

export const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 24,
        marginTop: 100,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#72063C',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
})