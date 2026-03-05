<template>
    <div class="vmc-send-otp d-flex align-items-center justify-content-center">
        <div>
            <div class="send-otp-container d-flex align-items-center justify-content-center">
                <img :src="vmcLogo" alt="" style="width: 80px;">
                <div class="logo-desc">
                    <p class="mb-0 text-center vmc-text-primary" id="VMCMeaning">VERITAS MARITIME CORPORATION</p>
                    <p class="mb-0 text-center" id="VMCTag">QUALITY SERVICE, QUALITY CREW</p>
                </div>
            </div>
            <div class="send-otp-box px-4 py-4 bg-white d-flex align-items-center justify-content-center">
                <form action="">
                    <h2 class="text-dark">Send OTP</h2>
                    <div class="text-center">
                        <p>We have sent your verification<br> code to your email address.</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-center" style="gap:10px;">
                        <input v-for="(digit, index) in otp" :key="index" v-model="otp[index]"
                            @input="handleInput(index)" @keydown.backspace="handleBackspace(index)" ref="otpInputs"
                            type="text" class="otp-input text-center border-0" maxlength="1" required>
                    </div>
                    <div class="mt-4 mb-3">
                        <button type="submit"
                            class="verify-otp text-white vmc-bg-prime-4 border-0 px-2 py-1 rounded w-100">
                            Verify OTP
                        </button>
                    </div>
                    <div class="text-center">
                        <p class="text-dark">
                            Didn't receive the code?<br>
                            <button class="resend-code border-0 bg-transparent">
                                Resend Code
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SendOTP",
    data() {
        return {
            'vmcLogo': require(`@/assets/veritas_logo.png`),
            otp: ["", "", "", "", "", ""]
        }
    },
    methods: {
        // WILL GO TO THE NEXT BOX AFTER INSERTING NUMBER IN PREVIOUS BOX
        handleInput(index) {
            if (this.otp[index].length === 1 && index < this.otp.length - 1) {
                this.$refs.otpInputs[index + 1].focus();
            }
        },

        // WILL GO BACK TO THE PREVIOUS BOX AFTER DELETING ITS NUMBER
        handleBackspace(index) {
            if (!this.otp[index] && index > 0) {
                this.$refs.otpInputs[index - 1].focus();
            }
        }
    }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.vmc-send-otp {
    min-height: 100vh;
    background-image: url('/vessel_cape_sasanqua.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.vmc-send-otp::before {
    content: "";
    position: fixed;
    inset: 0;
    background-color: rgba(8, 98, 165, 0.4);
    z-index: 1;
}

.vmc-send-otp>div {
    position: relative;
    z-index: 2;
}

.send-otp-container {
    font-weight: 700;
}

#VMCTag {
    color: var(--vmc-primary-1);
}

.send-otp-box {
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

.vmc-input-box {
    position: relative;
    width: 310px;
    margin: 30px 0;
    border-bottom: 1px solid #000;
}

input {
    outline: none;
}

.vmc-input-box label {
    position: absolute;
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
}

.vmc-input-box input {
    height: 50px;
    font-size: 14px;
}

.vmc-input-box .icon {
    position: absolute;
    right: 8px;
    font-size: 1.2em;
    line-height: 50px;
}

.otp-input {
    background-color: rgb(228, 228, 228);
    width: 43px;
    height: 43px;
    border-radius: 7px;
    color: rgb(44, 44, 44);
    outline: none;
    font-weight: 600;
}

.otp-input:focus,
.otp-input:valid {
    transition-duration: .3s;
}

h2 {
    font-size: 24px;
    text-align: center;
}

a span {
    transition: 0.3s;
    color: var(--vmc-primary-4)
}

a:hover span {
    color: var(--vmc-primary-5);
}

div .verify-otp {
    transition: 0.3s;
}

div .verify-otp:hover {
    background-color: var(--vmc-primary-5);
}

.resend-code {
    color: var(--vmc-primary-4);
    font-weight: 500;
}

.resend-code:hover {
    text-decoration: underline;
    color: var(--vmc-primary-5)
}

@media (min-width: 330px) {
    .vmc-forgot-password {
        overflow-y: hidden;
    }

    .password-box {
        padding: 20px 0;
    }

}
</style>