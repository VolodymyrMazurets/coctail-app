export default function({ $axios }) {
  $axios.setBaseURL(
    'https://cors-anywhere.herokuapp.com/https://www.thecocktaildb.com/api/json/v1/1/'
  )
}
