import type React from "react";
import { useCallback, useContext, useMemo, useRef } from "react";

import { useEffectOnce } from "@evie-ui/hooks";
import type { DayMonthYearDate } from "@evie-ui/types";
import { ArrayHelpers } from "@evie-ui/utils/array";
import { hexToRgbaString } from "@evie-ui/utils/color";
import { DateHelpers, DayMonthYear } from "@evie-ui/utils/date";
import { NumberHelpers } from "@evie-ui/utils/number";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableWithoutFeedback } from "react-native";
import { useTheme } from "../../theme";
import { ScrollView } from "../scrollview";
import { Text } from "../text";
import { View } from "../view";
import { DatePickerContext } from "./context";

const MARK_HEIGHT = 44;
const CONTAINER_HEIGHT = MARK_HEIGHT * 4;

type DateBlockProps = { type: keyof DayMonthYearDate };

export const DatePickerItem = ({ type }: DateBlockProps) => {
  const { theme } = useTheme();
  const scrollRef = useRef<React.ComponentRef<typeof ScrollView>>(null);

  const {
    date = DateHelpers.DayMonthYear.today().splitted,
    onDateChange,
    end = DateHelpers.DayMonthYear.today().splitted,
    start = DayMonthYear(end).subtract.years(50).splitted,
  } = useContext(DatePickerContext);

  const digits = useMemo<Array<{ value: number; label?: string }>>(() => {
    switch (type) {
      case "day":
        return ArrayHelpers.createPlaceholder(DateHelpers.getMonthsDaysNumber(date.year)[date.month - 1]).map(
          (_, index) => ({ value: index + 1 }),
        );

      case "month":
        return DateHelpers.getMonthsNames().map((monthName, index) => ({ value: index + 1, label: monthName }));

      case "year":
        return ArrayHelpers.createPlaceholder(end.year - start.year).map((v) => ({ value: start.year + v }));

      default:
        return [];
    }
  }, [start, end, type, date]);

  const fadeFilled: string = hexToRgbaString(theme.getColor("background"), 0.75);
  const fadeTransparent: string = hexToRgbaString(theme.getColor("background"), 0);

  const snapScrollToIndex = useCallback((index: number) => {
    const y = MARK_HEIGHT * index;
    scrollRef?.current?.scrollTo({ y, animated: true });
    return y;
  }, []);

  useEffectOnce(() => {
    const d = digits.findIndex(({ value }) => value === date[type]);
    snapScrollToIndex(d);
  });

  const handleSelectItem = useCallback(
    (scrollY: number) => {
      const digit = Math.round(scrollY / MARK_HEIGHT);
      const { day, month, year } = date;

      switch (type) {
        case "day": {
          const day = digit + 1;
          onDateChange({ year, month, day });
          break;
        }

        case "month": {
          const month = digit + 1;
          onDateChange({
            year,
            month,
            day: NumberHelpers.clamp(day, { max: DateHelpers.getMonthsDaysNumber(date.year)[month] }),
          });
          break;
        }

        case "year": {
          const year = digits[digit].value;
          onDateChange({
            year,
            month,
            day: NumberHelpers.clamp(day, { max: DateHelpers.getMonthsDaysNumber(year)[date.month - 1] }),
          });
          break;
        }
      }
    },
    [date, digits, type, onDateChange],
  );

  return (
    <View flex={type === "month" ? 2 : 1} alignItems="center" justifyContent="center" h={CONTAINER_HEIGHT}>
      <View
        mx="xs"
        left={0}
        right={0}
        rounded="full"
        h={MARK_HEIGHT}
        bgColor="surface"
        position="absolute"
        top={(CONTAINER_HEIGHT - MARK_HEIGHT) / 2}
      />

      <ScrollView
        ref={scrollRef}
        overScrollMode="never"
        decelerationRate="fast"
        scrollEventThrottle={0}
        snapToOffsets={digits.map((_, i) => i * MARK_HEIGHT)}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={({ nativeEvent }) => handleSelectItem(nativeEvent.contentOffset.y)}
      >
        {digits.map(({ value, label }, index, arr) => {
          return (
            <TouchableWithoutFeedback
              key={value}
              onPress={() => {
                const y = snapScrollToIndex(index);
                handleSelectItem(y);
              }}
            >
              <Text
                h={MARK_HEIGHT}
                fontSize="button"
                textAlign="center"
                fontWeight="semibold"
                mt={index === 0 ? (CONTAINER_HEIGHT - MARK_HEIGHT) / 2 : 0}
                mb={index === arr.length - 1 ? (CONTAINER_HEIGHT - MARK_HEIGHT) / 2 : 0}
              >
                {label ?? value}
              </Text>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>

      <LinearGradient
        style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: CONTAINER_HEIGHT / 4 }}
        colors={[fadeTransparent, fadeFilled]}
        pointerEvents={"none"}
      />
      <LinearGradient
        style={{ position: "absolute", left: 0, right: 0, top: 0, height: CONTAINER_HEIGHT / 4 }}
        colors={[fadeFilled, fadeTransparent]}
        pointerEvents={"none"}
      />
    </View>
  );
};
