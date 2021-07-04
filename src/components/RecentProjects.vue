<template>
  <v-container>
    <v-row no-gutters>
      <v-col
        class="primary text-center pa-5 white--text"
        cols="12"
        md="12"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateX(25%)"
        />

        <base-heading>
          Proyectos Recientes
        </base-heading>

        <base-text class="mb-5 mt-5">
          Este portafolio está diseñado con Vuetify. <v-icon>fa-pencil</v-icon>
        </base-text>
      </v-col>
    </v-row>
    <v-row class="primary">
      <v-col
        class="primary"
        cols="12"
        sm="6"
        md="6"
      >
        <template>
          <v-card
            class="mx-auto pt-5 "
            max-width="600"
          >
            <v-img
              :src="require('@/assets/olivia.ross.png')"
              height="400px"
              aspect-ratio="1.7"
              contain
            />

            <v-card-title class="mb-2">
              Olivia Ross
            </v-card-title>

            <v-card-subtitle>
              <v-icon>{{ mdiLanguageHtml5 }}</v-icon>
              <v-icon>{{ mdiLanguageJavascript }}</v-icon>
              <v-icon>{{ mdiLanguageCss3 }}</v-icon>
              <v-icon>{{ mdiBootstrap }}</v-icon>
            </v-card-subtitle>
            <v-btn
              class="ma-3"
              text
              color="deep-purple accent-4"
              href="https://kind-kepler-e132e7.netlify.app"
            >
              Ver demo
            </v-btn>
          </v-card>
        </template>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="6"
      >
        <template>
          <v-card
            class="mx-auto pt-5"
            max-width="600"
          >
            <v-img
              :src="require('@/assets/barber-shop.png')"
              height="400px"
              aspect-ratio="1.7"
              contain
            />
            <v-card-title class="mb-2">
              Barber Shop
            </v-card-title>
            <v-card-subtitle>
              <v-icon>{{ mdiLanguageHtml5 }}</v-icon>
              <v-icon>{{ mdiSass }} </v-icon>
              <v-icon>{{ mdiLanguageCss3 }}</v-icon>
            </v-card-subtitle>
            <v-btn
              class="ma-2"
              text
              color="deep-purple accent-4"
              href="https://sharp-murdock-6e5fa7.netlify.app"
            >
              Ver demo
            </v-btn>
          </v-card>
        </template>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="6"
      >
        <template>
          <v-card
            class="mx-auto pt-5"
            max-width="600"
          >
            <v-img
              :src="require('@/assets/suricata.png')"
              height="400px"
              aspect-ratio="1.7"
              contain
            />
            <v-card-title class="mb-2">
              Suricata
            </v-card-title>
            <v-card-subtitle>
              <v-icon>{{ mdiLanguageHtml5 }}</v-icon>
              <v-icon>{{ mdiLanguageCss3 }}</v-icon>
              <v-icon>{{ mdiBootstrap }}</v-icon>
            </v-card-subtitle>
            <v-btn
              class="ma-2"
              text
              color="deep-purple accent-4"
              href="https://elastic-lewin-dd2cb2.netlify.app"
            >
              Ver demo
            </v-btn>
          </v-card>
        </template>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="6"
      >
        <template>
          <v-card
            class="mx-auto pt-5"
            max-width="600"
          >
            <v-img
              :src="require('@/assets/Trekking.png')"
              height="400px"
              aspect-ratio="1.7"
              contain
            />
            <v-card-title class="mb-2">
              Trecking
            </v-card-title>
            <v-card-subtitle>
              <v-icon>{{ mdiLanguageHtml5 }}</v-icon>
              <v-icon>{{ mdiLanguageCss3 }}</v-icon>
              <v-icon>{{ mdiSass }}</v-icon>
            </v-card-subtitle>
            <v-btn
              class="ma-2"
              text
              color="deep-purple accent-4"
              href="https://wonderful-bohr-9c6914.netlify.app"
            >
              Ver demo
            </v-btn>
          </v-card>
        </template>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="6"
      >
        <template>
          <v-card
            class="mx-auto pt-5"
            max-width="600"
          >
            <v-img
              :src="require('@/assets/Diario.png')"
              height="400px"
              aspect-ratio="1.7"
              contain
            />
            <v-card-title class="mb-2">
              Revista
            </v-card-title>
            <v-card-subtitle>
              <v-icon>{{ mdiLanguageHtml5 }}</v-icon>
              <v-icon>{{ mdiSass }}</v-icon>
              <v-icon>{{ mdiLanguageCss3 }}</v-icon>
              <v-icon>{{ mdiBootstrap }}</v-icon>
            </v-card-subtitle>
            <v-btn
              class="ma-2"
              text
              color="deep-purple accent-4"
              href="https://blissful-wright-d30326.netlify.app"
            >
              Ver demo
            </v-btn>
          </v-card>
        </template>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="6"
      >
        <template>
          <v-card
            class="mx-auto pt-5"
            max-width="600"
          >
            <v-img
              :src="require('@/assets/krauss.png')"
              height="400px"
              aspect-ratio="1.7"
              contain
            />
            <v-card-title class="mb-2">
              Jugueteria
            </v-card-title>
            <v-card-subtitle>
              <v-icon>{{ mdiLanguageHtml5 }}</v-icon>
              <v-icon>{{ mdiLanguageJavascript }}</v-icon>
              <v-icon>{{ mdiVuejs }}</v-icon>
              <v-icon>{{ mdiBootstrap }}</v-icon>
            </v-card-subtitle>
            <v-btn
              class="ma-2"
              text
              color="deep-purple accent-4"
              href="https://adoring-lamport-d07647.netlify.app"
            >
              Ver demo
            </v-btn>
          </v-card>
        </template>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="6"
      >
        <template>
          <v-card
            class="mx-auto pt-5"
            max-width="600"
          >
            <v-img
              :src="require('@/assets/Pokeapi.png')"
              height="400px"
              aspect-ratio="1.7"
              contain
            />
            <v-card-title class="mb-2">
              Pokeapi
            </v-card-title>
            <v-card-subtitle>
              <v-icon>{{ mdiLanguageHtml5 }}</v-icon>
              <v-icon>{{ mdiLanguageJavascript }}</v-icon>
              <v-icon>{{ mdiJquery }}</v-icon>
              <v-icon>{{ mdiBootstrap }}</v-icon>
            </v-card-subtitle>
            <v-btn
              class="ma-2"
              text
              color="deep-purple accent-4"
              href="https://mystifying-mclean-dbb5af.netlify.app/"
            >
              Ver demo
            </v-btn>
          </v-card>
        </template>
      </v-col><v-col
        cols="12"
        sm="6"
        md="6"
      >
        <template>
          <v-card
            class="mx-auto pt-5"
            max-width="600"
          >
            <v-img
              :src="require('@/assets/rickandmorty.png')"
              height="400px"
              aspect-ratio="1.7"
              contain
            />
            <v-card-title class="mb-2">
              Rick and Mort
            </v-card-title>
            <v-card-subtitle>
              <v-icon>{{ mdiLanguageHtml5 }}</v-icon>
              <v-icon>{{ mdiLanguageJavascript }}</v-icon>
              <v-icon>{{ mdiLanguageCss3, }}</v-icon>
              <v-icon>{{ mdiBootstrap }}</v-icon>
            </v-card-subtitle>
            <v-btn
              class="ma-2"
              text
              color="deep-purple accent-4"
              href="https://mystifying-mclean-dbb5af.netlify.app/"
            >
              Ver demo
            </v-btn>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import { mdiLanguageHtml5, mdiLanguageJavascript, mdiLanguageCss3, mdiBootstrap, mdiVuejs, mdiSass, mdiJquery } from '@mdi/js'

  export default {
    name: 'RecentProjects',
    data: () => ({
      show: false,
      mdiLanguageHtml5,
      mdiLanguageJavascript,
      mdiLanguageCss3,
      mdiBootstrap,
      mdiSass,
      mdiVuejs,
      mdiJquery,
    }),
  }
</script>
