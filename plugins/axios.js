export default function({ $axios, redirect }) {
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
  $axios.setBaseURL('https://www.thecocktaildb.com/api/json/v1/1/')
}
