const inquirer = require('inquirer');
const calcBmi = require('bmi-calc');

async function mainMenu() {
  let exit = false;

  while (!exit) {
    const { option } = await inquirer.prompt([{
      type: 'list',
      name: 'option',
      message: 'Seleccione una opción:',
      choices: [
        '1. Calcular (métrico)',
        '2. Calcular (imperial)',
        '3. Ver información sobre el IMC',
        '4. Como utilizar la calculadora',
        '5. Salir'
      ]
    }]);

    switch (option[0]) {
      case '1':
        await calcularMetric();
        break;
      case '2':
        await calcularImperial();
        break;
      case '3':
        mostrarInfo();
        break;
      case '4':
        mostrarEjemplos();
        break;
      case '5':
        exit = true;
        console.log('Gracias por usar la calculadora');
        break;
    }
  }
}

async function calcularMetric() {
  const { weight, height } = await inquirer.prompt([
    {
      type: 'input',
      name: 'weight',
      message: 'Ingrese su peso en kilogramos:',
      validate: value => !isNaN(value) && value > 0
    },
    {
      type: 'input',
      name: 'height',
      message: 'Ingrese su estatura en metros:',
      validate: value => !isNaN(value) && value > 0
    }
  ]);

  const result = calcBmi(Number(weight), Number(height));
  console.log(`\n Resultado: IMC = ${result.value.toFixed(2)} → ${result.name}\n`);
}

async function calcularImperial() {
  const { weight, height } = await inquirer.prompt([
    {
      type: 'input',
      name: 'weight',
      message: 'Ingrese su peso en libras:',
      validate: value => !isNaN(value) && value > 0
    },
    {
      type: 'input',
      name: 'height',
      message: 'Ingrese su estatura en pulgadas:',
      validate: value => !isNaN(value) && value > 0
    }
  ]);

  const result = calcBmi(Number(weight), Number(height), true);
  console.log(`\n Resultado: IMC = ${result.value.toFixed(2)} → ${result.name}\n`);
}

function mostrarInfo() {
  console.log(`
El índice de masa corporal (IMC) se calcula dividiendo el peso por la estatura al cuadrado.
- < 16: Muy severamente bajo de peso
- 16 - 16.99: Severamente bajo de peso
- 17 - 18.49: Bajo de peso
- 18.5 - 24.99: Normal
- 25 - 29.99: Sobrepeso
- 30 - 34.99: Obesidad Moderada
- 35 - 39.99: Obesidad Severa
- >= 40: Obesidad Muy Severa

  `);
}

function mostrarEjemplos() {
  console.log(`
    Para hacer uso de la calculadora debe registrar los datos de la siguiente manera
• Peso: en kilogramos (kg) o libras (lbs) 
por ejemplo 69 kg o 154 lbs
• Estatura: en metros (m) o pulgadas (in) 
por ejemplo 1.62 m o 72 in

    Ejemplo de uso:
    1. Calcular IMC (métrico)
       - Peso: 70 kg
       - Estatura: 1.75 m
       Resultado: IMC = 22.86 → Normal

    2. Calcular IMC (imperial)
       - Peso: 154 lbs
       - Estatura: 68 in
       Resultado: IMC = 23.40 → Normal
  `);
}

mainMenu();