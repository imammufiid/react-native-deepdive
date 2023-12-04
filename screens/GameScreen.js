import {Alert, FlatList, Platform, StyleSheet, Text, View} from "react-native";
import {Title} from "../components/ui/Title";
import {useEffect, useState} from "react";
import {NumberContainer} from "../components/game/NumberContainer";
import {PrimaryButton} from "../components/ui/PrimaryButton";
import {Card} from "../components/ui/Card";
import {InstructionText} from "../components/ui/InstructionText";
import {Ionicons} from '@expo/vector-icons'

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
    const [guessRounds, setGuessRounds] = useState([])

    useEffect(() => {
        if (currentGuess === parseInt(userNumber)) {
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, [])

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
        setGuessRounds(prevState => [newRandomNumber, ...prevState])
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText
                    style={styles.instructionText}>
                    Higher or lower?
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name='md-remove' size={24} color='white'/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name='md-add' color='white' size={24}/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
                <FlatList
                    data={guessRounds}
                    keyExtractor={(item) => item}
                    renderItem={(itemData) => {
                    return (
                        <Text>{itemData.item}</Text>
                    )
                }}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 50 : 12,
        paddingBottom: 12,
        paddingHorizontal: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12,
    }
})