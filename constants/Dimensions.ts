import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const contentWidth: number = wp(94) // 94
const edgeWidth: number = (wp(100) - contentWidth) / 2

export const Dimensions = {
  width: wp(100),
  height: hp(100),
  edgeWidth,
  contentWidth,
  pSize: hp(2),
  h1Size: hp(4.4),
  h2Size: hp(3),
  h3Size: hp(2.5),
  h4Size: hp(2.2),
  tiny: hp(1.5)
}