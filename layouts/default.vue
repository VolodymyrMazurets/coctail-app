<template>
  <el-container class="layout">
    <el-aside width="250px" class="layout__aside">
      <el-menu
        @open="handleOpen"
        @close="handleClose"
        :default-active="$route.path"
        router
        class="el-menu-vertical-demo layout__aside-menu"
        background-color="#409EFF"
        text-color="#fff"
        active-text-color="#fff"
      >
        <el-menu-item index="/" class="layout__aside-item">
          <IconCoctail class="layout__icon" />
          <span>Random coctail</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

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
      this.$message.error(value.response.data.message)
    }
  },
  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {}
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Anton|Roboto&display=swap');
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}
.layout {
  height: 100vh;
  &__aside {
    height: 100%;
    font-family: 'Anton', sans-serif;
  }
  &__aside-menu {
    height: 100%;
    border-right: none;
  }
  &__header {
    padding: 16px 24px;
    height: 80px;
    font-family: 'Anton', sans-serif;
    text-align: center;
    font-size: 30px;
  }
  &__icon {
    width: 24px;
    height: 24px;
    margin-right: 16px;
    position: relative;
    bottom: 4px;
  }
}
</style>
