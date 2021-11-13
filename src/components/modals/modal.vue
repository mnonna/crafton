<template>
  <aside class="app-modal app-modal__yt" v-if="show">
    <div class="app-modal__content">
      <iframe
        id="ytplayer"
        type="text/html"
        :src="`http://www.youtube.com/embed/${ytURL}`"
        frameborder="0"
      />
      <button class="app-modal__close app-button color__white border__none bg__azure" @click="closeModal">Zamknij</button>
    </div>
  </aside>
</template>

<script>
export default {
    props: {
        show: Boolean,
        ytURL: String
    },
    methods: {
        closeModal() {
            this.$root.$emit('close-modal')
        }
    }
}
</script>

<style lang="scss">
</style>