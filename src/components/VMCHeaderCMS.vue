<template>
    <div class="cms-container d-none d-xl-flex" :class="{ 'dimmed': showChangePasswordModal || showEditProfileModal }">
        <div v-if="showChangePasswordModal"
            class="modal-overlay d-flex align-items-center justify-content-center fixed-top w-100 h-100 left-0"
            @click="closeModal">
            <div class="modal-content bg-white overflow-hidden" @click.stop>
                <div class="modal-header d-flex justify-content-between align-items-center px-3 py-3">
                    <h2 class="m-0 text-dark">Change Password</h2>
                    <button class="close-btn text-dark bg-transparent border-0" @click="closeModal">&times;</button>
                </div>
                <form class="modal-body mt-1">
                    <div class="vmc-input-box w-100 mb-3 position-relative">
                        <span class="icon position-absolute" @click="toggleOldPassword">
                            <i v-if="showOldPassword" class="text-dark bi bi-eye-fill"></i>
                            <i v-else class="text-dark bi bi-eye-slash-fill"></i>
                        </span>
                        <input class="text-dark w-100 bg-transparent border-0"
                            :type="showOldPassword ? 'text' : 'password'" v-model="oldpassword" required>
                        <label class="position-absolute">Old Password</label>
                    </div>
                    <div class="vmc-input-box w-100 my-4 position-relative">
                        <span class="icon position-absolute" @click="toggleNewPassword">
                            <i v-if="showNewPassword" class="text-dark bi bi-eye-fill"></i>
                            <i v-else class="text-dark bi bi-eye-slash-fill"></i>
                        </span>
                        <input class="text-dark w-100 bg-transparent border-0"
                            :type="showNewPassword ? 'text' : 'password'" v-model="newpassword" required>
                        <label class="position-absolute">New Password</label>
                    </div>
                    <div class="vmc-input-box w-100 my-4 position-relative">
                        <span class="icon position-absolute" @click="toggleConfirmNewPassword">
                            <i v-if="showConfirmNewPassword" class="text-dark bi bi-eye-fill"></i>
                            <i v-else class="text-dark bi bi-eye-slash-fill"></i>
                        </span>
                        <input class="text-dark w-100 bg-transparent border-0"
                            :type="showConfirmNewPassword ? 'text' : 'password'" v-model="confirmnewpassword" required>
                        <label class="position-absolute">Confirm New Password</label>
                    </div>
                    <div class="modal-actions d-flex justify-content-end mt-3">
                        <button type="submit"
                            class="vmc-bg-prime-5 rounded px-3 py-1 text-white border-0">Submit</button>
                        <button type="button" class="vmc-bg-prime-4 rounded px-3 py-1 text-white border-0"
                            @click="closeModal">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        <div v-if="showEditProfileModal"
            class="modal-overlay d-flex align-items-center justify-content-center fixed-top w-100 h-100 left-0"
            @click="closeModal">
            <div class="modal-content bg-white overflow-hidden" @click.stop>
                <div class="modal-header d-flex justify-content-between align-items-center px-3 py-3">
                    <h2 class="m-0 text-dark">Edit Profile</h2>
                    <button class="close-btn text-dark bg-transparent border-0" @click="closeModal">&times;</button>
                </div>
                <form class="modal-body">
                    <div class="d-flex flex-column align-items-center mb-3">
                        <div class="position-relative">
                            <img :src="profile" alt="" id="profilePreview" class="rounded-circle"
                                style="width:110px; height:110px; object-fit:cover;">
                            <label for="profileImage"
                                class="select-photo material-symbols-outlined text-white p-2 rounded-circle vmc-bg-prime-5"
                                style="cursor:pointer; transition: 0.3s">
                                photo_camera
                            </label>
                            <input type="file" id="profileImage" accept="image/*" class="d-none"
                                @change="previewImage($event)">
                        </div>
                        <button type="button" class="mt-2 vmc-bg-prime-6 text-white border-0 rounded px-3 py-1"
                            @click="removeProfileImage($event)">
                            Remove Photo
                        </button>
                    </div>
                    <div class="vmc-input-box mt-2 mb-4 position-relative">
                        <span class="icon position-absolute"><i class="text-dark bi bi-person-fill"></i></span>
                        <input class="text-dark w-100 bg-transparent border-0" type="text" required>
                        <label class="position-absolute">Account Name</label>
                    </div>
                    <div class="vmc-input-box w-100 mb-4 position-relative">
                        <span class="icon position-absolute" @click="togglePassword">
                            <i v-if="showPassword" class="text-dark bi bi-eye-fill"></i>
                            <i v-else class="text-dark bi bi-eye-slash-fill"></i>
                        </span>
                        <input class="text-dark w-100 bg-transparent border-0"
                            :type="showPassword ? 'text' : 'password'" v-model="password" required>
                        <label class="position-absolute">Password</label>
                    </div>
                    <div class="vmc-input-box w-100 mb-4 position-relative">
                        <span class="icon position-absolute" @click="toggleConfirmPassword">
                            <i v-if="showConfirmPassword" class="text-dark bi bi-eye-fill"></i>
                            <i v-else class="text-dark bi bi-eye-slash-fill"></i>
                        </span>
                        <input class="text-dark w-100 bg-transparent border-0"
                            :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmpassword" required>
                        <label class="position-absolute">Confirm Password</label>
                    </div>
                    <div class="modal-actions d-flex justify-content-end mt-3">
                        <button type="submit"
                            class="vmc-bg-prime-5 rounded px-3 py-1 text-white border-0">Submit</button>
                        <button type="button" class="vmc-bg-prime-4 rounded px-3 py-1 text-white border-0"
                            @click="closeModal">Cancel</button>
                    </div>
                </form>
            </div>
        </div>

        <header class="d-xl-block fixed-top left-0">
            <nav class="w-100 d-flex align-items-center justify-content-between overflow-hidden">
                <h2 class="text-dark my-3 mx-3">{{ pageTitle }}</h2>
                <div class="vmc-profile-wrap my-3 mx-3 position-relative">
                    <img :src="profile" alt="" class="vmc-profile-picture rounded-circle" @click="toggleDropdown">
                    <div class="vmc-profile">
                        <ul v-if="isDropdownOpen"
                            class="dropdown-menu dropdown-menu-end shadow show vmc-teleported-dropdown">
                            <li class="px-3 py-2 d-flex align-items-center">
                                <img :src="profile" class="rounded-circle me-1" style="width:40px; height:40px;">
                                <strong class="text-dark">ACCOUNT NAME</strong>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <button
                                    class="dropdown-menu-items bg-transparent border-0 list-unstyled w-100 py-2 d-flex align-items-center justify-content-between px-3"
                                    @click="toggleSettings">
                                    <div class="icon-lists d-flex align-items-center text-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                            viewBox="0 0 24 24" fill="none" stroke="#212529" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-settings-icon lucide-settings">
                                            <path
                                                d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                        Settings
                                    </div>
                                    <span class="material-symbols-outlined text-dark"
                                        :class="{ 'rotate': isSettingsOpen }">keyboard_arrow_right</span>
                                </button>
                                <ul v-if="isSettingsOpen" class="list-unstyled pb-2">
                                    <li>
                                        <button
                                            class="open-settings-btn px-4 py-2 w-100 bg-transparent text-dark d-flex align-items-center border-0"
                                            @click="openSettingsModal('password')">
                                            <div class="icon-lists d-flex align-items-center text-dark">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                    viewBox="0 0 24 24" fill="none" stroke="#212529" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="lucide lucide-key-round-icon lucide-key-round">
                                                    <path
                                                        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                                                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
                                                </svg>
                                                Change Password
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            class="open-settings-btn px-4 py-2 w-100 bg-transparent text-dark d-flex align-items-center border-0"
                                            @click="openSettingsModal('profile')">
                                            <div class="icon-lists d-flex align-items-center text-dark">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                    viewBox="0 0 24 24" fill="none" stroke="#212529" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="lucide lucide-circle-user-round-icon lucide-circle-user-round">
                                                    <path d="M18 20a6 6 0 0 0-12 0" />
                                                    <circle cx="12" cy="10" r="4" />
                                                    <circle cx="12" cy="12" r="10" />
                                                </svg>
                                                Edit Profile
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-menu-items text-decoration-none w-100 py-2 d-flex align-items-center justify-content-between px-3"
                                    href="/auth/login">
                                    <div class="icon-lists text-dark d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                            viewBox="0 0 24 24" fill="none" stroke="#212529" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-log-out-icon lucide-log-out">
                                            <path d="m16 17 5-5-5-5" />
                                            <path d="M21 12H9" />
                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                        </svg>
                                        Logout
                                    </div>
                                    <span class="material-symbols-outlined text-dark">keyboard_arrow_right</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    name: "VMCHeaderCMS",
    data() {
        return {
            // PROFILE IMAGE
            profile: require("@/assets/profile-black.png"),

            // V-MODEL IN TAGS
            password: '',
            confirmpassword: '',
            oldpassword: '',
            newpassword: '',
            confirmnewpassword: '',

            // INPUT TYPES
            showPassword: false,
            showConfirmPassword: false,
            showOldPassword: false,
            showNewPassword: false,
            showConfirmNewPassword: false,
            inputType: ["password", "confirmpassword", "newpassword", "confirmnewpassword", "oldpassword"],

            // FUNCTION
            showChangePasswordModal: false,
            showEditProfileModal: false,
            isDropdownOpen: false,
            isNavOpen: false,

            // SETTINGS DROPDOWN MENU
            isSettingsOpen: false
        }
    },
    methods: {
        // CLEARS THE INPUTS
        resetForm() {
            // CURRENT PASSWORD IN EDIT PROFILE MODAL FORM
            this.password = '';
            this.confirmpassword = '';

            // CHANGE PASSWORD MODAL FORM
            this.oldpassword = '';
            this.newpassword = '';
            this.confirmnewpassword = '';

            // REVERTS TO HIDE PASSWORD
            this.showPassword = false;
            this.showConfirmPassword = false;

            this.showOldPassword = false;
            this.showNewPassword = false;
            this.showConfirmNewPassword = false;
        },

        // FUNCTIONALITY OF SHOWING THE PASSWORD
        togglePassword() {
            if (this.showPassword) {
                this.showPassword = false;
                this.inputType = "password";
            }
            else {
                this.showPassword = true;
                this.inputType = "text";
            }
        },

        toggleConfirmPassword() {
            if (this.showConfirmPassword) {
                this.showConfirmPassword = false;
                this.inputType = "confirmpassword"
            }
            else {
                this.showConfirmPassword = true;
                this.inputType = "text";
            }
        },

        toggleOldPassword() {
            if (this.showOldPassword) {
                this.showOldPassword = false;
                this.inputType = "oldpassword"
            }
            else {
                this.showOldPassword = true;
                this.inputType = "text";
            }
        },

        toggleNewPassword() {
            if (this.showNewPassword) {
                this.showNewPassword = false;
                this.inputType = "newpassword";
            }
            else {
                this.showNewPassword = true;
                this.inputType = "text";
            }
        },
        toggleConfirmNewPassword() {
            if (this.showConfirmNewPassword) {
                this.showConfirmNewPassword = false;
                this.inputType = "confirmnewpassword"
            }
            else {
                this.showConfirmNewPassword = true;
                this.inputType = "text";
            }
        },

        // DROPDOWN MENU
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen,
                this.isSettingsOpen = false
        },

        // SETTINGS DROPDOWN MENU
        toggleSettings() {
            this.isSettingsOpen = !this.isSettingsOpen
        },

        // CLOSE MODAL FUNCTIONALITY
        closeModal() {
            this.showChangePasswordModal = false,
                this.showEditProfileModal = false,
                this.resetForm();
        },

        // OPEN SETTINGS MODAL (EDIT PROFILE AND CHANGE PASSWORD)
        openSettingsModal(type) {
            // RESET ALL FIELDS
            this.resetForm();

            // RESET FILE INPUT
            this.profile = require("@/assets/profile-black.png");

            // OPEN MODAL
            if (type === 'password') {
                this.showChangePasswordModal = true;
            }

            if (type === 'profile') {
                this.showEditProfileModal = true;
            }

            this.isDropdownOpen = false;
            this.isSettingsOpen = false;
        },

        // UPLOAD IMAGE VIA BUTTON
        previewImage(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function () {
                document.getElementById('profilePreview').src = reader.result;
            }
            reader.readAsDataURL(file);
        },

        removeProfileImage() {
            const profilePreview = document.getElementById('profilePreview');
            const profileImage = document.getElementById('profileImage');

            profileImage.value = "";
            profilePreview.src = require("@/assets/profile-black.png")
        },

        onKeyboard(e) {
            if (this.showChangePasswordModal || this.showEditProfileModal) {
                switch (e.key) {
                    case 'Escape':
                        this.showEditProfileModal = false;
                        this.showChangePasswordModal = false;
                        break;
                }
            }
        },
    },
    mounted() {
        window.addEventListener('keydown', this.onKeyboard);
    },

    destroy() {
        window.removeEventListener('keydown', this.onKeyboard);
    },

    computed: {
        pageTitle() {
            return this.$route.meta.title
        }
    },

    watch: {
        '$route.meta.title': {
            immediate: true,
            handler(newTitle) {
                document.title = newTitle
            }
        }
    }
}
</script>

