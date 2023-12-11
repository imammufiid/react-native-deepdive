import {StyleSheet, Text} from "react-native";
import {Colors} from "../../constants/color";

export const Title = (props) => {
    const {children} = props

    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.white,
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
})