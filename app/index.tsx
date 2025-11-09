import { WorkoutList } from "@/components/WorkoutList";
import { useAppService } from "@/services/AppService";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

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
            <Text style={{ marginTop: 50, marginBottom: 10 }}>Комплексные тренировки</Text>
            <WorkoutList workoutIDs={workouts?.complex}/>
        </View>
        
    )
}

export default WorkoutListScreen