import * as React from "react"

const Line = (props) => (
  <svg
    width={80}
    height={2}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={80} height={2} rx={1} fill="url(#a)" />
    <defs>
      <linearGradient
        id="a"
        x1={1}
        y1={0}
        x2={1}
        y2={80}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#09F4F4" />
        <stop offset={1} stopColor="#00C9E0" />
      </linearGradient>
    </defs>
  </svg>
)

export default Line
