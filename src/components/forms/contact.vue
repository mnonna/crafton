<template>
  <form class="app-form app-form__contact lazy-asset hidden" @submit.prevent="formSubmit">
    <h2
      class="app-form__head app-heading app-heading__form weight__semiBold text-center"
    >Nie znalazłeś odpowiedniego kontaktu?</h2>
    <p class="app-form__subText app-text app-text__small text-center">Skorzystaj z formularza.</p>
    <div class="row app-form__inputs">
      <div class="form-group column-lg-6">
        <div class="form-group__input">
          <label for class="app-label">Imię</label>
          <input
            type="text"
            placeholder="Imię"
            class="app-input form-input"
            v-model="form.name"
            @input="e => form.name = e.target.value"
            ref="contactName"
          />
        </div>
        <span class="form-group__tip color__red" v-if="tips.name.show">{{ tips.name.text }}</span>
      </div>
      <div class="form-group column-lg-6">
        <div class="form-group__input">
          <label for class="app-label">Nazwisko</label>
          <input
            type="text"
            placeholder="Nazwisko"
            class="app-input form-input"
            v-model="form.surname"
            @input="e => form.surname = e.target.value"
            ref="contactSurname"
          />
        </div>
        <span class="form-group__tip color__red" v-if="tips.surname.show">{{ tips.surname.text }}</span>
      </div>
      <div class="form-group column-12">
        <div class="form-group__input">
          <label for class="app-label">Adres email</label>
          <input
            type="email"
            placeholder="Adres email"
            class="app-input form-input"
            v-model="form.email"
            @input="e => form.email = e.target.value"
            ref="email"
          />
        </div>
        <span class="form-group__tip color__red" v-if="tips.email.show">{{ tips.email.text }}</span>
      </div>
      <div class="form-group column-12">
        <div class="form-group__input">
          <label for class="app-label">Treść wiadomości</label>
          <textarea
            name
            id
            cols="30"
            rows="10"
            class="app-input form-input"
            placeholder="Treść wiadomości"
            v-model="form.message"
            @input="e => form.message = e.target.value"
            ref="contactMessage"
          ></textarea>
        </div>
        <span class="form-group__tip color__red" v-if="tips.message.show">{{ tips.message.text }}</span>
      </div>
      <div class="form-group column-12">
        <div class="form-group__checkbox">
          <label for="consent" class="app-label app-label__checkbox">
            <input id="consent" class="form-input" type="checkbox" v-model="form.consent" />
          </label>
          <span class="app-text app-text__consent color__secondary weight__semiBold">
            Wyrażam zgodę na przetwarzanie moich danych osobowych
            w rozumieniu ustawy z dnia 29 sierpnia 1997 roku o ochronie
            danych osobowych oraz ustawy z dnia 16 lipca 2004 roku Prawo
            telekomunikacyjne w celach marketingowych przez Collegium Da Vinci
            i oświadczam, iż podanie przeze mnie danych osobowych jest
            dobrowolne oraz iż zostałem poinformowany o prawie żądania dostępu
            do moich danych osobowych, ich zmiany oraz usunięcia.
          </span>
        </div>
      </div>
      <div
        class="form-group column-12"
        v-if="responseMessage !== null && responseMessage !== undefined"
      >
        <div class="app-form__message text-center">
          <span
            class="app-text app-text__small"
            :class="(responseMessage.success === true) ? 'color__green': 'color__red'"
          >{{ responseMessage.text }}</span>
        </div>
      </div>
      <div class="form-group column-12">
        <div class="app-form__submit">
          <button class="app-button color__white bg__azure border__none" :disabled="!form.isValid">
            <span class="app-text app-text__button weight__extraBold">Wyślij</span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
