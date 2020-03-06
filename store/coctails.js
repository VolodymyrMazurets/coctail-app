export const state = () => ({})
export const actions = {
  async getRandomCoctail({ commit }) {
    try {
      return await this.$axios.$get(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php'
      )
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}
