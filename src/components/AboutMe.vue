<template>
  <section
    id="about"
    class="overflow-hidden"
  >
    <v-row
      class="white"
      no-gutters
    >
      <v-col
        class="pa-5"
        cols="12"
        md="6"
      >
        <base-bubble-1 style="transform: translate(5%, -5%)" />

        <base-heading class="info--text">
          ¿Quién soy?
        </base-heading>

        <base-text class="mb-5">
          Mi creatividad y versatilidad están aplicados hoy en mi trabajo
          como Front End. Hasta ahora estuve vinculada a internet desde el periodismo digital, esta buena experiencia me llevó a especializarme
          como desarrolladora Front End en el bootcamp de Desafío Latam.
          En lo personal soy una enamorada de la naturaleza y seguidora de los avances de la ciencia,
          por eso estoy en aprendizaje continuo para ir siempre conectada con este
          mundo de rápida evolución.
          <br>
        </base-text>

        <base-subheading class="info--text">
          Mis palabras son:
        </base-subheading>

        <base-text class="mb-5" />

        <v-alert
          outlined
          color="info"
        >
          <v-row
            v-for="(skill, i) in skills"
            :key="i"
            style="color: #69A1BB;"
          >
            <v-col
              class="text-uppercase"
              cols="6"
              v-text="skill.name"
            />

            <v-col
              class="text-right"
              cols="6"
              v-text="`${skill.value}%`"
            />

            <v-progress-linear
              :value="skill.value"
              color="info"
              height="8"
            />
          </v-row>
        </v-alert>
      </v-col>

      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/aboutme.png')"
          height="100%"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    data: () => ({
      skills: [
        {
          name: 'Empatía',
          value: 100,
        },
        {
          name: 'Responsabilidad',
          value: 95,
        },
        {
          name: 'Aprendizaje continuo',
          value: 90,
        },
      ],
    }),
  }
</script>
