import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MapIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={10}
      height={12}
      viewBox="0 0 10 12"
      fill="none"
      {...props}
    >
      <Path
        d="M5 .021a4.996 4.996 0 00-4.99 4.99c0 1.285.995 3.296 2.957 5.977a2.517 2.517 0 004.066 0c1.963-2.68 2.958-4.692 2.958-5.977A4.996 4.996 0 005 .021zm0 6.98a2 2 0 110-4 2 2 0 010 4z"
        fill="#0F0F0F"
      />
    </Svg>
  )
}

export default MapIcon
