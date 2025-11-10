import { Colors } from "@/constants/Colors";
import { Dimensions } from "@/constants/Dimensions";
import { useAppService } from "@/services/AppService";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { WorkoutOverviewListItem } from "./WorkoutOverviewListItem";

export type TileItemType = {
    numberInSequence: number
    partName: string
    duration: string
}

export type WorkoutOverviewListType = {
    items: TileItemType[]
}

export type WorkoutOverviewListProps = {
    workoutID: number
}

export const WorkoutOverviewList: React.FC<WorkoutOverviewListProps> = ({ workoutID }) => {
    const service = useAppService()
    const [isDataLoading, setDataLoading] = useState<boolean>(true)
    const [data, setData] = useState<WorkoutOverviewListType| undefined>(undefined)

    useEffect(() => {
        (async () => {
            setData(await service.getTilesListDataByID(workoutID))
            setDataLoading(false)
        })();
    }, []);

    if (isDataLoading) {
        return (
            <View style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]}>
                <ActivityIndicator
                    color={Colors.darker}
                    size={35}
                />
            </View>
        )
    }

    return (
        <View style={[styles.container]}>
            <FlatList<TileItemType>
                keyExtractor={item => `tile-${item.numberInSequence}`}
                data={data?.items}
                renderItem={({ item }: { item: TileItemType }) => <WorkoutOverviewListItem workoutID={workoutID} {...item}/>}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 340,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        overflow: 'hidden',
        backgroundColor: Colors.area,
        marginHorizontal: Dimensions.edgeWidth,
        marginTop: Dimensions.edgeWidth * 0.8
    }
})