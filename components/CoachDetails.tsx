import { Colors } from "@/constants/Colors";
import { Dimensions } from "@/constants/Dimensions";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ExternalLink } from "./ExternalLink";
import LinkIcon from "./ui/LinkIcon";

export const CoachDetails: React.FC = () => {
    return (
        <View style={[styles.container]}>
            <Image 
                style={[styles.image]}
                source={require('@/assets/images/coach.png')}
            />
            <View style={[styles.borderedContainer]}>
                <View style={[styles.contentContainer]}>
                    <ExternalLink href={'https://t.me/alexpohydei'}>
                        <View style={styles.telegramContainer}>
                            <Text style={[styles.heading]}>Фитнес тренер</Text>
                            <Text style={[styles.description]}>Канал об эффективном фитнесе:</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.link]}>t.me/alexpohydei</Text>
                                <View style={[styles.icon]}>
                                    <LinkIcon iconColor={Colors.primary} iconSize={11}/>
                                </View>
                                
                            </View>
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
        height: 223,
        width: Dimensions.contentWidth,
        marginHorizontal: 'auto',
        justifyContent: 'flex-end',
        marginTop: Dimensions.edgeWidth
    },
    borderedContainer: {
        width: Dimensions.contentWidth,
        height: 108,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 20,
    },
    image: {
        width: 114,
        height: 223,
        position: 'absolute',
        bottom: 0,
        left: 20,
        zIndex: 999,
    },
    contentContainer: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: 198,
    },
    telegramContainer: {
        // borderWidth: 1,
        flexDirection: 'column'
    },
    heading: {
        color: Colors.primary,
        fontFamily: 'Montserrat-Black',
        fontSize: 16
    },
    description: {
        color: Colors.textCommon,
        fontFamily: 'Montserrat-Regular',
        fontSize: 11
    },
    link: {
        color: Colors.textCommon,
        fontFamily: 'Montserrat-Bold',
        fontSize: 11,
        marginTop: 5,
        marginEnd: 5,
    },
    icon: {
        marginTop: 5,
    }
})