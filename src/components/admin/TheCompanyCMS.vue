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
        <div class="d-flex align-items-center justify-content-between px-3">
            <div class="desc-header text-dark">Company Description</div>
            <button type="button" @click="clearText" class="vmc-bg-prime-6 text-white rounded border-0 px-2 py-1">
                Clear Inputs
            </button>
        </div>
        <hr class="px-0">
        <form action="" id="thecompany" @submit.prevent="saveAllChanges">
            <div class="grid d-block d-sm-flex px-3">
                <div class="w-100 mt-3">
                    <label class="text-dark">Company Description</label>
                    <textarea rows="3" class="text-dark w-100" v-model="companydescription"></textarea>
                </div>
                <div class="w-100 mt-3">
                    <label class="text-dark">Why Veritas Was Established</label>
                    <textarea rows="3" class="text-dark w-100" v-model="established"></textarea>
                </div>
            </div>
            <div class="grid d-block d-sm-flex px-3">
                <div class="w-100 mt-3">
                    <label class="text-dark">Quality Crew Recruitment</label>
                    <textarea rows="3" class="text-dark w-100" v-model="recruitment"></textarea>
                </div>
                <div class="w-100 mt-3">
                    <label class="text-dark">Mission Statement</label>
                    <textarea rows="3" class="text-dark w-100" v-model="missionstatement"></textarea>
                </div>
            </div>
            <div class="grid d-block d-sm-flex px-3">
                <div class="w-100 mt-3">
                    <label class="text-dark">Core Values - Honesty</label>
                    <textarea rows="3" class="text-dark w-100" v-model="honesty"></textarea>
                </div>
                <div class="w-100 mt-3">
                    <label class="text-dark">Core Values - Integrity</label>
                    <textarea rows="3" class="text-dark w-100" v-model="integrity"></textarea>
                </div>
                <div class="w-100 mt-3">
                    <label class="text-dark">Core Values - Quality</label>
                    <textarea rows="3" class="text-dark w-100" v-model="quality"></textarea>
                </div>
            </div>
            <div class="grid d-block d-sm-flex px-3">
                <div class="w-100 mt-3">
                    <label class="text-dark">History Text</label>
                    <textarea rows="3" class="text-dark w-100" v-model="history"></textarea>
                </div>
            </div>
            <div class="grid d-block d-sm-flex px-3">
                <div class="w-100 mt-3">
                    <div class="d-flex align-items-center justify-content-between w-100 mt-2">
                        <span class="logo-number text-dark" style="font-weight:600;">
                            Company Logo
                        </span>
                        <button type="button" @click="previewImage('companyLogo')" class="vmc-bg-prime-4 text-white rounded px-3 py-1 border-0">
                            View
                        </button>
                    </div>
                    <div style="height:200px; background-position:center; border:1px solid gray; margin-bottom:10px;"
                        class="mt-2">

                        <img v-if="images.companyLogo" :src="images.companyLogo"
                            style="height:100%; width:100%; object-fit:contain;" />

                        <template v-else>
                            <input type="file" id="upload-companylogo-img" accept="image/png, image/jpeg, image/jpg"
                                hidden @change="(e) => onImageChange(e, 'companyLogo')">

                            <label for="upload-companylogo-img"
                                class="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                                style="cursor:pointer;">
                                <i class="material-symbols-outlined">upload</i>
                                <span>Upload Photo</span>
                            </label>
                        </template>
                    </div>

                    <button @click="resetImage('companyLogo')" type="button"
                        class="vmc-bg-prime-6 w-100 text-white rounded px-2 py-1 border-0">
                        Remove Photo
                    </button>
                </div>
                <div class="w-100 mt-3">
                    <div class="d-flex align-items-center justify-content-between w-100 mt-2">
                        <span class="logo-number text-dark" style="font-weight:600;">
                            Quality Crew Background
                        </span>
                        <button type="button" @click="previewImage('qualityCrew')" class="vmc-bg-prime-4 text-white rounded px-3 py-1 border-0">
                            View
                        </button>
                    </div>
                    <div style="height:200px; background-position:center; border:1px solid gray; margin-bottom:10px;"
                        class="mt-2">

                        <img v-if="images.qualityCrew" :src="images.qualityCrew" alt="Slide Image"
                            style="height:100%; width:100%; object-fit:contain;">

                        <template v-else>
                            <input type="file" id="upload-qualitycrew-img" accept="image/png, image/jpeg, image/jpg" hidden
                                @change="(e) => onImageChange(e, 'qualityCrew')">

                            <label for="upload-qualitycrew-img"
                                class="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                                style="cursor:pointer;">
                                <i class="material-symbols-outlined">upload</i>
                                <span>Upload Photo</span>
                            </label>
                        </template>
                    </div>

                    <button @click="resetImage('qualityCrew')" type="button"
                        class="vmc-bg-prime-6 w-100 text-white rounded px-2 py-1 border-0">
                        Remove Photo
                    </button>
                </div>
            </div>
            <div class="grid d-block d-sm-flex px-3">
                <div class="w-100 mt-3">
                    <div class="d-flex align-items-center justify-content-between w-100 mt-2">
                        <span class="logo-number text-dark" style="font-weight:600;">
                            History
                        </span>
                        <button type="button" @click="previewImage('history')" class="vmc-bg-prime-4 text-white rounded px-3 py-1 border-0">
                            View
                        </button>
                    </div>
                    <div style="height:200px; background-position:center; border:1px solid gray; margin-bottom:10px;"
                        class="mt-2">

                        <img v-if="images.history" :src="images.history" alt="Slide Image"
                            style="height:100%; width:100%; object-fit:contain;">

                        <template v-else>
                            <input type="file" id="upload-history-img" accept="image/png, image/jpeg, image/jpg" hidden
                                @change="(e) => onImageChange(e, 'history')">

                            <label for="upload-history-img"
                                class="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                                style="cursor:pointer;">
                                <i class="material-symbols-outlined">upload</i>
                                <span>Upload Photo</span>
                            </label>
                        </template>
                    </div>

                    <button @click="resetImage('history')" type="button"
                        class="vmc-bg-prime-6 w-100 text-white rounded px-2 py-1 border-0">
                        Remove Photo
                    </button>
                </div>
                <div class="w-100 mt-3">
                    <div class="d-flex align-items-center justify-content-between w-100 mt-2">
                        <span class="logo-number text-dark" style="font-weight:600;">
                            Organizational Chart
                        </span>
                        <button type="button" @click="previewImage('chart')" class="vmc-bg-prime-4 text-white rounded px-3 py-1 border-0">
                            View
                        </button>
                    </div>
                    <div style="height:200px; background-position:center; border:1px solid gray; margin-bottom:10px;"
                        class="mt-2">

                        <img v-if="images.chart" :src="images.chart" alt="Slide Image"
                            style="height:100%; width:100%; object-fit:contain;">

                        <template v-else>
                            <input type="file" id="upload-chart-img" accept="image/png, image/jpeg, image/jpg" hidden
                                @change="(e) => onImageChange(e, 'chart')">

                            <label for="upload-chart-img"
                                class="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                                style="cursor:pointer;">
                                <i class="material-symbols-outlined">upload</i>
                                <span>Upload Photo</span>
                            </label>
                        </template>
                    </div>

                    <button @click="resetImage('chart')" type="button"
                        class="vmc-bg-prime-6 w-100 text-white rounded px-2 py-1 border-0">
                        Remove Photo
                    </button>
                </div>
            </div>
        </form>
        <div class="px-3">
            <button type="submit" form="thecompany" class="vmc-bg-prime-4 border-0 rounded text-white px-3 mt-4 py-1">
                Save All Changes
            </button>
        </div>
    </div>
