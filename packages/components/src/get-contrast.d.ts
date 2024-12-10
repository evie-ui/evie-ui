declare module "get-contrast" {
  type Options = {
    ignoreAlpha: boolean;
  };

  type Ratio = (param1: string, param2: string, options?: Options) => number;
  type Score = (param1: string, param2: string, options?: Options) => string;
  type IsAccessible = (param1: string, param2: string, options?: Options) => boolean;

  type GetContrast = {
    ratio: Ratio;
    score: Score;
    isAccessible: IsAccessible;
  };

  const getContrast: GetContrast;

  export default getContrast;
}
