<template>
    <div class="vmc-login-form position-relative d-flex justify-content-center align-items-center vh-100 overflow-hidden">
        <div>
            <div class="login-container d-flex justify-content-center align-items-center">
                <img :src="vmcLogo" alt="" style="width: 80px;">
                <div class="logo-desc">
                    <p class="mb-0 text-center vmc-text-primary" id="VMCMeaning">VERITAS MARITIME CORPORATION</p>
                    <p class="mb-0 text-center" id="VMCTag">QUALITY SERVICE, QUALITY CREW</p>
                </div>
            </div>
            <div class="login-box px-4 py-4 mt-2 position-relative bg-white d-flex justify-content-center align-items-center">
                <form action="">
                    <h2 class="text-dark">Sign In</h2>
                    <div class="vmc-input-box my-4 position-relative mt-5">
                        <span class="icon position-absolute"><i class="text-dark bi bi-person-fill"></i></span>
                        <input class="text-dark w-100 bg-transparent border-0" type="text" required>
                        <label class="position-absolute">Username</label>
                    </div>
                    <div class="vmc-input-box my-4 position-relative">
                        <span class="icon position-absolute" @click="togglePassword">
                            <i v-if="showPassword" class="text-dark bi bi-eye-fill"></i>
                            <i v-else class="text-dark bi bi-eye-slash-fill"></i>
                        </span>
                        <input class="text-dark w-100 bg-transparent border-0" :type="showPassword ? 'text' : 'password'" required>
                        <label class="position-absolute">Password</label>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <button type="submit" class="text-white font-weight-bold vmc-bg-prime-4 border-0 p-2 text-uppercase">Login</button>
                    </div>
                    <div class="vmc-remember-forgot d-flex justify-content-between mt-4">
                        <label class="d-flex">
                            <input type="checkbox">
                            <span class="text-dark">
                                Remember me
                            </span>
                        </label>
                        <span class="vmc-span">
                            <router-link :to="{name: 'ForgotPassword'}">Forgot Password</router-link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginPage",
    data() {
        return {
            // FUNCTION AND IMAGES
            showPassword: false,
            inputType: "password",
            'vmcLogo': require(`@/assets/veritas_logo.png`)
        }
    },
    methods: {
        togglePassword() {
            if (this.showPassword) {
                this.showPassword = false;
                this.inputType = "password";
            }
            else {
                this.showPassword = true;
                this.inputType = "text";
            }
        }
    }
}
</script>

<style scoped>
.vmc-login-form {
    background-image: url('/vessel_cape_sasanqua.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.vmc-login-form::before {
    content: "";
    position: fixed;
    inset: 0;
    background-color: rgba(8, 98, 165, 0.4);
    z-index: 1;
}

.vmc-login-form > div {
    position: relative;
    z-index: 2;
}

.login-container .logo-desc {
    font-weight: 700;
}

#VMCTag {
    color: var(--vmc-primary-1);
}

.login-box {
    margin-top: 10px;
    position: relative;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    border: 2px solid var(--vmc-dark-2);
    border-radius: 20px;
    box-shadow: 0 0 15px 0;
}

h2 {
    font-size: 24px;
    text-align: center;
}

.vmc-input-box {
    width: 310px;
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

div button {
    width: 250px;
    border-radius: 20px;
    letter-spacing: 1px;
}

.vmc-remember-forgot label {
    column-gap: 3px;
}

.vmc-remember-forgot a {
    transition: 0.3s all;
}

/* MOBILE RESPONSIVENESS */
@media (min-width: 330px) {
    .login-box {
        background-size: cover;
        background-attachment: fixed;
    }
}
</style>