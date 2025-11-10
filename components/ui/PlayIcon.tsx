import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg"

type Props = {
  iconSize?: number,
  iconColor?: string,
  svgProps?: SvgProps
}

const PlayIcon: React.FC<Props> = ({ 
  iconSize = 10, 
  iconColor = '#000',
  ...svgProps 
}) => (
    <Svg
    width={iconSize > 10 ? iconSize : 10}
    height={iconSize > 10 ? iconSize : 10}
    viewBox="0 0 10 10"
    fill="none"
    {...svgProps}
  >
    <G clipPath="url(#a)">
      <Path
        fill={iconColor}
        d="M5 .625a4.375 4.375 0 1 0 0 8.75 4.375 4.375 0 0 0 0-8.75ZM7.327 5.28l-3.75 1.875a.313.313 0 0 1-.452-.28v-3.75a.312.312 0 0 1 .452-.28l3.75 1.876a.313.313 0 0 1 0 .558"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h10v10H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default PlayIcon