<template>
    <div
        class="vmc-login-form position-relative d-flex justify-content-center align-items-center vh-100 overflow-hidden">
        <div>
            <div
                class="login-box px-4 py-4 mt-2 position-relative bg-white d-flex flex-column justify-content-center align-items-center">

                <div class="login-container d-flex justify-content-center align-items-center mb-4">
                    <img :src="vmcLogo" alt="" style="width: 70px;">
                    <div class="logo-desc text-left">
                        <p class="mb-0 vmc-text-primary" id="VMCMeaning">VERITAS MARITIME CORPORATION</p>
                        <p class="mb-0" id="VMCTag">QUALITY SERVICE, QUALITY CREW</p>
                    </div>
                </div>

                <!-- Added @submit.prevent to stop the page from refreshing -->
                <form @submit.prevent="handleLogin" class="w-100">
                    <h2 class="text-dark mb-4">Sign In</h2>

                    <!-- RESTORED USERNAME FIELD WITH mx-auto FOR CENTERING -->
                    <div class="vmc-input-box mx-auto my-4 position-relative mt-5">
                        <span class="icon position-absolute"><i class="text-dark bi bi-person-fill"></i></span>
                        <input class="text-dark w-100 bg-transparent border-0" type="text" v-model="username" required>
                        <label class="position-absolute">Username</label>
                    </div>

                    <!-- PASSWORD FIELD WITH mx-auto FOR CENTERING -->
                    <div class="vmc-input-box mx-auto my-4 position-relative">
                        <span class="icon position-absolute" @click="togglePassword">
                            <i v-if="showPassword" class="text-dark bi bi-eye-fill"></i>
                            <i v-else class="text-dark bi bi-eye-slash-fill"></i>
                        </span>
                        <!-- Added v-model="password" -->
                        <input class="text-dark w-100 bg-transparent border-0"
                            :type="showPassword ? 'text' : 'password'" v-model="password" required>
                        <label class="position-absolute">Password</label>
                    </div>

                    <!-- Display error message if login fails -->
                    <div v-if="errorMessage" class="text-danger text-center mb-3 font-weight-bold small">
                        {{ errorMessage }}
                    </div>

                    <div class="d-flex justify-content-center align-items-center">
                        <button type="submit"
                            class="text-white font-weight-bold vmc-bg-prime-4 border-0 p-2 text-uppercase">Login</button>
                    </div>

                    <div class="vmc-remember-forgot mx-auto d-flex justify-content-between mt-4"
                        style="max-width: 310px;">
                        <label class="d-flex">
                            <input type="checkbox">
                            <span class="text-dark">Remember me</span>
                        </label>
                        <span class="vmc-span">
                            <router-link :to="{ name: 'ForgotPassword' }">Forgot Password</router-link>
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
            // Added variables to hold what the user types and error messages
            username: '',
            password: '',
            errorMessage: '',

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
        },

        // This is the new function that talks to your backend
        async handleLogin() {
            try {
                this.errorMessage = ''; // Clear old errors when they try again

                // 1. Send username and password to your server.js
                const response = await fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: this.username,
                        password: this.password
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    // 2. Success! The backend gave us a "VIP Wristband" (Token). Save it in the browser.
                    localStorage.setItem('vmc_token', data.token);

                    // 3. Move the user to the admin page
                    this.$router.push('/admin');
                } else {
                    // 4. Failed. Show the message the backend sent (e.g., "Invalid password")
                    this.errorMessage = data.message || 'Login failed';
                }
            } catch (error) {
                // We log the actual error to the browser console so we can debug it
                console.error("Login Connection Error:", error);
                this.errorMessage = 'Cannot connect to the server. Check browser console for details.';
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

.vmc-login-form>div {
    position: relative;
    z-index: 2;
}

.login-container .logo-desc {
    font-weight: 700;
}

#VMCTag {
    color: var(--vmc-primary-3);
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
    cursor: pointer;
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