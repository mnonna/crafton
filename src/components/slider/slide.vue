<template>
  <div
    class="app-slider__slide"
    :style="`background-image: linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url(${require('@/assets/' + image)});`"
    :class="{current:active}"
  >
    <section class="app-slider__slide--content w-100">
      <div class="container">
        <div class="row">
          <div class="column">
            <div class="app-slider__slide--text">
              <h2 class="app-heading app-heading__slide color__white">{{ heading }}</h2>
              <h3 class="app-heading app-heading__slide color__azure">{{ secText }}</h3>
            </div>
            <div class="app-slider__slide--buttons" v-if="buttons.length > 0">
              <div>
                <button
                  v-for="(button, index) in buttons"
                  :key="index"
                  class="app-button border__color--white border__style--solid"
                  :class="(index%2 == 0) ? 'bg__white' : 'bg__transparent' "
                >
                  <a :href="button.url">
                    <span
                      class="app-text app-text__button"
                      :class="(index%2 == 0) ? 'color__secondary' : 'color__white'"
                    >{{ button.text }}</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    props: {
        image: String,
        heading: String,
        secText: String,
        active: Boolean,
        buttons: Array
    },
    computed: {
    }
}
</script>

<style lang="scss">
</style>