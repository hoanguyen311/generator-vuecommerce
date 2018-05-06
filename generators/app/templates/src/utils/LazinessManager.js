import debounce from 'lodash.debounce';
import inViewport from 'in-viewport';
import uuID from 'uuid/v1';

class LazinessManager {
  constructor() {
    this.elements = [];
    this.onScroll = debounce(this.onScroll, 50);
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.onScroll);
    this.onScroll();
  }

  register(instance) {
    const id = uuID();
    this.elements.push({
      instance,
      id,
    });
    this.onScroll();
    return id;
  }

  unregister(id) {
    const index = this.elements.findIndex(element => element.id === id);

    if (index >= 0) {
      this.elements.splice(index, 1);
    }
  }

  onScroll = () => {
    this.elements.forEach(({ instance }) => {
      if (inViewport(instance.$el)) {
        instance.load && instance.load();
      }
    });
  }
}

export default new LazinessManager();
