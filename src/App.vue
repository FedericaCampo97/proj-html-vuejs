<script>
import { store } from "./assets/js/store";
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  }

}

</script>

<template>
  <AppHeader :navList="store.listNav" />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@use './scss/style.scss';
@import url('https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed&family=Raleway&display=swap');
</style>
