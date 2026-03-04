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
                        <!-- DISPLAY THE FIRST IMAGE -->
                        <img :src="previewImages[currentPreviewIndex]" alt="Preview Image">
                    </div>
                </div>

                <div class="text-center mt-3">
                    <span class="text-white">Image {{ currentPreviewIndex + 1 }} of {{ previewImages.length }}</span>
                </div>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-between mb-3 px-3">
            <div class="principals-header text-dark">Our Principals</div>
            <button type="button" class="bg-primary border-0 rounded px-2 py-1 text-white" @click="addContainer">
                Add Item
            </button>
        </div>
        <hr class="px-0">
        <form action="" id="principals" @submit.prevent="saveAllChanges">
            <div class="pb-3">
                <div class="grid-header">
                    <div class="w-100" v-for="(container, index) in containers" :key="index">
                        <div class="d-flex px-3 align-items-center justify-content-between w-100 mt-2">
                            <span class="content-header text-dark">
                                Company # {{ index + 1 }}
                            </span>
                            <button type="button" class="vmc-bg-prime-6 text-white border-0 rounded px-2 py-1"
                                @click="removeContainer(index)">
                                Remove
                            </button>
                        </div>
                        <div class="input-group mt-3 px-3">
                            <input type="text" class="input-field w-100 text-dark p-2" placeholder=""
                                v-model="container.companyname">
                            <label class="floating-label mx-3">Company Name</label>
                        </div>
                        <div class="input d-block d-sm-flex px-3">
                            <div class="input-group mt-4">
                                <input type="text" class="input-field w-100 text-dark p-2" placeholder=""
                                    v-model="container.address">
                                <label class="floating-label">Address</label>
                            </div>
                            <div class="input-group mt-4">
                                <input type="text" class="input-field w-100 text-dark p-2" placeholder=""
                                    v-model="container.contactno">
                                <label class="floating-label">Contact No.</label>
                            </div>
                            <div class="input-group mt-4">
                                <input type="text" class="input-field w-100 text-dark p-2" placeholder=""
                                    v-model="container.contactfax">
                                <label class="floating-label">Contact Fax</label>
                            </div>
                        </div>
                        <div class="input d-block d-sm-flex px-3">
                            <div class="w-100 mt-3">
                                <label class="text-dark">Company Description</label>
                                <textarea rows="3" class="text-dark w-100"
                                    v-model="container.companydescription"></textarea>
                            </div>
                        </div>
                        <div class="mt-3 px-3">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span class="text-dark">Description Image</span>
                                <button type="button" @click="previewImage(container.id)"
                                    class="vmc-bg-prime-4 text-white rounded px-3 py-1 border-0">
                                    View
                                </button>
                            </div>
                            <div
                                style="height:200px; width:100%; background-position:center; border:1px solid gray; margin-bottom:10px; display:flex; justify-content:center; align-items:center; overflow:hidden;">

                                <img v-if="images[container.id]" :src="images[container.id]" alt="Slide Image"
                                    style="height:100%; width:100%; object-fit:contain;">

                                <template v-else>
                                    <input type="file" :id="'upload-principals-img-' + container.id"
                                        accept="image/png, image/jpeg, image/jpg" hidden
                                        @change="onImageChange($event, container.id)">

                                    <label :for="'upload-principals-img-' + container.id"
                                        class="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                                        style="cursor:pointer;">
                                        <i class="material-symbols-outlined">upload</i>
                                        <span>Upload Photo</span>
                                    </label>
                                </template>
                            </div>
                            <button @click="resetImage(container.id)" type="button"
                                class="vmc-bg-prime-6 w-100 text-white rounded px-2 py-1 border-0">
                                Remove Photo
                            </button>
                        </div>
                        <hr class="px-0">
                    </div>
                </div>
            </div>
        </form>
        <div class="px-3">
            <button type="submit" form="principals" class="vmc-bg-prime-4 px-3 py-1 border-0 text-white rounded">
                Save All Changes
            </button>
        </div>
    </div>
</template>


<script>
import ToastCMS from '../ToastCMS.vue';
export default {
    name: "OurPrincipalsCMS",
    components: {
        ToastCMS
    },
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
    methods: {
        // FUNCTION TO ADD CONTAINER
        addContainer() {
            this.containers.push({
                id: Date.now(),
                companyName: '',
                address: '',
                contactno: '',
                contactfax: '',
                companydescription: ''
            });

            this.$refs.toast.showToast(`Company # ${this.containers.length} added`)
        },

        //FUNCTION TO REMOVE COMTAINER
        removeContainer(index) {
            const container = this.containers[index];
            this.$delete(this.images, container.id);

            // REMOVES THE IMAGE AFTER DELETING THE SPECIFIC CONTAINER
            const input = document.getElementById(`upload-principals-img-${container.id}`);
            if (input) input.value = "";
            this.containers.splice(index, 1);
            this.$refs.toast.showToast(`Company # ${index + 1} removed`, "error")
        },

        // FUNCTION TO INSERT AND DISPLAY IMAGE
        onImageChange(e, id) {
            const file = e.target.files[0];
            if (file && file.type.startsWith("image/")) {
                const reader = new FileReader;
                reader.onload = (event) => {
                    this.$set(this.images, id, event.target.result);
                    const imagenumber = this.containers.findIndex(c => c.id === id) + 1;
                    this.$refs.toast.showToast(`Image # ${imagenumber} attached`, "success");
                };
                reader.readAsDataURL(file);
            }
        },

        // FUNCTION TO REMOVE THE IMAGE ATTACHED
        resetImage(id) {
            this.$delete(this.images, id);
            const imagenumber = this.containers.findIndex(c => c.id === id) + 1;

            // IF THE IMAGE HAS BEEN REMOVED, THE TOAST WILL DISPLAY THIS MESSAGE
            const image = document.getElementById(`upload-principals-img-${id}`);
            if (!image) {
                this.$refs.toast.showToast(`Image # ${imagenumber} removed`, "error")
                return;
            }
            // CLEARS THE INPUT
            image.value = "";

            // IF IT HAS NO IMAGE ATTACHED, THE TOAST WILL DISPLAY THIS MESSAGE
            if (!image.value || image.value.trim() === "") {
                this.$refs.toast.showToast(`No image attached`, "warning")
            }
        },

        // PREVIEW IMAGE VIA PREVIEW BUTTON
        previewImage(id) {
            if (!this.images[id] || !this.images[id].length) {
                this.$refs.toast.showToast("No images to view", "warning");
                return;
            }

            this.previewImages = [this.images[id]];
            this.currentPreviewIndex = 0;
            this.showPreviewModal = true;
        },

        // CLOSE PREVIEW IMAGE
        closePreviewImage() {
            this.showPreviewModal = false;
            this.previewImages = [];
        },

        saveAllChanges(e) {
            e.preventDefault();
            // IF NO CHANGES WERE MADE AFTER SAVING
            if (!this.hasChanges) {
                this.$refs.toast.showToast("Nothing to save", "warning");
                return;
            }

            localStorage.setItem("descriptionInput", JSON.stringify(this.containers));
            localStorage.setItem("descriptionImages", JSON.stringify(this.images));

            this.$refs.toast.showToast("Saved all changes.", "success");

            // WAITS FOR 1.5 SECONDS TO RELOAD PAGE
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }
    },

    mounted() {
        // GET THE SAVED LOCAL STORAGE DATA
        const savedDescriptionInput = localStorage.getItem("descriptionInput");
        const savedDescriptionImage = localStorage.getItem("descriptionImages");

        if (savedDescriptionInput) {
            this.containers = JSON.parse(savedDescriptionInput);
            this.originalContainerInputs = JSON.parse(savedDescriptionInput);
        }

        if (savedDescriptionImage) {
            this.images = JSON.parse(savedDescriptionImage);
            this.originalimages = JSON.parse(savedDescriptionImage);
        }
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
    .cms-container {
        overflow-x: hidden;
    }

    .principals-header {
        font-size: 20px;
        font-weight: 600;
    }

    .content-header {
        font-size: 20px;
        font-weight: 600;
    }

    .grid-header>div {
        width: 100%;
    }

    .input {
        gap: 10px;
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
}

@media (min-width: 1200px) {
    .cms-container {
        margin-left: 310px;
        width: calc(100% - 310px);
        margin-top: 105px;
    }
}
</style>