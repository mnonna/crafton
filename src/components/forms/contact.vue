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
            class="app-input"
            v-model="form.name"
            ref="contactName"
          />
        </div>
      </div>
      <div class="form-group column-lg-6">
        <div class="form-group__input">
          <label for class="app-label">Nazwisko</label>
          <input
            type="text"
            placeholder="Nazwisko"
            class="app-input"
            v-model="form.surname"
            ref="contactSurname"
          />
        </div>
      </div>
      <div class="form-group column-12">
        <div class="form-group__input">
          <label for class="app-label">Adres email</label>
          <input
            type="email"
            placeholder="Adres email"
            class="app-input"
            v-model="form.email"
            ref="email"
          />
        </div>
      </div>
      <div class="form-group column-12">
        <div class="form-group__input">
          <label for class="app-label">Treść wiadomości</label>
          <textarea
            name
            id
            cols="30"
            rows="10"
            class="app-input"
            placeholder="Treść wiadomości"
            v-model="form.message"
            ref="contactMessage"
          ></textarea>
        </div>
      </div>
      <div class="form-group column-12">
        <div class="form-group__checkbox">
          <label for="consent" class="app-label app-label__checkbox">
            <input id="consent" type="checkbox" v-model="form.consent" />
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
            }
        }
    },
    watch: {
        'form.name': function(val) {
            if(val === '') {
               this.$refs.contactName.style.border = "1px solid #FF3139"
               this.form.isValid = false
            }else {
                this.$refs.contactName.style.border = "none"
                if(this.form.surname == '' || this.form.email == '' || this.form.message == '' || this.form.consent == false) {
                    this.form.isValid = false
                }else {
                    this.form.isValid = true
                }
            }
        },
        'form.surname': function(val) {
            if(val === '') {
               this.$refs.contactSurname.style.border = "1px solid #FF3139"
               this.form.isValid = false
            }else {
                this.$refs.contactSurname.style.border = "none"
                if(this.form.name == '' || this.form.email == '' || this.form.message == '' || this.form.consent == false) {
                    this.form.isValid = false
                }else {
                    this.form.isValid = true
                }
            }
        },
        'form.email': function(val) {
            if(!val.match(this.regex)) {
               this.$refs.email.style.border = "1px solid #FF3139"
               this.form.isValid = false
            }else {
                this.$refs.email.style.border = "none"
                if(this.form.name == '' || this.form.surname == '' || this.form.message == '' || this.form.consent == false) {
                    this.form.isValid = false
                }else {
                    this.form.isValid = true
                }
            }
        },
        'form.message': function(val) {
            if(val === '') {
               this.$refs.contactMessage.style.border = "1px solid #FF3139"
               this.form.isValid = false
            }else {
                this.$refs.contactMessage.style.border = "none"
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
                this.$refs.email.style.border = "none"
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
        formSubmit() {
            if(!this.form.isValid) return

            const formData = new FormData();
            Array.from(this.form).forEach(key => {
              console.log(formData)
            })

            fetch('contact.php', {
                method: 'POST',
                body: formData
            }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.error(err))
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