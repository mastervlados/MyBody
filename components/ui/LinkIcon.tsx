import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg"

type Props = {
  iconSize?: number,
  iconColor?: string,
  svgProps?: SvgProps
}

const LinkIcon: React.FC<Props> = ({ 
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
        stroke={iconColor}
        strokeWidth={1.5}
        d="M5 2.083H.833v7.084h7.084V5m-3.75.833 5-5m0 0H5.833m3.334 0v3.334"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h10v10H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default LinkIcon