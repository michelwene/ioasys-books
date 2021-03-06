/* eslint-disable react/no-unknown-property */
export function ArrowTooltip() {
  return (
    <svg
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_12_735)">
        <path
          d="M8 -3.49691e-07L16 8L-3.49691e-07 8L8 -3.49691e-07Z"
          fill="white"
          fill-opacity="0.4"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_12_735"
          x="-2"
          y="-2"
          width="20"
          height="12"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="1" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_12_735"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_12_735"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
