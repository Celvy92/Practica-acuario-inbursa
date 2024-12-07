particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80, // Número de partículas
            "density": {
                "enable": true, 
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff" // Color de las partículas
        },
        "shape": {
            "type": "circle", // Las partículas serán círculos
            "stroke": {
                "width": 0, 
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.6, 
            "random": true, 
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1
            }
        },
        "size": {
            "value": 3, 
            "random": true, 
            "anim": {
                "enable": true,
                "speed": 40, 
                "size_min": 0.1
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 1, 
            "direction": "none", 
            "random": true, 
            "straight": false, 
            "out_mode": "out"
        }
    }
});
