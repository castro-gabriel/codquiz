import styled from 'styled-components'
import React from 'react'

function Logo() {
  return (
    <svg width="335" height="133" viewBox="0 0 735 363" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <path d="M141.637 236H124.449L98.4727 210.121V132.289L124.449 106.41H141.637V236ZM148.473 132.289V106.41H194.469L220.348 132.289V158.363H177.184V132.289H148.473ZM148.473 236V210.121H177.184V191.176H220.348V210.121L194.469 236H148.473ZM355.406 210.121L329.527 236H300.621V211.781H311.363V158.168H300.621V132.289H329.527L355.406 158.168V210.121ZM282.555 211.781H293.785V236H264.781L238.902 210.121V158.168L264.781 132.289H293.785V158.168H282.555V211.781ZM426.207 236V210.121H458.238V132.289H426.207V106.41H475.523L501.5 132.289V210.121L475.523 236H426.207ZM376.207 106.41H419.371V236H376.207V106.41Z" fill="#EAEAEA"/>
    </g>
    <g filter="url(#filter1_d)">
      <path d="M462.654 285.909L447.864 292.425L430.761 285.82L415.072 250.207L421.741 233.129L436.978 226.417L442.195 238.258L434.822 241.506L450.512 277.119L466.151 270.229L493.422 279.931L487.36 294.873L462.654 285.909ZM488.091 260.563L483.355 272.947L467.573 267.522L452.651 233.651L445.233 236.919L440.016 225.078L455.343 218.326L472.401 224.95L488.091 260.563ZM554.536 231.29L547.911 248.348L532.674 255.061L527.457 243.22L534.785 239.991L513.879 192.537L533.629 183.836L554.536 231.29ZM517.046 247.807L524.329 244.598L529.546 256.439L514.354 263.132L497.251 256.527L476.344 209.073L496.139 200.352L517.046 247.807ZM563.341 226.45L569.284 223.832L554.284 189.783L548.341 192.401L542.789 179.8L574.425 165.862L579.977 178.463L574.034 181.081L589.035 215.131L594.978 212.512L600.549 225.158L568.913 239.096L563.341 226.45ZM602.324 211.143L619.824 145.861L633.229 139.956L638.289 151.439L620.21 216.496L607.207 222.225L602.324 211.143ZM658.548 199.605L624.186 214.744L629.718 196.78L652.82 186.602L658.548 199.605ZM582.29 162.398L615.937 147.574L610.43 165.474L587.999 175.356L582.29 162.398Z" fill="white"/>
    </g>
    <defs>
      <filter id="filter0_d" x="98.4727" y="106.41" width="413.027" height="139.59" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dx="5" dy="5"/>
        <feGaussianBlur stdDeviation="2.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <filter id="filter1_d" x="415.072" y="139.956" width="253.477" height="164.918" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dx="5" dy="5"/>
        <feGaussianBlur stdDeviation="2.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
    </defs>
    </svg>
  )
}

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  block-size: 100px;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo