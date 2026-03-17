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
                        <img :src="previewImages" alt="Preview Image">
                    </div>
                </div>

                <div class="text-center mt-3">
                    <span class="text-white">Image 1 of 1</span>
                </div>
            </div>
        </div>
        <div class="sticky-controls">
            <div class="main-header d-flex align-items-center justify-content-between mb-3 px-3">
                <div class="crew-fleet-header text-dark">
                    Crew and Fleet Status
                </div>
                <button type="button" @click="clearText" class="vmc-bg-prime-6 text-white border-0 rounded px-2 py-1">
                    Clear Text
                </button>
            </div>
        </div>
        <form action="" id="crewfleet" @submit.prevent="saveAllChanges">
            <div class="px-3">
                <div class="number-inputs align-items-center justify-content-center">
                    <div class="input-group" style="margin-bottom: 25px;">
                        <input type="number" class="input-field w-100 text-dark p-2" v-model="onboard"
                            style="resize:none;" placeholder="">
                        <label class="floating-label">On Board</label>
                    </div>
                    <div class="input-group" style="margin-bottom: 25px;">
                        <input type="number" class="input-field w-100 text-dark p-2" v-model="standby"
                            style="resize:none;" placeholder="">
                        <label class="floating-label">Stand By</label>
                    </div>
                    <div class="input-group" style="margin-bottom: 25px;">
                        <input type="number" class="input-field w-100 text-dark p-2" v-model="totalvessel"
                            style="resize:none;" placeholder="">
                        <label class="floating-label">Total Vessel</label>
                    </div>
                </div>
                <div class="img-desc d-flex align-items-center justify-content-center">
                    <div class="d-block mt-1 w-100">
                        <label class="text-dark">Description:</label>
                        <textarea rows="7" class="text-dark w-100" style="border:1px solid gray; resize:none;"
                            placeholder="Description of the image uploaded" v-model="description"></textarea>
                    </div>
                </div>

                <div class="mt-3">
                    <div class="d-flex align-items-center justify-content-between w-100 my-2">
                        <div class="d-flex align-items-center justify-content-between w-100 mt-2">
                            <span class="logo-number text-dark">
                                Logo Image
                            </span>
                            <div class="d-flex align-items-center" style="gap:5px;">
                                <button type="button" @click="previewImage"
                                    class="vmc-bg-prime-4 text-white rounded px-3 py-1 border-0">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        style="height:200px; width:100%; background-position:center; border:1px solid gray; margin-bottom:10px; display:flex; justify-content:center; align-items:center; overflow:hidden;">

                        <img v-if="images" :src="images" alt="Slide Image"
                            style="height:100%; width:100%; object-fit:contain;">

                        <template v-else>
                            <input type="file" :id="'upload-crewfleet-img'" accept="image/png, image/jpeg, image/jpg"
                                hidden @change="onImageChange($event)">

                            <label :for="'upload-crewfleet-img'"
                                class="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                                style="cursor:pointer;">
                                <i class="material-symbols-outlined">upload</i>
                                <span>Upload Photo</span>
                            </label>
                        </template>
                    </div>
                    <button @click="resetImage" type="button"
                        class="w-100 vmc-bg-prime-6 py-1 text-white mt-1 border-0 rounded">
                        Remove Photo
                    </button>
                </div>
            </div>
        </form>
        <div class="my-4 px-3">
            <button type="submit" form="crewfleet" class="vmc-bg-prime-4 border-0 px-3 py-1 text-white mx-1 rounded">
                Save All Changes
            </button>
        </div>
    </div>
</template>

