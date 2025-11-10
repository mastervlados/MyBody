import { Colors } from "@/constants/Colors";
import { useAppService } from "@/services/AppService";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { TileItemType } from "./WorkoutOverviewList";

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

    return (
        <View style={[styles.container]}>
            <ImageBackground
                source={service.getTilePreviewByID(workoutID, numberInSequence)}
                style={[styles.image]}
            >

            </ImageBackground>
            <View style={[styles.body]}>
                <Text style={[styles.partName]}>{partName}</Text>
                <View style={[styles.footer]}>
                    <View>
                        <Text>{numberInSequence}</Text>
                    </View>
                    <View style={[styles.numberShape]}>
                        <Text style={[styles.numberValue]}>{numberInSequence}</Text>
                    </View>
                </View>
            </View>
        </View>
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
        overflow: 'hidden'
    },
    body: {
        flex: 1,
        justifyContent: 'space-between'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})