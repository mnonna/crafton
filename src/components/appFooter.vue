<template>
  <footer class="app-footer color__white bg__primary">
    <div class="container">
      <div class="row">
        <div class="column-lg-3">
          <div class="app-footer__contact app-text app-text__small" v-html="footerData.contact"></div>
          <div class="app-footer__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.495936018867!2d16.929336115950314!3d52.415811151697575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b458e6d37f9%3A0x630f1e648e79b67!2sCollegium%20Da%20Vinci!5e0!3m2!1spl!2spl!4v1636815588172!5m2!1spl!2spl"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div class="column-lg-9">
          <div class="app-footer__menus">
            <menu v-for="(menu, index) in footerData.menus" :key="index" class="footer-menu">
              <h4
                class="footer-menu__name app-text app-text__small weight__extraBold"
              >{{ menu.name }}</h4>
              <ul v-for="(item, i) in menu.items" :key="i" class="footer-menu__items">
                <li class="footer-menu__item">
                  <a :href="(item.url !== '') ? item.url : '#'">
                    <span class="app-text app-text__small color__white">{{ item.name }}</span>
                  </a>
                </li>
              </ul>
            </menu>
          </div>
          <div class="row">
            <div class="column-12">
              <div class="app-footer__author">
                <span class="app-text app-text__small color__white">Projekt i realizacja: Crafton</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    data() {
        return {
            footerData: {
                contact: `<p>ul. Głogowska 10</p>
                    <p>61-719 Poznań</p>
                    <p>tel. 61 27 11 000</p>`,
                menus: [
                    {
                        name: 'O nas',
                        items: [
                            {
                                name: 'Dlaczego CDV',
                                url: ''
                            },
                            {
                                name: 'Kadra naukowa',
                                url: ''
                            },
                            {
                                name: 'Dla mediów',
                                url: ''
                            },
                            {
                                name: 'Kontakt',
                                url: ''
                            },
                        ]
                    },
                    {
                        name: 'Dla kandydata',
                        items: [
                            {
                                name: 'Poradnik maturzysty',
                                url: ''
                            },
                            {
                                name: 'Rekrutacja',
                                url: ''
                            },
                            {
                                name: 'Kredyt studencki',
                                url: ''
                            },
                            {
                                name: 'Studia dla cudzoziemców',
                                url: ''
                            },
                        ]
                    },
                    {
                        name: 'Dla studenta',
                        items: [
                            {
                                name: 'Wirtualna Uczelnia',
                                url: ''
                            },
                            {
                                name: 'Stypendia',
                                url: ''
                            },
                            {
                                name: 'Biuro Karier',
                                url: ''
                            },
                            {
                                name: 'Studiuj dalej',
                                url: ''
                            },
                        ]
                    },
                    {
                        name: 'Dla biznesu',
                        items: [
                            {
                                name: 'Współpraca z biznesem',
                                url: ''
                            },
                            {
                                name: 'EmotionsLAB',
                                url: ''
                            },
                            {
                                name: 'Wynajem sal',
                                url: ''
                            },
                            {
                                name: 'Znajdź pracownika',
                                url: ''
                            },
                        ]
                    },
                    {
                        name: 'Na skróty',
                        items: [
                            {
                                name: 'Aktualności',
                                url: ''
                            },
                            {
                                name: 'Wydarzenia',
                                url: ''
                            },
                            {
                                name: 'Konferencje',
                                url: ''
                            },
                            {
                                name: 'Blog',
                                url: ''
                            },
                        ]
                    },
                ]
            }
        }
    }
}
</script>

<style>
</style>