<script>
import ToastCMS from '../ToastCMS.vue';
export default {
    name: "CrewAndFleetStatusCMS",
    components: {
        ToastCMS
    },
    data() {
        return {
            images: null,
            previewImages: [],
            showPreviewModal: false,
            onboard: '',
            totalvessel: '',
            description: '',
            standby: '',
            originalonboard: '',
            originaltotalvessel: '',
            originaldescription: '',
            originalstandby: '',
            originalImages: ''
        }
    },
    methods: {
        clearText() {
            const isEmpty =
                (!this.onboard || this.onboard.trim() === "") &&
                (!this.totalvessel || this.totalvessel.trim() === "") &&
                (!this.description || this.description.trim() === "") &&
                (!this.standby || this.standby.trim() === "");

            this.onboard = "";
            this.totalvessel = "";
            this.description = "";
            this.standby = "";

            if (isEmpty) {
                this.$refs.toast.showToast('Has no text', "warning")
            }
            else {
                this.$refs.toast.showToast('Cleared all text', "success")
            }
        },

        // FUNCTION TO INSERT DISPLAY IMAGE EACH SLIDE
        onImageChange(e) {
            const file = e.target.files[0];
            if (file && file.type.startsWith("image/")) {
                const reader = new FileReader;
                reader.onload = (event) => {
                    this.images = event.target.result;
                    this.$refs.toast.showToast('Image has been attached', "success");
                };
                reader.readAsDataURL(file);
            }
        },

        // FUNCTION TO REMOVE THE IMAGE ATTACHED
        resetImage() {
            // IF NO IMAGE ATTACHED
            if (!this.images) {
                this.$refs.toast.showToast('Has no image attached', "warning");
                return;
            }

            this.images = null;

            // REMOVE IMAGE
            const input = document.getElementById('upload-crewfleet-img');
            if (input) {
                input.value = "";
            }

            this.$refs.toast.showToast('Image has been removed', "success");
        },

        // PREVIEW IMAGE VIA PREVIEW BUTTON
        previewImage() {
            if (!this.images || !this.images.length) {
                this.$refs.toast.showToast("No image to view", "warning");
                return;
            }

            this.previewImages = this.images;
            this.showPreviewModal = true;
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

        // CLOSE PREVIEW IMAGE
        closePreviewImage() {
            this.showPreviewModal = false;
            this.previewImages = [];
        },

        saveAllChanges(e) {
            e.preventDefault()
            // IF NO CHANGES WERE MADE AFTER SAVING
            if (!this.hasChanges) {
                this.$refs.toast.showToast("Nothing to save", "warning");
                return;
            }

            // IF THE CONTAINER IS NOT LOOPED
            const crewFleet = {
                onboard: this.onboard,
                totalvessel: this.totalvessel,
                description: this.description,
                standby: this.standby,
            }

            localStorage.setItem("crewFleetInputs", JSON.stringify(crewFleet));
            localStorage.setItem("crewFleetImages", JSON.stringify(this.images));

            // IF THERE IS ANY INPUT (ATLEAST ONE)
            this.$refs.toast.showToast("Saved all changes.", "success");

            // RELOAD PAGE AFTER 1.5 SECONDS
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }
    },

    mounted() {
        window.addEventListener('keydown', this.onKeyboard);

        // GET THE SAVED LOCAL STORAGE DATA TO DISPLAY AFTER RELOADING PAGE
        const savedCrewFleet = localStorage.getItem("crewFleetInputs");
        const savedCrewFleetImages = localStorage.getItem("crewFleetImages");

        // IF THE CONTAINER IS NOT LOOPED
        if (savedCrewFleet) {
            const parsed = JSON.parse(savedCrewFleet);
            this.onboard = parsed.onboard;
            this.totalvessel = parsed.totalvessel;
            this.description = parsed.description;
            this.standby = parsed.standby;

            this.originalonboard = this.onboard;
            this.originaldescription = this.description;
            this.originaltotalvessel = this.totalvessel;
            this.originalstandby = this.standby;
        }

        if (savedCrewFleetImages) {
            this.images = JSON.parse(savedCrewFleetImages);
            this.originalImages = JSON.parse(savedCrewFleetImages);
        }
    },

    destroy() {
        window.removeEventListener('keydown', this.onKeyboard);
    },

    computed: {
        // PREVENTS TO SAVE WHEN CHANGES HAS NOT BE MADE
        hasChanges() {
            return (
                this.onboard !== this.originalonboard ||
                this.totalvessel !== this.originaltotalvessel ||
                this.description !== this.originaldescription ||
                this.standby !== this.originalstandby ||
                this.images !== this.originalImages
            );
        }
    }
}
</script>

<style scoped>
/* TOAST CSS */
.toast-container {
    position: fixed;
    top: 20px;
    right: 20px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
    .main-header {
        border-bottom: 1px solid #ccc;
        padding: 15px 0;
    }
    .crew-fleet-header {
        font-size: 17px;
        font-weight: 600;
    }

    .img-container {
        width: 100%;
        height: 140px;
        background-position: center;
    }

    .photo-img {
        width: 100%;
        height: 140px;
        cursor: pointer;
    }

    textarea {
        resize: none;
    }

    input,
    textarea {
        font-size: 15px;
        outline: none;
    }

    button {
        font-size: 16px;
    }

    input {
        height: 36px;
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

    .number-inputs {
        display: block;
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
    .crew-fleet-header {
        font-size: 20px;
    }
}

@media (min-width: 992px) {

    .number-inputs,
    .img-desc {
        display: flex;
        gap: 10px;
    }
}

@media (min-width: 1200px) {
    .cms-container {
        margin-left: 310px;
        width: calc(100% - 310px);
        margin-top: 82px;
    }

    /* UPLOAD IMAGE */
    .img-container {
        width: 330px;
        height: 140px;
        background-position: center;
    }

    .photo-img {
        width: 330px;
        height: 140px;
        cursor: pointer;
    }

    .sticky-controls {
        top: 82px;
    }
}
</style>