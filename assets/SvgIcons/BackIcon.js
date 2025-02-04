import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function BackIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={49}
      height={49}
      viewBox="0 0 49 49"
      fill="none"
      {...props}
    >
      <Circle cx={24.2917} cy={24.2917} r={24.2917} fill="#F2F2F2" />
      <Path
        d="M31 23H21l3.29-3.29a1.002 1.002 0 00-.705-1.71 1 1 0 00-.705.29l-4.29 4.3A2 2 0 0018 24a2 2 0 00.59 1.4l4.29 4.3a.999.999 0 001.63-.33 1.001 1.001 0 00-.22-1.09L21 25h10a1 1 0 000-2z"
        fill="#0F0F0F"
      />
    </Svg>
  )
}

export default BackIcon
