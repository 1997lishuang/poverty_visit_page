<template>
<div class="container">
  <router-link to="/tpainfosurvey/infosurvey_one" tag="li" active-class="current" exact>
    <a>infosurvey_one</a>
  </router-link>
  <router-link to="/tpainfosurvey/infosurvey_two" tag="li" active-class="current" exact>
    <a>infosurvey_two</a>
  </router-link>
  <router-link to="/tpainfosurvey/infosurvey_three" tag="li" active-class="current" exact>
    <a>infosurvey_three</a>
  </router-link>
</div>
</template>

<script>
    export default {
        name: "surveyinfo"
    }
</script>

<style scoped>

</style>
