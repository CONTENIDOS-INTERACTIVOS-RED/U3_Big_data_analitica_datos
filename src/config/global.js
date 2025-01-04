export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Aplicaciones de Big Data y analítica en diferentes disciplinas',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Uso de <i>Big Data</i> en la ciencia social: análisis de tendencias y comportamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Técnicas y herramientas para el análisis social con <i>Big Data</i>',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Aplicaciones en ingeniería: optimización y predicción de fallas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Análisis de datos en marketing y negocios: segmentación de clientes y estrategias de mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Modelos de segmentación de mercado (K-Means, Árboles de decisión)',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ortega Candel, J. M. (2022). <i>Big data</i>, machine learning y data science en Python. RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/230290',
    },
    {
      referencia:
        'Colmenarejo Fernández, R. (2018). Una ética para <i>Big data</i>: introducción a la gestión ética de datos masivos. Editorial UOC.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/116328',
    },
    {
      referencia:
        'Robles, J. M., Tinguaro Rodríguez, J. & Caballer, R. (2022). <i>Big data</i> para científicos sociales: una introducción. CIS - Centro de Investigaciones Sociológicas.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/171359',
    },
    {
      referencia:
        'Caballero, R. & Martín, E. (2015). Las bases de <i>Big Data</i>. Los libros de la Catarata.',
      link: 'https://elibro.net/es/lc/elibrocom/titulos/234185',
    },
  ],
  glosario: [
    {
      termino: 'Analítica de datos',
      significado:
        'Proceso de examinar datos para descubrir patrones y obtener información valiosa.',
    },
    {
      termino: '<i>Big Data</i>',
      significado:
        'Conjunto de datos masivos caracterizados por volumen, velocidad, variedad, veracidad y valor.',
    },
    {
      termino: 'Cliente',
      significado:
        'Persona o entidad que consume productos o servicios, objeto de análisis en <i>marketing</i>.',
    },
    {
      termino: 'Datos estructurados',
      significado:
        'Información organizada en formato predefinido, como tablas de bases de datos.',
    },
    {
      termino: 'Datos no estructurados',
      significado:
        'Información sin formato definido, como texto libre, imágenes o videos.',
    },
    {
      termino: 'IoT (Internet de las cosas)',
      significado:
        'Red de dispositivos interconectados que recopilan y comparten datos.',
    },
    {
      termino: '<i>Machine Learning</i>',
      significado:
        'Rama de la inteligencia artificial que permite a las máquinas aprender de datos.',
    },
    {
      termino: '<i>Marketing</i>',
      significado:
        'Estrategias para promocionar y vender productos o servicios, basado en el análisis del comportamiento del consumidor.',
    },
    {
      termino: 'Optimización',
      significado:
        'Proceso de mejorar la eficiencia o el rendimiento de sistemas o procesos.',
    },
    {
      termino: 'Predicción',
      significado:
        'Uso de modelos analíticos para anticipar eventos futuros basados en datos históricos.',
    },
    {
      termino: 'Segmentación',
      significado:
        'Clasificación de clientes en grupos con características o comportamientos similares.',
    },
    {
      termino: 'Sensor',
      significado:
        'Dispositivo que detecta cambios en su entorno y genera datos en tiempo real.',
    },
    {
      termino: 'Tendencias',
      significado:
        'Cambios observables en comportamientos o preferencias a lo largo del tiempo.',
    },
    {
      termino: 'Visualización de datos',
      significado:
        'Representación gráfica de información para facilitar su interpretación.',
    },
  ],
  complementario: [],
}
