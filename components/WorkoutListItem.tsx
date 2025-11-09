import { Colors } from "@/constants/Colors";
import { useAppService } from "@/services/AppService";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export type WorkoutListItemProps = {
    workoutID: number
}

export const WorkoutListItem: React.FC<WorkoutListItemProps> = ({
    workoutID
}) => {

    // preview image
    const [isPreviewLoading, setPreviewLoaded] = useState<boolean>(true)
    // data
    const [isDataLoading, setDataLoaded] = useState<boolean>(true)

    const service = useAppService()

    useEffect(() => {
        (async () => {
            console.log(workoutID)
        })();
    }, []);

    if (isPreviewLoading || isDataLoading) {
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
        <Text>text</Text>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 300,
        borderRadius: 20,
        overflow: 'hidden'
    },
    containerWithLoadingIndicator: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.figure
    }
})