<template>
  <section class="app-slider app-slider__front">
    <slide
      v-for="singleSlide in slidesArr"
      :key="singleSlide.id"
      :image="singleSlide.image"
      :heading="singleSlide.heading"
      :secText="singleSlide.secText"
      :active="singleSlide.active"
      :buttons="singleSlide.buttons"
    />
    <aside class="app-slider__pinNav">
      <div v-for="(singleSlide, index) in slidesArr" :key="singleSlide.id">
        <button
          class="app-button app-button__pinNav app-button__round border__none"
          :class="{bg__yellow:singleSlide.active}"
          @click="goToSlide(index)"
        ></button>
      </div>
    </aside>
    <aside class="app-slider__stepNav">
      <div class="container">
        <div class="row">
          <div class="column-12">
            <nav class="app-slider__stepNav--buttons">
              <div class="app-slider__setPrev">
                <button class="app-button app-button__clean app-button__sliderArrow bg__transparent" @click="goToPrevSlide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30.117"
                    height="20.992"
                    viewBox="0 0 30.117 20.992"
                  >
                    <path
                      data-name="nawigacja slajdera"
                      d="M281.008,712.6H258.895l8.364,8.4h-5.913l-10.456-10.5L261.346,700h5.913l-8.364,8.4h22.113Z"
                      transform="translate(-250.891 -700.004)"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </div>
              <div class="app-slider__setNext">
                <button class="app-button app-button__clean app-button__sliderArrow bg__transparent" @click="goToNextSlide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30.117"
                    height="20.992"
                    viewBox="0 0 30.117 20.992"
                  >
                    <path
                      data-name="nawigacja slajdera"
                      d="M250.891,712.6H273l-8.364,8.4h5.913l10.456-10.5L270.552,700h-5.913L273,708.4H250.891Z"
                      transform="translate(-250.891 -700.004)"
                      fill="#fff"
                    />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </aside>
  </section>
</template>

<script>
const slide = () => import("./slider/slide");
export default {  
    components: {
        slide
    },
    data() {
        return {
            currentSlide: 0,
            slidesArr: [ //Array simulating retrieving data from backend
                {
                    id: 1,
                    image: 'slide1.jpg',
                    heading: 'Będziesz się uczyć z ciekawością.',
                    secText: 'Obiecujemy.',
                    active: true,
                    buttons: [
                      {
                        text: "Zobacz więcej",
                        url: "#"
                      },
                      {
                        text: "Umów się z aniołem",
                        url: "#"
                      }
                    ]
                },
                {
                    id: 2,
                    image: 'library-869061_1920.jpg',
                    heading: 'Będziesz się uczyć z ciekawością Będziesz się uczyć z ciekawością',
                    secText: 'Obiecujemy Obiecujemy.',
                    active: false,
                    buttons: [
                      {
                        text: "Zobacz więcej",
                        url: "#"
                      },
                      {
                        text: "Umów się z aniołem",
                        url: "#"
                      }
                    ]
                },
                {
                    id: 3,
                    image: 'slide1.jpg',
                    heading: 'Będziesz się uczyć z ciekawością.',
                    secText: 'Obiecujemy. Obiecujemy Obiecujemy.',
                    active: false,
                    buttons: [
                      {
                        text: "Zobacz więcej",
                        url: "#"
                      },
                      {
                        text: "Umów się z aniołem",
                        url: "#"
                      }
                    ]
                },
                {
                    id: 4,
                    image: 'library-869061_1920.jpg',
                    heading: 'Będziesz się uczyć z ciekawością Będziesz się uczyć z ciekawością',
                    secText: 'Obiecujemy Obiecujemy. Obiecujemy Obiecujemy.',
                    active: false,
                    buttons: [
                      {
                        text: "Zobacz więcej",
                        url: "#"
                      },
                      {
                        text: "Umów się z aniołem",
                        url: "#"
                      }
                    ]
                }
            ],
        }
    },
     methods: {
       sliderAutoplay(interval) { //interval in milliseconds
          setInterval(function() {
            let index = this.currentSlide + 1
            if(this.currentSlide === this.slidesArr.length - 1) index = 0 
            this.goToSlide(index)
          }.bind(this), interval)
       },
        goToSlide(index) {
            if(this.slidesArr.length < 0 || index > this.slidesArr.length - 1) return
            this.slidesArr.map((slide) => {
                slide.active = false
            })
            this.slidesArr[index].active = true
            this.currentSlide = index
        },
        goToNextSlide() {
          if(this.slidesArr.length < 0) return
          this.slidesArr.map((slide) => {
              slide.active = false
          })

          let index = this.currentSlide + 1
          if(this.currentSlide === this.slidesArr.length - 1) index = 0

          this.slidesArr[index].active = true
          this.currentSlide = index
        },
        goToPrevSlide() {
          if(this.slidesArr.length < 0) return
          this.slidesArr.map((slide) => {
              slide.active = false
          })

          let index = this.currentSlide - 1
          if(this.currentSlide === 0) index = this.slidesArr.length - 1

          this.slidesArr[index].active = true
          this.currentSlide = index
        }
    },
    mounted() {
      /*this.sliderAutoplay()*/
    }
}
</script>

<style lang="scss">
</style>