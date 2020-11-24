const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionaTurno = (obj, key, value) => {
  obj[key] = value;
}
adicionaTurno(lesson2, 'turno', 'manhã');
console.log(lesson2);

const listaChaves = (obj) => Object.keys(obj);
console.log(listaChaves(lesson1));

const tamanhoObjeto = (obj) => Object.keys(obj).length;
console.log(tamanhoObjeto(lesson1));

const listaValores = (obj) => Object.values(obj);
console.log(listaValores(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

const totalEstudantes = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (i in array) {
    total += obj[array[i]].numeroEstudantes;
  }
  return total;
}
console.log(totalEstudantes(allLessons));

const valorChave = (obj, number) => Object.values(obj)[number];
console.log(valorChave(lesson1, 0));

const verificaPar = (obj, key, value) => {
  const array = Object.entries(obj);
  let igual = false;
  for (let i in array) {
    if (array[i][0] === key && array[i][1] === value) {
      igual = true;
    }
  }
  return igual;
}
console.log(verificaPar(lesson3, 'turno', 'noite'));
console.log(verificaPar(lesson3, 'materia', 'Maria Clara'));