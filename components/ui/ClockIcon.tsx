import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg"

type Props = {
  iconSize?: number,
  iconColor?: string,
  svgProps?: SvgProps
}

const ClockIcon: React.FC<Props> = ({ 
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
  <G fill={iconColor} clipPath="url(#a)">
      <Path d="m5.247 9.69-.004.002-.03.014-.008.002-.006-.002-.03-.014c-.004-.002-.008-.001-.01.002l-.001.004-.008.178.003.009.004.005.043.03.006.002.005-.001.044-.031.005-.007.001-.007-.007-.178c0-.004-.003-.007-.007-.007Zm.11-.046h-.005l-.077.04-.004.003-.001.005.007.18.002.004.004.003.083.039c.006.001.01 0 .012-.003l.002-.006-.014-.256c-.002-.005-.004-.008-.008-.01Zm-.297 0a.008.008 0 0 0-.012.003l-.002.006-.014.256c0 .005.002.008.007.01l.006-.001.084-.039.004-.003.002-.005.007-.179-.002-.005-.004-.004-.076-.038ZM5 .833a4.167 4.167 0 1 1 0 8.333A4.167 4.167 0 0 1 5 .833Zm0 .834a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666ZM5 2.5a.417.417 0 0 1 .414.368l.003.049v1.91l1.128 1.128a.417.417 0 0 1-.55.624l-.04-.034-1.25-1.25a.417.417 0 0 1-.118-.24L4.583 5V2.917A.417.417 0 0 1 5 2.5Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h10v10H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ClockIcon