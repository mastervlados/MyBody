import { Dimensions } from "@/constants/Dimensions"
import { FlatList } from "react-native"
import { WorkoutListItem } from "./WorkoutListItem"

export type WorkoutListProps = {
    workoutIDs: number[] | undefined
}

export const WorkoutList: React.FC<WorkoutListProps> = ({
    workoutIDs
}) => {

    // check undefined
    if (!workoutIDs) return

    return (
        <FlatList
            overScrollMode={'never'}
            horizontal={true}
            data={workoutIDs}
            keyExtractor={item => `workout-${item}`}
            renderItem={item => <WorkoutListItem workoutID={item.item}/>}
            contentContainerStyle={{
                paddingEnd: Dimensions.edgeWidth
            }}
        />
    )
}