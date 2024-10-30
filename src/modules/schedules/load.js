import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "../schedules/show.js"
import { hoursLoad } from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay() {

  const date = selectedDate.value

  // BUSCA O AGENDAMENTO NA API
  const dailySchedules = await scheduleFetchByDay({ date })

  // EXIBE OS AGENDAMENTOS
  schedulesShow({ dailySchedules })


  hoursLoad({ date, dailySchedules })

}