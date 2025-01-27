<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Uso de <i>Big data</i> en la ciencia social: análisis de tendencias y comportamiento'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    p.mb-5(data-aos="fade-up") El #[i Big data] abarca técnicas y herramientas diseñadas para procesar, analizar y extraer valor, de volúmenes masivos de datos generados a gran velocidad y en diversos formatos. En las ciencias sociales, esta tecnología ha transformado la investigación al permitir explorar fenómenos sociales con una escala y detalle, sin precedentes. Su enfoque principal es identificar patrones, dinámicas y relaciones dentro de grandes conjuntos de datos, para comprender mejor el comportamiento individual y colectivo, frente a diversos estímulos. 
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0 Esto resulta esencial para evaluar políticas públicas, diseñar estrategias de marketing y anticipar movimientos sociales o económicos. Durante eventos como la pandemia del COVID-19, el análisis de datos masivos permitió rastrear la difusión de información, medir la percepción pública y prever tendencias en mercados laborales, destacando su capacidad predictiva para la toma de decisiones basadas en evidencia.
        .col-lg-auto.d-none.d-lg-block
          img(src='@/assets/curso/t1/1.png', alt='')

    h2.mb-3(data-aos="fade-up") Principales fuentes de datos para el análisis social
    p.mb-5(data-aos="fade-up") El #[i Big data] aplicado a las ciencias sociales, emplea diversas fuentes, cada una con características únicas que enriquecen el análisis:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t1/2.png')
      .col-sm-12.col-lg-7
        AcordionA(tipo='b')
          div(titulo='Redes sociales y plataformas digitales')
            p.mb-4 #[b Datos disponibles:] opiniones, emociones, intereses y comportamientos en tiempo real.
            p.mb-0 #[b Aplicaciones:]
            ul.lista-ul--color.mb-4
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Análisis de sentimientos: mide la percepción pública sobre temas específicos al identificar emociones y opiniones en publicaciones.
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Detección de tendencias: rastrea fenómenos virales, patrones emergentes y cambios culturales, mediante hashtags, palabras claves y picos de actividad.
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Estudios de redes sociales: mapea conexiones y relaciones entre individuos y comunidades, para analizar la propagación de ideas o dinámicas grupales.
            p.mb-0 #[b Ejemplo:] Twitter ha sido utilizado para rastrear discursos polarizantes y diseñar políticas de comunicación, más estratégicas.

          div(titulo='Encuestas digitales y datos administrativos')
            p.mb-4 #[b Datos disponibles:] información estructurada como registros de empleo, educación y salud.
            p.mb-0 #[b Ventajas:]
            ul.lista-ul--color.mb-4
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Permite segmentar datos por edad, género, nivel socioeconómico, entre otros, proporcionando un análisis detallado de comportamientos y necesidades.
            p.mb-0 #[b Ejemplo:] estudios de satisfacción ciudadana combinan encuestas digitales con datos demográficos y geográficos, para identificar diferencias en la percepción de servicios públicos entre zonas urbanas y rurales.

          div(titulo='Sensores urbanos y dispositivos IoT')
            p.mb-4 #[b Datos disponibles:] información generada por cámaras, medidores de tráfico, estaciones meteorológicas, smartphones y wearables.
            p.mb-0 #[b Aplicaciones:]
            ul.lista-ul--color.mb-4
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Movilidad urbana: análisis de flujos de personas y vehículos, para optimizar redes de transporte y reducir cuellos de botella.
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Monitoreo ambiental: uso de estaciones de calidad del aire y medidores de ruido, para diseñar políticas sostenibles.
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Planificación urbana: integración de datos de movilidad y medioambientales, para implementar redes de transporte público interconectadas o espacios verdes estratégicos.
            p.mb-0 #[b Ejemplo:] datos de movilidad de Google Maps, durante la pandemia, fueron utilizados para medir el impacto de las restricciones y ajustar políticas locales.

          div(titulo='Fuentes alternativas: datos audiovisuales y textuales')
            p.mb-0 #[b Procesamiento de lenguaje natural (NLP):] 
            ul.lista-ul--color.mb-4
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Analiza textos masivos para identificar patrones lingüísticos, emociones y temas recurrentes. 

            p.mb-4 #[b Ejemplo:] evaluación de discursos políticos o análisis de conversaciones globales, en redes sociales. 

            p.mb-0 #[b Visión por computadora:] 
            ul.lista-ul--color.mb-4
              li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Analiza imágenes y videos para detectar comportamientos colectivos y fenómenos urbanos.

            p.mb-0 #[b Ejemplo:] uso de cámaras de seguridad para gestionar multitudes en eventos masivos o diseñar entornos urbanos más seguros.

    .bg-full-width.bg-fondo-1.mb-5(data-aos="fade-up")
      .px-5.py-4
        h2.mb-3 Beneficios y desafíos del #[i Big data] en ciencias sociales
        p.mb-5 La integración de múltiples fuentes de datos, como textos, imágenes, registros administrativos y sensores, proporciona una visión integral de las dinámicas sociales. Sin embargo, su implementación requiere abordar desafíos claves:

        .row.justify-content-center.align-items-stretch.mb-0
          .col-sm-12.col-lg-4.mb-4
            .custom-image-card-2.h-100.text-center
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center.mb-3
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t1/3.svg', style='max-width: 90px').mx-auto
                h5.mb-2.text-center Privacidad
                p.mb-0  Asegurar el manejo ético de los datos personales.
          .col-sm-12.col-lg-4.mb-4
            .custom-image-card-2.h-100.text-center
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center.mb-3
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t1/4.svg', style='max-width: 90px').mx-auto
                h5.mb-2.text-center Representación equitativa
                p.mb-0  Evitar sesgos en los análisis y garantizar la inclusión de todos los grupos sociales.
          .col-sm-12.col-lg-4.mb-4
            .custom-image-card-2.h-100.text-center
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center.mb-3
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t1/5.svg', style='max-width: 90px').mx-auto
                h5.mb-2.text-center Ética
                p.mb-0 Establecer límites claros en el uso de tecnologías avanzadas.

    p.mb-4(data-aos="fade-up") El potencial del #[i Big data] en las ciencias sociales, continúa creciendo, abriendo oportunidades para diseñar políticas inclusivas, comprender cambios sociales y generar impactos positivos en la sociedad.
    .bg-full-width.bg-color-4.mb-5(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg-7
             h2.mb-4 Desafíos y Oportunidades del #[i Big data] en las ciencias sociales
             p.mb-4 El #[i Big data] transforma las ciencias sociales enfrentando retos como garantizar la privacidad, corregir sesgos en datos y formar profesionales capacitados. Sin embargo, ofrece oportunidades únicas al permitir análisis en tiempo real, identificación de patrones a gran escala y la integración de múltiples fuentes de datos. Estas herramientas potencian la comprensión de fenómenos sociales y el diseño de políticas públicas, más precisas, mejorando la calidad de vida en las sociedades modernas.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/desafios_oportunidades.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Desafíos y Oportunidades del #[i Big data] en las ciencias sociales
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t1/6.png', alt='')

    #t_1_1.titulo-segundo(data-aos="fade-up")
      h2 #[span 1.1] Técnicas y herramientas para el análisis social con #[i Big data]
    p.mb-4(data-aos="fade-up") El avance en las tecnologías de procesamiento de datos, ha dado lugar a una diversidad de técnicas y herramientas que facilitan el análisis social, mediante el #[i Big data]. Estas metodologías permiten procesar grandes volúmenes de información y extraer conclusiones significativas, que informan decisiones políticas, sociales y económicas.
    .bg-full-width.bg-fondo-2.mb-0(data-aos="fade-up")
      .px-5.py-4
        h2.mb-4 Métodos de análisis de texto y sentimientos
        .row.justify-content-center.mb-3
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t1/7.png', alt='')
          .col-sm-12.col-lg-8.bg-color-2.p-4
              p.mb-0 El análisis de texto y sentimientos, basado en algoritmos de procesamiento de lenguaje natural (NLP), es una herramienta clave para explorar interacciones sociales en plataformas digitales. Este enfoque permite examinar grandes cantidades de datos textuales, como publicaciones en redes sociales, artículos de noticias y comentarios en blogs, identificando emociones, opiniones y actitudes predominantes. Los modelos de NLP detectan sentimientos positivos, negativos o neutrales, proporcionando una visión clara de cómo la sociedad percibe eventos, políticas o productos.

        p.mb-4 El análisis de datos encuentra múltiples aplicaciones en diversos contextos sociales y económicos: 
        .row.justify-content-center.align-items-stretch.mb-0
          .col-sm-12.col-lg-4.mb-4
            .custom-image-card-2.h-100.text-center
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center.mb-3
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t1/8.svg', style='max-width: 90px').mx-auto
                p.mb-0  Monitoreo de opinión pública durante campañas electorales.
          .col-sm-12.col-lg-4.mb-4
            .custom-image-card-2.h-100.text-center
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center.mb-3
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t1/9.svg', style='max-width: 90px').mx-auto
                p.mb-0 Evaluación de la recepción de campañas de marketing.
          .col-sm-12.col-lg-4.mb-4
            .custom-image-card-2.h-100.text-center
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center.mb-3
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t1/10.svg', style='max-width: 90px').mx-auto
                p.mb-0 Estudio del impacto social de crisis globales.
    p.mb-4(data-aos="fade-up") Además, el análisis de texto incluye la extracción de temas recurrentes y patrones discursivos, lo que permite detectar los temas más debatidos y sus interrelaciones, ofreciendo una comprensión más profunda de las dinámicas sociales y culturales.
    h2.mb-3(data-aos="fade-up") Visualización de datos: tendencias geográficas y demográficas
    p.mb-5(data-aos="fade-up") La visualización de datos transforma conjuntos de datos complejos en representaciones gráficas accesibles, como mapas interactivos, gráficos de barras, líneas de tiempo y diagramas de dispersión. Esto facilita la identificación de patrones y correlaciones significativas. Algunos usos son:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t1/12.png' alt='')
          .custom-image-card__text.p-4
            p.mb-0.text-center Mapear variaciones en patrones de tráfico urbano, según horas del día o densidad poblacional.
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t1/13.png' alt='')
          .custom-image-card__text.p-4
            p.mb-0.text-center Identificar disparidades en el acceso a servicios públicos, como salud o educación.
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t1/14.png' alt='')
          .custom-image-card__text.p-4
            p.mb-0.text-center Planificación urbana basada en datos demográficos y geoespaciales. 

    p.mb-4(data-aos="fade-up") Estas herramientas apoyan la toma de decisiones informadas en el diseño de políticas públicas inclusivas y en la planificación urbana.
    h2.mb-3(data-aos="fade-up") Aplicaciones prácticas del #[i Big data] en ciencias sociales
    p.mb-5(data-aos="fade-up") El #[i Big data] ha transformado las ciencias sociales, haciendo que las decisiones políticas sean más informadas y fundamentadas. Herramientas de análisis y visualización, permiten aplicar conocimientos prácticos para mejorar la calidad de vida urbana y social.
    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/15.png', alt='Imagen de monitoreo de percepciones públicas')
            .col-sm-12.col-lg-7
              h5.mb-3 Monitoreo de percepciones públicas
              p.mb-3 Análisis de opiniones y sentimientos en redes sociales y noticias con herramientas como Python y Tableau, ayudando a ajustar políticas en tiempo real.
              p.mb-0 #[b Ejemplo:] evaluar medidas de seguridad pública.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/16.png', alt='Imagen de patrones de comportamiento urbano')
            .col-sm-12.col-lg-7
              h5.mb-3 Patrones de comportamiento urbano
              p.mb-3 Uso de datos de movilidad de sensores, IoT y apps, como Google Maps, para mejorar transporte, gestionar tráfico y diseñar infraestructura sostenible.
              p.mb-0 #[b Ejemplo:] carriles para bicicletas y transporte público.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t1/17.png', alt='Imagen de participación ciudadana')
            .col-sm-12.col-lg-7
              h5.mb-3 Participación ciudadana
              p.mb-0 Encuestas digitales y plataformas, integran opiniones comunitarias fomentando procesos más inclusivos y participativos en el diseño de políticas.

    h2.mb-3(data-aos="fade-up") Desafíos éticos y metodológicos
    p.mb-4(data-aos="fade-up") El uso de #[i Big data] conlleva importantes desafíos:
    .bg-full-width.bg-color-6.mb-5(data-aos="fade-up")
      .px-5.py-4
        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg-8
            ImagenInfografica.color-secundario.mb-0
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/t1/18.svg')
              .tarjeta.bg-color-4.p-3(x="16.1%" y="80%" numero="+")
                p.mb-0 Garantizar el manejo ético de datos personales, mediante políticas de privacidad y control, abordando dilemas como el consentimiento informado, anonimización y uso indebido.
              .tarjeta.bg-color-6.p-3(x="50%" y="80%" numero="+")
                p.mb-0 Minimizar sesgos en los algoritmos, para evitar discriminación, puesto que los datos de entrada pueden reflejar desigualdades preexistentes.
              .tarjeta.bg-color-8.p-3(x="84.5%" y="80%" numero="+")
                p.mb-0 La diversidad de fuentes dificulta el análisis coherente. Complementar datos cuantitativos con enfoques cualitativos, permite contextualizar y enriquecer las interpretaciones.
            
   
    
    
    p.mb-4(data-aos="fade-up") El #[i Big data] tiene un vasto potencial para transformar la comprensión de la sociedad y apoyar la toma de decisiones. Sin embargo, exige un enfoque reflexivo y ético para maximizar sus beneficios y mitigar riesgos, garantizando que su uso sea justo y equitativo.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://elibro.net/es/lc/elibrocom/titulos/248053' target='_blank' rel='noopener noreferrer') Becerra Mayorga, W. (2023). Python para las humanidades digitales. Ecoe Ediciones.
            
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://hadoop.apache.org/releases.html' target='_blank' rel='noopener noreferrer') Apache Software Foundation. (n.d.). Hadoop releases.

            
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/playlist?list=PLo4m8hx3sbb_lcIO7n9bDr35Y3TKf56w1' target='_blank' rel='noopener noreferrer') Big Data and Society

            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')













</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
