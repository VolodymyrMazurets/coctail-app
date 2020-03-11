<template>
  <div class="ingredients">
    <el-input
      v-if="ingredientsView"
      v-model="searchStr"
      placeholder="Please write ingredient name"
      class="ingredients__input"
    ></el-input>
    <el-row :gutter="20" v-if="ingredientsView">
      <el-col
        :span="4"
        v-for="item in pageData"
        :key="item"
        class="ingredients__col"
      >
        <div
          @click="getFilteredListByIngredient(item)"
          class="ingredients__card"
        >
          <h2 class="ingredients__name">{{ item }}</h2>
          <img
            :src="
              `https://www.thecocktaildb.com/images/ingredients/${item}-Medium.png`
            "
            alt="ingredient"
          />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" v-else>
      <el-col
        :span="4"
        v-for="item in coctails"
        :key="item.idDrink"
        class="ingredients__col"
      >
        <div
          @click="$router.push(`/filter/${item.idDrink}`)"
          class="ingredients__card"
        >
          <h2 class="ingredients__name">{{ item.strDrink }}</h2>
          <img :src="item.strDrinkThumb" alt="" class="ingrediaents__loading" />
        </div>
      </el-col>
    </el-row>
    <el-pagination
      v-if="ingredientsView"
      :page-count="Math.floor(ingredients.length / itemPerPage)"
      @prev-click="--currentPage"
      @next-click="++currentPage"
      @current-change="handleChange"
      layout="prev, pager, next"
      background
      class="ingredients__pagination"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: 'Ingredients',
  data() {
    return {
      itemPerPage: 12,
      currentPage: 1,
      searchStr: '',
      ingredientsView: true,
      coctails: []
    }
  },
  computed: {
    pageData() {
      const start =
        this.currentPage === 1 ? 0 : this.currentPage * this.itemPerPage
      const end = start + this.itemPerPage
      return this.filteredData.slice(start, end)
    },
    filteredData() {
      return this.ingredients.filter((i) =>
        i.toLowerCase().includes(this.searchStr.toLowerCase())
      )
    }
  },
  async asyncData({ store }) {
    const { drinks } = await store.dispatch('coctails/getIngredientsList')
    const ingredients = drinks.map((e) => e.strIngredient1)
    return { ingredients }
  },
  methods: {
    handleChange(e) {
      this.currentPage = e
    },
    async getFilteredListByIngredient(itemName) {
      const { drinks } = await this.$store.dispatch(
        'coctails/getFilteredListByIngredient',
        itemName
      )
      this.coctails = drinks
      this.ingredientsView = false
    }
  }
}
</script>
<style lang="scss">
.ingredients {
  text-align: center;
  &__col {
    margin-bottom: 20px;
  }
  &__card {
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    transition: 0.3s;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 20px 10px;
    cursor: pointer;
    overflow: hidden;
    &:hover {
      box-shadow: none;
    }
  }
  &__pagination {
    margin-top: 16px;
  }
  &__name {
    font-size: 20px;
    padding-top: 0;
    margin-top: 0;
    white-space: nowrap;
  }
  &__input {
    margin-bottom: 16px;
  }
  &__loading {
    background: transparent
      url('http://thinkfuture.com/wp-content/uploads/2013/10/loading_spinner.gif')
      center no-repeat;
  }
  img {
    width: 100%;
    height: auto;
  }
}
</style>
