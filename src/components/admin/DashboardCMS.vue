<template>
    <div class="cms-container">
        <div class="vmc-card">
            <div class="card-container d-lg-flex">
                <div class="cards w-100 my-2 text-dark px-2 py-1">
                    Total Crews
                    <h2 class="text-dark h4">2303</h2>
                </div>
                <div class="cards w-100 my-2 text-dark px-2 py-1">
                    On Board
                    <h2 class="text-dark h4">1310</h2>
                </div>
                <div class="cards w-100 my-2 text-dark px-2 py-1">
                    Standby
                    <h2 class="text-dark h4">993</h2>
                </div>
                <div class="cards w-100 my-2 text-dark px-2 py-1">
                    Total Vessel
                    <h2 class="text-dark h4">64</h2>
                </div>
            </div>
            <div class="card-container d-lg-flex">
                <div class="left-container mt-4">
                    <div class="news-card w-100">
                        <!-- SAMPLE DATA -->
                        <div class="news-header text-dark px-2 py-3 border border-dark border-bottom-0">News Lists</div>
                        <div class="news-scrollable-list border border-dark">
                            <div
                                class="news-item p-2 border border-dark border-top-0 border-left-0 border-right-0 border-bottom">
                                <div class="news-title text-dark">
                                    Marima Mismo V2
                                </div>
                                <div class="news-status mt-2 text-dark">
                                    Category: Government Advisories
                                </div>
                            </div>
                            <div
                                class="news-item p-2 border border-dark border-top-0 border-left-0 border-right-0 border-bottom">
                                <div class="news-title text-dark">
                                    Japan VISA Application
                                </div>
                                <div class="news-status mt-2 text-dark">
                                    Category: Government Advisories
                                </div>
                            </div>
                            <div
                                class="news-item p-2 border border-dark border-top-0 border-left-0 border-right-0 border-bottom">
                                <div class="news-title text-dark">
                                    Veritas 35th Anniversary Celebration at the Manila Hotel
                                </div>
                                <div class="news-status mt-2 text-dark">
                                    Category: Company News
                                </div>
                            </div>
                            <div
                                class="news-item p-2 border border-dark border-top-0 border-left-0 border-right-0 border-bottom">
                                <div class="news-title text-dark">
                                    2024 Veritas Crew and Family Parties - Iloilo and Bacolod
                                </div>
                                <div class="news-status mt-2 text-dark">
                                    Category: Crew Updates
                                </div>
                            </div>
                            <div
                                class="news-item p-2 border border-dark border-top-0 border-left-0 border-right-0 border-bottom">
                                <div class="news-title text-dark">
                                    2023 Greater Manila Area Crew and Family Party
                                </div>
                                <div class="news-status mt-2 text-dark">
                                    Category: Crew Updates
                                </div>
                            </div>
                            <div
                                class="news-item p-2 border border-dark border-top-0 border-left-0 border-right-0 border-bottom">
                                <div class="news-title text-dark">
                                    Veritas Maritime Corporation 33rd Anniversary
                                </div>
                                <div class="news-status mt-2 text-dark">
                                    Category: Company News
                                </div>
                            </div>
                            <div
                                class="news-item p-2 border border-dark border-top-0 border-left-0 border-right-0 border-bottom">
                                <div class="news-title text-dark">
                                    2023 Veritas Maritime Corporation Staff Christmas Party
                                </div>
                                <div class="news-status mt-2 text-dark">
                                    Category: Company News
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-container mt-4">
                    <div class="job-card w-100">
                        <div class="job-header text-dark px-2 py-3 border border-dark border-bottom-0">Job Lists</div>
                        <div class="job-scrollable-list border border-dark">
                            <div
                                class="job-item p-2 border border-dark border-top-0 border-left-0 border-right-0 border-bottom">
                                <div class="job-title text-dark">
                                    Asst. Accounting Manager (CPA)
                                </div>
                                <div class="job-status mt-2 text-dark">
                                    Status: Hiring
                                </div>
                            </div>
                            <div
                                class="job-item p-2 border border-dark border-top-0 border-left-0 border-right-0 border-bottom">
                                <div class="job-title text-dark">
                                    Accounting Staff
                                </div>
                                <div class="job-status mt-2 text-dark">
                                    Status: Hiring
                                </div>
                            </div>
                            <div
                                class="job-item p-2 border border-dark border-top-0 border-left-0 border-right-0 border-bottom">
                                <div class="job-title text-dark">
                                    Technical Training Instructor
                                </div>
                                <div class="job-status mt-2 text-dark">
                                    Status: Hiring
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="search-container d-lg-flex align-items-lg-center justify-content-lg-end px-2 mt-4"
                        style="gap:10px;">
                        <input type="text" v-model="searchQuery" @input="resetPage" placeholder="Search..."
                            class="search-bar text-dark p-1" style="outline:none;" />
                    </div>
                    <div class="table-container overflow-auto mt-2">
                        <table class="w-100 min-w-100">
                            <thead>
                                <tr class="sticky-top">
                                    <th class="p-2 w-50">Name</th>
                                    <th class="p-2 w-50">Logged in</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, index) in paginatedUsers" :key="index"
                                    class="border border-right-0 border-left-0 border-bottom">
                                    <td class="py-3 px-2 border-left-0 border-top-0 border-right-0 text-dark">
                                        {{ user.name }}
                                    </td>
                                    <td class="py-3 px-2 border-left-0 border-top-0 border-right-0 text-dark">
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
                            <span v-if="paginatedUsers.length === 0" class="mx-2">
                                {{ totalPages }} of {{ totalPages }}
                            </span>

                            <!-- IF THERE IS DATA ON THE TABLE -->
                            <span v-else class="mx-2">{{ currentPage }} of {{ totalPages }}</span>

                            <button type="button" class="next-previous" @click="nextPage"
                                :disabled="currentPage === totalPages" style="border:1px solid black;">
                                &#62;
                            </button>
                            <button type="button" class="next-previous" @click="lastPage"
                                :disabled="currentPage === totalPages" style="border:1px solid black;">
                                &#62;&#62;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "DashboardCMS",
    data() {
        return {
            currentPage: 1,
            perPage: 10,
            searchQuery: '',

            // SAMPLE DATA (NO BACKEND)
            users: [
                {
                    name: "John Doe",
                    date: "2026-03-03",
                    time: "18:11:21",
                },
                {
                    name: "Jane Doe",
                    date: "2026-03-02",
                    time: "12:52:53",
                },
                {
                    name: "Alfreds Futterkiste",
                    date: "2026-02-26",
                    time: "19:31:33",
                },
                {
                    name: "Paolo Accorti",
                    date: "2026-02-27",
                    time: "14:53:29",
                },
                {
                    name: "Mario Luigi",
                    date: "2026-03-03",
                    time: "10:51:21",
                },
                {
                    name: "Pablo Escobar",
                    date: "2026-03-02",
                    time: "10:51:39",
                },
                {
                    name: "Martin Sommers",
                    date: "2026-02-26",
                    time: "13:31:10",
                },
                {
                    name: "Mario Pontes",
                    date: "2026-02-27",
                    time: "23:22:44",
                },
                {
                    name: "Christina Berglund",
                    date: "2026-03-01",
                    time: "21:11:19",
                },
                {
                    name: "Manuel Pereira",
                    date: "2026-01-17",
                    time: "22:53:25",
                },
                {
                    name: "Fran Wilson",
                    date: "2026-01-23",
                    time: "10:51:44",
                },
                {
                    name: "Carlos Hernandez",
                    date: "2025-12-16",
                    time: "20:11:53",
                },
                {
                    name: "isabel Castro",
                    date: "2026-01-21",
                    time: "10:11:25",
                },
                {
                    name: "Rene Phillips",
                    date: "2026-01-14",
                    time: "10:20:23",
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
                    user.name.toLowerCase().includes(query) ||
                    user.date.includes(query) ||
                    user.time.includes(query)
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
    .cms-container {
        margin-bottom: 20px;
        overflow-x: hidden;
    }

    .card-container {
        gap: 12px;
        margin: 0 10px 10px 10px;
    }

    .cards {
        border: 1px solid #999;
        background-color: #f0f0f0;
        border-radius: 10px;
    }

    /* LEFT SIDE */
    .left-container {
        width: 100%;
    }

    /* NEWS LIST CSS */
    .news-header {
        font-size: 22px;
        font-weight: bold;
        border-radius: 10px 10px 0 0;
    }

    .news-scrollable-list {
        max-height: 220px;
        height: 220px;
        overflow-y: auto;
    }

    .news-item {
        box-sizing: border-box;
    }

    .news-status {
        font-size: 14px;
    }

    /* RIGHT SIDE */
    /* JOB LIST CSS */
    .job-header {
        font-size: 22px;
        font-weight: bold;
        border-radius: 10px 10px 0 0;
    }

    .job-scrollable-list {
        max-height: 250px;
        height: 250px;
        overflow-y: auto;
    }

    .job-status {
        font-size: 14px;
    }

    .job-title,
    .news-title {
        font-weight: 500;
    }

    /* TABLE */
    .table-container {
        max-height: 400px;
        height: 400px;
    }

    .search-bar {
        width: 100%;
        margin-top: 10px;
    }

    table {
        border-collapse: collapse;
    }

    tr th {
        background-color: var(--vmc-primary-6);
        color: white;
    }

    tr:nth-child(even) {
        background-color: #f0f0f0;
    }
}

@media (min-width: 992px) {
    .news-scrollable-list {
        max-height: 800px;
        height: 800px;
        overflow-y: auto;
    }

    .search-bar {
        width: 200px;
        margin-top: 0;
    }
}

@media (min-width: 1200px) {
    .cms-container {
        margin-left: 310px;
        margin-top: 105px;
    }

    .card-container {
        margin: 0 10px 10px 10px;
    }

    .left-container {
        max-width: 60%;
        width: 100%;
    }

    .right-container {
        max-width: 40%;
        width: 100%;
    }

    .news-card {
        width: 100%;
    }

    .news-status {
        font-size: 16px;
    }

    .job-status {
        font-size: 16px;
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
}
</style>