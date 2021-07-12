import { DefaultTheme, NavigationTheme } from 'styled-components';

const mainStyle: NavigationTheme = {
  display: 'flex',
  background: '',
  padding: '1rem',
};

const buttonStyle: DefaultTheme = {
  borderRadius: '5px',
  colors: {
    main: 'cyan',
    secondary: 'magenta',
  },
};

export { buttonStyle };
