<template>
  <div id="app">
    <header class="header">
      <div class="header_title">
        <h1>GitHub Profile</h1>
      </div>
      <div class="header_btn">
        <eva-icon
          name="moon-outline"
          fill="black"
          v-show="toggle"
          @click="darkThemeSwitch"
        ></eva-icon>
        <eva-icon
          name="sun-outline"
          fill="white"
          v-show="!toggle"
          @click="darkThemeSwitch"
        ></eva-icon>
      </div>

    </header>
    <SearchUser />
    <Profile />
  </div>
</template>
<script>
import SearchUser from './components/SearchUser'
import Profile from './components/Profile'
import { EvaIcon } from 'vue-eva-icons'
export default {
  name: 'app',
  data: () => ({
    toggle: true
  }),
  components: { SearchUser, Profile, [EvaIcon.name]: EvaIcon },
  methods: {
    addDarkTheme () {
      var darkThemeElLink = document.createElement('link')
      darkThemeElLink.setAttribute('href', './dark.css')
      darkThemeElLink.setAttribute('rel', 'stylesheet')
      darkThemeElLink.setAttribute('id', 'dark-theme-style')
      var docHead = document.querySelector('head')
      docHead.append(darkThemeElLink)
      this.toggle = false
    },
    removeDarkTheme () {
      var darkThemeElLink = document.querySelector('#dark-theme-style')
      var parentNode = darkThemeElLink.parentNode
      parentNode.removeChild(darkThemeElLink)
      this.toggle = true
    },
    darkThemeSwitch () {
      var darkThemeElLink = document.querySelector('#dark-theme-style')
      if (!darkThemeElLink) {
        this.addDarkTheme()
      } else {
        this.removeDarkTheme()
      }
    }
  }

}
</script>
<style lang="scss">
#app {
  font-family: "M PLUS Rounded 1c";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212121;
  max-width: 1200px;
  margin: 0 auto;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3em 0;
  h1 {
    font-size: 28px;
    font-weight: 900;
    margin: 0;
    padding: 0;
  }
}
.dark {
  background-color: #212121;
  color: white;
}
</style>
