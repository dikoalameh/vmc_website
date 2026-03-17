<template>
    <div class="cms-container mb-4">
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
        <div class="sticky-controls">
            <div class="membership-wrapper d-flex align-items-center justify-content-between px-3">
                <div class="member-affiliations-header text-dark">Membership and Affiliations</div>
                <button type="button" class="vmc-bg-prime-4 border-0 text-white rounded px-2 py-1"
                    @click="addContainer">Add
                    Image</button>
            </div>
        </div>
        <form action="" id="membership" @submit="saveAllChanges">
            <div class="pb-3">
                <div class="grid-header">
                    <div class="w-100 mb-4" v-for="(container, index) in containers" :key="container.id">
                        <div class="d-flex px-3 align-items-center justify-content-between w-100 mt-2">
                            <div class="d-flex align-items-center justify-content-between w-100 mt-2">
                                <span class="logo-number text-dark">
                                    Logo Image # {{ index + 1 }}
                                </span>
                                <div class="d-flex align-items-center" style="gap:5px;">
                                    <button @click="removeContainer(index)" type="button"
                                        class="px-2 py-1 vmc-bg-prime-6 border-0 text-white rounded">
                                        Remove
                                    </button>
                                    <button type="button" @click="previewImage(container.id)"
                                        class="vmc-bg-prime-4 text-white rounded px-3 py-1 border-0">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="mt-2 px-3">
                            <div
                                style="height:200px; background-position:center; border:1px solid gray; margin-bottom:10px;">
                                <img v-if="images[container.id]" :src="images[container.id]" alt="Slide Image"
                                    style="height:100%; width:100%; object-fit:contain;">

                                <template v-else>
                                    <input type="file" :id="'upload-membership-img-' + container.id"
                                        accept="image/png, image/jpeg, image/jpg" hidden
                                        @change="onImageChange($event, container.id, index)">

                                    <label :for="'upload-membership-img-' + container.id"
                                        class="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                                        style="cursor:pointer;">
                                        <i class="material-symbols-outlined">upload</i>
                                        <span>Upload Photo</span>
                                    </label>
                                </template>
                            </div>

                            <button @click="resetImage(container.id, index)" type="button"
                                class="vmc-bg-prime-6 w-100 text-white rounded px-2 py-1 border-0">
                                Remove Photo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div class="px-3">
            <button type="submit" form="membership" class="vmc-bg-prime-4 border-0 text-white rounded px-3 py-1">
                Save All Changes
            </button>
        </div>
    </div>
</template>

<script>
import ToastCMS from '../ToastCMS.vue';
export default {
    name: "MembershipAffiliationsCMS",
    components: {
        ToastCMS
    },
    data() {
        return {
            images: {},
            originalImages: {},
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
            this.containers.push({ id: Date.now() });

            // DISPLAY THE TOAST MESSAGE
            this.$refs.toast.showToast(`Logo Image # ${this.containers.length} added`, "success")
        },

        // FUNCTION TO REMOVE CONTAINER 
        removeContainer(index) {
            const container = this.containers[index];
            this.$delete(this.images, container.id);

            // REMOVES THE IMAGE AFTER DELETING THE SPECIFIC CONTAINER
            const input = document.getElementById(`upload-membership-img-${container.id}`);
            if (input) input.value = "";
            this.containers.splice(index, 1);

            // DISPLAY THE TOAST MESSAGE
            this.$refs.toast.showToast(`Logo Image ${index + 1} removed`, "error")
        },

        // FUNCTION TO ADD AND DISPLAY IMAGE
        onImageChange(e, id) {
            const file = e.target.files[0];
            if (file && file.type.startsWith("image/")) {
                const reader = new FileReader;
                reader.onload = (event) => {
                    this.$set(this.images, id, event.target.result);
                    const imagenumber = this.containers.findIndex(c => c.id === id) + 1;
                    this.$refs.toast.showToast(`Image # ${imagenumber} attached`, "success");
                };
                reader.readAsDataURL(file)
            }
        },

        // FUNCTION TO REMOVE THE IMAGE ATTACHED
        resetImage(id) {
            this.$delete(this.images, id);
            const imagenumber = this.containers.findIndex(c => c.id === id) + 1;

            // IF THE IMAGE HAS BEEN REMOVED, THE TOAST WILL DISPLAY THIS MESSAGE
            const image = document.getElementById(`upload-membership-img-${id}`);
            if (!image) {
                this.$refs.toast.showToast(`Image ${imagenumber} removed`, "error")
                return;
            }
            // CLEARS THE INPUT
            image.value = "";

            // // IF IT HAS NO IMAGE ATTACHED, THE TOAST WILL DISPLAY THIS MESSAGE
            if (!image.value || image.value.trim() === "") {
                this.$refs.toast.showToast(`No image attached`, "warning");
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
            e.preventDefault()
            // IF NO CHANGES WERE MADE AFTER SAVING
            if (!this.hasChanges) {
                this.$refs.toast.showToast("Nothing to save", "warning")
                return;
            }

            localStorage.setItem("membershipContainer", JSON.stringify(this.containers));
            localStorage.setItem("membershipImages", JSON.stringify(this.images));

            this.$refs.toast.showToast("Saved all changes.", "success");

            // WAITS FOR 1.5 SECONDS TO RELOAD PAGE
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }
    },

    mounted() {
        // GET THE SAVED LOCAL STORAGE DATA TO DISPLAY AFTER RELOADING PAGE
        const savedMembership = localStorage.getItem("membershipContainer");
        const savedMembershipImages = localStorage.getItem("membershipImages");

        if (savedMembership) {
            this.containers = JSON.parse(savedMembership);
            this.originalContainerInputs = JSON.parse(savedMembership);
        }

        if (savedMembershipImages) {
            this.images = JSON.parse(savedMembershipImages);
            this.originalImages = JSON.parse(savedMembershipImages)
        }
    },

    computed: {
        // PREVENTS TO SAVE WHEN CHANGES HAS NOT BE MADE
        hasChanges() {
            return (
                JSON.stringify(this.containers) !== JSON.stringify(this.originalContainerInputs) ||
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
    .membership-wrapper {
        padding: 15px 0;
        border-bottom: 1px solid #ccc;
    }
    .member-affiliations-header {
        font-size: 17px;
        font-weight: 600;
    }

    .logo-number {
        font-size: 18px;
        font-weight: 600;
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
    .member-affiliations-header {
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
}

@media (min-width: 1200px) {
    .cms-container {
        margin-left: 310px;
        width: calc(100% - 310px);
        margin-top: 82px;
    }
    
    .sticky-controls {
        top: 82px;
    }
}
</style>