/**
 * Usage: This can be used to build endpoint url with dynamic id
 * const fullUrl = interpolate('/api/:apiKey/:id, { apiKey, id: userId });
 *
 * @param {String} str
 * @param {Object} params
 * @returns {String}
 */
export const interpolate = (str, params = {}) => {
  let formattedString = str;

  for (const [key, value] of Object.entries(params)) {
    const val = value || '';

    formattedString = formattedString.replace(
      new RegExp(':' + key, 'gi'),
      val.toString(),
    );
  }

  return formattedString;
};

/**
 * Usage: This can be used to get id from character url ("https://swapi.dev/api/people/1/",)
 * It will return 1
 *
 * @param {String} url
 * @returns {String}
 */
export const getIdFromCharacterUrl = url => {
  const id = url.split('/').slice(-2)[0];

  return id;
};
