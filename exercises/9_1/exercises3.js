// A função getPlanet abaixo imprime o planeta Marte de forma síncrona.
// Modifique getPlanet, de forma que Marte seja impresso assincronamente, depois de 4 segundos.
const getPlanet = () => {
    const mars = {
        name: "Mars",
        distanceFromSun: {
            value: 227900000,
            measurementUnit: "kilometers",
        },
    };
    // código inicial
    // console.log("Returned planet: ", mars);
    // Resposta
    setTimeout(() => console.log("Returned planet: ", mars), 4000);
};

getPlanet(); // imprime Marte depois de 4 segundos

// Imprime:
// Returned planet:  {
//  name: 'Mars',
//  distanceFromSun: { value: 227900000, measurementUnit: 'kilometers' }
// }
