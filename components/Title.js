import {StyleSheet, Text} from "react-native";

export const Title = (props) => {
    const {children} = props

    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#DDB52F',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#DDB52F',
        padding: 12
    }
})