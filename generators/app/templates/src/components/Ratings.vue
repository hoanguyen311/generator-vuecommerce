<template>
  <div class="ratings">
    <div class="ratings__value" :style="style">
      <StarOrangeIcon class="ratings__star ratings__star_color_orange"  />
      <StarOrangeIcon class="ratings__star ratings__star_color_orange" />
      <StarOrangeIcon class="ratings__star ratings__star_color_orange" />
      <StarOrangeIcon class="ratings__star ratings__star_color_orange" />
      <StarOrangeIcon class="ratings__star ratings__star_color_orange" />
    </div>
    <div class="ratings__placeholder">
      <StarIcon class="ratings__star ratings__star_color_grey" />
      <StarIcon class="ratings__star ratings__star_color_grey" />
      <StarIcon class="ratings__star ratings__star_color_grey" />
      <StarIcon class="ratings__star ratings__star_color_grey" />
      <StarIcon class="ratings__star ratings__star_color_grey" />
    </div>
  </div>
</template>
<style lang="scss">
@import "colors";

.ratings {
  position: relative;
  display: inline-block;
  font-size: 0px;

  &__value {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    z-index: 2;

  }

  &__placeholder {
    position: relative;
    left: 0px;
    top: 0px;
  }


  &__star {
    margin: 0 2px;
    &_color_orange {
      color: $main;
    }
    &_color_grey {
      color: #d2d2d2;
    }
  }
}
</style>
<script>
import StarIcon from '@assets/star.svg';
import StarOrangeIcon from '@assets/star-orange.svg';

export default {
  props: [
    'value'
  ],
  computed: {
    percent() {
      return this.value * 100 / 5;
    },
    style() {
      return { width: `${this.percent}%` };
    }
  },
  components: {
    StarIcon,
    StarOrangeIcon
  }
}
</script>