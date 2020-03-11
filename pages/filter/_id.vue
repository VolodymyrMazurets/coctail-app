<template>
  <div class="coctail">
    <h2 class="coctail__name">{{ coctail.strDrink }}</h2>
    <div
      v-loading="loading"
      class="coctail__card"
      element-loading-text="Loading..."
      element-loading-spinner="el-icon-loading"
    >
      <div class="coctail__img-wrapper">
        <img :src="coctail.strDrinkThumb" alt="" class="coctail__img" />
      </div>
      <div class="coctail__info">
        <h4 class="coctail__subtitle">
          Recipe <IconRecipe class="coctail__icon" />
        </h4>
        <el-table :data="ingredients">
          <el-table-column prop="name" label="Ingredient name">
            <template slot-scope="scope">
              <el-link
                :href="`https://www.google.com.ua/search?q=${scope.row.name}`"
                type="primary"
                target="_blank"
                >{{ scope.row.name }}</el-link
              >
            </template>
          </el-table-column>
          <el-table-column prop="value" label="Amount"> </el-table-column>
        </el-table>
      </div>
    </div>
    <h4 class="coctail__subtitle">
      Instruction <IconBook class="coctail__icon" />
    </h4>
    <p>{{ coctail.strInstructions }}</p>
  </div>
</template>
<script>
import { transformIngridients } from '../../common/helpers'
import IconBook from '../../components/icons/svg/book'
import IconRecipe from '../../components/icons/svg/cart'
export default {
  name: 'CoctailById',
  components: {
    IconBook,
    IconRecipe
  },
  data() {
    return {
      coctail: [],
      ingredients: [],
      loading: true
    }
  },
  created() {
    this.getCoctailById()
  },
  methods: {
    async getCoctailById() {
      try {
        const { drinks } = await this.$store.dispatch(
          'coctails/getCoctailById',
          this.$route.params.id
        )
        this.coctail = drinks[0]
        this.coctail = drinks[0]
        this.ingredients = transformIngridients(
          drinks[0],
          'strIngredient',
          'strMeasure'
        )
        this.loading = false
      } catch (e) {
        this.$message.success(e)
        throw e
      }
    }
  }
}
</script>
<style lang="scss">
.coctail {
  &__card {
    width: 100%;
    display: flex;
    align-items: center;
  }
  &__img-wrapper {
    flex-basis: 40%;
    max-width: 40%;
    margin-right: 32px;
  }
  &__img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  &__icon {
    width: 24px;
    height: 24px;
    margin-left: 16px;
  }
  &__subtitle {
    display: flex;
    align-items: center;
    font-size: 20px;
    text-align: center;
  }
}
</style>
