import {Dimensions, Image, ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {Title} from "../components/ui/Title";
import {Colors} from "../constants/color";
import {PrimaryButton} from "../components/ui/PrimaryButton";

export const GameOverScreen = (props) => {
    const {roundsNumber, userNumber, onStartNewGame} = props
    const {width, height} = useWindowDimensions()

    let imageSize = 300
    if (width < 380) {
        imageSize = 150
    }
    if (height < 400) {
        imageSize = 80
    }
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!</Title>
                <View
                    style={[styles.imageContainer, imageStyle]}>
                    <Image
                        style={styles.image}
                        source={require('./../assets/images/success.png')}/>
                </View>
                <Text style={styles.summaryText}>
                    Your phone needed{' '}
                    <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
                    rounds yo guess to number{' '}
                    <Text style={styles.highlight}>{userNumber}</Text>
                </Text>
                <PrimaryButton
                    onPress={onStartNewGame}>
                    Start New Game
                </PrimaryButton>
            </View>
        </ScrollView>
    )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        height: '100%',
        width: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})