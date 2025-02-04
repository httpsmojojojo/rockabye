import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DropdownIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={6}
      viewBox="0 0 14 6"
      fill="none"
      {...props}
    >
      <Path
        opacity={0.5}
        d="M12.774.247a.905.905 0 00-.292-.183.957.957 0 00-.984.183L7.382 4.078a.905.905 0 01-.292.183.957.957 0 01-.984-.183L1.991.248a.905.905 0 00-.292-.184.957.957 0 00-.984.183.808.808 0 00-.261.59c0 .221.094.433.261.59l4.124 3.84A2.8 2.8 0 006.744 6a2.8 2.8 0 001.905-.734l4.125-3.84a.808.808 0 00.261-.589.808.808 0 00-.261-.59z"
        fill="#0F0F0F"
      />
    </Svg>
  )
}

export default DropdownIcon
