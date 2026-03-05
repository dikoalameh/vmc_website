<template>
  <div>
    <!-- Trigger/Thumbnail Image -->
    <a href="#" @click.prevent="show">
      <img :src="thumbnail" class="img-fluid w-100 clickable-image border shadow-sm" alt="Thumbnail">
    </a>
    <p class="vmc-text-primary-2 letter-spacing-1 mt-2 text-center">{{ caption }}</p>
    
    <!-- Modal Overlay -->
    <div class="lightbox-modal-container" v-if="visible" @click="hide">
      
      <!-- Fixed Close Button -->
      <span class="lightbox-close" @click.stop="hide">&times;</span>
      
      <!-- Fixed Image Counter -->
      <span class="image-counter text-white"> {{index + 1}} / {{images.length}}</span>
      
      <!-- Fixed Navigation Arrows -->
      <span class="nav-arrow left-arrow" :class="{'invisible': !hasPrevious()}" @click.stop="previous">
        <font-awesome-icon icon="chevron-left" size="3x"/>
      </span>
      
      <span class="nav-arrow right-arrow" :class="{'invisible': !hasNext()}" @click.stop="next">
        <font-awesome-icon icon="chevron-right" size="3x"/>
      </span>

      <!-- Stretched Image Container -->
      <div class="lightbox-modal-content" @click.stop="">
        <img id="ModalImg" :src="images[index]" class="fullscreen-img">
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
      // Prevent background scrolling when modal opens
      document.body.style.overflow = 'hidden';
    },
    hide() {
      this.visible = false;
      this.index = 0;
      // Restore background scrolling
      document.body.style.overflow = 'auto';
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
    },
  },
  mounted() {
    window.addEventListener('keydown', this.onKeyboardDown)
  },
  destroy() {
    window.removeEventListener('keydown',  this.onKeyboardDown)
    // Failsafe to restore scrolling if destroyed while open
    document.body.style.overflow = 'auto';
  }
};
</script>

<style scoped>
/* Image Hover Effect for Thumbnail */
.clickable-image {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
.clickable-image:hover {
  transform: scale(1.02);
}

/* Modal Overlay fixed to entire screen */
.lightbox-modal-container {
  position: fixed; 
  z-index: 9999; 
  left: 0;
  top: 0;
  width: 100vw; 
  height: 100vh; 
  background-color: rgba(0,0,0,0.9); 
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Restricts the image boundary to leave room for the UI */
.lightbox-modal-content {
  width: 85vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Forces the image to stretch as big as possible without warping */
.fullscreen-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  image-rendering: -webkit-optimize-contrast; 
}

/* Absolute Positioned Close Button (Always top right) */
.lightbox-close {
  position: absolute;
  top: 25px;
  right: 40px;
  color: #cccccc;
  font-size: 50px;
  font-weight: bold;
  z-index: 10000;
  cursor: pointer;
  line-height: 1;
  transition: color 0.3s;
}
.lightbox-close:hover,
.lightbox-close:focus {
  color: #fff;
  text-decoration: none;
}

/* Absolute Positioned Image Counter (Always top left) */
.image-counter {
  position: absolute;
  top: 35px;
  left: 40px;
  font-size: 18px;
  z-index: 10000;
  letter-spacing: 2px;
}

/* Absolute Positioned Arrows (Always vertically centered on edges) */
.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #aaa;
  z-index: 10000;
  padding: 20px;
  transition: color 0.3s;
}
.nav-arrow:hover {
  color: white;
}
.left-arrow {
  left: 20px;
}
.right-arrow {
  right: 20px;
}

.invisible {
  visibility: hidden;
}
</style>