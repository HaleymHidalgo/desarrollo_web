import { robots } from './robots.js';

/*

console.log(robots[0].series);
console.log(robots[0].id);
console.log(robots[0].name);

const { series, id, name } = robots[0];

console.log("-------------------");
console.log(`La serie es: ${series}`);
console.log(`El ID es: ${id}`);
console.log(`El nombre es: ${name}`);

/* backtick `` */

/* ---------------------------- .find --------------------------- */
console.log('-------------------------------------');
/* Declaramos una arrow function */
const getRobotById = (idValue) => {
    return robots.find((robot) => {
        return robot.id === idValue;
    })
}
console.log(getRobotById('005'));

/* -------------------------- .filter ---------------------------- */
console.log('-------------------------------------');
const getRobotBySeries = (series=5) => {
    return robots.filter((robot) => {
        return robot.series === series;
    })
}

console.table(getRobotBySeries())

/* --------------------------- .map -------------------------- */





/* ----------------------------------------------------------- */
const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', () => { 
    let idValue = document.getElementById('txtID').value;
    let robot = getRobotById(idValue);

    /* Creo la fila con los datos */
    let fila = document.createElement('tr');
    
    /* Creo un Dato de la Fila */
    let tdSeries = document.createElement('td');
    tdSeries.textContent = robot.series;
    fila.appendChild(tdSeries);

    /* Creo un Dato de la Fila */
    let tdId = document.createElement('td');
    tdId.textContent = robot.id;
    fila.appendChild(tdId);

    /* Creo un Dato de la Fila */
    let tdName = document.createElement('td');
    tdName.textContent = robot.name;
    fila.appendChild(tdName);

    /* Creo un Dato de la Fila + foto */
    let tdAvatar = document.createElement('td');
    let imgAvatar = document.createElement('img');
    imgAvatar.setAttribute('src', robot.avatar);
    tdAvatar.appendChild(imgAvatar);
    fila.appendChild(tdAvatar);

    /* Accedo y añado datos a la tabla */
    let tbRobot = document.getElementById('tableRobotsBody');
    tbRobot.appendChild(fila);
})