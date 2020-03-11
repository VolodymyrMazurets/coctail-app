export const state = () => ({})
export const actions = {
  async getRandomCoctail({ commit }) {
    try {
      return await this.$axios.$get('random.php/')
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async getCoctailByName({ commit }, searchStr = '') {
    try {
      return await this.$axios.$get('search.php/', {
        params: {
          s: searchStr
        }
      })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async getCoctailById({ commit }, coctailId) {
    try {
      return await this.$axios.$get('lookup.php/', {
        params: {
          i: coctailId
        }
      })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async getIngredientsList({ commit }) {
    try {
      return await this.$axios.$get('list.php/', {
        params: {
          i: 'list'
        }
      })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async getFilteredListByIngredient({ commit }, ingredient) {
    try {
      return await this.$axios.$get('filter.php/', {
        params: {
          i: ingredient
        }
      })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  }
}
