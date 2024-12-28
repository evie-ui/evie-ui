import { Fragment, useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { Image } from "../../image";
import { ProgressCircle } from "../../progress-circle";
import { View } from "../../view";
import { AvatarContext } from "../_context";
import type { AvatarImageProps } from "../types";

export const AvatarImage = (props: AvatarImageProps) => {
  const { currentState, setCurrentState } = useContext(AvatarContext);
  const [isLoading, setIsLoading] = useState(false);

  if (currentState === "fallback") return null;

  return (
    <Fragment>
      <Image
        {...props}
        w="100%"
        h="100%"
        onLoadStart={() => {
          setIsLoading(true);
          props.onLoadStart?.();
        }}
        onError={(event) => {
          setCurrentState("fallback");
          props.onError?.(event);
        }}
        onLoad={(event) => {
          setCurrentState("image");
          props.onLoad?.(event);
        }}
        onLoadEnd={() => {
          setIsLoading(false);
          props.onLoadEnd?.();
        }}
      />

      {isLoading && (
        <View
          {...StyleSheet.absoluteFillObject}
          justifyContent="center"
          alignItems="center"
        >
          <ProgressCircle.Root size={50} indeterminate color="transparent">
            <ProgressCircle.Indicator color="primary" />
          </ProgressCircle.Root>
        </View>
      )}
    </Fragment>
  );
};