/*eslint-disable*/
export default {
    data() {
        return {
            regex: /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/,
            form: {
                name: "",
                surname: "",
                email: "",
                message: "",
                consent: false,
                isValid: false
            },
            tips: {
              name: {
                show: false,
                text: 'Proszę wypełnić imię'
              },
              surname: {
                show: false,
                text: 'Proszę wypełnić nazwisko'
              },
              email: {
                show: false,
                text: 'Proszę podać poprawny adres email'
              },
              message: {
                show: false,
                text: 'Proszę wypełnić wiadomość'
              },
            },
            responseMessage: null
        }
    },
    watch: {
        'form.name': function(val) {
            if(val === '') {
               this.$refs.contactName.classList.add('invalid')
               this.form.isValid = false
               this.tips.name.show = true
            }else {
                this.$refs.contactName.classList.remove('invalid')
                this.tips.name.show = false
                if(this.form.surname == '' || this.form.email == '' || this.form.message == '' || this.form.consent == false) {
                    this.form.isValid = false
                }else {
                    this.form.isValid = true
                }
            }
        },
        'form.surname': function(val) {
            if(val === '') {
               this.$refs.contactSurname.classList.add('invalid')
               this.form.isValid = false
               this.tips.surname.show = true
            }else {
                this.$refs.contactSurname.classList.remove('invalid')
                this.tips.surname.show = false
                if(this.form.name == '' || this.form.email == '' || this.form.message == '' || this.form.consent == false) {
                    this.form.isValid = false
                }else {
                    this.form.isValid = true
                }
            }
        },
        'form.email': function(val) {
            if(!val.match(this.regex)) {
               this.$refs.email.classList.add('invalid')
               this.form.isValid = false
               this.tips.email.show = true
            }else {
                this.$refs.email.classList.remove('invalid')
                this.tips.email.show = false
                if(this.form.name == '' || this.form.surname == '' || this.form.message == '' || this.form.consent == false) {
                    this.form.isValid = false
                }else {
                    this.form.isValid = true
                }
            }
        },
        'form.message': function(val) {
            if(val === '') {
               this.$refs.contactMessage.classList.add('invalid')
               this.form.isValid = false
               this.tips.message.show = true
            }else {
                this.$refs.contactMessage.classList.remove('invalid')
                this.tips.message.show = false
                if(this.form.name == '' || this.form.surname == '' || this.form.email == '' || this.form.consent == false) {
                    this.form.isValid = false
                }else {
                    this.form.isValid = true
                }
            }
        },
        'form.consent': function(val) {
            if(val === false) {
               this.form.isValid = false
            }else {
                if(this.form.name == '' || this.form.surname == '' || this.form.email == '' || this.form.contactMessage == false) {
                    this.form.isValid = false
                }else {
                    this.form.isValid = true
                }
            }
        },
    },
    methods: {
        handleInputFocus(e) {
            let label = e.target.previousElementSibling
            label.classList.add('focused')
            e.target.classList.add('focused')
        },
        handleInputFocusOut(e) {
            let label = e.target.previousElementSibling
            label.classList.remove('focused')
            e.target.classList.remove('focused')
        },
        cleanForm(success, message) {
          this.responseMessage = {
            success: success,
            text: message
          }

          setTimeout(function() {
            this.responseMessage = null
          }.bind(this), 3000)
        },
        async formSubmit() {
            if(!this.form.isValid) return

            this.responseMessage = null
            const formData = new FormData()
            Object.keys(this.form).forEach(key => formData.append(key, JSON.stringify(this.form[key])));

            await fetch('contact.php', {
                method: 'POST',
                body: formData
            }).then((res) => res.json())
            .then((data) => 
              this.cleanForm(true, data.message)
            )
            .catch((err)=>
              this.cleanForm(false, "Podczas wysłania wiadomości wystąpił błąd")
            )
        }
    },
    mounted() {
        const inputs = document.getElementsByClassName('app-input')
        Array.from(inputs).forEach(input => {
            input.addEventListener('focus', this.handleInputFocus)
            input.addEventListener('focusout', this.handleInputFocusOut)
        })
    }
}
</script>

<style lang="scss">
</style>