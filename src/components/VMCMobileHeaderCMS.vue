<template>
    <div class="cms-container" :class="{ 'dimmed': showChangePasswordModal || showEditProfileModal }">
        <div v-if="showChangePasswordModal"
            class="modal-overlay d-flex align-items-center justify-content-center fixed-top w-100 h-100 left-0"
            @click="closeModal">
            <div class="modal-content bg-white overflow-hidden" @click.stop>
                <div class="modal-header d-flex justify-content-between align-items-center px-3 py-3">
                    <h2 class="m-0 text-dark">Change Password</h2>
                    <button class="close-btn text-dark bg-transparent border-0" @click="closeModal">&times;</button>
                </div>
                <form class="modal-body mt-1">
                    <div class="vmc-input-box w-100 mb-3 position-relative">
                        <span class="icon position-absolute" @click="toggleOldPassword">
                            <i v-if="showOldPassword" class="text-dark bi bi-eye-fill"></i>
                            <i v-else class="text-dark bi bi-eye-slash-fill"></i>
                        </span>
                        <input class="text-dark w-100 bg-transparent border-0"
                            :type="showOldPassword ? 'text' : 'password'" v-model="oldpassword" required>
                        <label class="position-absolute">Old Password</label>
                    </div>
                    <div class="vmc-input-box w-100 my-4 position-relative">
                        <span class="icon position-absolute" @click="toggleNewPassword">
                            <i v-if="showNewPassword" class="text-dark bi bi-eye-fill"></i>
                            <i v-else class="text-dark bi bi-eye-slash-fill"></i>
                        </span>
                        <input class="text-dark w-100 bg-transparent border-0"
                            :type="showNewPassword ? 'text' : 'password'" v-model="newpassword" required>
                        <label class="position-absolute">New Password</label>
                    </div>
                    <div class="vmc-input-box w-100 my-4 position-relative">
                        <span class="icon position-absolute" @click="toggleConfirmNewPassword">
                            <i v-if="showConfirmNewPassword" class="text-dark bi bi-eye-fill"></i>
                            <i v-else class="text-dark bi bi-eye-slash-fill"></i>
                        </span>
                        <input class="text-dark w-100 bg-transparent border-0"
                            :type="showConfirmNewPassword ? 'text' : 'password'" v-model="confirmnewpassword" required>
                        <label class="position-absolute">Confirm New Password</label>
                    </div>
                    <div class="modal-actions d-flex justify-content-end mt-3">
                        <button type="submit" class="vmc-bg-prime-5 px-3 py-1 rounded text-white border-0"
                            style="cursor:pointer;">Submit</button>
                        <button type="button" class="vmc-bg-prime-4 px-3 py-1 rounded text-white border-0"
                            style="cursor:pointer;" @click="closeModal">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        <div v-if="showEditProfileModal"
            class="modal-overlay d-flex align-items-center justify-content-center fixed-top w-100 h-100 left-0"
            @click="closeModal">
            <div class="modal-content bg-white overflow-hidden" @click.stop>
                <div class="modal-header d-flex justify-content-between align-items-center px-3 py-3">
                    <h2 class="m-0 text-dark">Edit Profile</h2>
                    <button class="close-btn text-dark bg-transparent border-0" @click="closeModal">&times;</button>
                </div>
                <form class="modal-body">
                    <div class="d-flex flex-column align-items-center mb-3">
                        <div class="position-relative">
                            <img :src="profile2" alt="" id="profilePreview" class="rounded-circle"
                                style="width:110px; height:110px; object-fit:cover;">
                            <label for="profileImage"
                                class="select-photo material-symbols-outlined text-white p-2 rounded-circle vmc-bg-prime-5"
                                style="cursor:pointer; transition: 0.3s">
                                photo_camera
                            </label>
                            <input type="file" id="profileImage" accept="image/*" class="d-none"
                                @change="previewImage($event)">
                        </div>
                        <button type="button" class="mt-2 vmc-bg-prime-6 text-white border-0 rounded px-3 py-1"
                            @click="removeProfileImage($event)">
                            Remove Photo
                        </button>
                    </div>
                    <div class="vmc-input-box mt-2 mb-4 position-relative">
                        <span class="icon position-absolute"><i class="text-dark bi bi-person-fill"></i></span>
                        <input class="text-dark w-100 bg-transparent border-0" type="text" required>
                        <label class="position-absolute">Account Name</label>
                    </div>
                    <div class="vmc-input-box w-100 mb-4 position-relative">
                        <span class="icon position-absolute" @click="togglePassword">
                            <i v-if="showPassword" class="text-dark bi bi-eye-fill"></i>
                            <i v-else class="text-dark bi bi-eye-slash-fill"></i>
                        </span>
                        <input class="text-dark w-100 bg-transparent border-0"
                            :type="showPassword ? 'text' : 'password'" v-model="password" required>
                        <label class="position-absolute">Password</label>
                    </div>
                    <div class="vmc-input-box w-100 mb-4 position-relative">
                        <span class="icon position-absolute" @click="toggleConfirmPassword">
                            <i v-if="showConfirmPassword" class="text-dark bi bi-eye-fill"></i>
                            <i v-else class="text-dark bi bi-eye-slash-fill"></i>
                        </span>
                        <input class="text-dark w-100 bg-transparent border-0"
                            :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmpassword" required>
                        <label class="position-absolute">Confirm Password</label>
                    </div>
                    <div class="modal-actions d-flex justify-content-end mt-3">
                        <button type="submit"
                            class="vmc-bg-prime-5 rounded px-3 py-1 text-white border-0">Submit</button>
                        <button type="button" class="vmc-bg-prime-4 rounded px-3 py-1 text-white border-0"
                            @click="closeModal">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="header-component">
            <header
                class="vmc-mobile-header fixed-top left-0 right-0 d-flex align-items-center justify-content-between px-3 py-1">
                <button ref="toggleBtn" @click="toggleSidebar($event)"
                    class="toggle-btn border-0 bg-transparent text-white">☰</button>
                <img :src="vmcLogo" alt="" style="width: 50px;">
                <div class="vmc-profile-wrap">
                    <img :src="profile" alt="" class="vmc-profile-picture rounded-circle" @click="toggleDropdown">
                    <div class="vmc-profile">
                        <ul v-if="isDropdownOpen"
                            class="dropdown-menu w-100 dropdown-menu-end shadow show vmc-teleported-dropdown">
                            <!-- PROFILE INFO -->
                            <li class="px-3 py-2 d-flex align-items-center">
                                <img :src="profile2" class="rounded-circle me-2" style="width:40px; height:40px;">
                                <strong class="pl-2 text-dark">ACCOUNT NAME</strong>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <!-- DROPDOWN ITEMS -->
                            <li>
                                <button
                                    class="dropdown-menu-items bg-transparent border-0 list-unstyled w-100 py-2 d-flex align-items-center justify-content-between px-3"
                                    @click="toggleSettings">
                                    <div class="icon-lists d-flex align-items-center text-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                            viewBox="0 0 24 24" fill="none" stroke="#212529" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-settings-icon lucide-settings">
                                            <path
                                                d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                        <span class="pl-2 text-dark item-dropdown">Settings</span>
                                    </div>
                                    <span class="icon-dropdown material-symbols-outlined text-dark"
                                        :class="{ 'rotate-settings': isSettingsOpen }">keyboard_arrow_right</span>
                                </button>
                                <!-- SETTINGS DROPDOWN ITEMS -->
                                <ul v-if="isSettingsOpen" class="list-unstyled pb-2">
                                    <li>
                                        <button
                                            class="open-settings-btn px-4 py-2 w-100 bg-transparent text-dark d-flex align-items-center border-0"
                                            @click="openSettingsModal('password')">
                                            <div class="icon-lists d-flex align-items-center text-dark">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                    viewBox="0 0 24 24" fill="none" stroke="#212529" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="lucide lucide-key-round-icon lucide-key-round">
                                                    <path
                                                        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                                                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
                                                </svg>
                                                <span class="pl-2 text-dark item-dropdown">Change Password</span>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            class="open-settings-btn px-4 py-2 w-100 bg-transparent text-dark d-flex align-items-center border-0"
                                            @click="openSettingsModal('profile')">
                                            <div class="icon-lists d-flex align-items-center text-dark">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                    viewBox="0 0 24 24" fill="none" stroke="#212529" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="lucide lucide-circle-user-round-icon lucide-circle-user-round">
                                                    <path d="M18 20a6 6 0 0 0-12 0" />
                                                    <circle cx="12" cy="10" r="4" />
                                                    <circle cx="12" cy="12" r="10" />
                                                </svg>
                                                <span class="pl-2 text-dark item-dropdown">Edit Profile</span>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-menu-items bg-transparent border-0 list-unstyled w-100 py-2 d-flex align-items-center justify-content-between px-3"
                                    style="text-decoration:none;" href="/auth/login">
                                    <div class="icon-lists text-dark d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                            viewBox="0 0 24 24" fill="none" stroke="#212529" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-log-out-icon lucide-log-out">
                                            <path d="m16 17 5-5-5-5" />
                                            <path d="M21 12H9" />
                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                        </svg>
                                        <span class="pl-2 text-dark item-dropdown">Logout</span>
                                    </div>
                                    <span class="material-symbols-outlined text-dark">keyboard_arrow_right</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <!-- MARGIN -->
            <div class="margin"></div>
        </div>
        <transition name="sidebar" @enter="enterSidebar" @leave="leaveSidebar">
            <nav v-show="isOpen" ref="sidebar" class="sidebar text-white fixed-top left-0"
                style="border-right: 1px solid #666;" @click.stop>
                <header class="vmc-logo d-flex justify-content-center p-2 overflow-hidden">
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
                                <i class="material-symbols-outlined"
                                    :class="{ rotate: open.home }">keyboard_arrow_down</i>
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
                            <button :class="['vmc-lists w-100 d-flex align-items-center px-2 py-3 border-0 text-decoration-none bg-transparent'
                                , { 'active-link': isParentActive(aboutUsLinks) }]" @click="toggle('about')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-info-icon lucide-info">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 16v-4" />
                                    <path d="M12 8h.01" />
                                </svg>
                                <span class="mr-auto">About Us</span>
                                <i class="material-symbols-outlined"
                                    :class="{ rotate: open.about }">keyboard_arrow_down</i>
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
                                <i class="material-symbols-outlined"
                                    :class="{ rotate: open.news }">keyboard_arrow_down</i>
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
                                    <path
                                        d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
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
                                        :class="['text-decoration-none', { 'active-link': isActive('/admin/allottees') }]">
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
                                <i class="material-symbols-outlined"
                                    :class="{ rotate: open.crew }">keyboard_arrow_down</i>
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
                    <img :src="profile" alt="" class="rounded-circle mr-2" style="width: 45px; height: 45px;">
                    <div>
                        <div class="account-name text-nowrap">Account Name</div>
                        <div class="role-type text-nowrap">Role</div>
                    </div>
                </footer>
            </nav>
        </transition>
    </div>
