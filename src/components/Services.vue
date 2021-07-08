<template>
  <div>
    <v-row>
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/services.png')"
          height="100%"
        />
      </v-col>
      <v-col
        class="text-center pa-5"
        cols="12"
        md="6"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <base-bubble-2
              style="transform: translateX(55%)"
            />
            <base-heading class="info--text">
              Competencias
            </base-heading>

            <base-text class="mb-5">
              <br>
            </base-text>
          </v-col> <v-col
            v-for="(frame, i) in frame"
            :key="i"
            class="text-center mb-3"
            md="6"
          >
            <v-avatar
              class="elevation-6 mb-2"
              color="#69A1BB"
              size="64"
              tile
            >
              <v-icon
                dark
                size="52"
                v-text="frame.icon"
              />
            </v-avatar>

            <base-text>
              <div
                class="mb-2"
                v-text="frame.name"
              />
              <div v-html="frame.blurb" />
            </base-text>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  export default {
    name: 'Services',
    data: () => ({
      frame: [
        {
          name: 'HTML5',
          icon: 'mdi-language-html5',
          blurb: '',
        },
        {
          name: 'CSS',
          icon: 'mdi-language-css3',
          blurb: '',
        },
        {
          name: 'Bootstrap',
          icon: 'mdi-bootstrap',
          blurb: '',
        },
        {
          name: 'JavaScript',
          icon: 'mdi-language-java',
          blurb: '',
        },
        {
          name: 'Api Rest',
          icon: 'mdi-api',
          blurb: '',
        },
        {
          name: 'Firebase',
          icon: 'mdi-firebase',
          blurb: '',
        },
      ],
    }),
  }
</script>
