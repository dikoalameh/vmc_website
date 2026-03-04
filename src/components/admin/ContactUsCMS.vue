<template>
    <div class="cms-container mb-4">
        <ToastCMS ref="toast" />
        <div class="d-flex align-items-center justify-content-between px-3">
            <div class="contact-header text-dark">Contact Numbers</div>
            <button type="button" @click="clearText" class="vmc-bg-prime-6 text-white rounded px-2 py-1 border-0">Clear
                Inputs</button>
        </div>
        <hr class="px-0">
        <form action="" id="contacts" @submit.prevent="saveAllChanges">
            <div class="grid-header px-3 d-block d-sm-flex">
                <div class="input-group">
                    <input type="text" class="input-field w-100 text-dark p-2" placeholder="" v-model="hotline1">
                    <label class="floating-label">Hotline 1</label>
                </div>
                <div class="input-group">
                    <input type="text" class="input-field w-100 text-dark p-2" placeholder="" v-model="hotline2">
                    <label class="floating-label">Hotline 2</label>
                </div>
                <div class="input-group">
                    <input type="text" class="input-field w-100 text-dark p-2" placeholder="" v-model="faxnumber">
                    <label class="floating-label">Fax Number</label>
                </div>
            </div>
            <div class="grid-header px-3 d-block d-sm-flex">
                <div class="input-group">
                    <input type="text" class="input-field w-100 text-dark p-2" placeholder="" v-model="pccdiv">
                    <label class="floating-label">PCC Division</label>
                </div>
                <div class="input-group">
                    <input type="text" class="input-field w-100 text-dark p-2" placeholder="" v-model="bulkdiv">
                    <label class="floating-label">Bulk Position</label>
                </div>
                <div class="input-group">
                    <input type="text" class="input-field w-100 text-dark p-2" placeholder="" v-model="docsdiv">
                    <label class="floating-label">Docs Division</label>
                </div>
            </div>
            <div class="grid-header px-3 d-block d-sm-flex">
                <div class="input-group">
                    <input type="text" class="input-field w-100 text-dark p-2" placeholder="" v-model="trainingdiv">
                    <label class="floating-label">Training Division</label>
                </div>
                <div class="input-group">
                    <input type="text" class="input-field w-100 text-dark p-2" placeholder="" v-model="acctdept1">
                    <label class="floating-label">Accounting Dept 1</label>
                </div>
                <div class="input-group">
                    <input type="text" class="input-field w-100 text-dark p-2" placeholder="" v-model="acctdept2">
                    <label class="floating-label">Accounting Dept 2</label>
                </div>
            </div>
            <div class="grid-header px-3 d-block d-sm-flex">
                <div class="input-group">
                    <input type="text" class="input-field w-100 text-dark p-2" placeholder="" v-model="executive">
                    <label class="floating-label">Executive Offices</label>
                </div>
                <div class="input-group">
                    <input type="text" class="input-field w-100 text-dark p-2" placeholder="" v-model="admindept">
                    <label class="floating-label">Admin Department</label>
                </div>
            </div>
            <div class="grid-header px-3 d-block d-sm-flex">
                <div class="input-group">
                    <input type="text" class="input-field w-100 text-dark p-2" placeholder="" v-model="email1">
                    <label class="floating-label">Email Address 1</label>
                </div>
                <div class="input-group">
                    <input type="text" class="input-field w-100 text-dark p-2" placeholder="" v-model="email2">
                    <label class="floating-label">Email Address 2</label>
                </div>
            </div>
        </form>
        <div class="px-3">
            <button type="submit" form="contacts" class="vmc-bg-prime-4 border-0 rounded text-white mt-4 px-3 py-1">
                Save all Changes
            </button>
        </div>
    </div>
</template>

