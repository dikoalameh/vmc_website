<template>
    <div class="cms-container">
        <ToastCMS ref="toast" />
        <div v-if="showPreviewModal" class="preview-modal w-100 h-100 d-flex align-items-center justify-content-center"
            @click.self="closePreviewModal">
            <div class="d-block-align-items-center justify-content-center w-100 mx-3">
                <div class="modal-content bg-transparent position-relative border-0">
                    <button class="close-btn position-fixed text-white bg-transparent border-0"
                        @click="closePreviewImage">&times;</button>

                    <div class="d-flex justify-content-between align-items-center border-0">
                        <!-- DISPLAY THE FIRST IMAGE -->
                        <img :src="previewImages[currentPreviewIndex]" alt="Preview Image">
                    </div>
                </div>

                <div class="text-center mt-3">
                    <span class="text-white">Image {{ currentPreviewIndex + 1 }} of {{ previewImages.length }}</span>
                </div>
            </div>
        </div>
        <div class="form-container">
            <form action="" id="keyvisuals" @submit.prevent="saveAllChanges">
                <div class="vmc-main-content">
                    <div class="sticky-controls">
                        <div class="kv-wrapper d-flex justify-content-between align-items-center">
                            <div class="text-dark key-visual-header mx-3">Key Visual Slides</div>
                        </div>
                    </div>
                    <div>
                        <div class="grid-header">
                            <div class="w-100 mt-4" v-for="n in 6" :key="n">
                                <div class="px-3">
                                    <div class="d-flex justify-content-between">
                                        <h3 class="kv-slide-no text-dark">Slide # {{ n }}</h3>
                                        <button type="button" @click="clearText(n)"
                                            class="vmc-bg-prime-4 border-0 px-2 text-white rounded">
                                            Clear Slide
                                        </button>
                                    </div>
                                    <div class="input-group mt-3">
                                        <input type="text" class="input-field text-dark p-2" placeholder=""
                                            v-model="form[`topcaption${n}`]">
                                        <label class="floating-label">
                                            Top Caption
                                        </label>
                                    </div>
                                    <div class="input-group mt-3">
                                        <input type="text" class="input-field text-dark p-2" placeholder=""
                                            v-model="form[`maintitle${n}`]">
                                        <label class="floating-label">
                                            Main Title
                                        </label>
                                    </div>
                                    <div class="form-group mt-3">
                                        <label class="text-dark">Description:</label><br>
                                        <textarea rows="3" placeholder="" style="outline:none; resize:none;"
                                            class="form-input w-100 px-1 rounded text-dark"
                                            v-model="form[`description${n}`]"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sticky-controls">
                    <div class="slider-header px-3 text-dark">
                        Image Slider (Key Visuals)
                    </div>
                </div>
                <div>
                    <div class="grid-header">
                        <div class="w-100 mt-4" v-for="n in 6" :key="n">
                            <div class="px-3 py-2">
                                <div class="d-flex align-items-center justify-content-between mb-2" style="gap:5px;">
                                    <span class="img-slide-header text-dark">Slide # {{ n }}</span>
                                    <button type="button" @click="previewImage(n)"
                                        class="vmc-bg-prime-4 text-white rounded px-3 py-1 border-0">
                                        View
                                    </button>
                                </div>
                                <div
                                    style="height:200px; width:100%; background-position:center; border:1px solid gray; margin-bottom:10px; display:flex; justify-content:center; align-items:center; overflow:hidden;">

                                    <img v-if="images[n]" :src="images[n]" alt="Slide Image"
                                        style="height:100%; width:100%; object-fit:contain;">

                                    <template v-else>
                                        <input type="file" :id="'upload-keyvisual-img-' + n"
                                            accept="image/png, image/jpeg, image/jpg" hidden
                                            @change="onImageChange($event, n)">

                                        <label :for="'upload-keyvisual-img-' + n"
                                            class="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                                            style="cursor:pointer;">
                                            <i class="material-symbols-outlined">upload</i>
                                            <span>Upload Photo</span>
                                        </label>
                                    </template>
                                </div>
                                <button @click="resetImage(n)" type="button"
                                    class="w-100 vmc-bg-prime-6 btn-sm text-white mt-1 border-0 rounded">
                                    Remove Photo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div class="px-3 my-4">
                <button type="submit" form="keyvisuals"
                    class="vmc-bg-prime-4 border-0 px-3 py-1 text-white mx-1 rounded">
                    Save All Changes
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import ToastCMS from '../ToastCMS.vue';
export default {
    name: "KeyVisualsCMS",
    components: {
        ToastCMS
    },
    data() {
        return {
            form: {},
            images: {},
            originalFormInputs: {},
            originalImages: {},
            previewImages: [],
            showPreviewModal: false,
            currentPreviewIndex: 0,
        };
    },
    methods: {
        // FUNCTION TO CLEAR ALL TEXTS IN TEXTBOXES AND TEXTAREAS
        clearText(n) {
            // CONDITIONAL STATEMENT TO DETERMINE IF IT HAS NO INPUT OR INPUT HAS BEEN CLEARED
            const isEmpty =
                // TRIM = TO REMOVE SPACES ON BOTH SIDES
                (!this.form[`topcaption${n}`] || this.form[`topcaption${n}`].trim() === "") &&
                (!this.form[`maintitle${n}`] || this.form[`maintitle${n}`].trim() === "") &&
                (!this.form[`description${n}`] || this.form[`description${n}`].trim() === "");

            this.form[`topcaption${n}`] = "";
            this.form[`maintitle${n}`] = "";
            this.form[`description${n}`] = "";
            this.$forceUpdate();

            if (isEmpty) {
                this.$refs.toast.showToast(`Slide # ${n} has no input`, "warning");
            }
            else {
                this.$refs.toast.showToast(`Slide # ${n} text cleared`, "success");
            }
        },

        // FUNCTION TO INSERT DISPLAY IMAGE EACH SLIDE
        onImageChange(e, n) {
            const file = e.target.files[0];
            if (file && file.type.startsWith("image/")) {
                const reader = new FileReader;
                reader.onload = (event) => {
                    this.$set(this.images, n, event.target.result);
                    this.$refs.toast.showToast(`Slide # ${n} image has been attached`, "success");
                };
                reader.readAsDataURL(file);
            }
        },

        // FUNCTION TO REMOVE THE IMAGE ATTACHED
        resetImage(n) {
            this.$delete(this.images, n);
            const image = document.getElementById(`upload-keyvisual-img-${n}`);

            // DISPLAYS IF THE USER REMOVES THE IMAGE ATTACHED
            if (!image) {
                this.$refs.toast.showToast(`Slide # ${n} image has been removed`, "error");
                return;
            }

            // CLEARS THE INPUT
            image.value = "";

            // IF IT HAS NO IMAGE ATTACHED
            if (!image.value || image.value.trim() === "") {
                this.$refs.toast.showToast(`No image attached`, "warning");
            }
        },

        // PREVIEW IMAGE VIA PREVIEW BUTTON
        previewImage(n) {
            if (!this.images[n] || !this.images[n].length) {
                this.$refs.toast.showToast("No images to view", "warning");
                return;
            }

            this.previewImages = [this.images[n]];
            this.currentPreviewIndex = 0;
            this.showPreviewModal = true;
        },

        // CLOSE PREVIEW IMAGE
        closePreviewImage() {
            this.showPreviewModal = false;
            this.previewImages = [];
        },

        onKeyboard(e) {
            if (this.showPreviewModal) {
                switch (e.key) {
                    case 'Escape':
                        this.showPreviewModal = false;
                        break;
                }
            }
        },

        saveAllChanges(e) {
            e.preventDefault()
            // IF NO CHANGES WERE MADE AFTER SAVING
            if (!this.hasChanges) {
                this.$refs.toast.showToast("Nothing to save", "warning")
                return;
            }
            // SAVE DATA TO LOCAL STORAGE
            localStorage.setItem("keyVisualsInputs", JSON.stringify(this.form));
            localStorage.setItem("keyVisualsImages", JSON.stringify(this.images));

            // IF THERE IS ANY INPUT (ATLEAST ONE)
            this.$refs.toast.showToast("Saved all changes.", "success");

            // RELOAD PAGE AFTER 1.5 SECONDS
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }
    },

    mounted() {
        window.addEventListener('keydown', this.onKeyboard)

        // GET THE SAVED LOCAL STORAGE DATA TO DISPLAY AFTER RELOADING PAGE
        const savedKeyVisuals = localStorage.getItem("keyVisualsInputs");
        const savedKeyVisualsImages = localStorage.getItem("keyVisualsImages");

        if (savedKeyVisuals) {
            this.form = JSON.parse(savedKeyVisuals);
            this.originalFormInputs = JSON.parse(savedKeyVisuals);
        }

        if (savedKeyVisualsImages) {
            this.images = JSON.parse(savedKeyVisualsImages);
            this.originalImages = JSON.parse(savedKeyVisualsImages)
        }
    },

    destroy() {
        window.removeEventListener('keydown', this.onKeyboard);
    },

    computed: {
        // PREVENTS TO SAVE WHEN CHANGES HAS NOT BE MADE
        hasChanges() {
            return (
                JSON.stringify(this.form) !== JSON.stringify(this.originalFormInputs) ||
                JSON.stringify(this.images) !== JSON.stringify(this.originalImages)
            );
        }
    }
}
</script>

