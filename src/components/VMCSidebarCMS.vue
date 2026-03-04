<template>
    <div>
        <nav class="vmc-sidebar vh-100 text-white fixed-top left-0 d-hidden d-xl-flex flex-column overflow-hidden">
            <header class="d-lg-flex justify-content-center align-items-center p-2" style="background-color:var(--vmc-primary-5)">
                <img :src="vmcLogo" alt="" style="width: 70px;">
            </header>
            <div class="vmc-sidebar-lists">
                <ul class="m-0 p-0">
                    <li>
                        <a href="/admin/dashboard"
                            :class="['vmc-lists w-100 d-flex align-items-center px-2 py-3 border-0 text-decoration-none', { 'active-link': isActive('/admin/dashboard') }]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-layout-dashboard-icon lucide-layout-dashboard">
                                <rect width="7" height="9" x="3" y="3" rx="1" />
                                <rect width="7" height="5" x="14" y="3" rx="1" />
                                <rect width="7" height="9" x="14" y="12" rx="1" />
                                <rect width="7" height="5" x="3" y="16" rx="1" />
                            </svg>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <button :class="[
                            'vmc-lists w-100 d-flex align-items-center px-2 py-3 border-0 text-decoration-none bg-transparent',
                            { 'active-link': isParentActive(homeLinks) }]" @click="toggle('home')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-house-icon lucide-house">
                                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                                <path
                                    d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            </svg>
                            <span class="mr-auto">Home</span>
                            <i class="material-symbols-outlined" :class="{ rotate: open.home }">keyboard_arrow_down</i>
                        </button>
                        <ul v-if="open.home" class="vmc-dropdown-menu">
                            <li class="list-unstyled">
                                <a href="/admin/key-visuals"
                                    :class="['w-100 d-flex align-items-center text-decoration-none', { 'active-link': isActive('/admin/key-visuals') }]">
                                    Key Visuals
                                </a>
                            </li>
                            <li class="list-unstyled">
                                <a href="/admin/job-hiring"
                                    :class="['w-100 d-flex align-items-center text-decoration-none', { 'active-link': isActive('/admin/job-hiring') }]">
                                    Job Hiring
                                </a>
                            </li>
                            <li class="list-unstyled">
                                <a href="/admin/crew-and-fleet"
                                    :class="['w-100 d-flex align-items-center text-decoration-none', { 'active-link': isActive('/admin/crew-and-fleet') }]">
                                    Crew and Fleet Status
                                </a>
                            </li>
                            <li class="list-unstyled">
                                <a href="/admin/membership-affiliations"
                                    :class="['w-100 d-flex align-items-center text-decoration-none', { 'active-link': isActive('/admin/membership-affiliations') }]">
                                    Membership and Affiliations
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button :class="[
                            'vmc-lists w-100 d-flex align-items-center px-2 py-3 border-0 text-decoration-none bg-transparent',
                            { 'active-link': isParentActive(aboutUsLinks) }]" @click="toggle('about')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-info-icon lucide-info">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4" />
                                <path d="M12 8h.01" />
                            </svg>
                            <span class="mr-auto">About Us</span>
                            <i class="material-symbols-outlined" :class="{ rotate: open.about }">keyboard_arrow_down</i>
                        </button>
                        <ul v-if="open.about" class="vmc-dropdown-menu">
                            <li class="list-unstyled">
                                <a href="/admin/the-company"
                                    :class="['w-100 d-flex align-items-center text-decoration-none', { 'active-link': isActive('/admin/the-company') }]">
                                    The Company
                                </a>
                            </li>
                            <li class="list-unstyled">
                                <a href="/admin/our-principals"
                                    :class="['w-100 d-flex align-items-center text-decoration-none', { 'active-link': isActive('/admin/our-principals') }]">
                                    Our Principals
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button :class="[
                            'vmc-lists w-100 d-flex align-items-center px-2 py-3 border-0 text-decoration-none bg-transparent',
                            { 'active-link': isParentActive(newsLinks) }]" @click="toggle('news')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-newspaper-icon lucide-newspaper">
                                <path d="M15 18h-5" />
                                <path d="M18 14h-8" />
                                <path
                                    d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
                                <rect width="8" height="4" x="10" y="6" rx="1" />
                            </svg>
                            <span class="mr-auto">News</span>
                            <i class="material-symbols-outlined" :class="{ rotate: open.news }">keyboard_arrow_down</i>
                        </button>
                        <ul v-if="open.news" class="vmc-dropdown-menu">
                            <li class="list-unstyled">
                                <a href="/admin/news"
                                    :class="['w-100 d-flex align-items-center text-decoration-none', { 'active-link': isActive('/admin/news') }]">
                                    News Article
                                </a>
                            </li>
                            <li class="list-unstyled">
                                <a href="/admin/news-history"
                                    :class="['w-100 d-flex align-items-center text-decoration-none', { 'active-link': isActive('/admin/news-history') }]">
                                    News History
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button :class="[
                            'vmc-lists w-100 d-flex align-items-center px-2 py-3 border-0 text-decoration-none bg-transparent',
                            { 'active-link': isParentActive(companyLinks) }]" @click="toggle('company')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-building2-icon lucide-building-2">
                                <path d="M10 12h4" />
                                <path d="M10 8h4" />
                                <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                                <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                                <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                            </svg>
                            <span class="mr-auto">Company</span>
                            <i class="material-symbols-outlined"
                                :class="{ rotate: open.company }">keyboard_arrow_down</i>
                        </button>
                        <ul v-if="open.company" class="vmc-dropdown-menu">
                            <li class="list-unstyled">
                                <a href="/admin/csr-activities"
                                    :class="['w-100 d-flex align-items-center text-decoration-none', { 'active-link': isActive('/admin/csr-activities') }]">
                                    CSR Activities
                                </a>
                            </li>
                            <li class="list-unstyled">
                                <a href="/admin/office-programs"
                                    :class="['w-100 d-flex align-items-center text-decoration-none', { 'active-link': isActive('/admin/office-programs') }]">
                                    Office Programs
                                </a>
                            </li>
                            <li class="list-unstyled">
                                <a href="/admin/allottees"
                                    :class="['w-100 d-flex align-items-center text-decoration-none', { 'active-link': isActive('/admin/allottees') }]">
                                    Allottees
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button :class="[
                            'vmc-lists w-100 d-flex align-items-center px-2 py-3 border-0 text-decoration-none bg-transparent',
                            { 'active-link': isParentActive(crewLinks) }]" @click="toggle('crew')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-users-icon lucide-users">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <circle cx="9" cy="7" r="4" />
                            </svg>
                            <span class="mr-auto">Crew</span>
                            <i class="material-symbols-outlined" :class="{ rotate: open.crew }">keyboard_arrow_down</i>
                        </button>
                        <ul v-if="open.crew" class="vmc-dropdown-menu">
                            <li class="list-unstyled">
                                <a href="/admin/scholarship-cadetship"
                                    :class="['w-100 d-flex align-items-center text-decoration-none', { 'active-link': isActive('/admin/scholarship-cadetship') }]">
                                    Scholarship and Cadetship
                                </a>
                            </li>
                            <li class="list-unstyled">
                                <a href="/admin/crew-development"
                                    :class="['w-100 d-flex align-items-center text-decoration-none', { 'active-link': isActive('/admin/crew-development') }]">
                                    Crew Development
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/admin/schedules"
                            :class="['vmc-lists w-100 d-flex align-items-center px-2 py-3 border-0 text-decoration-none', { 'active-link': isActive('/admin/schedules') }]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-clipboard-clock-icon lucide-clipboard-clock">
                                <path d="M16 14v2.2l1.6 1" />
                                <path d="M16 4h2a2 2 0 0 1 2 2v.832" />
                                <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
                                <circle cx="16" cy="16" r="6" />
                                <rect x="8" y="2" width="8" height="4" rx="1" />
                            </svg>
                            Schedules
                        </a>
                    </li>
                    <li>
                        <a href="/admin/careers"
                            :class="['vmc-lists w-100 d-flex align-items-center px-2 py-3 border-0 text-decoration-none', { 'active-link': isActive('/admin/careers') }]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-briefcase-business-icon lucide-briefcase-business">
                                <path d="M12 12h.01" />
                                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                                <rect width="20" height="14" x="2" y="6" rx="2" />
                            </svg>
                            Career
                        </a>
                    </li>
                    <li>
                        <a href="/admin/contact-us"
                            :class="['vmc-lists w-100 d-flex align-items-center px-2 py-3 border-0 text-decoration-none', { 'active-link': isActive('/admin/contact-us') }]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone">
                                <path
                                    d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                            </svg>
                            Contacts
                        </a>
                    </li>
                    <li>
                        <a href="/admin/action-log"
                            :class="['vmc-lists w-100 d-flex align-items-center px-2 py-3 border-0 text-decoration-none', { 'active-link': isActive('/admin/action-log') }]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-history-icon lucide-history">
                                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                <path d="M3 3v5h5" />
                                <path d="M12 7v5l4 2" />
                            </svg>
                            Action Log
                        </a>
                    </li>
                </ul>
            </div>
            <footer class="vmc-footer d-flex align-items-center px-3 py-3">
                <img :src="profile" alt="" class="vmc-profile-picture rounded-circle mr-2">
                <div>
                    <div class="account-name text-nowrap">Account Name</div>
                    <div class="role-type text-nowrap">Admin</div>
                </div>
            </footer>
        </nav>
    </div>
