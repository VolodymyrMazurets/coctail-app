<template>
  <el-container class="layout">
    <el-button
      @click="menuVisibility = !menuVisibility"
      icon="el-icon-s-unfold"
      class="layout__burger"
    />
    <el-menu
      @select="closeMenu"
      :default-active="$route.path"
      v-if="menuVisibility"
      router
      class="layout__aside-menu layout__aside-menu--mobile"
      background-color="#409EFF"
      text-color="#fff"
      active-text-color="purple"
    >
      <el-button
        @click="menuVisibility = !menuVisibility"
        type="danger"
        icon="el-icon-close"
        class="layout__close"
      ></el-button>
      <el-menu-item index="/" class="layout__aside-item">
        <IconCoctail class="layout__icon" />
        <span>Random coctail</span>
      </el-menu-item>
      <el-menu-item index="/filter" class="layout__aside-item">
        <IconCoctail class="layout__icon" />
        <span>Coctail by filter</span>
      </el-menu-item>
      <el-menu-item index="/ingredients" class="layout__aside-item">
        <IconCoctail class="layout__icon" />
        <span>Show all ingredients</span>
      </el-menu-item>
    </el-menu>
    <el-menu
      :default-active="$route.path"
      router
      class="layout__aside-menu"
      background-color="#409EFF"
      text-color="#fff"
      active-text-color="purple"
    >
      <el-menu-item index="/" class="layout__aside-item">
        <IconCoctail class="layout__icon" />
        <span>Random coctail</span>
      </el-menu-item>
      <el-menu-item index="/filter" class="layout__aside-item">
        <IconCoctail class="layout__icon" />
        <span>Coctail by filter</span>
      </el-menu-item>
      <el-menu-item index="/ingredients" class="layout__aside-item">
        <IconCoctail class="layout__icon" />
        <span>Show all ingredients</span>
      </el-menu-item>
    </el-menu>

    <el-container>
      <el-header class="layout__header">
        {{ phraseOfTheDay }}
      </el-header>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import IconCoctail from '../components/icons/svg/cocktail'

export default {
  components: {
    IconCoctail
  },
  data() {
    return {
      menuVisibility: false
    }
  },
  computed: {
    phraseOfTheDay() {
      const day = new Date().getDay()
      let phrase
      switch (true) {
        case day === 1:
          phrase =
            'Today is Monday. We leave the weekend and just get interested'
          break
        case day === 2:
          phrase = 'Tuesday is a hard day, but we don’t get carried away'
          break
        case day === 3:
          phrase =
            'Wednesday is the golden middle. Getting ready for the weekend'
          break
        case day === 4:
          phrase = 'Thursday - not much can be drunk yet'
          break
        case day === 5:
          phrase = 'Today is Friday. Soul swept into paradise'
          break
        case day === 6:
          phrase = 'Saturday is a day of fun and festivities'
          break
        default:
          phrase = 'Sunday! Weekend flies, hangover and get ready for work'
          break
      }
      return phrase
    },
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(value) {
      this.$message.error(value.message)
    }
  },
  methods: {
    closeMenu() {
      this.menuVisibility = false
    }
  }
}
</script>
<style lang="scss">
.layout {
  height: 100vh;
  &__aside {
    height: 100%;
    font-family: 'Anton', sans-serif;
  }
  &__aside-menu {
    height: 100%;
    border-right: none;
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
      position: initial;
    }
    &--mobile {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 100;
      padding-top: 50px;
      transition: none;
      display: initial;
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
  }
  &__header {
    padding: 16px 24px;
    height: 80px;
    font-family: 'Anton', sans-serif;
    text-align: center;
    font-size: 30px;
    display: none;
    @media screen and (min-width: 768px) {
      display: block;
    }
  }
  &__icon {
    width: 24px;
    height: 24px;
    margin-right: 16px;
    position: relative;
    bottom: 4px;
  }
  &__burger {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: transparent;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
  &__close {
    position: absolute;
    right: 5px;
    top: 5px;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
}
</style>
