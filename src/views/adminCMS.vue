<template>
  <div class="cms-container" :class="{ 'flash-success': isSavingSuccess }">
    
    <div class="container-fluid vmc-py-big mb-5 pb-5">
      <div class="container">
        
        <!-- HEADER -->
        <div class="row mb-4">
          <div class="col-12 text-center">
            <h1 class="vmc-text-primary vmc-heading display-4">CMS Control Panel</h1>
            <p class="text-muted">Manage your website content, images, and settings dynamically.</p>
          </div>
        </div>

        <!-- GENERAL SETTINGS -->
        <div class="card shadow-sm border-0 rounded-medium mb-4">
          <div class="card-body p-4 d-flex justify-content-between align-items-center">
            <h3 class="h4 vmc-text-primary mb-0">General Settings</h3>
            <div class="custom-control custom-switch" style="transform: scale(1.2); transform-origin: right;">
              <input type="checkbox" class="custom-control-input" id="jobHiringSwitch" v-model="form.showJobHiring">
              <label class="custom-control-label font-weight-bold text-dark" for="jobHiringSwitch">Enable Job Hiring Popup</label>
            </div>
          </div>
        </div>

        <!-- JOB OPENINGS -->
        <div class="card shadow-sm border-0 rounded-medium mb-4">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
              <h2 class="h3 vmc-text-primary mb-0">Job Openings List</h2>
              <button type="button" @click="addItem('jobList', { title: '', requirements: '' })" class="btn btn-primary px-4 rounded-pill shadow-sm">+ Add Job</button>
            </div>

            <div v-for="(job, index) in form.jobList" :key="index" class="card bg-light border-0 mb-3 shadow-sm">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="mb-0 vmc-text-primary">Job {{ index + 1 }}</h4>
                  <button type="button" @click="removeItem('jobList', index)" class="btn btn-sm btn-outline-danger px-3">Remove ❌</button>
                </div>
                <div class="form-group">
                  <label class="font-weight-bold">Job Title:</label>
                  <input type="text" v-model="job.title" class="form-control" placeholder="e.g. Master Mariner">
                </div>
                <div class="form-group mb-0">
                  <label class="font-weight-bold">Requirements (Press Enter for new bullet point):</label>
                  <textarea v-model="job.requirements" rows="4" class="form-control" placeholder="- Holder of Valid COC..."></textarea>
                </div>
              </div>
            </div>
            
            <div v-if="form.jobList.length === 0" class="text-center text-muted p-4 border rounded bg-light">
                No job openings added yet. Click "+ Add Job" to create one.
            </div>
          </div>
        </div>

        <!-- CONTACT INFORMATION -->
        <div class="card shadow-sm border-0 rounded-medium mb-4">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
              <h2 class="h3 vmc-text-primary mb-0">Contact Information</h2>
              <button type="button" @click="clearFields(contactKeys)" class="btn btn-sm btn-outline-danger px-3">Clear Info 🗑️</button>
            </div>

            <!-- Background Media Upload for Contact Us Page -->
            <div class="form-group border-bottom pb-4 mb-4">
              <label class="font-weight-bold">Page Header Background (MP4 or Image, Max 10MB)</label>
              <div class="card bg-light border-0 p-3 text-center d-flex flex-column justify-content-center align-items-center shadow-sm">
                 <input type="file" accept="video/mp4, image/*" @change="onContactMediaChange" class="form-control-file mb-3" />
                 
                 <div v-if="form.contactBackgroundVideo" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Video Loaded</span>
                   <video :src="form.contactBackgroundVideo" class="w-100 rounded shadow-sm border border-white" height="150" controls muted style="object-fit: cover; max-height: 250px;"></video>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.contactBackgroundVideo = ''">Remove Video</button>
                 </div>
                 <div v-else-if="form.contactBackgroundImage" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Image Loaded</span>
                   <div class="image-preview w-100 border-white shadow-sm" :style="{ backgroundImage: `url(${form.contactBackgroundImage})` }"></div>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.contactBackgroundImage = ''">Remove Image</button>
                 </div>
                 <div v-else class="text-muted small py-4">
                   No background media selected. Default image will be used.
                 </div>
              </div>
            </div>

            <div class="form-group">
              <label class="font-weight-bold">Full Address:</label>
              <textarea v-model="form.address" rows="2" class="form-control" placeholder="15 Floor, MARC2000 Tower..."></textarea>
            </div>
            
            <div class="row">
              <div class="col-md-6 form-group"><label class="font-weight-bold">Email 1 (Group):</label><input type="email" v-model="form.email1" class="form-control" placeholder="vmcgroup@veritas.com.ph"></div>
              <div class="col-md-6 form-group"><label class="font-weight-bold">Email 2 (Comm):</label><input type="email" v-model="form.email2" class="form-control" placeholder="vmccomm@veritas.com.ph"></div>
            </div>

            <div class="row">
              <div class="col-md-6 form-group"><label class="font-weight-bold">Globe:</label><input type="text" v-model="form.globenumber" class="form-control" placeholder="0917-511-1372"></div>
              <div class="col-md-6 form-group"><label class="font-weight-bold">Smart:</label><input type="text" v-model="form.smartnumber" class="form-control" placeholder="0947-996-0107"></div>
            </div>
            
            <h5 class="mt-3 mb-3 vmc-text-primary border-bottom pb-2">Department Extensions</h5>
            <div class="row">
              <div class="col-md-4 form-group"><label class="font-weight-bold text-muted small mb-1">Fax Number:</label><input type="text" v-model="form.faxnumber" class="form-control form-control-sm"></div>
              <div class="col-md-4 form-group"><label class="font-weight-bold text-muted small mb-1">PCC Division:</label><input type="text" v-model="form.pcc" class="form-control form-control-sm"></div>
              <div class="col-md-4 form-group"><label class="font-weight-bold text-muted small mb-1">BULK Division:</label><input type="text" v-model="form.bulk" class="form-control form-control-sm"></div>
              <div class="col-md-4 form-group"><label class="font-weight-bold text-muted small mb-1">DOCS Division:</label><input type="text" v-model="form.docs" class="form-control form-control-sm"></div>
              <div class="col-md-4 form-group"><label class="font-weight-bold text-muted small mb-1">Training Division:</label><input type="text" v-model="form.training" class="form-control form-control-sm"></div>
              <div class="col-md-4 form-group"><label class="font-weight-bold text-muted small mb-1">Accounting Dept:</label><input type="text" v-model="form.accounting" class="form-control form-control-sm"></div>
              <div class="col-md-4 form-group"><label class="font-weight-bold text-muted small mb-1">Accounting Dept 2:</label><input type="text" v-model="form.accounting2" class="form-control form-control-sm"></div>
              <div class="col-md-4 form-group"><label class="font-weight-bold text-muted small mb-1">Exec. Offices:</label><input type="text" v-model="form.execOffices" class="form-control form-control-sm"></div>
              <div class="col-md-4 form-group"><label class="font-weight-bold text-muted small mb-1">Admin Department:</label><input type="text" v-model="form.adminDept" class="form-control form-control-sm"></div>
            </div>
          </div>
        </div>

        <!-- KEY VISUAL SLIDES -->
        <div class="card shadow-sm border-0 rounded-medium mb-4">
          <div class="card-body p-4">
            <h2 class="h3 vmc-text-primary mb-4 border-bottom pb-3">Key Visual Slides (Captions)</h2>
            <div class="row">
              <div v-for="n in 6" :key="'slide-'+n" class="col-lg-6 mb-4">
                <div class="card bg-light border-0 shadow-sm h-100 p-3">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="mb-0 vmc-text-primary">Slide {{ n }}</h4>
                    <button type="button" @click="clearSingleSlide(n)" class="btn btn-sm btn-outline-danger">Clear 🗑️</button>
                  </div>
                  <div class="form-group"><label class="font-weight-bold small text-muted">Top Caption:</label><input type="text" v-model="form[`captionOneP${n}`]" class="form-control form-control-sm"></div>
                  <div class="form-group"><label class="font-weight-bold small text-muted">Main Title:</label><input type="text" v-model="form[`captionTwoP${n}`]" class="form-control form-control-sm"></div>
                  <div class="form-group mb-0"><label class="font-weight-bold small text-muted">Description:</label><textarea v-model="form[`captionThreeP${n}`]" rows="2" class="form-control form-control-sm"></textarea></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- KEY VISUAL IMAGES -->
        <div class="card shadow-sm border-0 rounded-medium mb-4">
          <div class="card-body p-4">
            <h2 class="h3 vmc-text-primary mb-4 border-bottom pb-3">Home Page Slider (Images)</h2>
            <div class="row">
              <div class="col-md-4 mb-4" v-for="(key, index) in slideKeys" :key="index">
                <div class="card border border-light shadow-sm p-3 h-100 text-center">
                  <h5 class="vmc-text-primary">Slide #{{ index + 1 }}</h5>
                  <div class="image-preview" :style="{ backgroundImage: form.keyVisuals[key] ? `url(${form.keyVisuals[key]})` : 'none' }">
                     <span v-if="!form.keyVisuals[key]" class="text-muted small">No Image</span>
                  </div>
                  <div class="mt-auto">
                    <button type="button" @click="$refs['kvInput'+index][0] ? $refs['kvInput'+index][0].click() : $refs['kvInput'+index].click()" class="btn btn-primary btn-sm btn-block rounded-pill shadow-sm">Upload Photo</button>
                    <button type="button" @click="$set(form.keyVisuals, key, '')" class="btn btn-outline-danger btn-sm btn-block rounded-pill mt-2">Remove</button>
                    <input :ref="'kvInput'+index" type="file" accept="image/*" style="display: none" @change="(e) => handleUpload(e, form.keyVisuals, key)">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- NEWS ARTICLES -->
        <div class="card shadow-sm border-0 rounded-medium mb-4">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
              <h2 class="h3 vmc-text-primary mb-0">Manage News Articles</h2>
              <button type="button" @click="addNewsArticle" class="btn btn-primary px-4 rounded-pill shadow-sm">+ Write New Article</button>
            </div>

            <!-- Background Media Upload for News Wrapper Page -->
            <div class="form-group border-bottom pb-4 mb-4">
              <label class="font-weight-bold">News Page Header Background (MP4 or Image, Max 10MB)</label>
              <div class="card bg-light border-0 p-3 text-center d-flex flex-column justify-content-center align-items-center shadow-sm">
                 <input type="file" accept="video/mp4, image/*" @change="onNewsMediaChange" class="form-control-file mb-3" />
                 
                 <div v-if="form.newsBackgroundVideo" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Video Loaded</span>
                   <video :src="form.newsBackgroundVideo" class="w-100 rounded shadow-sm border border-white" height="150" controls muted style="object-fit: cover; max-height: 250px;"></video>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.newsBackgroundVideo = ''">Remove Video</button>
                 </div>
                 <div v-else-if="form.newsBackgroundImage" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Image Loaded</span>
                   <div class="image-preview w-100 border-white shadow-sm" :style="{ backgroundImage: `url(${form.newsBackgroundImage})` }"></div>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.newsBackgroundImage = ''">Remove Image</button>
                 </div>
                 <div v-else class="text-muted small py-4">
                   No background media selected. Default image will be used.
                 </div>
              </div>
            </div>

            <div v-for="(article, index) in form.newsArticles" :key="'news-'+index" class="card bg-light border-0 mb-4 shadow-sm">
              <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="mb-0 vmc-text-primary">Article #{{ index + 1 }}</h4>
                  <button type="button" @click="removeItem('newsArticles', index)" class="btn btn-sm btn-danger px-3 shadow-sm">Delete ❌</button>
                </div>

                <div class="form-group">
                    <label class="font-weight-bold">Title:</label>
                    <input type="text" v-model="article.title" placeholder="Article Title" class="form-control font-weight-bold">
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="font-weight-bold">Category:</label>
                      <select v-model="article.category" class="form-control custom-select"> 
                        <option>Company News</option><option>Crew Updates</option><option>Government Advisories</option>
                      </select>
                    </div>
                    <div class="row">
                      <div class="col-6 form-group"><label class="font-weight-bold">Date:</label><input type="date" v-model="article.date" class="form-control"></div>
                      <div class="col-6 form-group"><label class="font-weight-bold">Author:</label><input type="text" v-model="article.author" class="form-control"></div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="card border border-light p-3 h-100 bg-white shadow-sm">
                       <label class="d-flex justify-content-between font-weight-bold mb-2">
                          <span>Article Photos:</span>
                          <span class="badge badge-primary py-1 px-2">{{ article.images ? article.images.length : 0 }} photos</span>
                       </label>
                       <div class="d-flex flex-wrap border rounded p-2 mb-3 bg-light" style="gap:8px; min-height:80px;">
                          <div v-for="(img, i) in article.images" :key="i" class="position-relative shadow-sm rounded" style="width:65px; height:65px; border: 2px solid white;">
                             <img :src="img" class="rounded" style="width:100%; height:100%; object-fit:cover;">
                             <button type="button" @click="article.images.splice(i,1)" class="btn-close-mini shadow">×</button>
                          </div>
                          <div v-if="!article.images || article.images.length === 0" class="text-muted small w-100 text-center align-self-center py-2">No photos added</div>
                       </div>
                       <button type="button" @click="$refs['newsInput'+index][0] ? $refs['newsInput'+index][0].click() : $refs['newsInput'+index].click()" class="btn btn-outline-primary btn-sm btn-block mt-auto rounded-pill">Add Photos</button>
                       <input :ref="'newsInput'+index" type="file" accept="image/*" multiple style="display: none" @change="(e) => handleUpload(e, article, 'images', true)">
                    </div>
                  </div>
                </div>
                
                <div class="form-group mt-3 mb-0">
                    <label class="font-weight-bold">Full Content:</label>
                    <textarea v-model="article.content" rows="6" placeholder="Write your article content here..." class="form-control"></textarea>
                </div>
              </div>
            </div>

            <div v-if="form.newsArticles.length === 0" class="text-center text-muted p-4 border rounded bg-light">
                No news articles added yet. Click "+ Write New Article" to start.
            </div>
          </div>
        </div>

        <!-- CREW AND FLEET STATUS -->
        <div class="card shadow-sm border-0 rounded-medium mb-4">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
               <h2 class="h3 vmc-text-primary mb-0">Crew and Fleet Status</h2>
               <button type="button" @click="clearFields(crewKeys)" class="btn btn-sm btn-outline-danger px-3">Clear Stats 🗑️</button>
            </div>
            
            <div class="row mb-4">
               <div class="col-md-4 form-group"><label class="font-weight-bold">On Board</label><input type="number" v-model="form.onBoard" class="form-control form-control-lg text-center font-weight-bold text-primary"></div>
               <div class="col-md-4 form-group"><label class="font-weight-bold">Stand by</label><input type="number" v-model="form.standBy" class="form-control form-control-lg text-center font-weight-bold text-primary"></div>
               <div class="col-md-4 form-group"><label class="font-weight-bold">Total Vessel</label><input type="number" v-model="form.totalVessels" class="form-control form-control-lg text-center font-weight-bold text-primary"></div>
            </div>

            <hr class="mb-4">
            
            <div class="row">
              <div class="col-md-6 form-group">
                <label class="font-weight-bold">Background Media (MP4 or Image, Max 10MB)</label>
                <div class="card bg-light border-0 p-3 text-center h-100 d-flex flex-column justify-content-center align-items-center shadow-sm">
                   <input type="file" accept="video/mp4, image/*" @change="onMediaChange" class="form-control-file mb-3" />
                   
                   <div v-if="form.homeBackgroundVideo" class="w-100 text-center">
                     <span class="badge badge-success mb-2 px-3 py-1">Custom Video Loaded</span>
                     <video :src="form.homeBackgroundVideo" class="w-100 rounded shadow-sm border border-white" height="150" controls muted style="object-fit: cover;"></video>
                     <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.homeBackgroundVideo = ''">Remove Video</button>
                   </div>
                   <div v-else-if="form.homeBackgroundImage" class="w-100 text-center">
                     <span class="badge badge-success mb-2 px-3 py-1">Custom Image Loaded</span>
                     <div class="image-preview w-100 border-white shadow-sm" :style="{ backgroundImage: `url(${form.homeBackgroundImage})` }"></div>
                     <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.homeBackgroundImage = ''">Remove Image</button>
                   </div>
                   <div v-else class="text-muted small py-4">
                     No background media selected. Default black background will be used.
                   </div>
                </div>
              </div>
              
              <div class="col-md-6 form-group">
                <label class="font-weight-bold">Crew & Fleet Status Logo</label>
                <div class="card bg-light border-0 p-3 h-100 d-flex flex-column justify-content-center shadow-sm">
                     <div class="image-preview w-100 bg-white border-white shadow-sm" :style="{ backgroundImage: form.homeCrewFleetStatusLogo.image ? `url(${form.homeCrewFleetStatusLogo.image})` : 'none' }">
                         <span v-if="!form.homeCrewFleetStatusLogo.image" class="text-muted small">No Image Selected</span>
                     </div>
                     <div class="d-flex justify-content-center mt-3" style="gap: 10px;">
                         <button type="button" @click="$refs.cfsInput.click()" class="btn btn-primary btn-sm px-4 rounded-pill shadow-sm">Upload Logo</button>
                         <button v-if="form.homeCrewFleetStatusLogo.image" type="button" @click="form.homeCrewFleetStatusLogo.image = ''" class="btn btn-outline-danger btn-sm px-4 rounded-pill">Remove</button>
                     </div>
                     <input ref="cfsInput" type="file" accept="image/*" style="display: none" @change="(e) => handleUpload(e, form.homeCrewFleetStatusLogo, 'image')">
                     <textarea v-model="form.cfsimgdesc" rows="2" placeholder="Write description under logo..." class="form-control mt-3 form-control-sm"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- MEMBERSHIP AFFILIATIONS -->
        <div class="card shadow-sm border-0 rounded-medium mb-4">
          <div class="card-body p-4">
             <div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
               <h2 class="h3 vmc-text-primary mb-0">Membership Affiliations</h2>
               <button type="button" @click="addItem('affiliates', { name: '', image: '' })" class="btn btn-primary px-4 rounded-pill shadow-sm">+ Add Logo</button>
             </div>
             
             <div class="row">
               <div v-for="(partner, index) in form.affiliates" :key="'aff-'+index" class="col-md-3 col-6 mb-4">
                  <div class="card bg-light border-0 p-3 text-center h-100 shadow-sm">
                     <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="font-weight-bold small text-muted">Logo #{{index+1}}</span> 
                        <button type="button" @click="removeItem('affiliates', index)" class="btn btn-sm text-danger p-0 border-0 bg-transparent">&times;</button>
                     </div>
                     <div class="image-preview bg-white border-white shadow-sm rounded mb-3" :style="{ backgroundImage: partner.image ? `url(${partner.image})` : 'none' }">
                         <span v-if="!partner.image" class="text-muted small">No Logo</span>
                     </div>
                     <button type="button" @click="$refs['affInput'+index][0] ? $refs['affInput'+index][0].click() : $refs['affInput'+index].click()" class="btn btn-outline-primary btn-sm btn-block rounded-pill mt-auto">Upload</button>
                     <input :ref="'affInput'+index" type="file" accept="image/*" style="display:none" @change="(e) => handleUpload(e, partner, 'image')">
                  </div>
               </div>
             </div>
          </div>
        </div>

        <!-- ABOUT US -->
        <div class="card shadow-sm border-0 rounded-medium mb-4">
          <div class="card-body p-4">
             <div class="border-bottom pb-3 mb-4">
                 <h2 class="h3 vmc-text-primary mb-0">About Us - Company Details</h2>
             </div>
             
             <div class="row mb-4">
                 <div class="col-md-3 mb-3">
                     <div class="card bg-light border-0 p-3 h-100 shadow-sm text-center">
                         <h5 class="vmc-text-primary mb-3 h6 font-weight-bold">Company Logo</h5>
                         <div class="image-preview bg-white border-white shadow-sm" :style="{ backgroundImage: form.aboutOfficeLogo ? `url(${form.aboutOfficeLogo})` : 'none' }">
                             <span v-if="!form.aboutOfficeLogo" class="text-muted small">No Image</span>
                         </div>
                         <button type="button" @click="$refs.aboutOfficeLogoInput.click()" class="btn btn-primary btn-block btn-sm mt-3 rounded-pill shadow-sm">Upload Photo</button>
                         <button type="button" v-if="form.aboutOfficeLogo" @click="form.aboutOfficeLogo = ''" class="btn btn-outline-danger btn-block btn-sm mt-2 rounded-pill">Remove</button>
                         <input ref="aboutOfficeLogoInput" type="file" accept="image/*" style="display: none" @change="(e) => handleUpload(e, form, 'aboutOfficeLogo')">
                     </div>
                 </div>
                 <div class="col-md-3 mb-3">
                     <div class="card bg-light border-0 p-3 h-100 shadow-sm text-center">
                         <h5 class="vmc-text-primary mb-3 h6 font-weight-bold">Quality Crew BG</h5>
                         <div class="image-preview bg-white border-white shadow-sm" :style="{ backgroundImage: form.aboutQualityCrewBg ? `url(${form.aboutQualityCrewBg})` : 'none' }">
                             <span v-if="!form.aboutQualityCrewBg" class="text-muted small">No Image</span>
                         </div>
                         <button type="button" @click="$refs.aboutQualityCrewBgInput.click()" class="btn btn-primary btn-block btn-sm mt-3 rounded-pill shadow-sm">Upload Photo</button>
                         <button type="button" v-if="form.aboutQualityCrewBg" @click="form.aboutQualityCrewBg = ''" class="btn btn-outline-danger btn-block btn-sm mt-2 rounded-pill">Remove</button>
                         <input ref="aboutQualityCrewBgInput" type="file" accept="image/*" style="display: none" @change="(e) => handleUpload(e, form, 'aboutQualityCrewBg')">
                     </div>
                 </div>
                 <div class="col-md-3 mb-3">
                     <div class="card bg-light border-0 p-3 h-100 shadow-sm text-center">
                         <h5 class="vmc-text-primary mb-3 h6 font-weight-bold">History Image</h5>
                         <div class="image-preview bg-white border-white shadow-sm" :style="{ backgroundImage: form.aboutTowerImg ? `url(${form.aboutTowerImg})` : 'none' }">
                             <span v-if="!form.aboutTowerImg" class="text-muted small">No Image</span>
                         </div>
                         <button type="button" @click="$refs.aboutTowerImgInput.click()" class="btn btn-primary btn-block btn-sm mt-3 rounded-pill shadow-sm">Upload Photo</button>
                         <button type="button" v-if="form.aboutTowerImg" @click="form.aboutTowerImg = ''" class="btn btn-outline-danger btn-block btn-sm mt-2 rounded-pill">Remove</button>
                         <input ref="aboutTowerImgInput" type="file" accept="image/*" style="display: none" @change="(e) => handleUpload(e, form, 'aboutTowerImg')">
                     </div>
                 </div>
                 <div class="col-md-3 mb-3">
                     <div class="card bg-light border-0 p-3 h-100 shadow-sm text-center">
                         <h5 class="vmc-text-primary mb-3 h6 font-weight-bold">Org Chart Image</h5>
                         <div class="image-preview bg-white border-white shadow-sm" :style="{ backgroundImage: form.orgChartImg ? `url(${form.orgChartImg})` : 'none' }">
                             <span v-if="!form.orgChartImg" class="text-muted small">No Image</span>
                         </div>
                         <button type="button" @click="$refs.orgChartImgInput.click()" class="btn btn-primary btn-block btn-sm mt-3 rounded-pill shadow-sm">Upload Photo</button>
                         <button type="button" v-if="form.orgChartImg" @click="form.orgChartImg = ''" class="btn btn-outline-danger btn-block btn-sm mt-2 rounded-pill">Remove</button>
                         <input ref="orgChartImgInput" type="file" accept="image/*" style="display: none" @change="(e) => handleUpload(e, form, 'orgChartImg')">
                     </div>
                 </div>
             </div>

             <div class="form-group"><label class="font-weight-bold text-muted mb-1">Company Description:</label><textarea v-model="form.TCdescription" rows="4" class="form-control"></textarea></div>
             <div class="form-group"><label class="font-weight-bold text-muted mb-1">Why Veritas:</label><textarea v-model="form.whyVeritas" rows="4" class="form-control"></textarea></div>
             <div class="form-group"><label class="font-weight-bold text-muted mb-1">Quality Crew:</label><textarea v-model="form.qualityCrewRecruitment" rows="3" class="form-control"></textarea></div>
             <div class="form-group"><label class="font-weight-bold text-muted mb-1">Mission Statement:</label><textarea v-model="form.missionStatement" rows="3" class="form-control"></textarea></div>
             
             <h5 class="mt-4 mb-3 vmc-text-primary border-bottom pb-2">Core Values</h5>
             <div class="row">
                <div class="col-md-4 form-group"><label class="font-weight-bold text-muted mb-1">Honesty:</label><textarea v-model="form.coreValuesHonesty" rows="4" class="form-control"></textarea></div>
                <div class="col-md-4 form-group"><label class="font-weight-bold text-muted mb-1">Integrity:</label><textarea v-model="form.coreValuesIntegrity" rows="4" class="form-control"></textarea></div>
                <div class="col-md-4 form-group"><label class="font-weight-bold text-muted mb-1">Quality Service:</label><textarea v-model="form.coreValuesQualityService" rows="4" class="form-control"></textarea></div>
             </div>
             <div class="form-group mb-0"><label class="font-weight-bold text-muted mb-1">History:</label><textarea v-model="form.history" rows="5" class="form-control"></textarea></div>
          </div>
        </div>

        <!-- PRINCIPALS LIST -->
        <div class="card shadow-sm border-0 rounded-medium mb-4">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
              <h2 class="h3 vmc-text-primary mb-0">Our Principals List</h2>
              <button type="button" @click="addItem('principalsList', { name: '', address: '', tel: '', fax: '', content: '', logo: '' })" class="btn btn-primary px-4 rounded-pill shadow-sm">+ Add Principal</button>
            </div>
            
            <div v-for="(principal, index) in form.principalsList" :key="'princ-'+index" class="card bg-light border-0 mb-4 shadow-sm">
               <div class="card-body p-4">
                 <div class="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                    <h4 class="mb-0 vmc-text-primary">Principal #{{ index + 1 }}</h4>
                    <button type="button" @click="removeItem('principalsList', index)" class="btn btn-sm btn-danger px-3 shadow-sm">Remove ❌</button>
                 </div>
                 
                 <div class="d-flex align-items-center mb-4 p-3 bg-white rounded shadow-sm border border-light">
                    <div class="image-preview bg-light border-white shadow-sm mb-0 mr-4" style="width:100px; height:100px;" :style="{ backgroundImage: principal.logo ? `url(${principal.logo})` : 'none' }">
                        <span v-if="!principal.logo" class="text-muted small">No Logo</span>
                    </div>
                    <div>
                       <button type="button" @click="$refs['princInput'+index][0] ? $refs['princInput'+index][0].click() : $refs['princInput'+index].click()" class="btn btn-outline-primary btn-sm rounded-pill px-4">Upload Principal Logo</button>
                       <input :ref="'princInput'+index" type="file" accept="image/*" style="display:none" @change="(e) => handleUpload(e, principal, 'logo')">
                    </div>
                 </div>
                 
                 <div class="form-group"><label class="font-weight-bold">Name:</label><input v-model="principal.name" class="form-control font-weight-bold"></div>
                 <div class="row">
                    <div class="col-md-6 form-group"><label class="font-weight-bold text-muted">Address:</label><input v-model="principal.address" class="form-control"></div>
                    <div class="col-md-3 form-group"><label class="font-weight-bold text-muted">Tel:</label><input v-model="principal.tel" class="form-control"></div>
                    <div class="col-md-3 form-group"><label class="font-weight-bold text-muted">Fax:</label><input v-model="principal.fax" class="form-control"></div>
                 </div>
                 <div class="form-group mb-0"><label class="font-weight-bold text-muted">Description:</label><textarea v-model="principal.content" rows="3" class="form-control"></textarea></div>
               </div>
            </div>
          </div>
        </div>

        <!-- VERITAS SCHEDULE IMAGES -->
        <div class="card shadow-sm border-0 rounded-medium mb-4">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
              <h2 class="h3 vmc-text-primary mb-0">Veritas Schedule Page</h2>
              <button type="button" @click="addItem('scheduleImages', { image: '' })" class="btn btn-primary px-4 rounded-pill shadow-sm">+ Add Schedule</button>
            </div>

            <!-- Background Media Upload for Schedules -->
            <div class="form-group border-bottom pb-4 mb-4">
              <label class="font-weight-bold">Page Header Background (MP4 or Image, Max 10MB)</label>
              <div class="card bg-light border-0 p-3 text-center d-flex flex-column justify-content-center align-items-center shadow-sm">
                 <input type="file" accept="video/mp4, image/*" @change="onScheduleMediaChange" class="form-control-file mb-3" />
                 
                 <div v-if="form.scheduleBackgroundVideo" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Video Loaded</span>
                   <video :src="form.scheduleBackgroundVideo" class="w-100 rounded shadow-sm border border-white" height="150" controls muted style="object-fit: cover; max-height: 250px;"></video>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.scheduleBackgroundVideo = ''">Remove Video</button>
                 </div>
                 <div v-else-if="form.scheduleBackgroundImage" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Image Loaded</span>
                   <div class="image-preview w-100 border-white shadow-sm" :style="{ backgroundImage: `url(${form.scheduleBackgroundImage})` }"></div>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.scheduleBackgroundImage = ''">Remove Image</button>
                 </div>
                 <div v-else class="text-muted small py-4">
                   No background media selected. Default image will be used.
                 </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4 mb-4" v-for="(item, index) in form.scheduleImages" :key="index">
                <div class="card bg-light border-0 p-3 h-100 shadow-sm text-center">
                   <div class="d-flex justify-content-between align-items-center mb-3">
                      <strong class="text-dark">Schedule #{{ index + 1 }}</strong> 
                      <button type="button" @click="removeItem('scheduleImages', index)" class="btn btn-sm text-danger p-0 border-0 bg-transparent">&times;</button>
                   </div>
                   <div class="image-preview bg-white border-white shadow-sm rounded mb-3" :style="{ backgroundImage: item.image ? `url(${item.image})` : 'none' }">
                       <span v-if="!item.image" class="text-muted small">No Image</span>
                   </div>
                   <button type="button" @click="$refs['schedInput'+index][0] ? $refs['schedInput'+index][0].click() : $refs['schedInput'+index].click()" class="btn btn-outline-primary btn-sm btn-block rounded-pill mt-auto">Upload</button>
                   <input :ref="'schedInput'+index" type="file" accept="image/*" style="display:none" @change="(e) => handleUpload(e, item, 'image')">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- VERITAS CAREER IMAGES -->
        <div class="card shadow-sm border-0 rounded-medium mb-4">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
              <h2 class="h3 vmc-text-primary mb-0">Veritas Career Page</h2>
              <button type="button" @click="addItem('careerImages', { image: '' })" class="btn btn-primary px-4 rounded-pill shadow-sm">+ Add Career Image</button>
            </div>

            <!-- Background Media Upload for Careers -->
            <div class="form-group border-bottom pb-4 mb-4">
              <label class="font-weight-bold">Page Header Background (MP4 or Image, Max 10MB)</label>
              <div class="card bg-light border-0 p-3 text-center d-flex flex-column justify-content-center align-items-center shadow-sm">
                 <input type="file" accept="video/mp4, image/*" @change="onCareerMediaChange" class="form-control-file mb-3" />
                 
                 <div v-if="form.careerBackgroundVideo" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Video Loaded</span>
                   <video :src="form.careerBackgroundVideo" class="w-100 rounded shadow-sm border border-white" height="150" controls muted style="object-fit: cover; max-height: 250px;"></video>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.careerBackgroundVideo = ''">Remove Video</button>
                 </div>
                 <div v-else-if="form.careerBackgroundImage" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Image Loaded</span>
                   <div class="image-preview w-100 border-white shadow-sm" :style="{ backgroundImage: `url(${form.careerBackgroundImage})` }"></div>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.careerBackgroundImage = ''">Remove Image</button>
                 </div>
                 <div v-else class="text-muted small py-4">
                   No background media selected. Default image will be used.
                 </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4 mb-4" v-for="(item, index) in form.careerImages" :key="index">
                <div class="card bg-light border-0 p-3 h-100 shadow-sm text-center">
                   <div class="d-flex justify-content-between align-items-center mb-3">
                      <strong class="text-dark">Image #{{ index + 1 }}</strong> 
                      <button type="button" @click="removeItem('careerImages', index)" class="btn btn-sm text-danger p-0 border-0 bg-transparent">&times;</button>
                   </div>
                   <div class="image-preview bg-white border-white shadow-sm rounded mb-3" :style="{ backgroundImage: item.image ? `url(${item.image})` : 'none' }">
                       <span v-if="!item.image" class="text-muted small">No Image</span>
                   </div>
                   <button type="button" @click="$refs['carInput'+index][0] ? $refs['carInput'+index][0].click() : $refs['carInput'+index].click()" class="btn btn-outline-primary btn-sm btn-block rounded-pill mt-auto">Upload</button>
                   <input :ref="'carInput'+index" type="file" accept="image/*" style="display:none" @change="(e) => handleUpload(e, item, 'image')">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CSR ACTIVITIES MANAGER -->
        <div class="card shadow-sm border-0 rounded-medium mb-4">
          <div class="card-body p-4">
             <div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
                <h2 class="h3 vmc-text-primary mb-0">CSR Activities Manager</h2>
                <button type="button" @click="addItem('csrYears', { year: new Date().getFullYear(), type: 'Veritas Activities', activities: [] })" class="btn btn-primary px-4 rounded-pill shadow-sm">+ Add Year Group</button>
             </div>

             <!-- UNIQUE Background Media Upload for CSR Activities -->
             <div class="form-group border-bottom pb-4 mb-4">
              <label class="font-weight-bold">CSR Page Header Background (MP4 or Image, Max 10MB)</label>
              <div class="card bg-light border-0 p-3 text-center d-flex flex-column justify-content-center align-items-center shadow-sm">
                 <input type="file" accept="video/mp4, image/*" @change="onCsrMediaChange" class="form-control-file mb-3" />
                 
                 <div v-if="form.csrBackgroundVideo" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Video Loaded</span>
                   <video :src="form.csrBackgroundVideo" class="w-100 rounded shadow-sm border border-white" height="150" controls muted style="object-fit: cover; max-height: 250px;"></video>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.csrBackgroundVideo = ''">Remove Video</button>
                 </div>
                 <div v-else-if="form.csrBackgroundImage" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Image Loaded</span>
                   <div class="image-preview w-100 border-white shadow-sm" :style="{ backgroundImage: `url(${form.csrBackgroundImage})` }"></div>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.csrBackgroundImage = ''">Remove Image</button>
                 </div>
                 <div v-else class="text-muted small py-4">
                   No background media selected. Default image will be used.
                 </div>
              </div>
            </div>
             
             <div v-for="(yearGroup, yIndex) in form.csrYears" :key="'cy-'+yIndex" class="card border border-light bg-light shadow-sm mb-4">
                <div class="card-body p-4">
                  <div class="d-flex justify-content-between align-items-center border-bottom border-secondary pb-3 mb-4">
                     <div class="d-flex align-items-center flex-wrap">
                         <span class="mr-2 font-weight-bold vmc-text-primary h5 mb-0">Year:</span>
                         <input type="number" v-model="yearGroup.year" class="form-control d-inline-block mr-2 font-weight-bold text-center" style="width:100px">
                         <select v-model="yearGroup.type" class="form-control d-inline-block custom-select mr-3" style="width:250px">
                             <option value="Outside Veritas Activities">Outside Veritas Activities</option>
                             <option value="Veritas Activities">Veritas Activities</option>
                         </select>
                         <button type="button" @click="addNestedItem(yearGroup.activities, { title: '', images: [] })" class="btn btn-success btn-sm px-3 rounded-pill shadow-sm">+ Activity</button>
                     </div>
                     <button type="button" @click="removeItem('csrYears', yIndex)" class="btn btn-danger btn-sm px-3 shadow-sm">Delete Year Group</button>
                  </div>

                  <div class="row">
                     <div class="col-md-6 mb-3" v-for="(activity, aIndex) in yearGroup.activities" :key="'ca-'+aIndex">
                        <div class="card bg-white border-0 p-3 shadow-sm h-100">
                           <input type="text" v-model="activity.title" class="form-control mb-3 font-weight-bold" placeholder="Activity Title">
                           
                           <div class="d-flex flex-wrap border rounded p-2 mb-3 bg-light" style="gap:8px; min-height:80px;">
                              <div v-for="(img, i) in activity.images" :key="i" class="position-relative shadow-sm rounded" style="width:65px; height:65px; border: 2px solid white;">
                                 <img :src="img" class="rounded" style="width:100%; height:100%; object-fit:cover;">
                                 <button type="button" @click="activity.images.splice(i,1)" class="btn-close-mini shadow">×</button>
                              </div>
                              <div v-if="!activity.images || activity.images.length === 0" class="text-muted small w-100 text-center align-self-center py-2">No photos added</div>
                           </div>

                           <div class="d-flex justify-content-between mt-auto">
                              <button type="button" @click="$refs['csrInput'+yIndex+aIndex][0] ? $refs['csrInput'+yIndex+aIndex][0].click() : $refs['csrInput'+yIndex+aIndex].click()" class="btn btn-outline-primary btn-sm px-3 rounded-pill">Add Photos</button>
                              <button type="button" @click="yearGroup.activities.splice(aIndex, 1)" class="btn btn-outline-danger btn-sm px-3 rounded-pill">Remove</button>
                           </div>
                           <input :ref="'csrInput'+yIndex+aIndex" type="file" accept="image/*" multiple style="display:none" @change="(e) => handleUpload(e, activity, 'images', true)">
                        </div>
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        <!-- OFFICE PROGRAMS MANAGER -->
        <div class="card shadow-sm border-0 rounded-medium mb-4">
          <div class="card-body p-4">
             <div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
                <h2 class="h3 vmc-text-primary mb-0">Office Programs Manager</h2>
                <button type="button" @click="addItem('officePrograms', {activities: [] })" class="btn btn-primary px-4 rounded-pill shadow-sm">+ Add Category</button>
             </div>

             <!-- UNIQUE Background Media Upload for Office Programs -->
             <div class="form-group border-bottom pb-4 mb-4">
              <label class="font-weight-bold">Office Programs Header Background (MP4 or Image, Max 10MB)</label>
              <div class="card bg-light border-0 p-3 text-center d-flex flex-column justify-content-center align-items-center shadow-sm">
                 <input type="file" accept="video/mp4, image/*" @change="onOfficeProgramsMediaChange" class="form-control-file mb-3" />
                 
                 <div v-if="form.officeProgramsBackgroundVideo" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Video Loaded</span>
                   <video :src="form.officeProgramsBackgroundVideo" class="w-100 rounded shadow-sm border border-white" height="150" controls muted style="object-fit: cover; max-height: 250px;"></video>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.officeProgramsBackgroundVideo = ''">Remove Video</button>
                 </div>
                 <div v-else-if="form.officeProgramsBackgroundImage" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Image Loaded</span>
                   <div class="image-preview w-100 border-white shadow-sm" :style="{ backgroundImage: `url(${form.officeProgramsBackgroundImage})` }"></div>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.officeProgramsBackgroundImage = ''">Remove Image</button>
                 </div>
                 <div v-else class="text-muted small py-4">
                   No background media selected. Default image will be used.
                 </div>
              </div>
            </div>
             
             <div v-for="(cat, cIndex) in form.officePrograms" :key="'op-'+cIndex" class="card border border-light bg-light shadow-sm mb-4">
                <div class="card-body p-4">
                  <div class="d-flex justify-content-between align-items-center border-bottom border-secondary pb-3 mb-4">
                     <div class="d-flex align-items-center flex-wrap">
                         <span class="mr-2 font-weight-bold vmc-text-primary h5 mb-0">Category:</span>
                         <input type="text" v-model="cat.categoryTitle" class="form-control font-weight-bold mr-3" style="width: 250px;">
                         <button type="button" @click="addNestedItem(cat.activities, { title: '', images: [] })" class="btn btn-success btn-sm px-3 rounded-pill shadow-sm">+ Event</button>
                     </div>
                     <button type="button" @click="removeItem('officePrograms', cIndex)" class="btn btn-danger btn-sm px-3 shadow-sm">Delete Category</button>
                  </div>

                  <div class="row">
                     <div class="col-md-6 mb-3" v-for="(event, eIndex) in cat.activities" :key="'evt-'+eIndex">
                        <div class="card bg-white border-0 p-3 shadow-sm h-100">
                           <input type="text" v-model="event.title" class="form-control mb-3 font-weight-bold" placeholder="Event Title">
                           <div class="d-flex flex-wrap border rounded p-2 mb-3 bg-light" style="gap:8px; min-height:80px;">
                              <div v-for="(img, i) in event.images" :key="i" class="position-relative shadow-sm rounded" style="width:65px; height:65px; border: 2px solid white;">
                                 <img :src="img" class="rounded" style="width:100%; height:100%; object-fit:cover;">
                                 <button type="button" @click="event.images.splice(i,1)" class="btn-close-mini shadow">×</button>
                              </div>
                              <div v-if="!event.images || event.images.length === 0" class="text-muted small w-100 text-center align-self-center py-2">No photos added</div>
                           </div>
                           <div class="d-flex justify-content-between mt-auto">
                              <button type="button" @click="$refs['progInput'+cIndex+eIndex][0] ? $refs['progInput'+cIndex+eIndex][0].click() : $refs['progInput'+cIndex+eIndex].click()" class="btn btn-outline-primary btn-sm px-3 rounded-pill">Add Photos</button>
                              <button type="button" @click="cat.activities.splice(eIndex, 1)" class="btn btn-outline-danger btn-sm px-3 rounded-pill">Remove</button>
                           </div>
                           <input :ref="'progInput'+cIndex+eIndex" type="file" accept="image/*" multiple style="display:none" @change="(e) => handleUpload(e, event, 'images', true)">
                        </div>
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        <!-- ALLOTTEES GATHERING MANAGER -->
        <div class="card shadow-sm border-0 rounded-medium mb-4">
          <div class="card-body p-4">
             <div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
                <h2 class="h3 vmc-text-primary mb-0">Allottees Gathering Manager</h2>
                <button type="button" @click="addItem('allotteeYears', { year: new Date().getFullYear(), activities: [] })" class="btn btn-primary px-4 rounded-pill shadow-sm">+ Add Year</button>
             </div>
             
             <!-- UNIQUE Background Media Upload for Allottees Gathering -->
             <div class="form-group border-bottom pb-4 mb-4">
              <label class="font-weight-bold">Allottees Page Header Background (MP4 or Image, Max 10MB)</label>
              <div class="card bg-light border-0 p-3 text-center d-flex flex-column justify-content-center align-items-center shadow-sm">
                 <input type="file" accept="video/mp4, image/*" @change="onAllotteeMediaChange" class="form-control-file mb-3" />
                 
                 <div v-if="form.allotteeBackgroundVideo" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Video Loaded</span>
                   <video :src="form.allotteeBackgroundVideo" class="w-100 rounded shadow-sm border border-white" height="150" controls muted style="object-fit: cover; max-height: 250px;"></video>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.allotteeBackgroundVideo = ''">Remove Video</button>
                 </div>
                 <div v-else-if="form.allotteeBackgroundImage" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Image Loaded</span>
                   <div class="image-preview w-100 border-white shadow-sm" :style="{ backgroundImage: `url(${form.allotteeBackgroundImage})` }"></div>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.allotteeBackgroundImage = ''">Remove Image</button>
                 </div>
                 <div v-else class="text-muted small py-4">
                   No background media selected. Default image will be used.
                 </div>
              </div>
            </div>

             <div v-for="(yearGroup, yIndex) in form.allotteeYears" :key="'ay-'+yIndex" class="card border border-light bg-light shadow-sm mb-4">
                <div class="card-body p-4">
                  <div class="d-flex justify-content-between align-items-center border-bottom border-secondary pb-3 mb-4">
                     <div class="d-flex align-items-center flex-wrap">
                         <span class="mr-2 font-weight-bold vmc-text-primary h5 mb-0">Year:</span>
                         <input type="number" v-model="yearGroup.year" class="form-control d-inline-block mr-3 font-weight-bold text-center" style="width:100px">
                         <button type="button" @click="addNestedItem(yearGroup.activities, { title: '', images: [] })" class="btn btn-success btn-sm px-3 rounded-pill shadow-sm">+ Event</button>
                     </div>
                     <button type="button" @click="removeItem('allotteeYears', yIndex)" class="btn btn-danger btn-sm px-3 shadow-sm">Delete Year</button>
                  </div>
                  
                  <div class="row">
                     <div class="col-md-6 mb-3" v-for="(activity, aIndex) in yearGroup.activities" :key="'ae-'+aIndex">
                        <div class="card bg-white border-0 p-3 shadow-sm h-100">
                           <input type="text" v-model="activity.title" class="form-control mb-3 font-weight-bold" placeholder="Event Title">
                           <div class="d-flex flex-wrap border rounded p-2 mb-3 bg-light" style="gap:8px; min-height:80px;">
                              <div v-for="(img, i) in activity.images" :key="i" class="position-relative shadow-sm rounded" style="width:65px; height:65px; border: 2px solid white;">
                                 <img :src="img" class="rounded" style="width:100%; height:100%; object-fit:cover;">
                                 <button type="button" @click="activity.images.splice(i,1)" class="btn-close-mini shadow">×</button>
                              </div>
                              <div v-if="!activity.images || activity.images.length === 0" class="text-muted small w-100 text-center align-self-center py-2">No photos added</div>
                           </div>
                           <div class="d-flex justify-content-between mt-auto">
                              <button type="button" @click="$refs['allotInput'+yIndex+aIndex][0] ? $refs['allotInput'+yIndex+aIndex][0].click() : $refs['allotInput'+yIndex+aIndex].click()" class="btn btn-outline-primary btn-sm px-3 rounded-pill">Add Photos</button>
                              <button type="button" @click="yearGroup.activities.splice(aIndex, 1)" class="btn btn-outline-danger btn-sm px-3 rounded-pill">Remove</button>
                           </div>
                           <input :ref="'allotInput'+yIndex+aIndex" type="file" accept="image/*" multiple style="display:none" @change="(e) => handleUpload(e, activity, 'images', true)">
                        </div>
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        <!-- SCHOLARSHIP & CADETSHIP -->
        <div class="card shadow-sm border-0 rounded-medium mb-4">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
              <h2 class="h3 vmc-text-primary mb-0">Scholarship & Cadetship Programs</h2>
              <button type="button" @click="addItem('cadetPrograms', { description: '', image: '' })" class="btn btn-primary px-4 rounded-pill shadow-sm">+ Add Section</button>
            </div>

            <!-- NEW: UNIQUE Background Media Upload for Cadetship -->
            <div class="form-group border-bottom pb-4 mb-4">
              <label class="font-weight-bold">Cadetship Page Header Background (MP4 or Image, Max 10MB)</label>
              <div class="card bg-light border-0 p-3 text-center d-flex flex-column justify-content-center align-items-center shadow-sm">
                 <input type="file" accept="video/mp4, image/*" @change="onCadetMediaChange" class="form-control-file mb-3" />
                 
                 <div v-if="form.cadetBackgroundVideo" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Video Loaded</span>
                   <video :src="form.cadetBackgroundVideo" class="w-100 rounded shadow-sm border border-white" height="150" controls muted style="object-fit: cover; max-height: 250px;"></video>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.cadetBackgroundVideo = ''">Remove Video</button>
                 </div>
                 <div v-else-if="form.cadetBackgroundImage" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Image Loaded</span>
                   <div class="image-preview w-100 border-white shadow-sm" :style="{ backgroundImage: `url(${form.cadetBackgroundImage})` }"></div>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.cadetBackgroundImage = ''">Remove Image</button>
                 </div>
                 <div v-else class="text-muted small py-4">
                   No background media selected. Default image will be used.
                 </div>
              </div>
            </div>
            
            <div v-for="(program, index) in form.cadetPrograms" :key="'cadet-'+index" class="card bg-light border-0 mb-4 shadow-sm">
              <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-center border-bottom border-secondary pb-3 mb-4">
                  <h4 class="mb-0 vmc-text-primary">Section #{{ index + 1 }}</h4>
                  <button type="button" @click="removeItem('cadetPrograms', index)" class="btn btn-sm btn-danger px-3 shadow-sm">Remove ❌</button>
                </div>
                <div class="row">
                    <div class="col-md-4 mb-3">
                       <div class="image-preview bg-white border-white shadow-sm mb-3" :style="{ backgroundImage: program.image ? `url(${program.image})` : 'none' }">
                           <span v-if="!program.image" class="text-muted small">No Image Uploaded</span>
                       </div>
                       <button type="button" @click="$refs['cadInput'+index][0] ? $refs['cadInput'+index][0].click() : $refs['cadInput'+index].click()" class="btn btn-outline-primary btn-block btn-sm rounded-pill mt-2">Upload Photo</button>
                       <input :ref="'cadInput'+index" type="file" accept="image/*" style="display:none" @change="(e) => handleUpload(e, program, 'image')">
                    </div>
                    <div class="col-md-8 mb-3">
                       <textarea v-model="program.description" rows="8" class="form-control h-100" placeholder="Write section description here..."></textarea>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TRAINING PROGRAMS -->
        <div class="card shadow-sm border-0 rounded-medium mb-4">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
              <h2 class="h3 vmc-text-primary mb-0">Training Programs</h2>
              <button type="button" @click="addItem('trainingList', { title: '', description: '', image: '' })" class="btn btn-primary px-4 rounded-pill shadow-sm">+ Add Section</button>
            </div>

            <!-- NEW: UNIQUE Background Media Upload for Training -->
            <div class="form-group border-bottom pb-4 mb-4">
              <label class="font-weight-bold">Training Page Header Background (MP4 or Image, Max 10MB)</label>
              <div class="card bg-light border-0 p-3 text-center d-flex flex-column justify-content-center align-items-center shadow-sm">
                 <input type="file" accept="video/mp4, image/*" @change="onTrainingMediaChange" class="form-control-file mb-3" />
                 
                 <div v-if="form.trainingBackgroundVideo" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Video Loaded</span>
                   <video :src="form.trainingBackgroundVideo" class="w-100 rounded shadow-sm border border-white" height="150" controls muted style="object-fit: cover; max-height: 250px;"></video>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.trainingBackgroundVideo = ''">Remove Video</button>
                 </div>
                 <div v-else-if="form.trainingBackgroundImage" class="w-100 text-center">
                   <span class="badge badge-success mb-2 px-3 py-1">Custom Image Loaded</span>
                   <div class="image-preview w-100 border-white shadow-sm" :style="{ backgroundImage: `url(${form.trainingBackgroundImage})` }"></div>
                   <button type="button" class="btn btn-outline-danger btn-sm rounded-pill mt-3 px-4" @click="form.trainingBackgroundImage = ''">Remove Image</button>
                 </div>
                 <div v-else class="text-muted small py-4">
                   No background media selected. Default image will be used.
                 </div>
              </div>
            </div>
            
            <div class="form-group bg-light p-3 rounded border mb-4">
                <label class="font-weight-bold vmc-text-primary mb-2">Page Intro Text:</label>
                <textarea v-model="form.trainingIntro" rows="3" class="form-control border-0 shadow-sm"></textarea>
            </div>
            
            <div v-for="(item, index) in form.trainingList" :key="'train-'+index" class="card bg-light border-0 mb-4 shadow-sm">
              <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-center border-bottom border-secondary pb-3 mb-4">
                  <h4 class="mb-0 vmc-text-primary">Program #{{ index + 1 }}</h4>
                  <button type="button" @click="removeItem('trainingList', index)" class="btn btn-sm btn-danger px-3 shadow-sm">Remove ❌</button>
                </div>
                <div class="row">
                    <div class="col-md-4 mb-3">
                       <div class="image-preview bg-white border-white shadow-sm mb-3" :style="{ backgroundImage: item.image ? `url(${item.image})` : 'none' }">
                           <span v-if="!item.image" class="text-muted small">No Image Uploaded</span>
                       </div>
                       <button type="button" @click="$refs['trainInput'+index][0] ? $refs['trainInput'+index][0].click() : $refs['trainInput'+index].click()" class="btn btn-outline-primary btn-block btn-sm rounded-pill mt-2">Upload Photo</button>
                       <input :ref="'trainInput'+index" type="file" accept="image/*" style="display:none" @change="(e) => handleUpload(e, item, 'image')">
                    </div>
                    <div class="col-md-8 mb-3 d-flex flex-column">
                       <input type="text" v-model="item.title" class="form-control mb-3 font-weight-bold" placeholder="Program Title">
                       <textarea v-model="item.description" class="form-control flex-grow-1" placeholder="Detailed description..."></textarea>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- MANUAL SAVE BAR -->
    <div class="fixed-bottom bg-white shadow-lg py-3 px-4 border-top d-flex justify-content-end align-items-center" style="z-index: 1040;">
        <span v-if="statusMessage" class="mr-4 font-weight-bold h5 mb-0" :class="{'text-success': isSavingSuccess, 'text-danger': statusMessage.includes('Error') || statusMessage.includes('failed')}">
            {{ statusMessage }}
        </span>
        <button type="button" @click="saveToBackend" class="btn btn-lg px-5 shadow-sm rounded-pill vmc-btn-prime-2 text-white border-0 font-weight-bold" style="background-color: #002366; transition: 0.2s;">
            💾 Save All Changes
        </button>
    </div>

  </div>
