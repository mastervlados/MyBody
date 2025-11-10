import { Colors } from "@/constants/Colors";
import { useAppService } from "@/services/AppService";
import { router } from "expo-router";
import React from "react";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { TileItemType } from "./WorkoutOverviewList";
import ClockIcon from "./ui/ClockIcon";
import PlayIcon from "./ui/PlayIcon";

export type WorkoutOverviewListItemProps = {
    workoutID: number 
} & TileItemType

export const WorkoutOverviewListItem: React.FC<WorkoutOverviewListItemProps> = ({
    workoutID,
    numberInSequence,
    partName,
    duration
}) => {
    const service = useAppService()

    const handlePress = () => {
        router.navigate({
            pathname: '/part-shower-modal',
            params: {
                triggerNumberInSequence: numberInSequence,
                triggerWorkoutID: workoutID,
                triggerPartName: partName
            }
        })
    }

    return (
        <Pressable 
            onPress={handlePress}
            style={[styles.container]}
        >
            <ImageBackground
                source={service.getTilePreviewByID(workoutID, numberInSequence)}
                style={[styles.image]}
            >
                <View style={[styles.durationContainer]}>
                    <ClockIcon iconColor={Colors.primary} iconSize={14}/>
                    <Text style={[styles.durationText]}>{duration}</Text>
                </View>
            </ImageBackground>
            <View style={[styles.body]}>
                <Text style={[styles.partName]}>{partName}</Text>
                <View style={[styles.footer]}>
                    <View style={[styles.iconContainer]}>
                        <PlayIcon iconColor={Colors.primary} iconSize={36}/>
                    </View>
                    <View style={[styles.numberShape]}>
                        <Text style={[styles.numberValue]}>{numberInSequence}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 155,
        height: 188,
        borderRadius: 20,
        overflow: 'hidden',
        padding: 10,
        backgroundColor: Colors.figure
    },
    partName: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold'
    },
    numberShape: {
        width: 36,
        height: 36,
        borderRadius: 36,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.numberArea
    },
    numberValue: {
        fontSize: 16,
        fontFamily: 'Montserrat-Black',
        color: Colors.numberColor
    },
    image: {
        width: 135,
        height: 90,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10
    },
    body: {
        flex: 1,
        justifyContent: 'space-between'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconContainer: {
        width: 36,
        height: 36,
        borderRadius: 36,
        justifyContent: 'center',
        alignItems: 'center',
    },
    durationContainer: {
        backgroundColor: Colors.background,
        borderRadius: 14,
        padding: 2,
        flexDirection: 'row'
    },
    durationText: {
        fontSize: 10,
        fontFamily: 'Montserrat-Medium',
        color: Colors.textCommon
    }
})