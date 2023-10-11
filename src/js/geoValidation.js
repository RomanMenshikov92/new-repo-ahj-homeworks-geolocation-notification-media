export default function geoValidation(geo) {
  if (!geo) { return false; }

  /* регулярка для проверки введённой строки */
  const regexGeo = /^(\[(-?\d+\.\d+),\s?(-?\d+\.\d+)\]|(-?\d+\.\d+),\s?(-?\d+\.\d+))$/;

  /* регулярка для получения широты и долготы */
  const regexNumber = /(-?\d+\.\d+)/g;

  const resultGeo = regexGeo.test(geo); // проверка строки по регулярке

  /* если строка валидная */
  if (resultGeo) {
    /* получаем массив с широтой и долготой по регулярке и присваиваем их переменным */
    const geoArr = geo.match(regexNumber);
    const latitude = parseFloat(geoArr[0]);
    const longitude = parseFloat(geoArr[1]);

    /* дополнительная проверка долготы и широты */
    const condition = (latitude > -90 && latitude < 90) && (longitude > -180 && longitude < 180);

    /* если всё хорошо, возвращаем геолокации */
    if (condition) { return { latitude, longitude }; }

    return false; // если всё плохо, то ложь
  }

  return false;
}
