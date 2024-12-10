import { usePrevious } from "@evie-ui/hooks";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { Animated, Easing } from "react-native";
import { Text } from "../../components/text";
import { View } from "../../components/view";

type AnimatedNumberProps = React.ComponentProps<typeof Text> & {
  number: number;
};

const AnimatedView = Animated.createAnimatedComponent(View);

const NUMBERS = Array(10)
  .fill(null)
  .map((_, i) => i);

export const AnimatedNumber = ({
  number: givenAnimateToNumber,
  ...textProps
}: AnimatedNumberProps) => {
  const [height, setLayout] = useState(0);
  const animationRef = useRef<Animated.CompositeAnimation | null>(null);
  const animateToNumber = Math.abs(givenAnimateToNumber);
  const prevNumber = usePrevious(animateToNumber);
  const animateToNumberString = animateToNumber.toString();
  const prevNumberString = prevNumber.toString();
  const nextNumbersArr = useMemo(
    () => Array.from(animateToNumberString, Number),
    [animateToNumberString]
  );
  const prevNumbersArr = useMemo(
    () => Array.from(prevNumberString, Number),
    [prevNumberString]
  );

  const animations = useMemo(() => {
    if (height === 0) return [];

    return nextNumbersArr.map((__, index) => {
      const value = prevNumbersArr[index];
      if (typeof value !== "number") return new Animated.Value(0);

      const animationHeight = -1 * (height * value);
      return new Animated.Value(animationHeight);
    });
  }, [nextNumbersArr, height, prevNumbersArr]);

  useEffect(() => {
    if (height === 0) return;

    const compositions = animations.reduce<Animated.CompositeAnimation[]>(
      (acc, animation, index) => {
        const value = nextNumbersArr[index];
        if (typeof value === "number") {
          acc.push(
            Animated.timing(animation, {
              toValue: -1 * (height * value),
              duration: 500,
              useNativeDriver: true,
              easing: Easing.inOut(Easing.ease),
            })
          );
        }

        return acc;
      },
      []
    );

    animationRef.current = Animated.parallel(compositions);
    animationRef.current.start();

    return () => {
      animationRef.current?.stop();
    };
  }, [animations, height, nextNumbersArr]);

  return (
    <Fragment>
      {height !== 0 && (
        <View flexDirection="row" h={height} overflow="hidden">
          {givenAnimateToNumber < 0 && <Text {...textProps}>-</Text>}

          {nextNumbersArr.map((_, index) => {
            return (
              <AnimatedView
                key={index.toString()}
                // entering={FadeIn.duration(400)}
                // exiting={FadeOut.duration(400)}
              >
                <Animated.View
                  style={[{ transform: [{ translateY: animations[index]! }] }]}
                >
                  {NUMBERS.map((number, index) => (
                    <Text
                      key={index.toString()}
                      {...textProps}
                      textAlign="center"
                    >
                      {number}
                    </Text>
                  ))}
                </Animated.View>
              </AnimatedView>
            );
          })}
        </View>
      )}

      <View pointerEvents="none" position="absolute" opacity={0}>
        <Text
          {...textProps}
          numberOfLines={1}
          onLayout={(event) => setLayout(event.nativeEvent.layout.height)}
        >
          {givenAnimateToNumber}
        </Text>
      </View>
    </Fragment>
  );
};
