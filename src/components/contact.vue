<template>
  <section class="app-section app-section__contact bg__themeLight">
    <div class="container">
      <div class="row justify-content-center">
        <div class="column-12">
          <contactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const contactForm = () => import('./forms/contact')
export default {
    components: {
        contactForm
    }
}
</script>

<style>
</style>