import { CoachDetails } from "@/components/CoachDetails";
import { WorkoutList } from "@/components/WorkoutList";
import { Colors } from "@/constants/Colors";
import { Dimensions } from "@/constants/Dimensions";
import { useAppService } from "@/services/AppService";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export type WorkoutListSequenceType = {
    complex: number[],
    hiit: number[],
    smoothFitness: number[] 
}

const WorkoutListScreen: React.FC = () => {
    const service = useAppService()
    const [workouts, setWorkouts] = useState<WorkoutListSequenceType>();

    useEffect(() => {
        (async () => {
            setWorkouts(await service.getWorkoutListSequences())
        })();
    }, []);

    return (
        <View style={{flex:1}}>
            <CoachDetails/>
            <Text style={[styles.heading]}>Комплексные тренировки</Text>
            <WorkoutList workoutIDs={workouts?.complex}/>
        </View>
        
    )
}

export default WorkoutListScreen

const styles = StyleSheet.create({
    heading: {
        marginTop: Dimensions.edgeWidth * 2, 
        marginBottom: 10,
        fontFamily: 'Montserrat-SemiBold',
        color: Colors.textCommon,
        marginLeft: Dimensions.edgeWidth,
        fontSize: Dimensions.h4Size
    }
})