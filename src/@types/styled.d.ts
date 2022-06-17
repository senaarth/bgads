import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bg: string;
    bgLight: string;
    textHighlight: string;
    textPrimary: string;
    textSecondary: string;
  }
}
