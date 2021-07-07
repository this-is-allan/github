import styled from 'styled-components';

import type { TypographyPropsType } from './index';

const fontSizeInPX = (size: number) => `${fontSizes[size]}px`;

export const fontSizes = [26, 24, 18, 16, 14];

export const Text = styled.div.attrs(
  ({ as, level = 2, heading }: TypographyPropsType) => ({
    level,
    role: heading && 'heading',
    'aria-level': heading && level,
    as: as || (heading && `h${level}`),
  })
)<TypographyPropsType>`
  color: ${(props) => props.color || props.theme.font?.color || '#030a12'};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ level = 2 }) => fontSizeInPX(level - 1)};
`;
