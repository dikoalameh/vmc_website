<template>
    <div class="cms-container px-2" :class="{ 'dimmed': showFilterModal || showEditArticleModal }">
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
                        <label for="newscategory" class="text-dark">Category:</label>
                        <select v-model="tempCategory" class="w-100 text-dark" id="newscategory"
                            style="outline:none; height:30px;">
                            <option value="" class="text-dark">All</option>
                            <option value="Company News" class="text-dark">Company News</option>
                            <option value="Crew Updates" class="text-dark">Crew Updates</option>
                            <option value="Government Advisories" class="text-dark">Government Advisories</option>
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

        <!-- EDIT MODAL FORM -->
        <div v-if="showEditArticleModal"
            class="modal-overlay d-flex align-items-center justify-content-center fixed-top w-100 h-100 left-0"
            @click="closeFilterModal">
            <div class="modal-content bg-white overflow-hidden" @click.stop>
                <div class="modal-header d-flex justify-content-between align-items-center px-3 py-3">
                    <h2 class="m-0 text-dark">Edit Article</h2>
                    <button class="text-dark bg-transparent border-0 material-symbols-outlined"
                        @click="closeFilterModal">close</button>
                </div>
                <form class="modal-body mt-1">
                    <div class="w-100">
                        <label for="title" class="text-dark">Article Title</label>
                        <input type="text" id="title" class="w-100 text-dark px-1" style="outline:none; height:30px;">
                    </div>
                    <div class="w-100 d-flex align-items-center justify-content-center mt-3" style="gap:10px">
                        <div class="w-100">
                            <label for="newscategory" class="text-dark">Category:</label>
                            <select class="w-100 text-dark" id="newscategory" style="outline:none; height:30px;">
                                <option value="" selected disabled>---Choose Category---</option>
                                <option value="Company News" class="text-dark">Company News</option>
                                <option value="Crew Updates" class="text-dark">Crew Updates</option>
                                <option value="Government Advisories" class="text-dark">Government Advisories</option>
                            </select>
                        </div>
                        <div class="w-100">
                            <label for="newsyear" class="text-dark">Year:</label>
                            <input type="date" id="newsyear" class="w-100 text-dark px-1"
                                style="outline:none; height:30px;">
                        </div>
                    </div>
                    <div class="w-100 mt-3">
                        <label for="author" class="text-dark">Author</label>
                        <input type="text" id="author" class="w-100 text-dark px-1" style="outline:none; height:30px;">
                    </div>
                    <div class="w-100 mt-3">
                        <label for="description" class="text-dark">Description</label>
                        <textarea rows="3" name="" id="description" class="w-100 text-dark px-1"
                            style="resize:none;"></textarea>
                    </div>
                    <div class="d-flex justify-content-end mt-3" style="gap:10px;">
                        <button type="submit" class="vmc-bg-prime-5 rounded px-3 py-1 text-white border-0">Save All
                            Changes</button>
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
                        <th class="p-2">Author</th>
                        <th class="p-2">Article Title</th>
                        <th class="p-2">Category</th>
                        <th class="p-2">Description</th>
                        <th class="p-2">Date</th>
                        <th class="p-2">Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in paginatedUsers" :key="index" class="border border-bottom">
                        <td class="p-2 text-dark">
                            {{ user.author }}
                        </td>
                        <td class="p-2 text-dark">
                            {{ user.article }}
                        </td>
                        <td class="p-2 text-dark">
                            {{ user.category }}
                        </td>
                        <td class="p-2 text-dark">
                            {{ user.description }}
                        </td>
                        <td class="p-2 text-dark">
                            {{ user.date }}<br>
                            {{ user.time }}
                        </td>
                        <td class="p-2">
                            <div class="d-flex align-items-center" style="gap:5px;">
                                <button type="button" @click="showEditArticleModal = true; closeFilterModal"
                                    class="vmc-bg-prime-4 py-1 rounded border-0 d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"
                                        fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-pencil-icon lucide-pencil">
                                        <path
                                            d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                                        <path d="m15 5 4 4" />
                                    </svg>
                                </button>
                                <button type="button"
                                    class="vmc-bg-prime-5 py-1 rounded border-0 d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"
                                        fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2">
                                        <path d="M10 11v6" />
                                        <path d="M14 11v6" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                        <path d="M3 6h18" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                </button>
                            </div>
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
    name: "NewsHistoryCMS",
    data() {
        return {
            currentPage: 1,
            perPage: 10,
            searchQuery: '',
            showFilterModal: false,
            showEditArticleModal: false,

            // TEMP VALUES (used inside modal only)
            tempCategory: '',
            tempDate: '',

            // APPLIED VALUES (displays the selected filter)
            selectedCategory: '',
            selectedDate: '',

            // SAMPLE DATA (NO BACKEND)
            users: [
                {
                    article: "title neto",
                    category: "Company News",
                    date: "2026-03-03",
                    time: "10:51:23",
                    author: "Rogers",
                    description: "this is the description of the title of the content"
                },
                {
                    article: "regarding sa",
                    category: "Crew Updates",
                    date: "2026-03-02",
                    time: "10:51:23",
                    author: "Steve",
                    description: "this is the description of water"
                },
                {
                    article: "which is",
                    category: "Government Advisories",
                    date: "2026-02-26",
                    time: "10:51:23",
                    author: "Alfreds Futterkiste",
                    description: "this is the description of maynilad which is a water company in manila"
                },
                {
                    article: "un lang",
                    category: "Company News",
                    date: "2026-02-27",
                    time: "10:51:23",
                    author: "Jane Doe",
                    description: "this is the description of people saying maraming salamat"
                },
                {
                    article: "title neto",
                    category: "Crew Updates",
                    date: "2026-03-03",
                    time: "10:51:23",
                    author: "Rogers",
                    description: "this is the description of the title of the content"
                },
                {
                    article: "regarding sa",
                    category: "Company News",
                    date: "2026-03-02",
                    time: "10:51:23",
                    author: "Steve",
                    description: "this is the description of water"
                },
                {
                    article: "which is",
                    category: "Government Advisories",
                    date: "2026-02-26",
                    time: "10:51:23",
                    author: "Alfreds Futterkiste",
                    description: "this is the description of maynilad which is a water company in manila"
                },
                {
                    article: "un lang",
                    category: "Crew Updates",
                    date: "2026-02-27",
                    time: "10:51:23",
                    author: "Jane Doe",
                    description: "this is the description of people saying maraming salamat"
                },

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
                    user.author.toLowerCase().includes(query) ||
                    user.article.toLowerCase().includes(query) ||
                    user.category.toLowerCase().includes(query) ||
                    user.description.toLowerCase().includes(query) ||
                    user.date.includes(query) ||
                    user.time.includes(query)
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
    color: #212529;
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
        width: 16.66%;
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