export const state = () => ({})
export const actions = {
  async getRandomCoctail({ commit }) {
    try {
      return await this.$axios.$get(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php/'
      )
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async getCoctailByName({ commit }, searchStr = '') {
    try {
      return await this.$axios.$get(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php/',
        {
          params: {
            s: searchStr
          }
        }
      )
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async getCoctailById({ commit }, coctailId) {
    try {
      return await this.$axios.$get(
        'https://www.thecocktaildb.com/api/json/v1/1/lookup.php/',
        {
          params: {
            i: coctailId
          }
        }
      )
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}
