import  dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }) {
  try {

    // FAZ A REQUISIÇAO PARA API
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    // CONVERTE PARA JSON
    const data = await response.json() 

    // FILTRA OS AGENDAMENTOS PELO DIA SELECIONADO
    const dailySchedules = data.filter((schedules) => dayjs(date).isSame(schedules.when, "day"))

    return dailySchedules

  } catch (error) {
    console.log(error)
    alert("Não foi possivel buscar os agendamentos...")
  }
}