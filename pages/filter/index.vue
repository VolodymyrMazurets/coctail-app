<template>
  <div class="filter">
    <el-input
      v-model.lazy="searchStr"
      placeholder="Please write coctail name"
      class="filter__input"
    ></el-input>
    <el-row
      v-loading="loading"
      :gutter="20"
      element-loading-text="Loading..."
      element-loading-spinner="el-icon-loading"
    >
      <transition-group name="list">
        <el-col
          :xs="24"
          :sm="18"
          :md="12"
          :lg="6"
          v-for="item in drinks"
          :key="item.idDrink"
          class="filter__col"
        >
          <coctail-card
            :data="item"
            @click.native="$router.push(`/filter/${item.idDrink}`)"
          />
        </el-col>
      </transition-group>
    </el-row>
  </div>
</template>
<script>
import CoctailCard from '../../components/CoctailCard'
export default {
  name: 'FilterPage',
  components: {
    CoctailCard
  },
  data() {
    return {
      searchStr: '',
      drinks: null,
      loading: true
    }
  },
  watch: {
    searchStr(val, oldVal) {
      this.getCoctailByName()
    }
  },
  created() {
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
