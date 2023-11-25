import {View, Text, TouchableOpacity} from "react-native";

export const PrimaryButton = (props) => {
    const {children} = props

    return (
        <TouchableOpacity
            onPress={() => {}}>
            <View>
                <Text>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}