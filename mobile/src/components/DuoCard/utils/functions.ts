import { IWeekDays } from "../../../models/IAd";

export function getNumberOfDaysTrue(weekDays: IWeekDays | undefined): number {
    let count = 0;
    const week = weekDays

    if (week?.mon)
        count++
    if (week?.tue)
        count++
    if (week?.wed)
        count++
    if (week?.thu)
        count++
    if (week?.fri)
        count++
    if (week?.sat)
        count++
    if (week?.sun)
        count++

    return count
}