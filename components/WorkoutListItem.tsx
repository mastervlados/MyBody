import { Colors } from "@/constants/Colors";
import { useAppService } from "@/services/AppService";
import { useEffect, useState } from "react";
import { ActivityIndicator, ImageBackground, StyleSheet, Text, View } from "react-native";

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

    return (
        <ImageBackground
            style={[styles.container, styles.containerWithWorkoutData]}
            source={service.getWorkoutPreviewByID(workoutID)}
        >
            <Text style={[styles.heading]}>
                { data?.workoutName }
            </Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 300,
        borderRadius: 20,
        overflow: 'hidden',
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