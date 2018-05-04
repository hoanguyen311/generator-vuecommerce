<template>
  <div class="container app">
    <h1>{{text}}</h1>
    <div class="app__img">
      <Img src="https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg" />
    </div>
    <div class="app__img">
      <Img src="https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg" />
    </div>
    <div class="app__img">
      <Img src="https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg" />
    </div>
    <div class="app__img">
      <Img src="https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg" />
    </div>
    <div class="app__img">
      <Img src="https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg" />
    </div>
    <div class="app__img">
      <Img src="https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg" />
    </div>
    <div class="app__img">
      <Img src="https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg" />
    </div>
    <ScrollUp />
  </div>
</template>
<style>
.app__img {
  width: 300px;
}
</style>
<script>
import { mapState } from 'vuex';
import Img from '@components/LazyImage';
import ScrollUp from '@components/ScrollUp';

export default {
  computed: {
    ...mapState({
      text: state => state.text
    })
  },
  components: {
    Img,
    ScrollUp
  }
}
</script>
