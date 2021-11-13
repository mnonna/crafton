<template>
  <div id="app">
    <navbar />
    <slider />
    <about />
    <contact />
    <appFooter />
  </div>
</template>

<script>
const navbar = () => import("./components/navbar");
const slider = () => import("./components/slider");
const about = () => import("./components/about");
const contact = () => import("./components/contact");
const appFooter = () => import("./components/appFooter");
export default {
  name: "App",
  components: {
    navbar,
    slider,
    about,
    contact,
    appFooter,
  },
  methods: {
    handleLazySections() {
      const sections = [...document.querySelectorAll('.lazy-asset.hidden')]
      
      const options = {
        root: document,
        threshold: 0
      }

      const onSectionsIntersect = (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
              entry.target.classList.remove('hidden')
            }
        })
      }

      const sectionsObserver = new IntersectionObserver(onSectionsIntersect, options)
      sections.forEach((section) => {
        sectionsObserver.observe(section)
      })
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      this.handleLazySections()
    })
  }
};
</script>

<style lang="scss">
#app {
  margin: 0;
}
</style>
