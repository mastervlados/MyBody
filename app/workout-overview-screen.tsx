import { WorkoutOverviewList } from "@/components/WorkoutOverviewList";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { View } from "react-native";

const WorkoutOverviewListScreen: React.FC = () => {
    const {
        pickedWorkoutID,
        pickedWorkoutTitle
    } = useLocalSearchParams();
    const navigation = useNavigation();
    
    useEffect(() => {
        navigation.setOptions({
            title: pickedWorkoutTitle
        })
    }, [navigation])

    return (
        <View style={{flex:1}}>
            <WorkoutOverviewList workoutID={Number(pickedWorkoutID)}/>
        </View>
    )
}

export default WorkoutOverviewListScreen