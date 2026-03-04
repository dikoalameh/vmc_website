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
                        <label for="page" class="text-dark">Page:</label>
                        <select v-model="tempPage" class="w-100 text-dark" id="page" style="outline:none; height:30px;">
                            <option value="" class="text-dark">All</option>
                            <option value="Key Visuals" class="text-dark">Key Visuals</option>
                            <option value="Job Hiring" class="text-dark">Job Hiring</option>
                            <option value="Crew and Fleet Status" class="text-dark">Crew and Fleet Status</option>
                            <option value="Membership and Affiliations" class="text-dark">Membership and Affiliations
                            </option>
                            <option value="The Company" class="text-dark">The Company</option>
                            <option value="Our Principals" class="text-dark">Our Principals</option>
                            <option value="News Article" class="text-dark">News Article</option>
                            <option value="CSR Activities" class="text-dark">CSR Activities</option>
                            <option value="Office Programs" class="text-dark">Office Programs</option>
                            <option value="Allottees" class="text-dark">Allottees</option>
                            <option value="Veritas Scholarship and Cadetship" class="text-dark">Veritas Scholarship and
                                Cadetship</option>
                            <option value="Crew Development" class="text-dark">Crew Development</option>
                            <option value="Schedules" class="text-dark">Schedules</option>
                            <option value="Career" class="text-dark">Career</option>
                            <option value="Contacts" class="text-dark">Contacts</option>
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
                    class="d-flex align-items-center vmc-bg-prime-4 text-white border-0 rounded py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none"
                        stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-funnel-icon lucide-funnel">
                        <path
                            d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
                    </svg>
                </button>
            </div>
            <input type="text" v-model="searchQuery" @input="resetPage" placeholder="Search..."
                class="search-bar text-dark p-1" style="outline:none;" />
        </div>

        <div class="table-container overflow-auto mt-2">
            <table class="w-100 min-w-100">
                <thead>
                    <tr>
                        <th class="p-2">Name</th>
                        <th class="p-2">Page</th>
                        <th class="p-2">Actions</th>
                        <th class="p-2">Date Saved</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in paginatedUsers" :key="index" class="border border-bottom">
                        <td class="p-2 text-dark">
                            {{ user.name }}
                        </td>
                        <td class="p-2 text-dark">
                            {{ user.page }}
                        </td>
                        <td class="p-2 text-dark">
                            {{ user.actions }}
                        </td>
                        <td class="p-2 text-dark">
                            {{ user.date }}<br>
                            {{ user.time }}
                        </td>
                    </tr>
                    <!-- IF THERE'S NO DATA FOUND -->
                    <tr v-if="paginatedUsers.length === 0" class="border border-bottom">
                        <td colspan="4" class="text-dark text-center p-2">
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
                    Showed Log Data:
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
    name: "ActionLogCMS",
    data() {
        return {
            currentPage: 1,
            perPage: 10,
            searchQuery: '',
            showFilterModal: false,
            // TEMP VALUES (used inside modal only)
            tempPage: '',
            tempDate: '',

            // APPLIED VALUES (displays the selected filter)
            selectedPage: '',
            selectedDate: '',

            // SAMPLE DATA (NO BACKEND)
            users: [
                {
                    name: "John Doe",
                    page: "Key Visuals",
                    actions: "Saved the main content changes for Key Visuals",
                    date: "2026-03-05",
                    time: "15:29:20",
                },
                {
                    name: "Alfreds Futterkiste",
                    page: "Crew and Fleet Status",
                    actions: "Saved the main content changes for Crew and Fleet Status",
                    date: "2026-01-20",
                    time: "18:19:21",
                },
                {
                    name: "Jane Doe",
                    page: "CSR Activities",
                    actions: "Saved the main content changes for CSR Activities",
                    date: "2026-01-05",
                    time: "05:22:20",
                },
                {
                    name: "Pedro Afonso",
                    page: "News",
                    actions: "Saved the main content changes for News",
                    date: "2026-03-24",
                    time: "22:29:34",
                },
                {
                    name: "Diego Roel",
                    page: "Contacts",
                    actions: "Saved the main content changes for Contacts",
                    date: "2026-03-04",
                    time: "11:42:12",
                },
                {
                    name: "Pablo Escobar",
                    page: "Job Hiring",
                    actions: "Enabled Job Hiring pop up",
                    date: "2025-11-21",
                    time: "15:22:45",
                },
                {
                    name: "Martin Sommers",
                    page: "Allottees",
                    actions: "Saved the main content changes for Allottees",
                    date: "2026-02-25",
                    time: "12:50:55",
                },
                {
                    name: "Patricio Simpson",
                    page: "Contacts",
                    actions: "Saved the main content changes for Contacts",
                    date: "2026-03-21",
                    time: "12:21:33",
                },
                {
                    name: "Paolo Accorti",
                    page: "Veritas Scholarship and Cadetship",
                    actions: "Saved the main content changes for Veritas Scholarship and Cadetship",
                    date: "2026-03-01",
                    time: "23:51:42",
                },
                {
                    name: "Lino Rodriguez",
                    page: "Job Hiring",
                    actions: "Saved the main content changes for Job Hiring",
                    date: "2025-11-21",
                    time: "15:53:25",
                },
                {
                    name: "Yoshi Latimer",
                    page: "The Company",
                    actions: "Saved the main content changes for The Company",
                    date: "2025-12-15",
                    time: "20:55:23",
                },
                {
                    name: "Mario Pontes",
                    page: "Office Programs",
                    actions: "Saved the main content changes for Office Programs",
                    date: "2026-01-21",
                    time: "19:11:48",
                }
            ]
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
                    user.name.toLowerCase().includes(query) ||
                    user.page.toLowerCase().includes(query) ||
                    user.actions.toLowerCase().includes(query) ||
                    user.date.includes(query) ||
                    user.time.includes(query)
                );
            }

            // CATEGORY FILTER
            if (this.selectedPage) {
                result = result.filter(user =>
                    user.page === this.selectedPage
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
            this.selectedPage = this.tempPage;
            this.selectedDate = this.tempDate;

            this.currentPage = 1;
            this.closeFilterModal();
        },

        onKeyboard(e) {
            if (this.showFilterModal) {
                switch (e.key) {
                    case 'Escape':
                        this.showFilterModal = false;
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

button span,
span {
    color: #212529;
}

.next-previous {
    color: black;
}

.next-previous:hover {
    background-color: black;
    color: white;
}

@media (min-width: 330px) {
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

    .search-container {
        margin-top: 10px;
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

    /* MODAL FORM BODY */
    .modal-body {
        padding: 20px;
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

    .table-container::-webkit-scrollbar {
        width: 4px;
    }

    .table-container::-webkit-scrollbar-thumb {
        background-color: #666;
    }

    .table-container::-webkit-scrollbar-thumb:hover {
        background: #6b7280;
    }

    .search-container {
        margin-top: 0;
    }
}
</style>