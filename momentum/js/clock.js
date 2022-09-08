 const clock = document.querySelector("h2#clock");
 const date = new Date();
 

function getClock() {
  const date = new Date();
  const days = String(date.getDay())
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  const month = String(date.getMonth())
  const day = String(date.getDate())


  clock.innerText = `${hour}:${minutes}`
}
function changeWeeks (event) {
  let weeks = ['일', '월', '화', '수', '목', '금', '토']
  let dayOfWeek = weeks[event]

  return dayOfWeek
}

function changeMonth (event) {
  let Month = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월']
  let OfMonth = Month[event]

  return OfMonth
}

getClock()
setInterval(getClock, 1000 )