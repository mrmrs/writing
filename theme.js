const theme = {
  breakpoints: [
    '30em', '60em'
  ],
  space: [
    0, 4, 8, 16, 32, 64, 128, 256, 512
  ],
  fontSizes: [
    12, 14, 16, 20, 20, 24, 32, 48, 64, 96, 128, 192, 256
  ],
  borderWidths: [
    0, '1px', '2px', '4px', '8px', '16px', '32px'
  ],
  radii: [
    0, '3px', '5px', '16px', '9999px', '100%'
  ],
  lineHeights: [
    '1.0', 
    '1.25', 
    '1.5'
  ],
  measures: [
    '20em', '30em', '34em'
  ],
  typefaces: {
    serif: 'athelas, georgia, times, serif',
    sansSerif: 'system-ui, -apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif', mono: 'Consolas, monaco, monospace' 
  },
  textStyles: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    },
    'tracked-tight': {
      letterSpacing: '-0.05em'
    },
    copy: {
      lineHeight: 1.5, 
      maxWidth: '30em'
    },
    title: {
      lineHeight: 1.25, 
      maxWidth: '30em'
    },
    capitalize: {
      textTransform: 'capitalize'
    }
  },
  colors: {
    red: [
      "#ffe6e4",
      "#fccbc7",
      "#f8afa9",
      "#f1928b",
      "#e8756d",
      "#db594f",
      "#ca3e34",
      "#b5261b",
      "#9b1207",
      "#7f0a00",
      "#610a00",
    ],
    orange: [
      "#ffe9db",
      "#fdd8bc",
      "#f8c69d",
      "#f2b37d",
      "#e89e5e",
      "#dc8940",
      "#cc7224",
      "#b75c0c",
      "#9f4a00",
      "#833d00",
      "#663000",
    ],
    yellow: [
      "#fffde4",
      "#fdf4c4",
      "#f8e8a3",
      "#f2db82",
      "#e8cc61",
      "#dcbb42",
      "#cca824",
      "#b7920b",
      "#9f7c00",
      "#836600",
      "#665000",
    ],
    green: [
      "#e4fff7",
      "#c5fced",
      "#a5f7e2",
      "#84efd5",
      "#64e5c6",
      "#45d6b4",
      "#29c39f",
      "#10ab87",
      "#008e6d",
      "#006e54",
      "#004d3b",
    ],
    cyan: [
      "#e4faff",
      "#c4f1fc",
      "#a2e6f7",
      "#81d9ef",
      "#5fcae5",
      "#40b8d6",
      "#23a3c3",
      "#0a8bab",
      "#00728e",
      "#00586e",
      "#003d4d",
    ],
    blue: [
      "#e4eeff",
      "#c5dafc",
      "#a5c5f7",
      "#84afef",
      "#6497e5",
      "#457fd6",
      "#2967c3",
      "#104eab",
      "#00398e",
      "#002c6e",
      "#001f4d",
    ],
    indigo: [
      "#e6e4ff",
      "#c9c5fc",
      "#aca5f7",
      "#8e84ef",
      "#7164e5",
      "#5445d6",
      "#3829c3",
      "#2010ab",
      "#0e008e",
      "#0b006e",
      "#08004d",
    ],
    violet: [
      "#f6e4ff",
      "#edc5fc",
      "#e4a5f7",
      "#d884ef",
      "#ca64e5",
      "#b945d6",
      "#a429c3",
      "#8c10ab",
      "#72008e",
      "#58006e",
      "#3d004d",
    ],
    pink: [
      "#ffe4f5",
      "#fcc5e2",
      "#f7a5cb",
      "#ef84b3",
      "#e5649b",
      "#d64582",
      "#c3296a",
      "#ab1051",
      "#8e003b",
      "#6e002e",
      "#4d0020"
    ],
    gray: [
      "#ededed",
      "#e8eaec",
      "#e2e5ea",
      "#dbdfe5",
      "#d2d6dd",
      "#c5c9d1",
      "#b3b7bf",
      "#9a9ea4",
      "#75787d",
      "#444649",
      "#0a0a0a"
    ],
    darkOverlay: [
      'rgba(0,0,0,.9)',
      'rgba(0,0,0,.8)',
      'rgba(0,0,0,.7)',
      'rgba(0,0,0,.6)',
      'rgba(0,0,0,.5)',
      'rgba(0,0,0,.4)',
      'rgba(0,0,0,.3)',
      'rgba(0,0,0,.2)',
      'rgba(0,0,0,.1)',
      'rgba(0,0,0,.05)',
      'rgba(0,0,0,.025)',
      'rgba(0,0,0,.0125)',
    ],
    lightOverlay: [
      'rgba(255,255,255,.9)',
      'rgba(255,255,255,.8)',
      'rgba(255,255,255,.7)',
      'rgba(255,255,255,.6)',
      'rgba(255,255,255,.5)',
      'rgba(255,255,255,.4)',
      'rgba(255,255,255,.3)',
      'rgba(255,255,255,.2)',
      'rgba(255,255,255,.1)',
      'rgba(255,255,255,.05)',
      'rgba(255,255,255,.025)',
      'rgba(255,255,255,.0125)',
    ]
  },
}

export default theme
