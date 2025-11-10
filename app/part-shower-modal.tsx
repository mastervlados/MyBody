import { Colors } from "@/constants/Colors";
import { Dimensions } from "@/constants/Dimensions";
import { useAppService } from "@/services/AppService";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useVideoPlayer, VideoSource, VideoView } from "expo-video";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const PartShowerModal: React.FC = () => {
    const { 
        triggerNumberInSequence, 
        triggerWorkoutID,
        triggerPartName 
    } = useLocalSearchParams()
    const service = useAppService()
    
    const navigation = useNavigation();
    
    useEffect(() => {
        navigation.setOptions({
            title: triggerPartName
        })
    }, [navigation])

    const videoWidth: number = 1280
    const videoHeight: number = 720
    const aspectRatio: number = videoHeight / videoWidth

    const videoSource: VideoSource = service.getVideoSourceByID(Number(triggerWorkoutID), Number(triggerNumberInSequence))

    const player = useVideoPlayer(videoSource, async (player) => {
        player.loop = false
        await service._sleep(0.7)
        player.play()
    })

    return (
        <Animated.View
            entering={FadeIn.duration(500)}
            exiting={FadeOut.duration(500)}
            style={[styles.container]}
        >
            <View style={[styles.insideContainer]}>
                <VideoView
                    player={player}
                    style={[styles.player, { height: Dimensions.width * aspectRatio }]}
                    fullscreenOptions={{
                        enable: true,
                        orientation: 'landscape'
                    }}
                />
            </View>

        </Animated.View>
    )
}

export default PartShowerModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    insideContainer: {
        flex: 1,
        backgroundColor: Colors.background
    },
    player: {
        width: Dimensions.width,
    }
})