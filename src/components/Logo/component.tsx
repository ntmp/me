import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Props } from './types';

const Logo: FunctionComponent<Props> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 48 48"
    width="48pt"
    height="48pt"
    className={className}
  >
    <defs>
      <clipPath id="_clipPath_kbrg5VVciiGtPPd6H0KjcGgLBHehN1uK">
        <rect width="48" height="48"/>
      </clipPath>
    </defs>
    <g clipPath="url(#_clipPath_kbrg5VVciiGtPPd6H0KjcGgLBHehN1uK)">
      <path d="M 5.625 0 L 42.375 0 C 45.48 0 48 2.52 48 5.625 L 48 42.375 C 48 45.48 45.48 48 42.375 48 L 5.625 48 C 2.52 48 0 45.48 0 42.375 L 0 5.625 C 0 2.52 2.52 0 5.625 0 Z" id="logo-background" />
      <path d=" M 17.149 23.956 L 17.149 23.956 L 17.149 23.956 Q 17.149 26.74 17.878 29.017 L 17.878 29.017 L 17.878 29.017 Q 18.608 31.293 19.912 32.928 L 19.912 32.928 L 19.912 32.928 Q 21.215 34.564 23.028 35.448 L 23.028 35.448 L 23.028 35.448 Q 24.84 36.331 27.006 36.331 L 27.006 36.331 L 27.006 36.331 Q 29.171 36.331 30.762 35.823 L 30.762 35.823 L 30.762 35.823 Q 32.354 35.315 33.856 34.431 L 33.856 34.431 L 35.138 37.923 L 35.138 37.923 Q 33.503 38.807 31.403 39.403 L 31.403 39.403 L 31.403 39.403 Q 29.304 40 26.519 40 L 26.519 40 L 26.519 40 Q 23.47 40 20.972 38.895 L 20.972 38.895 L 20.972 38.895 Q 18.475 37.79 16.663 35.735 L 16.663 35.735 L 16.663 35.735 Q 14.851 33.68 13.856 30.74 L 13.856 30.74 L 13.856 30.74 Q 12.862 27.801 12.862 24.133 L 12.862 24.133 L 12.862 24.133 Q 12.862 20.597 13.856 17.635 L 13.856 17.635 L 13.856 17.635 Q 14.851 14.674 16.707 12.53 L 16.707 12.53 L 16.707 12.53 Q 18.564 10.387 21.193 9.193 L 21.193 9.193 L 21.193 9.193 Q 23.823 8 27.05 8 L 27.05 8 L 27.05 8 Q 29.304 8 31.094 8.42 L 31.094 8.42 L 31.094 8.42 Q 32.884 8.84 34.475 9.591 L 34.475 9.591 L 33.193 13.127 L 33.193 13.127 Q 31.823 12.464 30.387 12.066 L 30.387 12.066 L 30.387 12.066 Q 28.95 11.669 27.006 11.669 L 27.006 11.669 L 27.006 11.669 Q 24.884 11.669 23.072 12.486 L 23.072 12.486 L 23.072 12.486 Q 21.26 13.304 19.934 14.895 L 19.934 14.895 L 19.934 14.895 Q 18.608 16.486 17.878 18.762 L 17.878 18.762 L 17.878 18.762 Q 17.149 21.039 17.149 23.956 Z " id="logo-letter" />
    </g>
  </svg>
);

const StyledLogo = styled(Logo)`
  width: var(--logo-width, 42px);
  height: var(--logo-height, 42px);
  path { transition: all var(--transition-default-timing, 450ms); }
  #logo-background { fill: var(--background-accent-primary, #333333); }
  #logo-letter { fill: var(--foreground-accent-primary, #ffffff); }
`;

export default StyledLogo;
