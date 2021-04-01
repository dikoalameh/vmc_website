<template>
  <div class="container-fluid vmc-bg-dark-1" id="Page404">
    <div class="row">
      <div class="col-sm-7">
        <img :src="ship" alt="" id="Image404">
      </div>
      <div class="col-sm-5 text-center d-flex align-items-center">
        <div>
          <h1 id="Heading404">404</h1>
          <h2 id="HeadingTitle">It seems you landed on non existing page</h2>
          <p id="HeadingDescription">Click button below to go back to the homepage</p>
          <router-link class="btn btn-lg vmc-btn-circle vmc-btn-outline-prime px-5" to="/" id="GoBack">Home</router-link>
<!--          <router-link class="btn btn-lg vmc-btn-circle vmc-btn-outline-prime px-5" id="GoBack">Home</router-link>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  data() {
    return {
      'ship': require(`@/assets/ship404.png`),
    }
  }
};
</script>

<style scoped>
  #Page404 {
    padding: 1rem;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #Image404 {
    width: 100%;
    height: auto;
  }
  #Heading404 {
    font-size: 10rem;
    letter-spacing: 5px;
    line-height: .8;
    margin-top: .5rem;
    margin-bottom: 0;
    font-weight: bold;
    text-align: center;
  }
  #HeadingTitle {
    color: var(--vmc-primary-3);
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
    widows: 2;
    orphans: 2;
  }
  #HeadingDescription {
    margin: 25px 0;
    color: var(--vmc-dark-3);
    line-height: 1;
    font-size: 1.5rem;
    font-weight: 300;
    text-align: center;
    widows: 2;
    orphans: 2;
  }
  #GoBack {
    margin: auto;
  }
  @media (min-width: 500px) {
    #Heading404 {
      font-size: 10rem;
      letter-spacing: 5px;
      line-height: .8;
      margin-top: .5rem;
      margin-bottom: 0;
      font-weight: bold;
      text-align: center;
    }
    #HeadingTitle {
      color: var(--vmc-primary-3);
      font-size: 2.1rem;
      font-weight: 300;
      text-align: center;
    }
    #HeadingDescription {
      margin: 25px 0;
      color: var(--vmc-dark-3);
      line-height: 1;
      font-size: 1.5rem;
      font-weight: 300;
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    #Heading404 {
      font-size: 10rem;
      letter-spacing: 5px;
      line-height: .8;
      margin-top: .5rem;
      margin-bottom: 0;
      font-weight: bold;
      text-align: center;
    }
    #HeadingTitle {
      color: var(--vmc-primary-3);
      font-size: 1.75rem;
      font-weight: 300;
      text-align: center;
    }
    #HeadingDescription {
      margin: 25px 0;
      color: var(--vmc-dark-3);
      line-height: 1;
      font-size: 1.25rem;
      font-weight: 300;
      text-align: center;
    }
  }

  @media (min-width: 992px) {
    #Heading404 {
      font-size: 10rem;
      letter-spacing: 5px;
      line-height: .8;
      margin-top: .5rem;
      margin-bottom: 0;
      font-weight: bold;
      text-align: center;
    }
    #HeadingTitle {
      color: var(--vmc-primary-3);
      font-size: 2rem;
      font-weight: 300;
      text-align: center;
    }
    #HeadingDescription {
      margin: 25px 0;
      color: var(--vmc-dark-3);
      line-height: 1;
      font-size: 1.6rem;
      font-weight: 300;
      text-align: center;
    }
  }

  @media (min-width: 1200px) {
    #Heading404 {
      font-size: 10rem;
      letter-spacing: 5px;
      line-height: .8;
      margin-top: .5rem;
      margin-bottom: 0;
      font-weight: bold;
      text-align: center;
    }
    #HeadingTitle {
      color: var(--vmc-primary-3);
      font-size: 2.1rem;
      font-weight: 300;
      text-align: center;
    }
    #HeadingDescription {
      margin: 25px 0;
      color: var(--vmc-dark-3);
      line-height: 1;
      font-size: 1.5rem;
      font-weight: 300;
      text-align: center;
    }
  }

</style>