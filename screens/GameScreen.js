import {Alert, Platform, StyleSheet, Text, View} from "react-native";
import {Title} from "../components/ui/Title";
import {useEffect, useState} from "react";
import {NumberContainer} from "../components/game/NumberContainer";
import {PrimaryButton} from "../components/ui/PrimaryButton";

const generateRandomBetween = (min, max, exclude) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return randomNumber
    }
}

let minBoundary = 1
let maxBoundary = 100

export const GameScreen = (props) => {
    const {userNumber, onGameOver} = props
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === parseInt(userNumber)) {
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver])

    const nextGuessHandler = (direction) => {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert(
                'Don\'t lie!',
                'You know this is wrong...',
                [
                    {text: 'Sorry!', style: 'cancel'}
                ]
            )
            return
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRandomNumber)
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton
                        onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton
                        onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
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