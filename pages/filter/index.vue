<template>
  <div class="filter">
    <el-input
      v-model.lazy="searchStr"
      placeholder="Please input"
      class="filter__input"
    ></el-input>
    <el-row
      :gutter="20"
      v-loading="loading"
      element-loading-text="Loading..."
      element-loading-spinner="el-icon-loading"
    >
      <transition-group name="list">
        <el-col
          :span="6"
          v-for="item in drinks"
          :key="item.idDrink"
          class="filter__col"
        >
          <el-card
            @click.native="$router.push(`/filter/${item.idDrink}`)"
            shadow="hover"
            :body-style="{ padding: '0px', cursor: 'pointer' }"
          >
            <img :src="item.strDrinkThumb" class="filter__img" />
            <div style="padding: 14px;" class="filter__row">
              <h2>{{ item.strDrink }}</h2>
              <el-tag
                :type="item.strAlcoholic === 'Alcoholic' ? 'success' : 'danger'"
                >{{ item.strAlcoholic }}</el-tag
              >
            </div>
          </el-card>
        </el-col>
      </transition-group>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'FilterPage',
  data() {
    return {
      searchStr: '',
      drinks: null,
      loading: true
    }
  },
  mounted() {
    this.getCoctailByName()
  },
  methods: {
    async getCoctailByName() {
      try {
        const { drinks } = await this.$store.dispatch(
          'coctails/getCoctailByName',
          this.searchStr
        )
        this.drinks = drinks
        this.loading = false
      } catch (e) {
        this.$message.success(e)
        throw e
      }
    }
  },
  watch: {
    searchStr(val, oldVal) {
      this.getCoctailByName()
    }
  }
}
</script>
<style lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 0.2s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.filter {
  &__input {
    margin-bottom: 32px;
  }
  &__img {
    width: 100%;
    display: block;
  }
  &__col {
    margin-bottom: 20px;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
