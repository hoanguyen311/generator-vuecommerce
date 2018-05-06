<template>
  <div class="<%= name %>">
    {{ name }}
  </div>
</template>
<style>
.<%= cssClassName %> {
  width: 300px;
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