</template>

<script>
/* CONFIG CONSTANTS */
const SLIDE_KEYS = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6'];
const CONTACT_KEYS = ['address', 'email1', 'email2', 'globenumber', 'smartnumber', 'faxnumber', 'pcc', 'bulk', 'docs', 'training', 'accounting', 'accounting2', 'execOffices', 'adminDept'];
const CREW_KEYS = ['onBoard', 'standBy', 'totalVessels', 'cfsimgdesc'];

export default {
  name: "AdminCMS",
  
  data() {
    return {
      form: this.initializeForm(),
      statusMessage: "",
      isSavingSuccess: false,
      contactKeys: CONTACT_KEYS,
      crewKeys: CREW_KEYS,
      slideKeys: SLIDE_KEYS
    };
  },

  async mounted() {
    await this.loadFormData();
  },

  methods: {
    initializeForm() {
      const slideTexts = {};
      for (let i = 1; i <= 6; i++) {
        slideTexts[`captionOneP${i}`] = "";
        slideTexts[`captionTwoP${i}`] = "";
        slideTexts[`captionThreeP${i}`] = "";
      }

      return {
        showJobHiring: false,
        jobList: [],

        keyVisuals: SLIDE_KEYS.reduce((acc, k) => ({...acc, [k]: ""}), {}),
        ...CONTACT_KEYS.reduce((acc, k) => ({...acc, [k]: ""}), {}),
        ...CREW_KEYS.reduce((acc, k) => ({...acc, [k]: ""}), {}),
        
        homeCrewFleetStatusLogo: { image: "" },
        ...slideTexts,

        affiliates: [], 
        newsArticles: [],
        principalsList: [],
        csrYears: [],
        
        scheduleImages: [],
        careerImages: [],
        officePrograms: [],
        allotteeYears: [],
        cadetPrograms: [],
        trainingList: [],
        trainingIntro: "",
        
        aboutOfficeLogo: "",
        aboutQualityCrewBg: "",
        aboutTowerImg: "",
        orgChartImg: "", 
        
        //crew and fleet status bg
        homeBackgroundVideo: "", 
        homeBackgroundImage: "", 

        scheduleBackgroundVideo: "",
        scheduleBackgroundImage: "",

        careerBackgroundVideo: "",
        careerBackgroundImage: "",

        contactBackgroundVideo: "",
        contactBackgroundImage: "",

        csrBackgroundVideo: "",
        csrBackgroundImage: "",

        officeProgramsBackgroundVideo: "",
        officeProgramsBackgroundImage: "",

        allotteeBackgroundVideo: "",
        allotteeBackgroundImage: "",

        cadetBackgroundVideo: "",
        cadetBackgroundImage: "",

        trainingBackgroundVideo: "",
        trainingBackgroundImage: "",

        // NEW: News background states
        newsBackgroundVideo: "",
        newsBackgroundImage: "",

        
      };
    },

    addItem(listName, schema) {
      if (!this.form[listName]) this.$set(this.form, listName, []);
      this.form[listName].push(JSON.parse(JSON.stringify(schema)));
    },

    removeItem(listName, index) {
      this.form[listName].splice(index, 1);
    },

    addNestedItem(targetArray, schema) {
      targetArray.push(JSON.parse(JSON.stringify(schema)));
    },

    clearFields(keys) {
      keys.forEach(k => this.form[k] = "");
      this.statusMessage = "Cleared. Remember to Save All Changes.";
    },

    clearSingleSlide(n) {
      this.form[`captionOneP${n}`] = "";
      this.form[`captionTwoP${n}`] = "";
      this.form[`captionThreeP${n}`] = "";
      this.statusMessage = "Cleared. Remember to Save All Changes.";
    },

    handleUpload(e, targetObj, targetKey, isMultiple = false) {
      const files = e.target.files;
      if (!files.length) return;

      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (isMultiple) {
            if (!targetObj[targetKey]) this.$set(targetObj, targetKey, []);
            targetObj[targetKey].push(event.target.result);
          } else {
            if(targetKey) {
                 this.$set(targetObj, targetKey, event.target.result);
            }
          }
        };
        reader.readAsDataURL(file);
      });
      e.target.value = ""; 
    },

    addNewsArticle() {
      this.addItem('newsArticles', {
        id: Date.now(),
        title: "",
        category: "Company News",
        author: "",
        images: [], 
        date: new Date().toISOString().slice(0, 10),
        content: ""
      });
    },

    async loadFormData() {
      try {
        const token = localStorage.getItem('vmc_token'); // Get the key
        const response = await fetch('http://localhost:3000/api/content', {
          headers: {
            'Authorization': `Bearer ${token}` // Show the key to the server
          }
        });
        const data = await response.json();
        if (Object.keys(data).length > 0) {
          this.form = { ...this.form, ...data };
        }
      } catch (error) {
        this.statusMessage = "Failed to load data!";
        console.error(error);
      }
    },

    onMediaChange(event) {
      const file = event.target.files[0];
      if (!file) return;
      if (file.size > 10 * 1024 * 1024) { alert("File is too large!"); event.target.value = ""; return; }
      const reader = new FileReader();
      reader.onload = (e) => {
        if (file.type.startsWith('video/')) { this.$set(this.form, 'homeBackgroundVideo', e.target.result); this.$set(this.form, 'homeBackgroundImage', ''); } 
        else if (file.type.startsWith('image/')) { this.$set(this.form, 'homeBackgroundImage', e.target.result); this.$set(this.form, 'homeBackgroundVideo', ''); }
      };
      reader.readAsDataURL(file);
    },

    onScheduleMediaChange(event) {
      const file = event.target.files[0];
      if (!file) return;
      if (file.size > 10 * 1024 * 1024) { alert("File is too large!"); event.target.value = ""; return; }
      const reader = new FileReader();
      reader.onload = (e) => {
        if (file.type.startsWith('video/')) { this.$set(this.form, 'scheduleBackgroundVideo', e.target.result); this.$set(this.form, 'scheduleBackgroundImage', ''); } 
        else if (file.type.startsWith('image/')) { this.$set(this.form, 'scheduleBackgroundImage', e.target.result); this.$set(this.form, 'scheduleBackgroundVideo', ''); }
      };
      reader.readAsDataURL(file);
    },

    onCareerMediaChange(event) {
      const file = event.target.files[0];
      if (!file) return;
      if (file.size > 10 * 1024 * 1024) { alert("File is too large!"); event.target.value = ""; return; }
      const reader = new FileReader();
      reader.onload = (e) => {
        if (file.type.startsWith('video/')) { this.$set(this.form, 'careerBackgroundVideo', e.target.result); this.$set(this.form, 'careerBackgroundImage', ''); } 
        else if (file.type.startsWith('image/')) { this.$set(this.form, 'careerBackgroundImage', e.target.result); this.$set(this.form, 'careerBackgroundVideo', ''); }
      };
      reader.readAsDataURL(file);
    },

    onContactMediaChange(event) {
      const file = event.target.files[0];
      if (!file) return;
      if (file.size > 10 * 1024 * 1024) { alert("File is too large!"); event.target.value = ""; return; }
      const reader = new FileReader();
      reader.onload = (e) => {
        if (file.type.startsWith('video/')) { this.$set(this.form, 'contactBackgroundVideo', e.target.result); this.$set(this.form, 'contactBackgroundImage', ''); } 
        else if (file.type.startsWith('image/')) { this.$set(this.form, 'contactBackgroundImage', e.target.result); this.$set(this.form, 'contactBackgroundVideo', ''); }
      };
      reader.readAsDataURL(file);
    },

    onCsrMediaChange(event) {
      const file = event.target.files[0];
      if (!file) return;
      if (file.size > 10 * 1024 * 1024) { alert("File is too large!"); event.target.value = ""; return; }
      const reader = new FileReader();
      reader.onload = (e) => {
        if (file.type.startsWith('video/')) { this.$set(this.form, 'csrBackgroundVideo', e.target.result); this.$set(this.form, 'csrBackgroundImage', ''); } 
        else if (file.type.startsWith('image/')) { this.$set(this.form, 'csrBackgroundImage', e.target.result); this.$set(this.form, 'csrBackgroundVideo', ''); }
      };
      reader.readAsDataURL(file);
    },

    onOfficeProgramsMediaChange(event) {
      const file = event.target.files[0];
      if (!file) return;
      if (file.size > 10 * 1024 * 1024) { alert("File is too large!"); event.target.value = ""; return; }
      const reader = new FileReader();
      reader.onload = (e) => {
        if (file.type.startsWith('video/')) { this.$set(this.form, 'officeProgramsBackgroundVideo', e.target.result); this.$set(this.form, 'officeProgramsBackgroundImage', ''); } 
        else if (file.type.startsWith('image/')) { this.$set(this.form, 'officeProgramsBackgroundImage', e.target.result); this.$set(this.form, 'officeProgramsBackgroundVideo', ''); }
      };
      reader.readAsDataURL(file);
    },

    onAllotteeMediaChange(event) {
      const file = event.target.files[0];
      if (!file) return;
      if (file.size > 10 * 1024 * 1024) { alert("File is too large!"); event.target.value = ""; return; }
      const reader = new FileReader();
      reader.onload = (e) => {
        if (file.type.startsWith('video/')) { this.$set(this.form, 'allotteeBackgroundVideo', e.target.result); this.$set(this.form, 'allotteeBackgroundImage', ''); } 
        else if (file.type.startsWith('image/')) { this.$set(this.form, 'allotteeBackgroundImage', e.target.result); this.$set(this.form, 'allotteeBackgroundVideo', ''); }
      };
      reader.readAsDataURL(file);
    },

    onCadetMediaChange(event) {
      const file = event.target.files[0];
      if (!file) return;
      if (file.size > 10 * 1024 * 1024) { alert("File is too large!"); event.target.value = ""; return; }
      const reader = new FileReader();
      reader.onload = (e) => {
        if (file.type.startsWith('video/')) { this.$set(this.form, 'cadetBackgroundVideo', e.target.result); this.$set(this.form, 'cadetBackgroundImage', ''); } 
        else if (file.type.startsWith('image/')) { this.$set(this.form, 'cadetBackgroundImage', e.target.result); this.$set(this.form, 'cadetBackgroundVideo', ''); }
      };
      reader.readAsDataURL(file);
    },

    onTrainingMediaChange(event) {
      const file = event.target.files[0];
      if (!file) return;
      if (file.size > 10 * 1024 * 1024) { alert("File is too large!"); event.target.value = ""; return; }
      const reader = new FileReader();
      reader.onload = (e) => {
        if (file.type.startsWith('video/')) { this.$set(this.form, 'trainingBackgroundVideo', e.target.result); this.$set(this.form, 'trainingBackgroundImage', ''); } 
        else if (file.type.startsWith('image/')) { this.$set(this.form, 'trainingBackgroundImage', e.target.result); this.$set(this.form, 'trainingBackgroundVideo', ''); }
      };
      reader.readAsDataURL(file);
    },

    // NEW: Method to handle News background media upload
    onNewsMediaChange(event) {
      const file = event.target.files[0];
      if (!file) return;
      if (file.size > 10 * 1024 * 1024) { alert("File is too large!"); event.target.value = ""; return; }
      const reader = new FileReader();
      reader.onload = (e) => {
        if (file.type.startsWith('video/')) { this.$set(this.form, 'newsBackgroundVideo', e.target.result); this.$set(this.form, 'newsBackgroundImage', ''); } 
        else if (file.type.startsWith('image/')) { this.$set(this.form, 'newsBackgroundImage', e.target.result); this.$set(this.form, 'newsBackgroundVideo', ''); }
      };
      reader.readAsDataURL(file);
    },

    async saveToBackend() {
      try {
        this.statusMessage = "Saving...";
        const token = localStorage.getItem('vmc_token'); // Get the key
        const response = await fetch('http://localhost:3000/api/update', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Show the key to the server
          },
          body: JSON.stringify(this.form)
        });

        if (response.ok) {
          this.isSavingSuccess = true;
          this.statusMessage = "Changes saved successfully!";
          setTimeout(() => { this.isSavingSuccess = false; this.statusMessage = ""; }, 2000);
        } else {
          throw new Error("Server error");
        }
      } catch (error) {
        console.error(error);
        this.statusMessage = "Save failed. Please check your connection.";
      }
    }
  }
};
</script>

<style scoped>
/* REFINED STYLING FOR CONSISTENCY */
.cms-container { 
  font-family: 'Segoe UI', sans-serif; 
  background-color: #f4f4f3; 
  min-height: 100vh;
}
.vmc-text-primary { color: #002366 !important; }
.vmc-btn-prime-2:hover { filter: brightness(1.2); }
.btn-close-mini { 
  position: absolute; top: -8px; right: -8px; background: #ff4d4f; color: white; border: none; border-radius: 50%; width: 22px; height: 22px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: bold; z-index: 10; transition: transform 0.2s;
}
.btn-close-mini:hover { transform: scale(1.1); }
.image-preview { 
  height: 160px; background-size: contain; background-repeat: no-repeat; background-position: center; display: flex; align-items: center; justify-content: center; border-radius: 8px;
}
.custom-control-input:checked ~ .custom-control-label::before {
    background-color: #002366 !important; border-color: #002366 !important;
}
.flash-success { animation: flashGreen 0.6s ease-out; }
@keyframes flashGreen { 
  0% { background-color: rgba(40, 167, 69, 0.15); } 100% { background-color: transparent; } 
}
</style>