<script>
import ToastCMS from '../ToastCMS.vue';
export default {
    name: "ContactUsCMS",
    data() {
        return {
            hotline1: '',
            hotline2: '',
            faxnumber: '',
            pccdiv: '',
            bulkdiv: '',
            docsdiv: '',
            trainingdiv: '',
            acctdept1: '',
            acctdept2: '',
            executive: '',
            admindept: '',
            email1: '',
            email2: '',
            originalhotline1: '',
            originalhotline2: '',
            originalfaxnumber: '',
            originalpccdiv: '',
            originalbulkdiv: '',
            originaldocsdiv: '',
            originaltrainingdiv: '',
            originalacctdept1: '',
            originalacctdept2: '',
            originalexecutive: '',
            originaladmindept: '',
            originalemail1: '',
            originalemail2: '',
        }
    },
    components: {
        ToastCMS
    },
    methods: {
        clearText() {
            const isEmpty =
                (!this.hotline1 || this.hotline1.trim() === "") &&
                (!this.hotline2 || this.hotline2.trim() === "") &&
                (!this.faxnumber || this.faxnumber.trim() === "") &&
                (!this.pccdiv || this.pccdiv.trim() === "") &&
                (!this.bulkdiv || this.bulkdiv.trim() === "") &&
                (!this.docsdiv || this.docsdiv.trim() === "") &&
                (!this.trainingdiv || this.trainingdiv.trim() === "") &&
                (!this.acctdept1 || this.acctdept1.trim() === "") &&
                (!this.acctdept2 || this.acctdept2.trim() === "") &&
                (!this.executive || this.executive.trim() === "") &&
                (!this.admindept || this.admindept.trim() === "") &&
                (!this.email1 || this.email1.trim() === "") &&
                (!this.email2 || this.email2.trim() === "");

            this.hotline1 = "";
            this.hotline2 = "";
            this.faxnumber = "";
            this.pccdiv = "";
            this.bulkdiv = "";
            this.docsdiv = "";
            this.trainingdiv = "";
            this.acctdept1 = "";
            this.acctdept2 = "";
            this.executive = "";
            this.admindept = "";
            this.email1 = "";
            this.email2 = "";

            if (isEmpty) {
                this.$refs.toast.showToast(`Has no input`, "warning");
            }
            else {
                this.$refs.toast.showToast(`Cleared All Inputs`, "error");
            }
        },

        saveAllChanges(e) {
            e.preventDefault()
            // IF NO CHANGES WERE MADE AFTER SAVING
            if (!this.hasChanges) {
                this.$refs.toast.showToast("Nothing to save", "warning");
                return;
            }

            const contacts = {
                hotline1: this.hotline1,
                hotline2: this.hotline2,
                faxnumber: this.faxnumber,
                pccdiv: this.pccdiv,
                bulkdiv: this.bulkdiv,
                docsdiv: this.docsdiv,
                trainingdiv: this.trainingdiv,
                acctdept1: this.acctdept1,
                acctdept2: this.acctdept2,
                executuve: this.executive,
                email1: this.email1,
                email2: this.email2
            };

            localStorage.setItem("contactsInputs", JSON.stringify(contacts));

            // IF THERE IS ANY INPUT (ATLEAST ONE)
            this.$refs.toast.showToast("Saved all changes.", "success");

            // RELOAD PAGE AFTER 1.5 SECONDS
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }
    },

    mounted() {
        const savedContactsInputs = localStorage.getItem("contactsInputs");

        // IF THE CONTAINER IS NOT LOOPED
        if (savedContactsInputs) {
            const parsed = JSON.parse(savedContactsInputs);
            this.hotline1 = parsed.hotline1;
            this.hotline2 = parsed.hotline2;
            this.faxnumber = parsed.faxnumber;
            this.pccdiv = parsed.pccdiv;
            this.bulkdiv = parsed.bulkdiv;
            this.docsdiv = parsed.docsdiv;
            this.trainingdiv = parsed.trainingdiv;
            this.acctdept1 = parsed.acctdept1;
            this.acctdept2 = parsed.acctdept2;
            this.executive = parsed.executive;
            this.email1 = parsed.email1;
            this.email2 = parsed.email2;

            this.originalhotline1 = this.hotline1;
            this.originalhotline2 = this.hotline2;
            this.originalfaxnumber = this.faxnumber;
            this.originalpccdiv = this.pccdiv;
            this.originalbulkdiv = this.bulkdiv;
            this.originaldocsdiv = this.docsdiv;
            this.originaltrainingdiv = this.trainingdiv;
            this.originalacctdept1 = this.acctdept1;
            this.originalacctdept2 = this.acctdept2;
            this.originalexecutive = this.executive;
            this.originalemail1 = this.email1;
            this.originalemail2 = this.email2;
        }
    },

    computed: {
        hasChanges() {
            return (
                this.hotline1 !== this.originalhotline1 ||
                this.hotline2 !== this.originalhotline2 ||
                this.faxnumber !== this.originalfaxnumber ||
                this.pccdiv !== this.originalpccdiv ||
                this.bulkdiv !== this.originalbulkdiv ||
                this.docsdiv !== this.originaldocsdiv ||
                this.trainingdiv !== this.originaltrainingdiv ||
                this.acctdept1 !== this.originalacctdept1 ||
                this.acctdept2 !== this.originalacctdept2 ||
                this.executive !== this.originalexecutive ||
                this.email1 !== this.originalemail1 ||
                this.email2 !== this.originalemail2
            );
        }
    }
}
</script>

<style scoped>
hr {
    border-top: 1px solid black;
}

@media (min-width: 330px) {
    .toast-container {
        position: fixed;
        margin: auto;
        top: 20px;
        right: 20px;
    }

    .contact-header {
        font-size: 20px;
        font-weight: 600;
    }

    .grid-header {
        gap: 10px;
    }

    input {
        font-size: 15px;
        resize: none;
        outline: none;
        height: 36px;
    }

    .input-group {
        position: relative;
        display: flex;
        margin-top: 25px;
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

    button {
        transition: 0.3s;
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