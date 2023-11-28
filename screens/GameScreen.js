import {Platform, StyleSheet, Text, View} from "react-native";
import {Title} from "../components/Title";

export const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/*GUEST*/}
            <View>
                <Text>Higher or lower?</Text>
                {/* + - */}
            </View>
            <View>{/*LOG ROUNDS*/}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 50 : 12,
        paddingBottom: 12,
        paddingHorizontal: 12,
    }
})