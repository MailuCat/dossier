<template>
  <div>
    <section
      id="get-in-touch"
      class="overflow-hidden"
    >
      <v-row
        class="info white--text"
        no-gutters
      >
        <v-col
          class="hidden-sm-and-down"
          md="6"
        >
          <v-img
            :src="require('@/assets/contactus.png')"
            height="100vh"
          />
        </v-col>
        <v-col
          class="pa-5"
          cols="12"
          md="6"
        >
          <vue-iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSemw21Ok9uFiHvZsv7aOX7Mxij8LIXXEeSpT5E16Vk80-eFyw/viewform?embedded=true"
            frame-id="my-ifram"
            width="640"
            height="685"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          />
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'GetInTouch',

    data: () => ({
      myIframe: null,
    }),
    methods: {
      onLoad (frame) {
        this.myIframe = frame.contentWindow
      },
    },
  }
</script>