<style scoped>
.toast-container {
    position: fixed;
    top: 20px;
    right: 20px;
}

hr {
    border-top: 1px solid black;
}

.sticky-controls {
    position: sticky;
    z-index: 1;
    background-color: white;
}

@media (min-width: 330px) {
    .kv-wrapper {
        margin-top: 1px;
    }

    .key-visual-header {
        font-size: 17px;
        font-weight: bold;
    }

    .kv-slide-no {
        font-size: 18px;
    }

    .slider-header,
    .img-slide-header {
        font-weight: 600;
    }

    .slider-header {
        font-size: 17px;
    }

    .kv-wrapper,
    .slider-header {
        padding: 15px 0;
        border-bottom: 1px solid #ccc;
    }

    .img-slide-header {
        font-size: 18px;
    }

    .input-group {
        position: relative;
        display: flex;
    }

    .input-field {
        border: 1px solid gray;
        border-radius: 4px !important;
        width: 100%;
        outline: none;
    }

    input {
        height: 36px;
    }


    input textarea {
        font-size: 15px;
    }

    .floating-label {
        position: absolute;
        top: 50%;
        left: 8px;
        transform: translateY(-50%);
        color: gray;
        background-color: white;
        transition: all 0.3s ease;
        pointer-events: none;
    }

    .input-field:focus~.floating-label,
    .input-field:not(:placeholder-shown)~.floating-label {
        top: 0;
        left: 8px;
        transform: translateY(-50%);
        font-size: 12px;
    }

    button {
        font-size: 16px;
    }

    .grid-header>div {
        width: 100%;
    }

    .preview-modal {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
        z-index: 9999;
        overflow-y: hidden;
        overscroll-behavior: contain;
    }

    .modal-content img {
        max-width: 70vw;
        max-height: 70vh;
        width: auto;
        height: auto;
        object-fit: contain;
        display: block;
        margin: 0 auto;
    }

    .close-btn {
        top: 10px;
        right: 15px;
        font-size: 24px;
        cursor: pointer;
    }

    .sticky-controls {
        top: 60px;
    }
}

@media (min-width: 750px) {

    .key-visual-header,
    .slider-header {
        font-size: 20px;
    }
}

@media (min-width: 992px) {
    .grid-header {
        display: flex;
        flex-wrap: wrap;
    }

    .grid-header>div {
        width: 50% !important;
        box-sizing: border-box;
    }

    .modal-content img {
        max-height: 80vh;
    }


    .key-visual-header,
    .slider-header {
        font-size: 20px;
    }
}

@media (min-width: 1200px) {
    .cms-container {
        margin-left: 310px;
        margin-top: 82px;
    }

    .sticky-controls {
        top: 82px;
    }
}
</style>