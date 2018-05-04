<script>
import lazinessManager from '@utils/LazinessManager';

export default {
  data() {
    return {
      lazinessId: null
    }
  },
  mounted() {
    this.register();
  },
  beforeDestroy() {
    this.unregister();
  },
  methods: {
    register() {
      this.lazinessId = lazinessManager.register(this);
    },
    unregister() {
      lazinessManager.unregister(this.lazinessId);
    }
  }
}
</script>