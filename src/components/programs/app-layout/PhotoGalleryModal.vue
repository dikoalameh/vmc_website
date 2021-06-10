<template>
  <div>
    <a href="#" @click.prevent="show">
      <img :src="thumbnail">
    </a>
    <p class="vmc-text-primary-2 letter-spacing-1 mt-1 text-center">{{ caption }}</p>
    <div class="lightbox-modal-container" v-if="visible" @click="hide">
      <div class="lightbox-modal-content" @click.stop="">
        <div class="lightbox-modal-header">
          <span class="lightbox-close" style="margin-top: -14px" @click.stop="hide">&times;</span>
          <span class="text-white"> {{index + 1}} / {{images.length}}</span>
        </div>
        <div class="lightbox-modal-body">
          <span :class="{'invisible': !hasPrevious()}">
            <font-awesome-icon icon="chevron-left" size="3x"
                               class="pr-3"
                               @click.stop="previous"/>
            </span>
            <img style="width: calc(100% - 75px)" :src="images[index]">
          <span :class="{'invisible': !hasNext()}">
            <font-awesome-icon icon="chevron-right" size="3x"
                               class="pl-3"
                               @click.stop="next"/>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoGalleryModal',
  props: {
    caption: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      visible: false,
      index: 0,
    }
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
      this.index = 0;
    },
    hasNext() {
      return this.index + 1 < this.images.length;
    },
    hasPrevious() {
      return this.index - 1 >= 0;
    },
    next() {
      if (this.hasNext()) {
        this.index += 1;
      }
    },
    previous() {
      if (this.hasPrevious()) {
        this.index -= 1;
      }
    },
    onKeyboardDown(e) {
      if (this.visible) {
        switch (e.key) {
          case 'ArrowRight':
            this.next();
            break;
          case 'ArrowLeft':
            this.previous();
            break;
          case 'ArrowDown':
          case 'ArrowUp':
          case ' ':
            e.preventDefault();
            break;
          case 'Escape':
            this.hide();
            break;
        }
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.onKeyboardDown)
  },
  destroy() {
    window.removeEventListener('keydown',  this.onKeyboardDown)
  }
};
</script>

<style scoped>
.lightbox-modal-container {
  position: fixed; /* Stay in place */
  z-index: 11; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.85); /* Black w/ opacity */
  display: flex;
  justify-content: center;
}
.lightbox-modal-content {
  margin: auto;
  padding: 20px;
  width: 95%;
}
.lightbox-close {
  color: #cccccc;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.lightbox-close:hover,
.lightbox-close:focus {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
.lightbox-modal-body {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lightbox-modal-body * {
  color: #aaa;
}
.lightbox-modal-body span:hover *,
.lightbox-modal-body span:focus *{
  color: white;
}

@media (min-width: 576px) {
  .lightbox-modal-content {
    width: 540px;
  }
}

@media (min-width: 768px) {
  .lightbox-modal-content {
    width: 720px;
  }
}

@media (min-width: 992px) {
  .lightbox-modal-content {
    width: 960px;
  }
}

@media (min-width: 1200px) {
  .lightbox-modal-content {
    width: 1108px;
  }
}
</style>
