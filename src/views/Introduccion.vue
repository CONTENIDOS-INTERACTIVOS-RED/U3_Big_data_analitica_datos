<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno(subTitulo="Introducción")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      p.mb-4 El #[i Big data] ha revolucionado la forma en que las disciplinas como las ciencias sociales, la ingeniería y el marketing abordan el análisis de información. Esta tecnología permite procesar grandes volúmenes de datos en tiempo real, ofreciendo nuevas oportunidades para comprender fenómenos complejos y tomar decisiones basadas en evidencia. Su capacidad para identificar patrones y tendencias a gran escala, abre caminos innovadores en múltiples áreas.
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-8.bg-color-1.p-4
            p.mb-0 En el ámbito de las ciencias sociales, el #[i Big data] ha transformado la investigación, permitiendo un análisis más detallado de dinámicas sociales, comportamientos individuales y respuestas colectivas, frente a diversos estímulos. En ingeniería, facilita la optimización de sistemas y el mantenimiento predictivo, mejorando la eficiencia operativa. Por su parte, en marketing, potencia la personalización de estrategias, mediante la segmentación avanzada y el análisis predictivo, fortaleciendo la relación con los clientes.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/intro/1.png', alt='')
      p.mb-5 Sin embargo, el uso del #[i Big data] también plantea importantes desafíos éticos y metodológicos, como la privacidad de los datos, los sesgos en los análisis y la complejidad en la interpretación de información heterogénea. Abordar estas cuestiones de manera responsable, es fundamental para aprovechar su potencial transformador y garantizar que sus aplicaciones generen beneficios equitativos para la sociedad.

      
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
