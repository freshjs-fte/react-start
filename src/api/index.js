import queryString from "query-string";

const randomUserAPI = "https://randomuser.me/api/";

/**
 *
 * @param {Object} options
 * @param {number} [options.results]
 * @param {string} [options.seed]
 * @param {number} [options.page]
 * @returns {Promise} users
 */
export function getRandomUser(options) {
  /* console.log(
    queryString.stringify(options, {
      arrayFormat: "comma",
    })
  ); */

  return fetch(
    `${randomUserAPI}?${queryString.stringify(options, {
      arrayFormat: "comma",
    })}`
  ).then((response) => {
    return response.json();
  });
}
