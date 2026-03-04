<template>
    <div class="cms-container px-2" :class="{ 'dimmed': showFilterModal }">
        <!-- MODAL FORM FOR FILTER DATA -->
        <div v-if="showFilterModal"
            class="modal-overlay d-flex align-items-center justify-content-center fixed-top w-100 h-100 left-0"
            @click="closeFilterModal">
            <div class="modal-content bg-white overflow-hidden" @click.stop>
                <div class="modal-header d-flex justify-content-between align-items-center px-3 py-3">
                    <h2 class="m-0 text-dark">Filter</h2>
                    <button class="text-dark bg-transparent border-0 material-symbols-outlined"
                        @click="closeFilterModal">close</button>
                </div>
                <form class="modal-body mt-1" @submit.prevent="applyFilters">
                    <div class="w-100">
                        <label for="newscategory" class="text-dark">Role</label>
                        <select v-model="tempRole" class="w-100 text-dark" id="newscategory"
                            style="outline:none; height:30px;">
                            <option value="" class="text-dark" selected>All</option>
                            <option value="Admin" class="text-dark">Admin</option>
                        </select>
                    </div>
                    <div class="w-100 mt-4">
                        <label for="newsyear" class="text-dark">Year:</label>
                        <input type="date" v-model="tempDate" id="newsyear" class="w-100 text-dark px-1"
                            style="outline:none; height:30px;">
                    </div>
                    <div class="modal-actions d-flex justify-content-end mt-3" style="gap:10px;">
                        <button type="submit" class="vmc-bg-prime-5 rounded px-3 py-1 text-white border-0">Search
                            Filter</button>
                        <button type="button" class="vmc-bg-prime-4 rounded px-3 py-1 text-white border-0"
                            @click="closeFilterModal">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="search-container d-lg-flex align-items-lg-center justify-content-lg-end px-2" style="gap:10px;">
            <div class="filter">
                <button type="button" @click="showFilterModal = true; closeFilterModal"
                    class="material-symbols-outlined vmc-bg-prime-4 text-white border-0 rounded py-1">filter_alt</button>
            </div>
            <input type="text" v-model="searchQuery" @input="resetPage" placeholder="Search..."
                class="search-bar text-dark p-1" style="outline:none;" />
        </div>
        <div class="table-container overflow-auto mt-2">
            <table class="w-100 min-w-100">
                <thead>
                    <tr>
                        <th class="p-2">Account Name</th>
                        <th class="p-2">Username</th>
                        <th class="p-2">Role</th>
                        <th class="p-2">Date Registered</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in paginatedUsers" :key="index" class="border border-bottom">
                        <td class="p-2 text-dark">{{ user.accountname }}</td>
                        <td class="p-2 text-break text-dark">{{ user.username }}</td>
                        <td class="p-2 text-dark">{{ user.role }}</td>
                        <td class="p-2 text-dark">
                            {{ user.date }}<br>
                            {{ user.time }}
                        </td>
                    </tr>

                    <!-- IF THERE'S NO DATA FOUND -->
                    <tr v-if="paginatedUsers.length === 0">
                        <td colspan="6" class="text-dark text-center p-2">
                            No data found.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr class="px-0">
        <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center justify-content-center">
                <span style="font-weight:600;">
                    Showed Articles:
                    <!-- IF THE TABLE HAS NO DATA FOUND -->
                    <p v-if="paginatedUsers.length === 0" style="font-weight:400; color: #212529;">
                        {{ paginatedUsers.length }} out of {{ paginatedUsers.length }} entries
                    </p>

                    <!-- IF THERE IS DATA ON THE TABLE -->
                    <p v-else style="font-weight:400; color: #212529;">
                        {{ paginatedUsers.length }} out of {{ users.length }} entries
                    </p>
                </span>
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <button type="button" class="next-previous" @click="firstPage" :disabled="currentPage === 1"
                    style="border:1px solid black;">
                    &#60;&#60;
                </button>
                <button type="button" class="next-previous" @click="prevPage" :disabled="currentPage === 1"
                    style="border:1px solid black;">
                    &#60;
                </button>

                <!-- IF THE TABLE HAS NO DATA FOUND -->
                <span v-if="paginatedUsers.length === 0" class="mx-2">{{ totalPages }} of {{ totalPages }}</span>

                <!-- IF THERE IS DATA ON THE TABLE -->
                <span v-else class="mx-2">{{ currentPage }} of {{ totalPages }}</span>

                <button type="button" class="next-previous" @click="nextPage" :disabled="currentPage === totalPages"
                    style="border:1px solid black;">
                    &#62;
                </button>
                <button type="button" class="next-previous" @click="lastPage" :disabled="currentPage === totalPages"
                    style="border:1px solid black;">
                    &#62;&#62;
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UsersListsCMS",
    data() {
        return {
            currentPage: 1,
            perPage: 10,
            searchQuery: '',
            showFilterModal: false,
            users: [
                {
                    accountname: "Mario Pontes",
                    username: "mariopontes123",
                    role: "Admin",
                    date: "2026-03-02",
                    time: "16:41:30"
                }
            ],

            // TEMP VALUES (used inside modal only)
            tempRole: '',
            tempDate: '',

            // APPLIED VALUES (displays the selected filter)
            selectedRole: '',
            selectedDate: '',
        }
    },

    computed: {
        filteredUsers() {
            let result = this.users;
            // V-MODEL USED FOR THE CONDITIONAL STATEMENT

            if (this.searchQuery) {
                // TO DISPLAY THE SPECIFIC INPUT IN SEARCHBAR
                const query = this.searchQuery.toLowerCase();
                result = result.filter(user =>
                    user.accountname.toLowerCase().includes(query) ||
                    user.username.toLowerCase().includes(query) ||
                    user.role.toLowerCase().includes(query) ||
                    user.date.toLowerCase().includes(query) ||
                    user.time.toLowerCase().includes(query)
                );
            }

            // CATEGORY FILTER
            if (this.selectedCategory) {
                result = result.filter(user =>
                    user.category === this.selectedCategory
                );
            }

            // DATE FILTER
            if (this.selectedDate) {
                result = result.filter(user =>
                    user.date === this.selectedDate
                );
            }

            return result;
        },

        paginatedUsers() {
            const start = (this.currentPage - 1) * this.perPage;
            const end = start + this.perPage;
            return this.filteredUsers.slice(start, end);
        },

        totalPages() {
            return Math.ceil(this.filteredUsers.length / this.perPage);
        }
    },

    methods: {
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        lastPage() {
            this.currentPage = this.totalPages;
        },
        firstPage() {
            this.currentPage = 1;
        },
        resetPage() {
            this.currentPage = 1;
        },

        // CLOSE MODAL FUNCTIONALITY
        closeFilterModal() {
            this.showFilterModal = false;
            this.showEditArticleModal = false;
        },

        applyFilters() {
            this.selectedCategory = this.tempCategory;
            this.selectedDate = this.tempDate;

            this.currentPage = 1;
            this.closeFilterModal();
        },

        onKeyboard(e) {
            if (this.showFilterModal || this.showEditArticleModal) {
                switch (e.key) {
                    case 'Escape':
                        this.showFilterModal = false;
                        this.showEditArticleModal = false;
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
    }
}
</script>

<style scoped>
hr {
    border-top: 1px solid black;
}

button span {
    font-size: 20px;
}

button span,
span {
    color: #212529
}

span {
    margin-top: 2px;
}

.next-previous {
    color: black;
}

.next-previous:hover {
    background-color: black;
    color: white;
}

@media (min-width: 330px) {
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

    .table-container {
        max-height: 350px;
        height: 350px;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    thead th {
        position: sticky;
        top: 0;
        background-color: var(--vmc-primary-6);
        color: white;
    }

    th {
        width: 25.00%;
    }

    tr:nth-child(odd) {
        background-color: #f0f0f0;
    }

    .search-bar {
        width: 100%;
        margin-top: 10px;
    }

    .filter {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row-reverse;
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

    .modal-body {
        padding: 20px;
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

@media (min-width: 992px) {
    .search-bar {
        width: 300px;
        margin-top: 0;
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