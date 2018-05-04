<style lang="scss">
@import 'animate.css';

.scroll-up {
  bottom: 0px;
  right: 10px;
  position: fixed;
  right: 50%;
  bottom: 0px;
  transform: translateX(615px);

  @media screen and (max-width: 1185px) {
    right: 0px;
    transform: none;
  }
}

.scroll-up__inner {
  color: #FFF;
  cursor: pointer;
  padding: 5px 10px 3px 10px;
  background: #FE980F;
  animation: bounce 2s ease infinite;
}

.scroll-up__icon {
  color: #FFF;
  width: 25px;
  height: 35px;
}
</style>
<template>
  <div class="scroll-up" v-if="isShowing" @click="scrollToTop">
    <div class="scroll-up__inner">
      <Icon name="chevron-up" class="scroll-up__icon"/>
    </div>
  </div>
</template>
<script>
  import Icon from 'vue-awesome/components/Icon';
  import debounce from 'lodash.debounce';

  export default {
    props: {
      showTop: {
        type: Number,
        default: 200
      }
    },
    data() {
      return {
        isShowing: false
      }
    },
    components: {
      Icon
    },
    mounted() {
      window.addEventListener('scroll', this.checkShow);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.checkShow);
    },
    methods: {
      checkShow: debounce(function() {
        if (window.scrollY > this.showTop) {
          this.isShowing = true;
        } else {
          this.isShowing = false;
        }
      }, 50),
      scrollToTop() {
        window.scrollTo(0, 0);
      }
    }
  }
</script>