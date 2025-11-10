import { Colors } from "@/constants/Colors";
import { Dimensions } from "@/constants/Dimensions";
import { useAppService } from "@/services/AppService";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

export type WorkoutListItemType = {
    workoutID: number,
    workoutName: string
}

export type WorkoutListItemProps = {
    workoutID: number
}

export const WorkoutListItem: React.FC<WorkoutListItemProps> = ({
    workoutID
}) => {

    // data
    const [isDataLoading, setDataLoading] = useState<boolean>(true)
    const [data, setData] = useState<WorkoutListItemType | undefined>(undefined)

    const service = useAppService()

    useEffect(() => {
        (async () => {
            setData(await service.getWorkoutListItemDataByID(workoutID));
            setDataLoading(false)
        })();
    }, []);

    if (isDataLoading) {
        return (
            <View style={[styles.container, styles.containerWithLoadingIndicator]}>
                <ActivityIndicator 
                    color={Colors.darker}
                    size={35}
                />
            </View>
            
        )
    }

    const handlePress = () => {
        // routing
        router.navigate({
            pathname: '/workout-overview-screen',
            params: {
                pickedWorkoutID: workoutID,
                pickedWorkoutTitle: data?.workoutName
            }
        })
    }

    return (
        <Animated.View
            entering={FadeIn.duration(500)}
        >
            <TouchableHighlight 
                onPress={handlePress}
                style={[styles.container]}
                underlayColor={Colors.figure}
            >
                <ImageBackground
                    style={[styles.container, styles.containerWithWorkoutData, { marginLeft: 0 }]}
                    source={service.getWorkoutPreviewByID(workoutID)}
                >
                    <Text style={[styles.heading]}>
                        { data?.workoutName }
                    </Text>
                </ImageBackground>
            </TouchableHighlight>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 300,
        borderRadius: 20,
        overflow: 'hidden',
        marginLeft: Dimensions.edgeWidth
    },
    containerWithLoadingIndicator: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.figure
    },
    containerWithWorkoutData: {
        padding: 10,
        justifyContent: 'flex-end'
    },
    heading: {
        color: Colors.textHeading, 
        fontSize: 28,
        fontFamily: 'Montserrat-Bold'
    }
})