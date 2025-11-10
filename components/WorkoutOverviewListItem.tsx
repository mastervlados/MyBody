import React from "react";
import { Text } from "react-native";
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
    return (
        <Text>1</Text>
    )
}