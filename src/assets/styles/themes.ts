import { DefaultTheme, NavigationTheme, Color } from 'styled-components';

const theme: DefaultTheme = {
  borderRadius: '5px',
  colors: {
    main: 'red',
    secondary: 'skyblue',
  },
};

const topNavTheme: NavigationTheme = {
  display: 'flex',
  background: '',
  padding: '1rem',
};

const Colors: Color = {
  color: ['red', 'blue', 'green'],
};

export { theme, topNavTheme };