</template>

<script>
export default {
    name: "VMCSidebarCMS",

    data() {
        return {
            vmcLogo: require("@/assets/veritas_logo.png"),
            profile: require("@/assets/profile-white.png"),
            isOpen: false,
            open: {
                home: false,
                about: false,
                news: false,
                company: false,
                crew: false,
            },

            // ACTIVE COLOR LINKS
            homeLinks: [
                { path: '/admin/key-visuals' },
                { path: '/admin/job-hiring' },
                { path: '/admin/crew-and-fleet' },
                { path: '/admin/membership-affiliations' }
            ],
            aboutUsLinks: [
                { path: '/admin/the-company' },
                { path: '/admin/our-principals' },
            ],
            newsLinks: [
                { path: '/admin/news' },
                { path: '/admin/news-history' }
            ],
            crewLinks: [
                { path: '/admin/scholarship-cadetship' },
                { path: '/admin/crew-development' }
            ],
            companyLinks: [
                { path: '/admin/csr-activities' },
                { path: '/admin/office-programs' },
                { path: '/admin/allottees' }
            ],
        }
    },
    methods: {
        toggle(menu) {
            Object.keys(this.open).forEach(key => {
                this.open[key] = key === menu ? !this.open[key] : false;
            });
        },
        isActive(path) {
            return window.location.pathname === path;
        },
        isParentActive(links) {
            return links.some(link => this.isActive(link.path));
        },
    }
}
</script>

