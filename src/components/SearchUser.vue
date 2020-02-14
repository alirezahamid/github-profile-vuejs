<template>
  <section class="search_container">
    <p>Enter a GitHub username,<br>
      to see the magic.</p>
    <form class="form_container">
      <label for="username">GitHub username:</label>
      <div class="input_container">
        <input
          type="text"
          id="username"
          placeholder="alirezahamid"
          v-model="username"
        >
        <button @click.prevent="fetchUser">
          <eva-icon
            name="search-outline"
            fill="white"
          ></eva-icon>
        </button>
      </div>
      <span
        v-show="showErrorMessage"
        class="error_user"
      >User not found :(</span>
    </form>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'searchuser',
  data: () => ({

  }),
  computed: {
    username: {
      get () {
        return this.$store.state.username
      },
      set (value) {
        this.$store.commit('pushUsername', value)
      }
    },
    ...mapState(['showErrorMessage'])
  },
  methods: {
    ...mapActions(['fetchUser'])
  }

}
</script>

<style lang="scss">
.search_container {
  p {
    font-size: 21px;
    font-weight: 500;
  }
}
.form_container {
  display: flex;
  flex-direction: column;
  width: 300px;
  label {
    font-size: 14px;
  }
  input {
    width: 250px;
    height: 50px;
    border: none;
    flex-grow: 1;
    background-color: #fafafa;
    border-radius: 8px 0 0 8px;
    font-family: inherit;
    font-size: 14px;
    color: #212121;
    padding: 0 1em;
    outline: none;
  }
}
.input_container {
  display: flex;
  background-color: #fafafa;
  border-radius: 8px;
  margin: 0.5em 0 0 0;
  button {
    border: none;
    outline: none;
    border-radius: 0 8px 8px 0;
    background-color: #212121;
    padding: 0 16px;
    cursor: pointer;
  }
}
.error_user {
  color: #ff006c;
  margin: 0.5em 0 0 1em;
}
</style>
