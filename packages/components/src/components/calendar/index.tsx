import { DateHelpers, MonthYear } from "@evie-ui/utils/date";
import { Grid } from "../../_experimental";
import { IconButton } from "../icon-button";
import { Text } from "../text";
import { View } from "../view";
import type { CalendarProps } from "./types";

export const Calendar: React.FC<CalendarProps> = (props) => {
  const { visibleDate, selectedDate, onChangeSelectedDate, fillEmptySpaces, maxDate, minDate } = props;
  const weeks = DateHelpers.MonthYear.filledWeeks(visibleDate);
  const daysOfWeek = DateHelpers.getDaysOfWeek();
  const today = DateHelpers.DayMonthYear.today();

  return (
    <View gap="md">
      <Grid.Row>
        {daysOfWeek.map((weekDay) => (
          <Grid.Column key={weekDay}>
            <Text key={weekDay} fontSize="caption" fontWeight="bold" textAlign="center">
              {weekDay}
            </Text>
          </Grid.Column>
        ))}
      </Grid.Row>

      <View>
        {weeks.map((week, weekIndex) => {
          return (
            <Grid.Row key={`week-${weekIndex.toString()}`}>
              {week.map((day, dayIndex) => {
                const monthYear = MonthYear(day.convert.toMonthYear());
                const isPreviousMonth = monthYear.is.before(visibleDate);
                const isNextMonth = monthYear.is.after(visibleDate);
                const isToday = day.is.equals(today);
                const isSelected = selectedDate?.is.equals(day);

                if (!fillEmptySpaces) {
                  if (isPreviousMonth || isNextMonth) return <View key={`day-${dayIndex.toString()}`} flex={1} />;
                }

                const isBeforeMinDate = minDate ? day.is.before(minDate) : false;
                const isAfterMaxDate = maxDate ? day.is.after(maxDate) : false;

                return (
                  <Grid.Column key={`day-${dayIndex.toString()}`} justifyContent="center" alignItems="center">
                    <IconButton
                      size={48}
                      rounded="sm"
                      onPress={() => onChangeSelectedDate?.(day)}
                      disabled={isPreviousMonth || isNextMonth || isBeforeMinDate || isAfterMaxDate}
                      bgColor={isSelected ? "surface" : "transparent"}
                    >
                      <Text textAlign="center">{day.splitted.day}</Text>
                    </IconButton>

                    <View
                      left={0}
                      right={0}
                      bottom={4}
                      position="absolute"
                      flexDirection="row"
                      pointerEvents="none"
                      justifyContent="center"
                    >
                      {isToday && <View h={3} rounded="full" aspectRatio={5} bgColor="primary" />}
                    </View>
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          );
        })}
      </View>
    </View>
  );
};
