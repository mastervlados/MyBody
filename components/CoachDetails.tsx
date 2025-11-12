import { Colors } from "@/constants/Colors";
import { Dimensions } from "@/constants/Dimensions";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ExternalLink } from "./ExternalLink";
import LinkIcon from "./ui/LinkIcon";

const mainContainerAspectRatio = 223 / 340
const mainContainerHeight = Dimensions.contentWidth * mainContainerAspectRatio

const coachImageAspectRatio = 114 / 172
const coachImageWidth = mainContainerHeight * coachImageAspectRatio

const clickableContainerAspectRatio = 108 / 340
const clickableContainerHeight = Dimensions.contentWidth * clickableContainerAspectRatio

const contentContainerAspectRatio = 208 / 340
const contentContainerWidth = Dimensions.contentWidth * contentContainerAspectRatio

export const CoachDetails: React.FC = () => {
    return (
        <View style={[styles.container]}>
            <Image 
                style={[styles.image]}
                source={require('@/assets/images/coach.png')}
                resizeMode='contain'
            />
            <View style={[styles.borderedContainer]}>
                <View style={[styles.contentContainer]}>
                    <ExternalLink href={'https://t.me/alexpohydei'} style={{flex:1}}>
                        <View style={styles.telegramContainer}>
                            <Text style={[styles.heading]}>Фитнес тренер</Text>
                            <Text style={[styles.description]}>Канал об эффективном фитнесе:</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.link]}>t.me/alexpohydei</Text>
                                <View style={[styles.icon]}>
                                    <LinkIcon iconColor={Colors.primary} iconSize={clickableContainerHeight * 0.11}/>
                                </View>
                                
                            </View>
                        </View>
                    </ExternalLink>
                    <ExternalLink href={'https://light-vision.ucoz.ru/mybody/mybody_privacy_policy.txt'} style={{flex:1}}>
                        <View style={[styles.policyContainer]}>
                            <Text style={[styles.policy]}>Политика конфиденциальности</Text>
                        </View>
                    </ExternalLink>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: mainContainerHeight, // 223
        width: Dimensions.contentWidth,
        marginHorizontal: 'auto',
        justifyContent: 'flex-end',
        marginTop: Dimensions.edgeWidth
    },
    borderedContainer: {
        width: Dimensions.contentWidth,
        height: clickableContainerHeight, // 108
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 20,
    },
    image: {
        width: coachImageWidth, // 114
        height: mainContainerHeight, // 223
        position: 'absolute',
        bottom: 0,
        left: 1,
        zIndex: 999,
    },
    contentContainer: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: contentContainerWidth, // 208
        justifyContent: 'space-around'
    },
    telegramContainer: {
        // borderWidth: 1,
        flexDirection: 'column'
    },
    heading: {
        color: Colors.primary,
        fontFamily: 'Montserrat-Black',
        fontSize: clickableContainerHeight * 0.16
    },
    description: {
        color: Colors.textCommon,
        fontFamily: 'Montserrat-Regular',
        fontSize: clickableContainerHeight * 0.10
    },
    link: {
        color: Colors.textCommon,
        fontFamily: 'Montserrat-Bold',
        fontSize: clickableContainerHeight * 0.10,
        marginTop: 5,
    },
    icon: {
        marginStart: 5,
        marginTop: 5,
    },
    policyContainer: {
        height: 20,
        justifyContent: 'flex-end',
    },
    policy: {
        color: Colors.textCommon,
        fontFamily: 'Montserrat-Bold',
        fontSize: clickableContainerHeight * 0.095,
        textDecorationLine: 'underline',
    }
})