</template>

<script>
import ToastCMS from '../ToastCMS.vue';
export default {
    name: "TheCompanyCMS",
    components: {
        ToastCMS
    },
    data() {
        return {
            images: {
                companyLogo: null,
                qualityCrew: null,
                history: null,
                chart: null
            },
            originalimages: {
                companyLogo: null,
                qualityCrew: null,
                history: null,
                chart: null
            },
            previewImages: [],
            showPreviewModal: false,
            currentPreviewIndex: 0,
            companydescription: '',
            established: '',
            recruitment: '',
            missionstatement: '',
            honesty: '',
            integrity: '',
            quality: '',
            history: '',
            originalcompanydescription: '',
            originalestablished: '',
            originalrecruitment: '',
            originalmissionstatement: '',
            originalhonesty: '',
            originalintegrity: '',
            originalquality: '',
            originalhistory: '',
        }
    },
    methods: {
        // FUNCTIONS TO CLEAR THE INPUTS
        clearText() {
            const isEmpty =
                (!this.companydescription || this.companydescription.trim() === "") &&
                (!this.established || this.established.trim() === "") &&
                (!this.recruitment || this.recruitment.trim() === "") &&
                (!this.missionstatement || this.missionstatement.trim() === "") &&
                (!this.honesty || this.honesty.trim() === "") &&
                (!this.integrity || this.integrity.trim() === "") &&
                (!this.quality || this.quality.trim() === "") &&
                (!this.history || this.history.trim() === "");

            this.companydescription = "";
            this.established = "";
            this.recruitment = "";
            this.missionstatement = "";
            this.honesty = "";
            this.integrity = "";
            this.quality = "";
            this.history = "";

            if (isEmpty) {
                this.$refs.toast.showToast(`Has no input`, "warning");
            }
            else {
                this.$refs.toast.showToast(`Cleared All Inputs`, "error");
            }
        },

        onImageChange(event, key) {
            const file = event.target.files[0];
            if (file && file.type.startsWith("image/")) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    this.images[key] = e.target.result;
                    this.$refs.toast.showToast(`Image attached`, "success");
                };
                reader.readAsDataURL(file);
            }
        },
        resetImage(key) {
            this.images[key] = null;

            const companyLogo = document.getElementById('upload-companylogo-img');
            const qualityCrew = document.getElementById('upload-qualitycrew-img');
            const history = document.getElementById('upload-history-img');
            const chart = document.getElementById('upload-chart-img');

            if (!companyLogo || !history || !qualityCrew || !chart) {
                this.$refs.toast.showToast('Image removed', "error");
                return;
            }

            const images = {
                companyLogo: companyLogo.value = "",
                qualityCrew: qualityCrew.value = "",
                history: history.value = "",
                chart: chart.value = ""
            }

            if (!images.value || images.value.trim() === "") {
                this.$refs.toast.showToast('No image attached', "warning");
            }
        },

        previewImage(key) {
            if (!this.images[key]) {
                this.$refs.toast.showToast('No images to view', "warning");
                return;
            }
            
            this.previewImages = [this.images[key]];
            this.currentPreviewIndex = 0;
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

            const theCompany = {
                companydescription: this.companydescription,
                established: this.established,
                recruitment: this.recruitment,
                missionstatement: this.missionstatement,
                honesty: this.honesty,
                integrity: this.integrity,
                quality: this.quality,
                history: this.history,
            }

            const companyImages = {
                chart: this.images.chart,
                history: this.images.history,
                qualityCrew: this.images.qualityCrew,
                companyLogo: this.images.companyLogo
            }

            localStorage.setItem("theCompanyInputs", JSON.stringify(theCompany));
            localStorage.setItem("theCompanyImages", JSON.stringify(companyImages));

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
        const savedCompanyInputs = localStorage.getItem("theCompanyInputs");
        const savedCompanyImages = localStorage.getItem("theCompanyImages");

        // IF THE CONTAINER IS NOT LOOPED
        if (savedCompanyInputs) {
            const parsed = JSON.parse(savedCompanyInputs);
            this.companydescription = parsed.companydescription;
            this.established = parsed.established;
            this.recruitment = parsed.recruitment;
            this.missionstatement = parsed.missionstatement;
            this.honesty = parsed.honesty;
            this.integrity = parsed.integrity;
            this.quality = parsed.quality;
            this.history = parsed.history;

            this.originalcompanydescription = this.companydescription;
            this.originalestablished = this.established;
            this.originalrecruitment = this.recruitment;
            this.originalmissionstatement = this.missionstatement;
            this.originalhonesty = this.honesty;
            this.originalintegrity = this.integrity;
            this.originalquality = this.quality;
            this.originalhistory = this.history;
        }

        if (savedCompanyImages) {
            const parsed = JSON.parse(savedCompanyImages);
            this.images.chart = parsed.chart;
            this.images.history = parsed.history;
            this.images.qualityCrew = parsed.qualityCrew;
            this.images.companyLogo = parsed.companyLogo;
            this.originalimages.chart = this.images.chart;
            this.originalimages.history = this.images.history;
            this.originalimages.qualityCrew = this.images.qualityCrew;
            this.originalimages.companyLogo = this.images.companyLogo;
        }
    },

    destroy() {
        window.removeEventListener('keydown', this.onKeyboard);
    },

    computed: {
        hasChanges() {
            return (
                this.companydescription !== this.originalcompanydescription ||
                this.established !== this.originalestablished ||
                this.recruitment !== this.originalrecruitment ||
                this.missionstatement !== this.originalmissionstatement ||
                this.honesty !== this.originalhonesty ||
                this.integrity !== this.originalintegrity ||
                this.quality !== this.originalquality ||
                this.history !== this.originalhistory ||
                this.images.chart !== this.originalimages.chart ||
                this.images.history !== this.originalimages.history ||
                this.images.qualityCrew !== this.originalimages.qualityCrew ||
                this.images.companyLogo !== this.originalimages.companyLogo
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
    .desc-header {
        font-size: 20px;
        font-weight: 600;
    }

    textarea {
        font-size: 15px;
        outline: none;
        resize: none;
    }

    .grid {
        gap: 20px;
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

    .modal-content img {
        max-height: 80vh;
    }
}

@media (min-width: 992px) {}

@media (min-width: 1200px) {
    .cms-container {
        margin-left: 310px;
        width: calc(100% - 310px);
        margin-top: 105px;
    }
}
</style>