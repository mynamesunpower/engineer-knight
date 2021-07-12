// import original module declarations
import 'styled-components';

// extend
declare module 'styled-components' {
  export interface NavigationTheme {
    display: string;
    background: string;
    padding: string;
  }

  export interface ButtonTheme {
    border: string;
    borderRadius: string;
    fontSize: string;
    fontWeight: string;
    padding: string;
    color: string;
    outline: string;
    cursor: string;
  }

  export interface Color {
    color: string[];
  }
}
