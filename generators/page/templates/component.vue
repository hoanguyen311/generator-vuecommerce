<template>
  <div class=".<%= cssClassName %>">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">{{ name }}</h1>
        <p class="lead">Component: <code>./src/components/<%= className %>.vue</code></p>
        <p class="lead">Page: <code>./src/pages/<%= className %>/index.js</code></p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "bootstrap/scss/bootstrap.scss";

.<%= cssClassName %> {
  /* styles */
}
</style>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      name: state => state.name
    })
  }
}
</script>