<style scoped>
::-webkit-scrollbar {
    background-color: var(--vmc-primary-4);
    width: 4px;
    height: 4px;
}

::-webkit-scrollbar-thumb {
    background-color: #666;
}

@media (min-width: 330px) {
    .vmc-sidebar {
        display: none;
    }
}

@media (min-width: 1200px) {
    header {
        overflow: hidden;
        overscroll-behavior: contain;
        border-bottom: 1px solid #666;
        flex-shrink: 0;
    }

    .vmc-sidebar {
        width: 310px;
        background-color: var(--vmc-primary-5);
    }

    .vmc-sidebar-lists {
        overflow-y: auto;
        overscroll-behavior: contain;
        flex: 1;
    }

    .vmc-sidebar-lists .vmc-lists,
    .vmc-sidebar-lists .vmc-lists i,
    .vmc-sidebar-lists .vmc-lists span,
    .vmc-sidebar-lists .vmc-lists svg {
        gap: 12px;
        cursor: pointer;
        color: #fff;
        transition: 0.3s;
    }

    .vmc-sidebar-lists .vmc-lists:hover,
    .vmc-sidebar-lists .vmc-lists:hover i,
    .vmc-sidebar-lists .vmc-lists:hover span,
    .vmc-sidebar-lists .vmc-lists:hover svg {
        color: var(--vmc-primary-3);
        stroke: var(--vmc-primary-3);
    }

    .rotate {
        transform: rotate(180deg);
        transition: transform 0.2s ease;
    }

    .vmc-dropdown-menu li {
        padding: 0 0 15px 12px;
    }

    .vmc-dropdown-menu li,
    .vmc-dropdown-menu a {
        color: #fff;
        transition: 0.3s;
    }

    .vmc-dropdown-menu li:hover,
    .vmc-dropdown-menu a:hover {
        color: var(--vmc-primary-3)
    }

    footer {
        border-top: 1px solid #666;
        padding: 15px 20px;
        overflow: hidden;
        overscroll-behavior: contain;
        flex-shrink: 0;
    }

    footer i,
    footer div,
    span {
        color: #fff;
    }

    .vmc-profile-picture {
        height: 45px;
        width: 45px;
    }

    .account-name {
        font-size: 16px;
    }

    .role-type {
        font-size: 14px;
    }

    /* ACTIVE LINKS */
    .active-link,
    .active-link i,
    .active-link span,
    .active-link svg {
        color: var(--vmc-primary-3) !important;
        stroke: var(--vmc-primary-3) !important;
    }
}
</style>