import dayjs from "dayjs";
import { schedulesDay } from "./load";

const periodMorning = document.getElementById("period-morning")
const periodAfternonn = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }) {
  try {
    // limpa a lista
    periodMorning.innerHTML = ""
    periodAfternonn.innerHTML = ""
    periodNight.innerHTML = ""

    // renderiza os agendamentos por periodo
    dailySchedules.forEach(( schedule ) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")
   
      // Adiciona o id de agendamento
      item.setAttribute("data-id", schedule.id)

      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("cancel-icon")
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "Cancelar")

      item.append(time, name, cancelIcon)

      const hour = dayjs(schedule.when).hour

      if (hour <= 12) {
        periodMorning.appendChild(item)
      } else if (hour > 12 && hour <= 18){
        periodAfternonn.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    })

  } catch (error) {
    console.log(error)
    alert("Não foi possivel exibir os agendamentos.")
  }
}