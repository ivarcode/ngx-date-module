import {
    IHolidayDefinition,
    Months,
    DaysOfTheWeek,
    HowManyWeeks
} from './holiday/holiday.library.definitions';
import {
    anyHolidayResolver,
    lastDayOfTheWeekInTheMonthResolver
} from './holiday/holiday-resolvers.library';
import { IWorkWeekDefinition } from './workweek/workweek.library';

export interface IDateModuleConfiguration {
    defaultFormatString?: string;
    workWeek?: IWorkWeekDefinition[];
    holidays?: IHolidayDefinition[]; // change to expect Date type
}

export const christmasDayDefinition: IHolidayDefinition = {
    description: 'Christmas Day',
    month: Months.December,
    day: 25
};
export const laborDayDefinintion: IHolidayDefinition = {
    description: 'Labor Day',
    month: Months.September,
    dayResolver: {
        resolver: anyHolidayResolver,
        dayOfTheWeek: DaysOfTheWeek.Monday,
        howManyWeeks: HowManyWeeks.first
    },
    usesObservanceRules: true
};
export const newYearsDayDefinition: IHolidayDefinition = {
    description: 'New Years Day',
    month: Months.January,
    day: 1
};
export const martinLutherKingJrDayDefinition: IHolidayDefinition = {
    description: 'Martin Luther King Jr. Day',
    month: Months.January,
    dayResolver: {
        resolver: anyHolidayResolver,
        dayOfTheWeek: DaysOfTheWeek.Monday,
        howManyWeeks: HowManyWeeks.third
    },
    usesObservanceRules: true
};
export const washingtonsBirthdayDefinition: IHolidayDefinition = {
    description: 'George Washingtons Birthday',
    month: Months.February,
    dayResolver: {
        resolver: anyHolidayResolver,
        dayOfTheWeek: DaysOfTheWeek.Monday,
        howManyWeeks: HowManyWeeks.third
    },
    usesObservanceRules: true
};
export const independenceDayDefinition: IHolidayDefinition = {
    description: 'Independence Day',
    month: Months.July,
    day: 4
};
export const columbusDayDefinition: IHolidayDefinition = {
    description: 'Columbus Day',
    month: Months.October,
    dayResolver: {
        resolver: anyHolidayResolver,
        dayOfTheWeek: DaysOfTheWeek.Monday,
        howManyWeeks: HowManyWeeks.second
    },
    usesObservanceRules: true
};
export const veteransDayDefinition: IHolidayDefinition = {
    description: 'Veterans Day',
    month: Months.November,
    day: 11
};
export const thanksgivingDayDefinition: IHolidayDefinition = {
    description: 'Thanksgiving Day',
    month: Months.November,
    dayResolver: {
        resolver: anyHolidayResolver,
        dayOfTheWeek: DaysOfTheWeek.Thursday,
        howManyWeeks: HowManyWeeks.fourth
    }
};
export const memorialDayDefinition: IHolidayDefinition = {
    description: 'Memorial Day',
    month: Months.May,
    dayResolver: {
        resolver: lastDayOfTheWeekInTheMonthResolver,
        dayOfTheWeek: DaysOfTheWeek.Monday
    },
    usesObservanceRules: true
};

export const defaultDateModuleConfig: IDateModuleConfiguration = {
    defaultFormatString: 'dddd, MMMM Do YYYY, h:mm:ss a',
    workWeek: [
        { start: null, end: null },
        { start: 9, end: 17 },
        { start: 9, end: 17 },
        { start: 9, end: 17 },
        { start: 9, end: 17 },
        { start: 9, end: 17 },
        { start: null, end: null }
    ],
    holidays: [
        christmasDayDefinition,
        laborDayDefinintion,
        newYearsDayDefinition,
        martinLutherKingJrDayDefinition,
        washingtonsBirthdayDefinition,
        independenceDayDefinition,
        columbusDayDefinition,
        veteransDayDefinition,
        thanksgivingDayDefinition,
        memorialDayDefinition
        // {
        //     desc: 'Memorial Day', // changes from year to year
        //     month: 4,
        //     day: 27
        // },
    ]
};
