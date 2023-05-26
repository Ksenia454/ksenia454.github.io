
function getDayInfo(dateStr) {
    
    const date = new Date(dateStr);
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    
    const dayOfWeek = daysOfWeek[date.getDay()];
    const weekNumber = Math.floor((date.getDate() - date.getDay() + 12) / 7);
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const formattedDate = `${dayOfWeek}, ${weekNumber} неделя ${month} ${year} года`;
    
   return formattedDate;
  }
  
  

  var h3Elements = document.querySelectorAll("h3"); 
for(var i = 0; i < h3Elements.length; i++) { 
    h3Elements[i].innerHTML += getDayInfo("05.05.2023"); 
}