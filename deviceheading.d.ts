declare module 'react-native-heading-sensor' {
  export const start: (
    threshold: number,
    callback: (heading: number) => void
  ) => Promise<boolean>;

  export const stop: () => void;
}
