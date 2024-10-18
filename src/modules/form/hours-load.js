import { openingHours } from "../../utils/opening-hours.js"
import dayjs from "dayjs"

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {

    const [scheduleHour] = hour.split(":")

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    return ({
      hour,
      available: !isHourPast
    })
  })
}