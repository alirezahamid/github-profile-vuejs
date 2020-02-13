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
        ></eva-icon>
        <!-- <eva-icon
          name="sun-outline"
          fill="black"
        ></eva-icon> -->
      </div>

    </header>
    <SearchUser />
  </div>
</template>
<script>
import SearchUser from './components/SearchUser'
import { EvaIcon } from 'vue-eva-icons'
export default {
  name: 'app',
  components: { SearchUser, [EvaIcon.name]: EvaIcon }
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
  margin: 3em 0 5em 0;
  h1 {
    font-size: 28px;
    font-weight: 900;
    margin: 0;
    padding: 0;
  }
}
</style>
