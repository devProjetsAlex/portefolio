import React from 'react'

export const particlesOpt = {
    particles: {
      "number": {
        "value": 90,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      //couleur de l'intérieur des bulles
      "color": {
        "value": "#b3ffb3"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#668cff"
        },
        "polygon": {
          "nb_sides": 6
        },
  
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 140,
        "color": "#00e600",
        "opacity": 0.8,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "bottom-right",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 10000,
          "rotateY": 10000
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 650,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 4,
          "duration": 9.5,
          "opacity": 0.3,
          "speed": 3
        },
        "repulse": {
          "distance": 60,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false
  
  }