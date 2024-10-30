import { scheduleNew } from "../../services/schedule-new"
import { schedulesDay } from "../schedules/load.js"
import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

form.onsubmit = async (e) => {
  event.preventDefault()

  try {

    const name = clientName.value.trim()

    if (!name) {
      alert("Favor digitar seu nome para agendamento")
    }

    const hourSelected = document.querySelector(".hour-selected")

    if (!hourSelected) {
      return alert("Selecione um horário")
    }

    const [hour] = hourSelected.innerText.split(":")

    const when = dayjs(selectedDate.value).add(hour, "hour")

    const id = new Date().getTime()

    await scheduleNew({
      id,
      name,
      when,
    })

    await schedulesDay()
    
    clientName.value = ""

  } catch (error) {
    alert("Não foi possivel agendar seu horário")
    console.log(error)
  }
}

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday
selectedDate.min = inputToday