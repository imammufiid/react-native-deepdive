import {View, TextInput, StyleSheet, Alert, Text, useWindowDimensions} from "react-native";
import {PrimaryButton} from "../components/ui/PrimaryButton";
import {useState} from "react";
import {Colors} from "../constants/color";
import {Title} from "../components/ui/Title";
import {Card} from "../components/ui/Card";
import {InstructionText} from "../components/ui/InstructionText";

export const StartGameScreen = (props) => {
    const {onPickNumber} = props
    const [enteredNumber, setEnteredNumber] = useState('')

    const {width, height} = useWindowDimensions()

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number',
                'Number has to be a number between 1 and 99',
                [
                    {
                        text: 'OK',
                        style: 'destructive',
                        onPress: resetInputHandler
                    }
                ]
            )
            return
        }

        onPickNumber(enteredNumber)
    }

    const resetInputHandler = () => {
        setEnteredNumber('')
    }

    const marginTop = height < 380 ? 30 : 100
    console.log(height)

    return (
        <View style={[styles.rootContainer, {marginTop: marginTop}]}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}/>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={resetInputHandler}>
                            Reset
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={confirmInputHandler}>
                            Confirm
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center'
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    },
})