<style scoped>
.vmc-bg-prime-5:hover {
    background-color: var(--vmc-primary-7);
}

.vmc-bg-prime-4:hover {
    background-color: var(--vmc-primary-6)
}

@media (min-width: 330px) {}

@media (min-width: 992px) {
    .cms-container {
        display: none;
    }
}

@media (min-width: 1200px) {
    .cms-container {
        margin-left: 310px;
    }

    .cms-container.dimmed {
        position: relative;
    }

    .cms-container.dimmed::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        z-index: 2;
    }

    header {
        margin-left: 310px;
        z-index: 99;
        background-color: #e1e1e1;
        width: calc(100% - 310px);
    }

    .cms-container nav {
        overflow-y: auto;
        overscroll-behavior: contain;
    }

    /* PROFILE PICTURE */
    .vmc-profile-picture {
        vertical-align: middle;
        width: 50px;
        height: 50px;
    }

    .dropdown-menu {
        max-width: 310px;
        width: 310px;
        position: absolute;
        right: 0;
        left: auto;
        margin-top: 10px;
        z-index: 1000;
    }

    .vmc-teleported-dropdown {
        position: fixed;
        top: 70px;
        right: 30px;
        z-index: 9999;
    }

    strong {
        font-size: 18px;
    }

    .dropdown-divider {
        height: 1px;
        border-width: 0;
        color: gray;
        background-color: gray;
    }

    .dropdown-menu-items {
        transition: 0.3s;
    }

    .dropdown-menu-items span {
        font-size: 22px;
        transition: transform 0.3s;
    }

    .icon-lists {
        gap: 5px;
    }

    /* MODAL FORM */
    .modal-overlay {
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9999;
        overflow-y: auto;
        overscroll-behavior: contain;
    }

    /* MODAL FORM BOX */
    .modal-content {
        border-radius: 8px;
        width: 400px;
        max-width: 90%;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        animation: slideDown 0.3s ease-out;
    }

    /* MODAL FORM HEADER */
    .modal-header {
        background-color: #f5f5f5;
        border-bottom: 1px solid #ddd;
    }

    .modal-header h2 {
        font-size: 1.2rem;
    }

    .close-btn {
        font-size: 1.4rem;
        cursor: pointer;
    }

    /* MODAL FORM BODY */
    .modal-body {
        padding: 20px;
    }

    .modal-actions {
        gap: 10px;
    }

    /* INPUTS */
    .vmc-input-box {
        border-bottom: 1px solid #000;
    }

    .vmc-input-box label {
        top: 50%;
        left: 2px;
        transform: translateY(-50%);
        font-size: 1em;
        pointer-events: none;
        transition: 0.3s;
    }

    .vmc-input-box input:focus~label,
    .vmc-input-box input:valid~label {
        top: -5px;
        font-size: 12px;
    }

    .vmc-input-box input {
        outline: none;
        height: 50px;
        font-size: 14px;
    }

    .vmc-input-box .icon {
        right: 8px;
        font-size: 1.2em;
        line-height: 50px;
    }

    .open-settings-btn {
        transition: 0.3s;
    }

    .dropdown-menu-items:hover,
    .open-settings-btn:hover {
        background-color: #f5f5f5 !important;
        cursor: pointer;
    }

    .rotate {
        transform: rotate(90deg);
        transition: transform 0.2s;
    }

    .select-photo {
        position: absolute;
        bottom: 0;
        right: 0;
    }

    /* MODAL TOGGLE ANIMATION */
    @keyframes slideDown {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }

        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
}
</style> 