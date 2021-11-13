<template>
  <div class="section-col column-12">
    <div class="section-content row" :class="order">
      <div
        class="section-content__text col-order-1 lazy-asset hidden"
        :class="(order === 'inverse') ? 'slide-right col-order-md-2': 'slide-left col-order-md-1'"
      >
        <article>
          <h3
            class="section-content__head app-heading app-heading__section color__secondary"
          >{{ heading }}</h3>
          <div class="section-content__desc" v-html="content"></div>
        </article>
      </div>
      <div
        class="section-content__thumb col-order-2 lazy-asset hidden"
        :class="(order === 'inverse') ? 'slide-left col-order-md-1': 'slide-right col-order-md-2'"
      >
        <div class="section-content__thumb--img" :style="thumbStyles">
          <div class="section-content__thumb--yt" v-if="ytURL && ytURL !== ''">
            <div class="section-content__thumb--ytPlay">
              <div>
                <button
                  class="app-button app-button__round app-button__play bg__azure border__none"
                  @click="openModal"
                >
                  <svg
                    class="app-button__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="38"
                    height="43"
                    viewBox="0 0 38 43"
                  >
                    <image
                      id="play-button"
                      width="38"
                      height="43"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAArCAYAAAAUo/pwAAAABHNCSVQICAgIfAhkiAAAA0NJREFUWEfNmUmojlEYx+81RqZCKAolNlbItKKUa8XKsMCGDZmHzNc8ZJ7KsLjItCILpMQGC7JgRYYFhVCm0s3l+v10Tt173fvdb3i/9/ue+nXO+/bd9/n3vOc953/Orayvr+9eUVFxHMbCCzgK16CkUYmw8yiY1UTFHa6XwJNSqVPYV5J3g5EwGqqhN/yGU7ARPqYtUGH1JP0GvlKjRxCzkLY9fIHNcAx+pSUwCrNqCmoYQ7nYD1PCzWe0S+FGGuIyCYv5q4LAYeHGTVrHn0KLFtkIM3k78NVuCpWtC6+2OrzqxAVmKywm7klnG8yDtvAJ/DhOgh9LYpGrsJh4OJ2DMDHceEq7GJxmEol8hcXkU+nsg8HhxhXaFfCqUHWFCjN/R/BjWAddoRYOwA74nq/AJITF3H2DmLm0lfAe1sBZ+JOrwCSFxdwj6ByC8eHGI1rH3/1cxBVDmPmt2HTYAwOCoEu0K+FtNgKLJSzm7kRnFawG+z+D2N2h36LGYguLifsHQTPDjTdBrFV0rf4v0hIWE4+j4/w3Kty4R+sX7ThsFGkLM3kbmA1OJ/1CxWpo14Jf8r8ohbCY2zlPMToW58If4HJnRWtLKSwKdNXYC9PCDV3zpHIQFgVOoHMChsCFchKmwDHwAJ6XkzANqbu1gXCuHITpjF30J4d3+pC2qpTC3GNUwwLQIbvp8dpNT10phOl858MW6AU6Xx3wBvgcv4S0hel4nad0wMZtcB7TATeKtIQ1nateokKne7WpoLQqFmf3ZSTsADra7aFqOt0Wo1gVi+vhLjL3AR1EDehoP2QSVMyK6SAOg07W0EEsgsfZCCqGMJ2qjnVGeLieS5N4OVQsF12JuIvOQYAiokvVoSpSx5pXFDLG9PVWRxHR118MIrPy9ZkU5yvMszR3Qo4nw2VEJ5rTTihJYe4dd8IcsGLvQLOX194xCWFxt72eh3WBRHbbhQrzfMIDvEHhQZ5PLIfXeY3qLP8o0xhzPXMc6SwN1zPno7tZPrugnzV3BuuKvxUanoH5Ck9Domdgrb1KfZAHw541aG21H3olTw2PgPbE36QaVuwMGd3nNYzrXLjwFvWctbWKWS0Hd8P/jNxKtTzNJPsL/zRcA02rg4kAAAAASUVORK5CYII="
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <modal v-if="ytURL && ytURL !== ''" :ytURL="ytURL" :show="modalShow" />
    </div>
  </div>
</template>

<script>
const modal = () => import("../modals/modal");
export default {
    components: {
        modal
    },
    props: {
        heading: String,
        content: String,
        image: String,
        ytURL: String,
        order: String
    },
    computed: {
        thumbStyles() {
            if(this.image !== "") {
                return `background-image: url(${require('@/assets/' + this.image)}); background-repeat: no-repeat;`
            }else {
                return ""
            }
        }
    },
    data() {
        return {
            modalShow: false
        }
    },
    methods: {
        openModal() {
            this.modalShow = true
        }
    },
    mounted() {
        this.$root.$on('close-modal', () => {
            this.modalShow = false
        })
    }
}
</script>

<style lang="scss">
</style>