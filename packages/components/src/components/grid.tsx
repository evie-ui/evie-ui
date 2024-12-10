import { View } from "./view";

const Root = (props: React.ComponentProps<typeof View>) => {
  return <View gap="sm" {...props} flexDirection="column" />;
};

const Row = (props: React.ComponentProps<typeof View>) => {
  return <View gap="sm" {...props} flexDirection="row" />;
};

const Column = (props: React.ComponentProps<typeof View>) => {
  return <View flex={1} {...props} flexDirection="column" />;
};

export const Grid = { Root, Row, Column };
