<template>
    <div class="cms-container mb-4">
        <ToastCMS ref="toast" />
        <!-- PREVIEW IMAGE -->
        <div v-if="showPreviewModal" class="preview-modal w-100 h-100 d-flex align-items-center justify-content-center"
            @click.self="closePreviewModal">
            <div class="d-block-align-items-center justify-content-center w-100 mx-3">
                <div class="modal-content bg-transparent position-relative border-0">
                    <button class="close-btn position-fixed text-white bg-transparent border-0"
                        @click="closePreviewImage">&times;</button>

                    <div class="d-flex justify-content-between align-items-center border-0">
                        <button @click="prevImage" :disabled="currentPreviewIndex === 0"
                            class="material-symbols-outlined bg-transparent border-0 text-white">
                            arrow_back_ios
                        </button>

                        <!-- DISPLAY THE FIRST IMAGE -->
                        <img :src="previewImages[currentPreviewIndex]" alt="Preview Image">

                        <button @click="nextImage" :disabled="currentPreviewIndex === previewImages.length - 1"
                            class="material-symbols-outlined bg-transparent border-0 text-white">
                            arrow_forward_ios
                        </button>
                    </div>
                </div>

                <div class="text-center mt-3">
                    <span class="text-white">Image {{ currentPreviewIndex + 1 }} of {{ previewImages.length }}</span>
                </div>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-between px-3">
            <div class="programs-header text-dark">Office Programs</div>
            <button type="button" @click="addContainer" class="vmc-bg-prime-4 border-0 text-white rounded px-2 py-1">
                Add Item
            </button>
        </div>
        <hr class="px-0">
        <form action="" id="officeprograms" @submit.prevent="saveAllChanges">
            <div class="pb-3">
                <div class="grid-header">
                    <div class="w-100" v-for="(container, index) in containers" :key="index">
                        <div class="d-flex px-3 align-items-center justify-content-between w-100 mt-2">
                            <span class="item-number text-dark">
                                Item # {{ index + 1 }}
                            </span>
                            <button type="button" @click="removeContainer(index)"
                                class="px-2 py-1 vmc-bg-prime-6 border-0 text-white rounded">
                                Remove
                            </button>
                        </div>
                        <div class="programs d-flex mt-3 px-3">
                            <div class="w-100">
                                <label class="text-dark">Topic:</label>
                                <input type="text" class="w-100 text-dark" v-model="container.topic">
                            </div>
                            <div class="w-100">
                                <label class="text-dark">Programs:</label>
                                <select class="w-100 text-dark" v-model="container.programs">
                                    <option value="" selected disabled>--- Choose one ---</option>
                                    <option value="Crew Programs" class="text-dark">Crew Programs</option>
                                    <option value="Staff Programs" class="text-dark">Staff Programs</option>
                                    <option value="Vessel Send Off Party" class="text-dark">Vessel Send Off Party
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="mt-3 px-3">
                            <input type="file" multiple :id="'upload-officeprograms-img-' + container.id"
                                accept="image/png, image/jpeg, image/jpg" hidden
                                @change="onImageChange($event, container.id)">

                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span class="text-dark">Image</span>
                                <button type="button" @click="previewImage(container.id)"
                                    class="vmc-bg-prime-4 text-white rounded px-3 py-1 border-0">
                                    View
                                </button>
                            </div>
                            <div class="img-placeholder w-100 mb-2" style="border:1px solid gray;">
                                <div v-if="images[container.id] && images[container.id].length"
                                    class="d-flex flex-wrap h-100 align-items-center justify-content-center"
                                    style="gap:10px;">
                                    <div v-for="(img, i) in images[container.id].slice(0, 4)" :key="i"
                                        style="position:relative;">
                                        <img class="img-container" :src="img">
                                        <button type="button" @click="deleteSingleImage(container.id, i)"
                                            class="d-flex align-items-center justify-content-center position-absolute bg-danger border-0 rounded-circle"
                                            style="top:-6px; right:-6px; width:20px; height:20px; cursor:pointer;">
                                            <span class="material-symbols-outlined text-white"
                                                style="font-size: 12px;">remove</span>
                                        </button>
                                    </div>
                                    <div @click="previewImage(container.id)"
                                        v-if="images[container.id] && images[container.id].length > 4"
                                        class="more-image d-flex align-items-center justify-content-center bg-secondary text-white border border-gray rounded">
                                        +{{ images[container.id].length - 4 }} more
                                    </div>
                                </div>

                                <div v-else
                                    class="w-100 h-100 d-flex flex-column justify-content-center align-items-center"
                                    style="cursor:pointer;" @click="openFileInput(container.id)">
                                    <i class="material-symbols-outlined">upload</i>
                                    <span>Upload Photo</span>
                                </div>
                            </div>
                            <div class="d-flex" style="gap:10px">
                                <button type="button" @click="openFileInput(container.id)"
                                    class="vmc-bg-prime-4 w-100 text-white rounded px-2 py-1 border-0">
                                    Add Photo
                                </button>
                                <button type="button" @click="resetImage(container.id)"
                                    class="vmc-bg-prime-6 w-100 text-white rounded px-2 py-1 border-0">
                                    Remove All Photo
                                </button>
                            </div>
                        </div>
                        <hr class="px-0">
                    </div>
                </div>
            </div>
        </form>
        <div class="px-3">
            <button type="submit" form="officeprograms" class="vmc-bg-prime-4 text-white border-0 rounded px-3 py-1">
                Save All Changes
            </button>
        </div>
    </div>
