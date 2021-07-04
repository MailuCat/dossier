<template>
  <div>
    <v-btn href="https://www.linkedin.com/in/maria-luisa-catalan-saz/">
      <span>Linkedin</span>

      <v-icon
        large
        color="teal darken-2"
      >
        mdi-linkedin
      </v-icon>
    </v-btn>
    <v-btn href="https://github.com/MailuCat">
      <span>Git-Hub</span>

      <v-icon
        large
        color="teal darken-2"
      >
        fa-github
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      large: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        {
          name: 'Twitter',
          icon: 'fa-github',
        },
        {
          name: 'Instagram',
          icon: 'mdi-instagram',
        },
        {
          name: 'Facebook',
          icon: 'mdi-facebook',
        },
        {
          name: 'Email',
          icon: 'mdi-email',
        },
        {
          name: 'Phone',
          icon: 'mdi-phone',
        },
      ],
    }),
  }
</script>
