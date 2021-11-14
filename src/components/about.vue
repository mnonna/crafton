<template>
  <section class="app-section app-section__about" id="about">
    <div class="container">
      <div class="row">
        <single
          v-for="(ab, index) in about"
          :key="index"
          :heading="ab.heading"
          :content="ab.content"
          :image="ab.image"
          :ytURL="ab.ytURL"
          :order="(index%2 === 0) ? '' : 'inverse'"
        />
      </div>
    </div>
  </section>
</template>

<script>
const single = () => import("./about/single");
export default {
    components: {
        single
    },
    data() {
        return {
            about: [
                {
                    heading: 'Dla kogo?',
                    content: `<p>Dedykowane nauczycielom posiadającym 
                        przygotowanie pedagogiczne, którzy chcą uzyskać merytoryczne
                        i metodyczne przygotowanie do nauczania kolejnego 
                        przedmiotu - Geografii.</p>
                        <p>Studia adresowane są do osób legitymujących się wyższym wykształceniem na
                        poziomie studiów licencjackim o specjalnościach nadających kwalifikacje
                        nauczycielskie i przygotowanie pedagogiczne, lub słuchaczy legitymujących
                        się wyższym wykształceniem na poziomie studiów magisterskich nadających
                        kwalifikacje nauczycielskie i przygotowanie pedagogiczne, zgodnie z
                        Rozporządzeniem Ministra Edukacji Narodowej z dnia 1 sierpnia 2017 r.
                        w sprawie szczegółowych kwalifikacji wymaganych od nauczycieli <span class="color__azure">(Dz.U. 2017 poz. 1575)</span>.</p>
                        <span>Wymagane od kandydata:</span>
                        <ul>
                            <li>Ukończone studia wyższe</li>
                            <li>Przygotowanie pedagogiczne</li>
                        </ul>`,
                    image: 'about1.jpg',
                    ytURL: ''
                },
                {
                    heading: 'Po co?',
                    content: `<p>UW wie co zrobić, by programy proponowanych kierunków studiów
                    były jak najbardziej atrakcyjne z biznesowego punktu widzenia. Do współpracy
                    zapraszamy przedsiębiorców, trenerów, doświadczonych praktyków. Dbamy o to,
                    żeby nasi studenci korzystali z doświadczenia i wiedzy osób, które odniosły
                    w życiu zawodowy sukces. Dążymy do tego, by wybierający naszą uczelnię już
                    w trakcie studiów mieli kontakt z jak największą liczbą pracodawców i praktyków
                    biznesu ponieważ wiemy, że pomoże to im w zdobyciu wielu potrzebnych kwalifikacji
                    oraz umiejętności, które zaprocentują w każdym miejscu pracy a także zainspiruje
                    do poszerzania swoich kompetencji.</p>`,
                    image: 'about2.jpg',
                    ytURL: ''
                },
                {
                    heading: 'Z kim?',
                    content: `<p>Ciekawość jest najpotężniejszą cechą ludzką, która popycha ludzi
                    do ciągłego rozwoju. CDV to miejsce, w którym studenci z zainteresowaniem i z
                    przyjemnością zdobywają wiedzę. Zarówno studenci, absolwenci, jak i pracownicy
                    to osoby nie tylko ciekawe świata, ale także pełne pasji w odkrywaniu nowych
                    rzeczy i w pozytywny sposób wpływające na swoje otoczenie.</p>
                    <p>Nasze kierunki studiów są interesujące i innowacyjne, tworzone we współpracy
                    z pracodawcami oraz na podstawie trendów w światowej gospodarce i kierunku zmian
                    na dynamicznym rynku pracy. Nasi absolwenci znajdują pracę zgodną ze swoimi
                    zainteresowaniami i wykształceniem.</p>`,
                    image: 'about3.jpg',
                    ytURL: 'Qu-S0um585E'
                },
            ]
        }
    },
}
</script>

<style lang="scss">
.section-col {
  &:first-of-type {
    .section-content {
      &__thumb {
        &--img {
          background-size: cover;
          background-position: left center;
        }
      }
    }
  }
  &:nth-of-type(2) {
    .section-content {
      &__thumb {
        &--img {
          background-size: cover;
          background-position: left 100%;
          position: relative;
          overflow: hidden;
          &::after {
            content: "Nowość";
            font-family: "Muli";
            font-size: 20px;
            font-weight: 800;
            color: white;
            text-align: center;
            position: absolute;
            top: 0;
            left: 0;
            padding: 5px 60px;
            background: linear-gradient(
              90deg,
              rgba(0, 182, 220, 1) 0%,
              rgba(0, 40, 65, 1) 50%,
              rgba(0, 182, 220, 1) 100%
            );
            transform: rotate(315deg) translate(-60px, -30px);
            z-index: 2;
          }
        }
      }
    }
  }
  &:last-of-type {
    .section-content {
      &__thumb {
        &--img {
          background-size: auto;
          background-position: 70% 40%;
        }
      }
    }
  }
}
</style>