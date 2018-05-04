<template>
  <Icon name="sync" class="spinner" />
</template>
<script>
import Icon from '@assets/loading.svg';

export default {
  components: {
    Icon
  }
};

</script>
<style lang="scss" scoped>
@import "colors";

.spinner {
  color: $main;
  width: 40px;
  opacity: .7;
  height: 40px;
  animation: spinner .5s infinite linear;
}

@keyframes spinner {
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
}
</style>