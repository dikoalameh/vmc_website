<template>
    <div class="vmc-forgot-password d-flex align-items-center justify-content-center">
        <div>
            <div class="password-container d-flex align-items-center justify-content-center">
                <img :src="vmcLogo" alt="" style="width: 80px;">
                <div class="logo-desc">
                    <p class="mb-0 text-center vmc-text-primary" id="VMCMeaning">VERITAS MARITIME CORPORATION</p>
                    <p class="mb-0 text-center" id="VMCTag">QUALITY SERVICE, QUALITY CREW</p>
                </div>
            </div>
            <div class="password-box px-4 py-4 bg-white d-flex align-items-center justify-content-center">
                <form action="">
                    <h2 class="text-dark">Forgot Password</h2>
                    <div class="vmc-input-box my-4 position-relative">
                        <span class="icon position-absolute"><i class="text-dark bi bi-person-fill"></i></span>
                        <input class="text-dark w-100 bg-transparent border-0" type="text" required>
                        <label class="position-absolute">Email</label>
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="text-white vmc-bg-prime-4 border-0 px-2 py-1 rounded w-100">
                            Send Email
                        </button>
                    </div>
                    <a href="/auth/login" class="text-decoration-none" style="gap:5px;">
                        <span style="font-weight:500;">Back to Login</span>
                    </a>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ForgotPassword",
    data() {
        return {
            'vmcLogo': require(`@/assets/veritas_logo.png`)
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.vmc-forgot-password {
    min-height: 100vh;
    background-image: url('/vessel_cape_sasanqua.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.vmc-forgot-password::before {
    content: "";
    position: fixed;
    inset: 0;
    background-color: rgba(8, 98, 165, 0.4);
    z-index: 1;
}

.vmc-forgot-password>div {
    position: relative;
    z-index: 2;
}

.password-container {
    font-weight: 700;
}

#VMCTag {
    color: var(--vmc-primary-1);
}

.password-box {
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
    font-size: 12px;
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

a span {
    transition: 0.3s;
    color: var(--vmc-primary-4)
}

a:hover span {
    color: var(--vmc-primary-5);
    text-decoration: underline;
}

div button {
    transition: 0.3s;
}

div button:hover {
    background-color: var(--vmc-primary-5);
}
</style>