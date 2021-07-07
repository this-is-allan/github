import { Text as StyledText } from './styles';

export type TypographyPropsType = {
  as?: any;
  style?: any;
  text?: string;
  heading?: boolean;
  className?: string;
  children?: any | never;
  level?: 1 | 2 | 3 | 4 | 5;
  dangerouslySetInnerHTML?: any;
  weight?: 500 | 600 | 700 | 'normal' | 'bold';
  color?: string;
};

const Title = ({
  text,
  children,
  color,
  level = 1,
  ...rest
}: TypographyPropsType) => (
  <StyledText {...rest} heading level={level} color={color}>
    {children || text}
  </StyledText>
);

const SubTitle = ({
  text,
  children,
  color,
  level = 3,
  ...rest
}: TypographyPropsType) => (
  <StyledText {...rest} heading level={level} color={color}>
    {children || text}
  </StyledText>
);

const Text = ({
  text,
  children,
  color,
  as = 'p',
  level = 4,
  ...rest
}: TypographyPropsType) => (
  <StyledText {...rest} as={as} level={level} color={color}>
    {children || text}
  </StyledText>
);

export { Title, SubTitle, Text };