</template>

<script>
export default {
    name: "VMCMobileHeader",
    data() {
        return {
            // PROFILE IMAGE
            profile: require("@/assets/profile-white.png"),
            profile2: require("@/assets/profile-black.png"),
            vmcLogo: require("@/assets/veritas_logo.png"),
            isOpen: false,
            open: {
                home: false,
                about: false,
                news: false,
                company: false,
                crew: false,
                settings: false
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

            // V-MODEL IN TAGS
            password: '',
            confirmpassword: '',
            oldpassword: '',
            newpassword: '',
            confirmnewpassword: '',

            // INPUT TYPES
            showPassword: false,
            showConfirmPassword: false,
            showOldPassword: false,
            showNewPassword: false,
            showConfirmNewPassword: false,
            inputType: ["password", "confirmpassword", "newpassword", "confirmnewpassword", "oldpassword"],

            // FUNCTION
            showChangePasswordModal: false,
            showEditProfileModal: false,
            isDropdownOpen: false,
            isNavOpen: false,

            // SETTINGS DROPDOWN MENU
            isSettingsOpen: false
        }
    },
    watch: {
        isOpen(open) {
            if (open) {
                document.addEventListener('click', this.handleClickOutside);
            }

            else {
                document.removeEventListener('click', this.handleClickOutside);
            }
        }
    },
    methods: {
        toggleSidebar(e) {
            e.stopPropagation();
            this.isOpen = !this.isOpen;
        },

        // sidebar animation
        enterSidebar(el, done) {
            el.style.transform = 'translateX(-100%)';
            requestAnimationFrame(() => {
                el.style.transition = 'transform 0.3s ease';
                el.style.transform = 'translateX(0)';
            });
            el.addEventListener('transitionend', done);
        },

        leaveSidebar(el, done) {
            el.style.transform = 'translateX(0)';
            requestAnimationFrame(() => {
                el.style.transition = 'transform 0.3s ease';
                el.style.transform = 'translateX(-100%)';
            });
            el.addEventListener('transitionend', done, { once: true });
        },

        handleClickOutside(e) {
            const sidebar = this.$refs.sidebar;
            const toggleBtn = this.$refs.toggleBtn;

            // if refs exist and click is outside
            if (sidebar && !sidebar.contains(e.target) &&
                toggleBtn && !toggleBtn.contains(e.target)) {
                this.isOpen = false;
            }
        },

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

        // CLEARS THE INPUTS
        resetForm() {
            this.password = '';
            this.confirmpassword =
                this.oldpassword = '';
            this.newpassword = '';
            this.confirmnewpassword = '';

            // REVERTS TO HIDE PASSWORD
            this.showOldPassword = false;
            this.showNewPassword = false;
            this.showConfirmNewPassword = false;
        },

        // FUNCTIONALITY OF SHOWING THE PASSWORD
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

        toggleConfirmPassword() {
            if (this.showConfirmPassword) {
                this.showConfirmPassword = false;
                this.inputType = "confirmpassword"
            }
            else {
                this.showConfirmPassword = true;
                this.inputType = "text";
            }
        },

        toggleOldPassword() {
            if (this.showOldPassword) {
                this.showOldPassword = false;
                this.inputType = "oldpassword"
            }
            else {
                this.showOldPassword = true;
                this.inputType = "text";
            }
        },
        toggleNewPassword() {
            if (this.showNewPassword) {
                this.showNewPassword = false;
                this.inputType = "newpassword";
            }
            else {
                this.showNewPassword = true;
                this.inputType = "text";
            }
        },
        toggleConfirmNewPassword() {
            if (this.showConfirmNewPassword) {
                this.showConfirmNewPassword = false;
                this.inputType = "confirmnewpassword"
            }
            else {
                this.showConfirmNewPassword = true;
                this.inputType = "text";
            }
        },

        // DROPDOWN MENU
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen,
                this.isSettingsOpen = false
        },

        // SETTINGS DROPDOWN MENU
        toggleSettings() {
            this.isSettingsOpen = !this.isSettingsOpen
        },

        // OPEN SETTINGS MODAL (EDIT PROFILE AND CHANGE PASSWORD)
        openSettingsModal(type) {
            // RESET ALL FIELDS
            this.resetForm();

            // RESET FILE INPUT
            this.profile = require("@/assets/profile-white.png")

            // OPEN MODAL
            if (type === 'password') {
                this.showChangePasswordModal = true;
            }

            if (type === 'profile') {
                this.showEditProfileModal = true;
            }

            this.isDropdownOpen = false;
            this.isSettingsOpen = false;
        },

        // UPLOAD IMAGE VIA BUTTON
        previewImage(event) {
            const reader = new FileReader();
            reader.onload = function () {
                document.getElementById('profilePreview').src = reader.result;
            }
            reader.readAsDataURL(event.target.files[0]);
        },

        removeProfileImage() {
            const profilePreview = document.getElementById('profilePreview');
            const profileImage = document.getElementById('profileImage');

            profileImage.value = "";
            profilePreview.src = require("@/assets/profile-black.png")
        },

        // CLOSE MODAL FUNCTIONALITY
        closeModal() {
            this.showChangePasswordModal = false;
            this.showEditProfileModal = false;
            this.resetForm();
        },

        onKeyboard(e) {
            if (this.showChangePasswordModal || this.showEditProfileModal) {
                switch (e.key) {
                    case 'Escape':
                        this.showEditProfileModal = false;
                        this.showChangePasswordModal = false;
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
};
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

.vmc-bg-prime-5:hover {
    background-color: var(--vmc-primary-7);
}

.vmc-bg-prime-4:hover {
    background-color: var(--vmc-primary-6)
}

button {
    transition: 0.3s;
}

@media (min-width: 330px) {
    .margin {
        margin-bottom: 60px;
    }

    /* HEADER */
    .vmc-mobile-header {
        height: 60px;
        margin-bottom: 70px;
        background-color: var(--vmc-primary-5);
        z-index: 999;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .vmc-logo {
        border-bottom: 1px solid #666;
    }

    .vmc-profile-picture {
        height: 30px;
        width: 30px;
    }

    .toggle-btn {
        font-size: 24px;
    }

    /* SIDEBAR */
    .sidebar {
        width: 310px;
        background-color: var(--vmc-primary-5);
        height: 100dvh;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .sidebar-enter-active,
    .sidebar-leave-active {
        transition: 0.3s ease;
    }

    .sidebar-enter-from,
    .sidebar-leave-to {
        transform: translateX(-100%);
    }

    .sidebar-enter-to,
    .sidebar-leave-from {
        transform: translateX(0%);
    }

    .sidebar-overlay {
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    /* SIDEBAR LISTS */
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
        margin-left: 12px;
        padding: 6px 0px;
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

    /* ACTIVE LINKS */
    .active-link,
    .active-link i,
    .active-link span,
    .active-link svg {
        color: var(--vmc-primary-3) !important;
        stroke: var(--vmc-primary-3) !important;
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

    .modal-actions {
        gap: 10px;
    }

    /* INPUTS */
    .vmc-input-box {
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

    .open-settings-btn {
        transition: 0.3s;
    }

    .dropdown-menu-items {
        transition: 0.3s;
    }

    .dropdown-menu-items:hover {
        background-color: #e1e1e1;
    }

    .dropdown-menu-items span {
        transition: transform 0.3s;
    }

    .dropdown-menu-items:hover,
    .open-settings-btn:hover {
        background-color: #f5f5f5 !important;
        cursor: pointer;
    }

    .rotate-settings {
        transform: rotate(90deg);
    }

    .role-type {
        font-size: 15px;
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

    .select-photo {
        position: absolute;
        bottom: 0;
        right: 0;
    }
}

@media (min-width: 1200px) {
    .cms-container {
        display: none;
    }

    .margin {
        margin: 0;
    }

    .vmc-mobile-header {
        display: none;
    }
}
</style>
