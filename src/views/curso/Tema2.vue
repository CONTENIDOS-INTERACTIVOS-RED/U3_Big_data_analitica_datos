<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Aplicaciones en ingeniería: optimización y predicción de fallas'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/1.png', alt='')
      .col-sm-12.col-lg-8
        p.mb-5 El #[i Big data] ha transformado el ámbito de la ingeniería, al proporcionar herramientas avanzadas que mejoran el rendimiento, optimizan sistemas y facilitan el desarrollo de nuevas tecnologías. La capacidad de manejar y analizar grandes volúmenes de datos, permite aplicaciones cruciales como el mantenimiento predictivo y la optimización de sistemas. Estas áreas están cambiando la manera en que se gestionan infraestructuras, maquinaria y procesos industriales, promoviendo la eficiencia, la reducción de costos y la innovación.
        .bg-color-6.p-4
          p.mb-0 El #[b mantenimiento predictivo] utiliza datos recopilados en tiempo real, a través de sensores y sistemas de monitoreo para prever fallos o deterioros en equipos y maquinaria, antes que ocurran. Analizando patrones históricos y de comportamiento, es posible identificar señales tempranas de posibles fallos, lo que permite tomar medidas preventivas. Entre los principales beneficios se encuentran: la reducción de costos asociados con reparaciones de emergencia, la minimización de tiempos de inactividad y la mejora de la vida útil de los equipos. Este enfoque tiene aplicaciones claves en sectores como la industria automotriz, la aviación, la manufactura y la gestión de infraestructuras, donde la confiabilidad de los equipos es esencial.

    p.mb-4(data-aos="fade-up") Por otro lado, la #[b optimización de sistemas] implica el análisis de grandes volúmenes de datos operativos y de rendimiento, para mejorar procesos existentes. Esto incluye aplicaciones como la optimización de la distribución de energía en redes eléctricas y la mejora de flujos de trabajo en fábricas automatizadas. Los algoritmos de análisis y modelos de simulación permiten identificar áreas de ineficiencia, reducir el consumo de recursos y aumentar la producción. La optimización abarca tanto la maquinaria como los procesos logísticos y de gestión, asegurando operaciones más fluidas y rentables.
    h2.mb-3(data-aos="fade-up") Fuentes de datos en ingeniería
    p.mb-5(data-aos="fade-up") Las fuentes de datos son fundamentales para alimentar modelos de análisis y sistemas predictivos. Entre las principales fuentes se destacan las siguientes:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        LineaTiempoD.color-acento-contenido.large
          div(numero='1' titulo='Sensores IoT') 
            p.mb-0 Recopilan datos en tiempo real sobre maquinaria, condiciones ambientales y factores operativos, como temperatura, vibración y consumo energético. Son esenciales para mantenimiento predictivo y optimización de sistemas.
          div(numero='2' titulo='Registros históricos de maquinaria') 
            p.mb-0 Incluyen información sobre reparaciones, mantenimientos realizados y condiciones operativas. Combinados con datos en tiempo real, permiten identificar patrones de desgaste y prever necesidades de mantenimiento.
          div(numero='3' titulo='Bases de datos históricas') 
            p.mb-0 Comparan datos actuales con patrones previos para el mantenimiento predictivo y mejora continua. Facilitan ajustes en parámetros operativos y de diseño, optimizando eficiencia y procesos de producción.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/2.png')

    p.mb-4(data-aos="fade-up") El análisis de estas fuentes, permite a los ingenieros tomar decisiones informadas, aumentar la capacidad de respuesta ante fallos, optimizar recursos y mejorar la eficiencia en la gestión de infraestructuras y cadenas de producción.
    h2.mb-3(data-aos="fade-up") Técnicas de modelado predictivo en ingeniería
    p.mb-5(data-aos="fade-up") Las técnicas de modelado predictivo en ingeniería, están lideradas por algoritmos de Machine Learning (ML) y simulaciones avanzadas.
    
    h2.mb-3(data-aos="fade-up") Algoritmos de #[i Machine Learning] (ML)
    p.mb-5(data-aos="fade-up") Estas técnicas analizan grandes volúmenes de datos históricos y en tiempo real, para predecir comportamientos de sistemas y detectar fallas. Entre los algoritmos más utilizados, se destacan:
    TabsC.color-acento-contenido.mb-5(data-aos="fade-up")
      .py-4.py-md-5.bg-color-7.p-4(titulo="Random Forest")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t2/3.png')
          .col-sm-12.col-lg-8
            h4 #[i Random Forest]
            p.mb-0 Algoritmo supervisado ideal para predecir fallas en maquinaria. Utiliza árboles de decisión combinados para generar predicciones robustas, detectando anomalías incluso en variables interdependientes.

      .py-4.py-md-5.bg-color-7.p-4(titulo="Redes neuronales")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t2/4.png')
          .col-sm-12.col-lg-8
            h4 Redes neuronales
            p.mb-0 Herramientas de #[i Deep Learning], capaces de analizar datos no lineales y complejos. Identifican patrones en datos históricos y en tiempo real, aumentando la precisión y confiabilidad de los modelos predictivos.
      

    .bg-full-width.bg-fondo-3.mb-0(data-aos="fade-up")
      .px-5.py-4
        h2.mb-3 Simulaciones con modelos prescriptivos
        p.mb-5 Los modelos prescriptivos no solo predicen eventos futuros, sino que también recomiendan acciones óptimas, basadas en datos y objetivos específicos del sistema.
        .row.justify-content-center.align-items-stretch.mb-0
          .col-sm-12.col-lg-4.mb-4
            .custom-image-card-2.h-100.text-center
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center.mb-3
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t2/5.svg', style='max-width: 90px').mx-auto
                p.mb-0 En líneas de ensamblaje, optimizan la distribución de tareas. 
          .col-sm-12.col-lg-4.mb-4
            .custom-image-card-2.h-100.text-center
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center.mb-3
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t2/6.svg', style='max-width: 90px').mx-auto
                p.mb-0 En redes de transporte, ajustan dinámicamente las rutas para reducir tiempos de espera.
          .col-sm-12.col-lg-4.mb-4
            .custom-image-card-2.h-100.text-center
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center.mb-3
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t2/7.svg', style='max-width: 90px').mx-auto
                p.mb-0 En redes de energía, distribuyen eficientemente, recursos para minimizar desperdicios.
    p.mb-4(data-aos="fade-up") Estas simulaciones consideran variables como tiempos de inactividad, costos de materiales y disponibilidad de fuerza laboral, proporcionando soluciones eficientes y rentables incluso en escenarios de incertidumbre.
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-6
        TarjetaAudio.color-primario.mb-3(
          texto="Proceso de descarga de MySQL Server Community y MySQL Workbench"
          :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
        )
    h2.mb-3(data-aos="fade-up") Impacto y relevancia de #[i Big data] en la ingeniería.
    p.mb-5(data-aos="fade-up") El impacto de #[i Big data] en la ingeniería, trasciende la simple optimización de procesos y la mejora de la eficiencia operativa. La capacidad de analizar grandes volúmenes de datos provenientes de diversos sistemas, ha transformado la forma en que los ingenieros abordan desafíos complejos, ofreciendo beneficios tangibles y enfrentando retos significativos, que deben ser gestionados cuidadosamente. A continuación, se detallan los beneficios claves y los retos asociados con su implementación.
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-7
        AcordionA(tipo='b')
          div(titulo='Reducción de costos operativos')
            p.mb-0 #[i Big data] permite anticipar problemas con análisis predictivos y optimización, evitando tiempos de inactividad y planificando mantenimientos más eficientes. Sectores: manufactura, energía y transporte.
          div(titulo='Optimización de recursos')
            p.mb-0 Identifica patrones de consumo para gestionar insumos como energía y materias primas. Ejemplo: ajuste en tiempo real de producción y almacenamiento de energía en fuentes renovables.
          div(titulo='Sostenibilidad ambiental')
            p.mb-0 Monitorea parámetros como calidad del aire y niveles de contaminación. Aplicaciones: decisiones sostenibles en construcción y optimización de rutas en transporte para reducir emisiones.
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t2/8.png')
    p.mb-5.fw-bold(data-aos="fade-up") Los retos técnicos asociados con la escalabilidad de sistemas de monitoreo masivo, son:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t2/9.png')
      .col-sm-12.col-lg-8
        AcordionA(tipo='b')
          div(titulo='Infraestructuras tecnológicas avanzadas') 
            p.mb-3 Requieren plataformas capaces de gestionar y procesar grandes volúmenes de datos en tiempo real. 
            p.mb-0 #[b Problemas:] cuellos de botella y dificultad para integrar datos de diversas fuentes.
          div(titulo='Escalabilidad de plataformas de <i>Big data</i>') 
            p.mb-3 Las arquitecturas deben crecer con el volumen de datos, sin comprometer precisión ni velocidad. 
            p.mb-0 #[b Sectores afectados:] manufactura industrial, ciudades inteligentes y energía.
          div(titulo='Mantenimiento de la calidad de los datos') 
            p.mb-3 Es crucial garantizar datos consistentes y completos. 
            p.mb-0 #[b Retos:] identificar y corregir inconsistencias y establecer estándares de calidad para evitar decisiones erróneas.
          div(titulo='Interoperabilidad de sistemas') 
            p.mb-0 Integrar sistemas masivos de datos con plataformas existentes, asegurando interoperabilidad, seguridad y gestión adecuada de infraestructuras en diversos entornos industriales.

    p.mb-5(data-aos="fade-up") El uso de #[i Big data] en ingeniería, ofrece beneficios como la reducción de costos operativos, la optimización de recursos y el impulso de la sostenibilidad. Sin embargo, los retos relacionados con la escalabilidad, la calidad de los datos y la interoperabilidad deben ser gestionados de manera adecuada. A medida que las tecnologías evolucionan, superar estos desafíos será clave para aprovechar al máximo el potencial de #[i Big data] en la ingeniería, garantizando sistemas más eficientes, sostenibles y confiables.
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complem
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            //- Referencia con enlace 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://www.redalyc.org/articulo.oa?id=378343683010' target='_blank' rel='noopener noreferrer') Hernández Dominguez, A. & Hernández Yeja, A. (2015). Acerca de la aplicación de MapReduce+ Hadoop en el tratamiento de Big Data. Revista Cubana de Ciencias Informáticas, 9(3), pp. 49-62.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style='{"max-width":"16px"}')
              a(href='https://spark.apache.org/downloads.html' target='_blank' rel='noopener noreferrer') Apache Software Foundation. (n.d.). Apache Spark Downloads.
            
            
            //- Referencia de youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style='{"max-width":"16px"}')
              a(href='https://www.youtube.com/playlist?list=PLxNoJq6k39G_m6DYjpz-V92DkaQEiXxkF' target='_blank' rel='noopener noreferrer') Big Data Engineering in Depth

            
          .col-12.col-md-6.col-lg-3.offset-lg-1.d-none.d-lg-block
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')



</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
