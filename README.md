# Calculadora de Índice de Masa Corporal (IMC)

## Descripción del Problema
El Índice de Masa Corporal (IMC) es una medida utilizada para evaluar si una persona tiene un peso saludable en relación con su estatura. Esta herramienta es útil para identificar posibles problemas de salud relacionados con el peso, como el sobrepeso o la obesidad.

Este programa de consola permite calcular el IMC de una persona utilizando unidades métricas o imperiales, proporcionando además una categoría descriptiva del resultado.

## Librería Utilizada
- **Nombre:** `bmi-calc`
- **Descripción:** Una librería de Node.js para calcular el Índice de Masa Corporal (IMC) en unidades métricas o imperiales.
- **Link oficial:** [bmi-calc en npm](https://www.npmjs.com/package/bmi-calc)

## Implementación
El programa utiliza la librería `bmi-calc` para realizar los cálculos del IMC. Se implementó un menú interactivo con la librería `inquirer` que permite al usuario:
1. Calcular el IMC en unidades métricas.
2. Calcular el IMC en unidades imperiales.
3. Ver información sobre las categorías del IMC.
4. Consultar ejemplos de uso de la calculadora.
5. Salir del programa.

El cálculo del IMC se realiza utilizando la fórmula:
- **Métrico:** `IMC = peso (kg) / estatura² (m²)`
- **Imperial:** `IMC = (peso (lbs) / estatura² (in²)) * 703`

## Instrucciones de Instalación y Uso
1. **Clonar el repositorio**

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar el programa:**
   ```bash
   node main.js
   ```

4. **Navegar por el menú interactivo:**
   - Seleccione una opción del menú utilizando las flechas del teclado y presione `Enter`.

## Ejemplo de Uso
### Calcular IMC (Métrico)
- **Peso:** 70 kg
- **Estatura:** 1.75 m
- **Resultado:** IMC = 22.86 → Normal

### Calcular IMC (Imperial)
- **Peso:** 154 lbs
- **Estatura:** 68 in
- **Resultado:** IMC = 23.40 → Normal

## Video 
[Presentación](https://youtu.be/cJLfIDcP56g)