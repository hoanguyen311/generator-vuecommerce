<template>
  <div
    class="lazy-image"
    :class="{
      'lazy-image_state_loaded': loaded,
      'lazy-image_state_error': error
    }">
    <div
      class="lazy-image__place"
      :style="styles">
      <img
        v-on:load="onLoad"
        class="lazy-image__img"
        :src="loaded ? src : null"
        :alt="alt">
    </div>
  </div>
</template>
<style lang="scss">
  .lazy-image {
    &_state_loaded &__img {
      opacity: 1;
    }
  }

  .lazy-image__place {
    height: 0;
    width: 100%;
    position: relative;
    background-size: 30px 30px;
  }

  .lazy-image__img {
    max-width: 100%;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    image-orientation: from-image;
    transition: opacity 0.3s linear;
    image-orientation: from-image;
  }

</style>
<script>
  import LazyLoad from '@components/LazyLoad';
  import { randomHEXColor } from '@utils';
  export default {
    mixins: [LazyLoad],
    props: {
      src: String,
      alt: String,
      forceUsingRatioProp: {
        type: Boolean,
        default: false
      },
      ratio: {
        type: Number,
        default: 1
      },
      background: String,
      extraStyle: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      styles() {
        const ratio = this.naturalRatio || this.ratio;
        return {
          background: this.loaded ? null : this.background || randomHEXColor(),
          paddingBottom: `${ 1 / ratio * 100 }%`,
          ...this.extraStyle
        };
      }
    },
    data() {
      return {
        id: null,
        loaded: false,
        error: false,
        naturalRatio: null,
      }
    },
    methods: {
      load() {
        const image = new Image();
        image.onerror = this.onError;
        image.onload = () => this.loaded = true;
        image.src = this.src;
      },
      onError() {
        this.error = true;
      },
      onLoad({ target }) {
        const naturalRatio = target.naturalWidth / target.naturalHeight;

        if (naturalRatio !== this.ratio && !this.forceUsingRatioProp) {
          this.naturalRatio = naturalRatio;
        }
      }
    }
  }
</script>
