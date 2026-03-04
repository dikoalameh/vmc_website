<template>
    <div id="toast-container" class="toast-container">
        <div v-for="(toast, index) in toasts" :key="toast.id" class="toast rounded px-3 py-2"
            :class="[toast.type, { show: toast.show }]">
            {{ toast.message }}
            <span class="material-symbols-outlined toast-close" :class="toast.type" @click="closeToast(index)">
                close
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "ToastCMS",
    data() {
        return {
            toasts: [],
            toastTimeout: null
        };
    },
    methods: {
        showToast(message, type = "success") {
            const id = Date.now();

            // WILL REPLACE ANOTHER TOAST IF THE TOAST IS STILL BEING DISPLAYED
            if (this.toasts.length > 0) {
                const existingToast = this.toasts[0];
                existingToast.show = false;

                // SMALL DELAY
                setTimeout(() => {
                    existingToast.id = id;
                    existingToast.message = message;
                    existingToast.show = true;
                    existingToast.type = type
                }, 100);
            }
            else {
                this.toasts.push({ id, message, show: true, type });
            }

            // CLEAR PREVIOUS TIMER
            if (this.toastTimeout) {
                clearTimeout(this.toastTimeout);
            }

            // TIME BEFORE TOAST AUTO CLOSES
            this.toastTimeout = setTimeout(() => {
                this.closeToast(0);
            }, 3000);
        },

        // CLOSES THE TOAST WHEN CLICKING THE X BUTTON
        closeToast(index) {
            if (!this.toasts[index]) return;
            this.toasts[index].show = false;
        }
    }
};
</script>

<style scoped>
@media (min-width: 330px) {
    .toast {
        max-width: 300px;
        background-color: #d9ffc9;
        font-size: 16px;
        opacity: 0;
        transform: translateY(-20px);
        position: relative;
        transition: none;
    }

    .toast-close.success {
        color: #28a745;
    }

    .toast-close.error {
        color: #dc3545;
    }

    .toast-close.warning {
        color: #856404;
    }


    /* SUCCESS */
    .toast.success {
        background-color: #d9ffc9;
        border: 1px solid #28a745;
        color: #28a745;
    }

    /* ERROR */
    .toast.error {
        background-color: #ffe5e5;
        border: 1px solid #dc3545;
        color: #dc3545;
    }

    /* WARNING */
    .toast.warning {
        background-color: #fff3cd;
        border: 1px solid #ffc107;
        color: #856404;
    }

    .toast.show {
        animation: slideIn 0.3s forwards;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .toast-close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
    }
}
</style>