</template>

<script>
import ToastCMS from '../ToastCMS.vue';
export default {
    name: "OfficeProgramsCMS",
    data() {
        return {
            images: {},
            originalimages: {},
            containers: [],
            originalContainerInputs: [],
            previewImages: [],
            showPreviewModal: false,
            currentPreviewIndex: 0
        }
    },
    components: {
        ToastCMS
    },
    methods: {
        // FUNCTION TO ADD CONTAINER
        addContainer() {
            this.containers.push({
                id: Date.now(),
                topic: '',
                programs: '',
            });

            // SHOWS AND DISPLAYS THE MESSAGE WHEN THE CONTAINER IS ADDED
            this.$refs.toast.showToast(`Item # ${this.containers.length} added`, "success")
        },

        // FUNCTION TO REMOVE CONTAINER
        removeContainer(index) {
            const container = this.containers[index];
            this.$delete(this.images, container.id);

            // REMOVES THE IMAGE AFTER DELETING THE SPECIFIC CONTAINER
            const input = document.getElementById(`upload-officeprograms-img-${container.id}`);
            if (input) input.value = "";
            this.containers.splice(index, 1);

            // SHOWS AND DISPLAYS THE MESSAGE WHEN THE CONTAINER IS ADDED
            this.$refs.toast.showToast(`Item # ${index + 1} has been removed`, "error")
        },

        // FUNCTION TO INSERT AND DISPLAY IMAGE
        onImageChange(e, id) {
            const files = e.target.files;
            if (!files || !files.length) return;

            if (!this.images[id]) {
                this.$set(this.images, id, []);
            }

            Array.from(files).forEach(file => {
                if (file.type.startsWith("image/")) {
                    const reader = new FileReader;
                    reader.onload = (event) => {
                        this.images[id].push(event.target.result);
                        this.$refs.toast.showToast(`Image(s) attached`, "success");
                    };
                    reader.readAsDataURL(file);
                }
            });
        },

        // UPLOAD IMAGE VIA BUTTON
        openFileInput(id) {
            document.getElementById(`upload-officeprograms-img-${id}`).click();
        },

        // PREVIEW IMAGE VIA PREVIEW BUTTON
        previewImage(id) {
            if (!this.images[id] || !this.images[id].length) {
                this.$refs.toast.showToast("No images to view", "warning");
                return;
            }

            this.previewImages = [...this.images[id]];
            this.currentPreviewIndex = 0;
            this.showPreviewModal = true;
        },

        // CLOSE PREVIEW IMAGE
        closePreviewImage() {
            this.showPreviewModal = false;
            this.previewImages = [];
        },

        // NEXT AND PREVIOUS PAGE IN PREVIEW IMAGE
        prevImage() {
            if (this.currentPreviewIndex > 0) {
                this.currentPreviewIndex--;
            }
        },
        nextImage() {
            if (this.currentPreviewIndex < this.previewImages.length - 1) {
                this.currentPreviewIndex++;
            }
        },
        
        onKeyboard(e) {
            if (this.showPreviewModal) {
                switch (e.key) {
                    case 'ArrowRight':
                        this.nextImage();
                        break;
                    case 'ArrowLeft':
                        this.prevImage();
                        break;
                    case 'Escape':
                        this.showPreviewModal = false;
                        break;
                }
            }
        },

        // FUNCTION TO REMOVE IMAGE
        resetImage(id) {
            // IF THE IMAGE HAS BEEN REMOVED, THE TOAST WILL DISPLAY THIS MESSAGE
            const image = document.getElementById(`upload-officeprograms-img-${id}`);
            const hasImage = this.images[id] && this.images[id].length > 0;
            if (hasImage) {
                this.$refs.toast.showToast(`All images removed`, "error");
            }
            else {
                this.$refs.toast.showToast(`No image attached`, "warning");
            }
            this.$delete(this.images, id);

            // CLEARS THE INPUT
            if (image) image.value = "";
        },

        // DELETE EACH IMAGE VIA EACH DELETE BUTTON
        deleteSingleImage(containerId, index) {
            if (!this.images[containerId]) return;

            this.images[containerId].splice(index, 1);

            // TO REMOVE THE IMAGE
            if (this.images[containerId].length === 0) {
                this.$delete(this.images, containerId);
            }

            this.$refs.toast.showToast(
                "Image removed",
                "error"
            );
        },

        saveAllChanges(e) {
            e.preventDefault();
            // IF NO CHANGES WERE MADE AFTER SAVING
            if (!this.hasChanges) {
                this.$refs.toast.showToast("Nothing to save.", "warning");
                return;
            }

            localStorage.setItem("officeprogramsInput", JSON.stringify(this.containers));
            localStorage.setItem("officeprogramsImages", JSON.stringify(this.images));

            this.$refs.toast.showToast("Saved all changes.", "success");

            // WAITS FOR 1.5 SECONDS TO RELOAD PAGE
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }
    },

    mounted() {
        window.addEventListener('keydown', this.onKeyboard);

        // GET THE SAVED LOCAL STORAGE DATA
        const officeProgramsInput = localStorage.getItem("officeprogramsInput");
        const officeProgramsImage = localStorage.getItem("officeprogramsImages");

        if (officeProgramsInput) {
            this.containers = JSON.parse(officeProgramsInput);
            this.originalContainerInputs = JSON.parse(officeProgramsInput);
        }

        if (officeProgramsImage) {
            this.images = JSON.parse(officeProgramsImage);
            this.originalimages = JSON.parse(officeProgramsImage);
        }
    },

    destroy() {
        window.removeEventListener('keydown', this.onKeyboard);
    },

    computed: {
        // PREVENTS TO SAVE WHEN CHANGES HAS NOT BE MADE
        hasChanges() {
            return (
                JSON.stringify(this.containers) !== JSON.stringify(this.originalContainerInputs) ||
                JSON.stringify(this.images) !== JSON.stringify(this.originalimages)
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

@media (min-width: 330px) {
    .programs-header {
        font-size: 20px;
        font-weight: 600;
    }

    .item-number {
        font-size: 18px;
        font-weight: 600;
    }

    .programs {
        gap: 10px;
    }

    input,
    select {
        font-size: 15px;
        outline: none;
        height: 30px;
    }

    .img-container {
        height: 50px;
        width: 50px;
        object-fit: cover;
        border: 1px solid #ccc;
    }

    .img-placeholder {
        height: 100px;
        background-position: center;
    }

    .more-image {
        height: 50px;
        width: 50px;
        font-size: 14px;
        text-align: center;
        object-fit: cover;
        cursor: pointer;
    }

    .grid-header>div {
        width: 100%;
    }

    button {
        transition: 0.3s;
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
}

@media (min-width: 750px) {
    .img-container {
        height: 80px;
        width: 80px;
    }

    .more-image {
        height: 80px;
        width: 80px;
        font-size: 16px;
        object-fit: cover;
        border: 1px solid #ccc;
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

    .img-placeholder {
        height: 150px;
    }

    .modal-content img {
        max-height: 80vh;
    }
}

@media (min-width: 1200px) {
    .cms-container {
        margin-left: 310px;
        width: calc(100% - 310px);
        margin-top: 105px;
    }
}
</style>