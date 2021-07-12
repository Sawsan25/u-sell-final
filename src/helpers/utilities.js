
const PUBLIC_BASE_URL = "/";

export const redirect = (history, param) => {
     history.push(`${PUBLIC_BASE_URL}${param}`)
 }