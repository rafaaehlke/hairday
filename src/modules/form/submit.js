import dayjs from "dayjs"
const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

form.onsubmit = (e) => {
  event.preventDefault()

  console.log("enviado")
}

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday
selectedDate.min = inputToday