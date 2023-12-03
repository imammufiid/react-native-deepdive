import {StyleSheet, Text} from "react-native";
import {Colors} from "../../constants/color";

export const InstructionText = (props) => {
    const {children, style} = props
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24
    }
})