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
        >
        <button>
          <eva-icon
            name="search-outline"
            fill="white"
          ></eva-icon>
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'searchuser',
  data: () => ({

  }),
  methods: {

  }

}
</script>

<style lang="scss">
.form_container {
  display: flex;
  flex-direction: column;
  width: 300px;
  input {
    width: 250px;
    height: 50px;
    border: none;
    flex-grow: 1;
    background-color: #fafafa;
    border-radius: 8px;
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
    border-radius: 8px;
    background-color: #212121;
    padding: 0 16px;
  }
}
</style>
