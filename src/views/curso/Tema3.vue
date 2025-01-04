<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Análisis de datos en <i>marketing</i> y negocios: segmentación de clientes y estrategias de mercado'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    .bg-full-width.bg-fondo-1.mb-0(data-aos="fade-up")
      .p-4.p-md-5
        p.mb-4 El análisis de datos proporciona una visión integral del comportamiento del cliente a través de diversas interacciones y puntos de contacto. Herramientas avanzadas permiten recopilar información sobre cómo los consumidores interactúan en sitios web, sus preferencias por productos o servicios y su respuesta a campañas de #[i marketing]. Las fuentes de esta información incluyen:
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-4.pe-xl-8.d-none.d-lg-block
              img(src='@/assets/curso/t3/1.png')
          .col-11.col-md-8.col-xl-7
            SlyderF(columnas='col-12 col-lg-6')
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t3/2.svg' alt='AvatarTop')
                    h4.mb-0.text-center Sitios web.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t3/3.svg' alt='AvatarTop')
                    h4.mb-0.text-center Redes sociales.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t3/4.svg' alt='AvatarTop')
                    h4.mb-0.text-center Encuestas.
              .row.py-4.px-3.h-100
                .col-10.offset-1.offset-md-0.col-md-12.shadow-app.p-3.py-md-5.px-md-4.bg-color-white
                  .row.justify-content-center
                    .col-8.col-md-4.mb-4.d-none.d-lg-block
                      img(src='@/assets/curso/t3/5.svg' alt='AvatarTop')
                    h4.mb-0.text-center Registro de compras.

    p.mb-4(data-aos="fade-up") La personalización se posiciona como una de las aplicaciones más importantes del análisis de datos en #[i marketing]. Con información detallada sobre características demográficas, intereses y comportamientos previos, las marcas pueden adaptar su mensaje para hacerlo más relevante y atractivo para cada consumidor. Los beneficios incluyen:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        .bg-color-1.p-4
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-circle.icon-list
              p.mb-0 #[b Mejora de la experiencia del cliente:] mensajes personalizados generan una mayor conexión emocional.
            li.d-flex
              i.fas.fa-circle.icon-list
              p.mb-0 #[b Incremento de la tasa de conversión:] ofertas dirigidas aumentan la probabilidad de respuesta.
            li.d-flex
              i.fas.fa-circle.icon-list
              p.mb-0 #[b Segmentación precisa de clientes:] facilita el enfoque en grupos específicos, optimizando la eficacia de las campañas.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/t3/6.png', alt='')

    h2.mb-3(data-aos="fade-up") Integración de datos estructurados y no estructurados
    p.mb-5(data-aos="fade-up") Una ventaja clave del análisis de datos, es la capacidad de integrar diferentes tipos de información, combinando datos estructurados y no estructurados:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-8
        .titulo-figura.mb-2.d-d-flex
          p.mb-0 #[b Tabla 1.] Datos estructurados y no estructurados
        .tabla-a.color-primario.mb-0
          table
            thead
              tr
                th.w-25 Tipo de dato
                th Ejemplos
                th Utilidad
            tbody
              tr
                td Estructurados
                td Bases de datos de compras, registros de transacciones, datos demográficos.
                td Análisis cuantitativo para obtener una visión general del comportamiento del cliente.
              tr
                td No estructurados
                td Comentarios en redes sociales, opiniones de clientes, correos electrónicos, videos.
                td Información cualitativa que permite comprender emociones, opiniones y preferencias más profundas.
    p.mb-4(data-aos="fade-up") Gracias a tecnologías como el procesamiento de lenguaje natural (NLP) y el análisis de sentimientos, las empresas pueden extraer patrones y conocimientos de los datos no estructurados. Este enfoque integral combina la precisión cuantitativa de los datos estructurados con la riqueza emocional de los datos no estructurados, permitiendo:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t3/7.png' alt='')
          .custom-image-card__text.p-4 
            p.mb-0.text-center Decisiones más precisas en #[i marketing].

      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t3/8.png' alt='')
          .custom-image-card__text.p-4 
            p.mb-0.text-center Mayor fidelización mediante experiencias relevantes y personalizadas.
      
      .col-sm-12.col-lg-4.mb-lg-0.mb-3
        .custom-image-card.h-100.br-15
          img.custom-image-card__image.d-none.d-lg-block(src='@/assets/curso/t3/9.png' alt='')
          .custom-image-card__text.p-4 
            p.mb-0.text-center Compresión contextual del cliente, que fortalece la relación con la marca.


    h2.mb-3(data-aos="fade-up") Herramientas y técnicas avanzadas en el análisis de datos de #[i marketing]
    p.mb-5(data-aos="fade-up") El análisis de datos en #[i marketing], ha evolucionado gracias al uso de herramientas y técnicas avanzadas. Estas permiten gestionar grandes volúmenes de información y mantenerse competitivas al prever tendencias y optimizar estrategias. Entre las más destacadas, se encuentran:
    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5.mb-3 Modelos estadísticos avanzados
              p.mb-3 Analizan tendencias históricas para prever comportamientos futuros.
              p.mb-0 #[b Aplicaciones:] proyección de ventas y análisis de estacionalidad.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/10.png', alt='Modelos estadísticos avanzados')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5.mb-3 Algoritmos de #[i Machine Learning]
              p.mb-3 Automatizan la segmentación de clientes y predicen patrones de comportamiento.
              p.mb-0 #[b Ejemplo:] clasificación de grupos con intereses similares.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/11.png', alt='Algoritmos de Machine Learning')

          .row.align-items-center.p-4.p-md-5
            .col-sm-12.col-lg-7
              h5.mb-3 Técnicas predictivas
              p.mb-0 Utilizan datos históricos para anticipar resultados de campañas, permitiendo ajustes en tiempo real para maximizar el impacto.
            .col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/t3/12.png', alt='Técnicas predictivas')

    .p-4.bg-color-6.mb-5(data-aos="fade-up")
      p.mb-0 El análisis de datos en #[i marketing], es esencial para comprender el comportamiento del cliente y personalizar estrategias de mercado, efectivas. La integración de datos estructurados y no estructurados, proporciona una visión completa del consumidor, permitiendo a las marcas optimizar campañas y crear experiencias más valiosas. Al combinar esta perspectiva integral con herramientas avanzadas, como modelos estadísticos y machine learning, las empresas no solo mejoran la eficiencia de sus campañas, sino que también fortalecen las relaciones con sus clientes, contribuyendo al crecimiento sostenible en un entorno altamente competitivo.
    #t_3_1.titulo-segundo(data-aos="fade-up")
      h2 #[span 3.1] Modelos de segmentación de mercado (K-Means, Árboles de decisión)
    p.mb-4(data-aos="fade-up") La segmentación de mercado es un paso crítico en la estrategia de #[i marketing], dado que permite dividir un mercado amplio en segmentos más pequeños y homogéneos de clientes, con características, comportamientos o necesidades similares. Las técnicas de segmentación avanzadas, como K-Means y Árboles de decisión, han revolucionado la forma en que las empresas segmentan y comprenden a sus clientes.

    .titulo-figura.mb-2.d-d-flex(data-aos="fade-up")
      p.mb-0 #[b Tabla 2.]  K-Means y Árboles de decisión
    .tabla-a.color-primario.mb-5(data-aos="fade-up")
      table
        thead
          tr
            th.w-25 Aspecto
            th(colspan='2') Técnica 
          tr 
            th.bg-cus &nbsp;
            th.bg-cus K-Means (#[i Clustering])
            th.bg-cus Árboles de decisión
        tbody
          tr
            td.fw-bold Descripción
            td El algoritmo de K-Means, es una técnica de #[i clustering] que agrupa a los clientes en distintos grupos o #[i clusters], según características similares, como hábitos de compra, edad, ingresos, comportamiento online, etc. Su objetivo es identificar patrones comunes entre los clientes y segmentarlos de manera efectiva.
            td Los Árboles de decisión, son una técnica de clasificación que utiliza una estructura en forma de árbol para segmentar datos en función de distintas características. Cada nodo en el árbol representa una característica clave que puede influir en la decisión de compra. Estos árboles permiten predecir el comportamiento futuro de los clientes.
          tr
            td.fw-bold Aplicaciones claves
            td 
              ul.lista-ul--color.mb-4
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Segmentación de mercado.
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0  Personalización de campañas.
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0  Análisis de preferencias de consumidores.
            td
              ul.lista-ul--color.mb-4
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Predicción de comportamiento de clientes.
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Optimización de estrategias de precios.
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Creación de ofertas personalizadas.
          tr
            td.fw-bold Ejemplo práctico
            td Una marca de moda puede usar K-Means para segmentar su clientela en diferentes grupos, como: "jóvenes profesionales", "familias" o "compradores de lujo". Esto permite diseñar ofertas personalizadas para cada segmento y mejorar la efectividad de las campañas.
            td Un Árbol de decisión, puede revelar que los clientes entre 30 y 40 años, con un nivel de ingresos medio o alto, tienen más probabilidades de comprar productos de lujo. De esta manera, la empresa puede diseñar campañas centradas en este grupo y ajustar precios y promociones.
          tr
            td.fw-bold Ampliación de conceptos y beneficios
            td
              p.mb-4 #[b Ventaja:] permite dividir grandes volúmenes de datos de clientes, en segmentos manejables y homogéneos, lo que facilita la creación de perfiles específicos de consumidores.
              p.mb-4 #[b Desafío:] es crucial seleccionar la cantidad adecuada de #[i clusters] (K), porque un valor incorrecto puede llevar a una segmentación ineficaz.
              p.mb-0 #[b Beneficio:] las empresas pueden dirigir sus esfuerzos de #[i marketing] hacia grupos más definidos, mejorando la relevancia de las campañas y la tasa de conversión.
            td
              p.mb-4 #[b Ventaja:] proporciona una representación visual clara de cómo los diferentes factores influyen en las decisiones de compra, lo que permite realizar predicciones precisas basadas en atributos como edad, ingresos, ubicación, etc.
              p.mb-4 #[b Desafío:] los Árboles de decisión, pueden ser propensos al sobreajuste (overfitting), especialmente si no se ajustan adecuadamente o se utilizan con un conjunto de datos demasiado pequeño o ruidoso.
              p.mb-0 #[b Beneficio:] permite crear reglas claras para personalizar las ofertas, según las características del cliente, mejorando las tasas de conversión.

    p.mb-4(data-aos="fade-up") El análisis de datos en #[i marketing], es fundamental para que las empresas se mantengan competitivas en un entorno en constante cambio. Su integración permite personalizar estrategias, segmentar clientes y prever tendencias de consumo de manera más efectiva. A continuación, se destacan herramientas avanzadas y técnicas claves para optimizar la captación y retención de clientes, así como para mejorar el impacto de las campañas.
    TabsC.color-acento-contenido.mb-5(data-aos="fade-up")
      .py-4.py-md-5.bg-color-7.p-4(titulo="K-Means")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t2/3.png')
          .col-sm-12.col-lg-8
            h4 K-Means
            p.mb-0 Segmenta clientes en grupos homogéneos, basados en patrones comunes. Permite campañas personalizadas y mejor asignación de recursos. Su éxito depende de elegir correctamente la cantidad de #[i clusters].

      .py-4.py-md-5.bg-color-7.p-4(titulo="Árboles de decisión")
        .row
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/t2/4.png')
          .col-sm-12.col-lg-8
            h4 Árboles de decisión
            p.mb-0 Predicen comportamientos específicos de clientes, con base en atributos claves. Generan reglas claras para personalizar ofertas e incrementar conversiones, aunque existe riesgo de overfitting.

    .p-4.bg-color-5.mb-5(data-aos="fade-up")
      p.mb-0 Ambas herramientas son complementarias: mientras K-Means segmenta a los clientes en grupos con características similares, los Árboles de decisión identifican patrones de comportamiento dentro de esos segmentos. Combinarlas puede maximizar la eficacia de las campañas, al lograr un enfoque más centrado en el cliente.

    h2.mb-3(data-aos="fade-up") Técnicas de análisis de series temporales para prever tendencias de consumo
    p.mb-5(data-aos="fade-up") El análisis de series temporales, permite a las empresas prever el comportamiento futuro de los consumidores y anticipar cambios en la demanda. Estas técnicas son esenciales para analizar datos que varían con el tiempo, como ventas mensuales, estacionalidad y cambios en preferencias. Entre las principales herramientas destacan:
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-sm-12.col-lg-7
        AcordionA(tipo='b')
          div(titulo='Modelos ARIMA')
            p.mb-4 Analizan valores históricos para predecir tendencias futuras.
            p.mb-0 #[b Usos:] pronóstico de demanda y optimización de inventarios y logística.
          
          div(titulo='Modelos de suavizado exponencial')
            p.mb-4 Asignan mayor peso a datos recientes, adaptándose a cambios rápidos.
            p.mb-0 #[b Usos:] previsión de fluctuaciones estacionales y respuestas a promociones o lanzamientos.
          
          div(titulo='Redes neuronales y <i>Deep Learning</i>')
            p.mb-4 Identifican patrones no lineales en grandes volúmenes de datos.
            p.mb-0 #[b Usos:] predicción de tendencias complejas y adaptación a mercados dinámicos.

      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/t3/13.png')

    .bg-full-width.bg-fondo-3.mb-0(data-aos="fade-up")
      .px-5.py-4
        h2.mb-3 Aplicaciones del análisis de datos en #[i marketing]
        p.mb-5 El análisis de datos de series temporales, ofrece ventajas significativas al permitir a las empresas:
        .row.justify-content-center.align-items-stretch.mb-5
          .col-sm-12.col-lg-4.mb-4
            .custom-image-card-2.h-100.text-center
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center.mb-3
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t3/16.svg', style='max-width: 90px').mx-auto
                p.mb-0 Identificar picos de demandas y efectos estacionales.
          .col-sm-12.col-lg-4.mb-4
            .custom-image-card-2.h-100.text-center
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center.mb-3
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t3/17.svg', style='max-width: 90px').mx-auto
                p.mb-0 Planificar campañas de #[i marketing] basadas en patrones históricos.
          .col-sm-12.col-lg-4.mb-4
            .custom-image-card-2.h-100.text-center
              .custom-image-card__text.p-4
                .row.align-items-center.justify-content-center.mb-3
                  .col-lg-auto.d-none.d-lg-block
                    img(src='@/assets/curso/t3/18.svg', style='max-width: 90px').mx-auto
                p.mb-0 Optimizar la gestión de inventarios y la fijación de precios.

    p.mb-4(data-aos="fade-up") Las herramientas avanzadas de segmentación como K-Means y Árboles de decisión, combinadas con técnicas de análisis de series temporales como ARIMA, suavizado exponencial y redes neuronales, ofrecen a las empresas una ventaja estratégica. Estas herramientas permiten comprender mejor el comportamiento de los consumidores, anticipar tendencias y personalizar estrategias de manera más efectiva. Integrar estas tecnologías en las prácticas de #[i marketing], no solo mejora la precisión en la toma de decisiones, sino que también optimiza los recursos y maximiza el impacto de las campañas, garantizando un mayor retorno de la inversión y una experiencia más satisfactoria para el cliente.
    .bg-full-width.bg-color-4.mb-0(data-aos="fade-up")
      .p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
             h2.mb-4 Soluciones Innovadoras en #[i Marketing] y análisis de datos
             p.mb-4 La integración de sistemas de recomendación personalizados y análisis predictivo está revolucionando el #[i marketing]. Estas herramientas permiten anticipar necesidades, optimizar campañas en tiempo real mediante dashboards interactivos y dirigir estrategias hacia segmentos con mayor potencial. Esto mejora la experiencia del cliente y maximiza el ROI, fortaleciendo la competitividad empresarial.
             a.anexo.mb-4.bg-white.w-fit(:href='obtenerLink("/downloads/PEND.pdf")' target='_blank')
               .anexo__icono(:style='{"background-color": "#FCDFDB"}')
                  img(src='@/assets/template/icono-pdf.svg')
               .anexo__texto
                  p <strong>Anexo. </strong> Soluciones Innovadoras en Marketing y análisis de datos
          .col-lg-5.d-none.d-lg-block
             img(src='@/assets/curso/t3/19.png', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
