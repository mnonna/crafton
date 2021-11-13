<template>
  <nav class="app-navbar" ref="navbar" id="navbar">
    <div class="container">
      <div class="row">
        <div class="column-12">
          <div class="app-navbar__wrapper">
            <div class="app-navbar__logo">
              <img :src="require('@/assets/'+logo)" alt />
            </div>
            <ul
              class="app-navbar__links col-order-3 col-order-md-2"
              :class="{ expand:navExpanded }"
            >
              <li v-for="(link, index) in links" :key="index" class="app-navbar__links--single">
                <a :href="(link.url === '') ? '#' : link.url">
                  <span class="app-text color__white weight__bold">{{ link.name }}</span>
                </a>
              </li>
            </ul>
            <div
              class="app-navbar-toggle col-order-2 col-order-md-3"
              @click="navbarToggle"
              :class="{ close:navExpanded }"
            >
              <div class="bar bar-1"></div>
              <div class="bar bar-2"></div>
              <div class="bar bar-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
/*eslint-disable*/
export default {
    data() {
        return {
            navExpanded:false,
            logo: "UW-bialy.png",
            links: [
                {
                    name: 'I stopnia',
                    url: ''
                },
                {
                    name: 'II stopnia',
                    url: ''
                },
                {
                    name: 'Podyplomowe',
                    url: ''
                },
                {
                    name: 'Szkolenia',
                    url: ''
                },
                {
                    name: 'Usługi',
                    url: ''
                },
            ]
        }
    },
    methods: {
        navbarToggle() {
            this.navExpanded = !this.navExpanded
            this.$refs.navbar.classList.toggle('expand')
        },
        navbarScrollHandler() {
          const navbar = document.getElementById('navbar')
          const sections = [...document.querySelectorAll('.app-section')]
          const slider = [...document.querySelectorAll('.app-slider')]

          const options = {
              root: document,
              rootMargin: `${navbar.offsetHeight * -1}px`,
              threshold: 0
          }

          const onSectionsIntersect = (entries) => {
              entries.forEach((entry) => {
                  if(entry.isIntersecting) {
                      navbar.classList.add('bg__primary', 'shrink')
                  }
              })
          }

          const onSliderIntersect = (entries) => {
              entries.forEach((entry) => {
                  if(entry.isIntersecting) {
                      navbar.classList.remove('bg__primary', 'shrink')
                  }
              })
          }

          const sectionsObserver = new IntersectionObserver(onSectionsIntersect, options)
          const sliderObserver = new IntersectionObserver(onSliderIntersect, options)

          sections.forEach((section) => {
                  sectionsObserver.observe(section)
              })
          slider.forEach(sl => {
              sliderObserver.observe(sl)
          })
      }
    },
    mounted() {
        window.addEventListener('load', () => {
            this.navbarScrollHandler()
        })
    }
}
</script>

<style lang="scss">
</style>