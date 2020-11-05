function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let getDezDays = document.querySelector('#days');
for (index = 0; index < dezDaysList.length; index += 1) {
  let day = dezDaysList[index];

  let dayItem = document.createElement('li');
  if (day === 24 || day === 31) {
    dayItem.className = "day holiday";
    dayItem.innerHTML = day;
    getDezDays.appendChild(dayItem);
  } else if (day === 4 || day === 11 || day === 18) {
    dayItem.className = "day friday";
    dayItem.innerHTML = day;
    getDezDays.appendChild(dayItem);
  } else if(day === 25) {
    dayItem.className = "day holiday friday"
    dayItem.innerHTML = day;
    getDezDays.appendChild(dayItem);
  } else {
    dayItem.className = "day";
    dayItem.innerHTML = day;
    getDezDays.appendChild(dayItem);
  }
}

// Exercício 2
function createButtonHoliday(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let buttonHoliday = document.createElement('button');
  buttonHoliday.id = "btn-holiday";
  buttonHoliday.innerHTML = buttonName;
  buttonContainer.appendChild(buttonHoliday);
}
createButtonHoliday("Feriados");

// Exercício 3
function colorHoliday() {
  let buttonHoliday = document.querySelector('#btn-holiday');
  let holidays = document.querySelectorAll('.holiday');
  let originalColor = 'rgb(238,238,238)';
  let newColor = 'blue';

  buttonHoliday.addEventListener('click', function() {
    for (let i = 0; i < holidays.length; i += 1) {
      if (holidays[i].style.backgroundColor === newColor) {
        holidays[i].style.backgroundColor = originalColor;
      } else {
        holidays[i].style.backgroundColor = newColor;
      }
    }
  })
};
colorHoliday();

// Exercício 4
function createButtonFriday(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let buttonFriday = document.createElement('button');
  buttonFriday.id = "btn-friday";
  buttonFriday.innerHTML = buttonName;
  buttonContainer.appendChild(buttonFriday);
}
createButtonFriday("Sexta-feira");

// Exercício 5
function textFriday(sextas) {
  let buttonFriday = document.querySelector('#btn-friday');
  let fridays = document.querySelectorAll('.friday');
  let newText = "SEXTOU!!!";

  buttonFriday.addEventListener('click', function() {
    for (let i = 0; i < fridays.length; i += 1) {
      if (fridays[i].innerHTML !== newText) {
        fridays[i].innerHTML = newText;
      } else {
        fridays[i].innerHTML = sextas[i];
      }
    }
  })
};
let dezFridays = [4, 11, 18, 25];
textFriday(dezFridays);

// Exercício 6
function aumentaZoom() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = "40px";
    event.target.style.fontWeight = "500";
  })
}
function diminuiZoom() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200";
  })
}
aumentaZoom()
diminuiZoom()

// Exercício 7
