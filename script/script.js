// navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header);
window.onscroll = function() {
    const top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
};

// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarSupportedContent');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        new bootstrap.Collapse(menuToggle).toggle();
    });
});

// Project data
const projects = [
    {
        title: "Data Cleaning Project",
        description: "Using SQL Server to clean and preprocess housing data.",
        imageSrc: "images/cleaning.png",
        link: "https://github.com/okcandy/Data-Cleaning-Project/blob/main/housing_data_1.sql"
    },
    {
        title: "Covid-19 EDA Project",
        description: "Exploratory analysis of Covid-19 dataset using SQL and Tableau.",
        imageSrc: "images/covid.jpg",
        link: "https://github.com/okcandy/Covid-Eda-Project/blob/main/Covid%20Project%20Script.sql"
    },
    {
        title: "Tableau Visualizations",
        description: "Tableau dashboards for Covid-19 and Sales RFM analysis.",
        imageSrc: "images/tableau.png",
        link: "https://public.tableau.com/app/profile/okothcandy"
    },
    {
        title: "Sentiment Analysis in Python",
        description: "Sentiment analysis of the Russia-Ukraine war using twitter API data.",
        imageSrc: "images/sentiment analysis.jpeg",
        link: "https://github.com/okcandy/py-notebook/blob/main/SentimentAnalysis/sentiment2.ipynb"
    },
    {
        title: "Youtube API with Python",
        description: "Using Youtube API to retrieve channel and video data.",
        imageSrc: "images/youtube.png",
        link: "https://github.com/okcandy/py-notebook/blob/main/youtube_api/youtube_api.ipynb"
    },
    {
        title: "Visualizing Wildfires in Brazil",
        description: "Using choropleth map and dash to visualize Brazilian states affected by wildfires.",
        imageSrc: "images/bra-states2.png",
        link: "https://brazil-fires-map.herokuapp.com"
    },
    {
        title: "RFM Analysis",
        description: "RFM Analysis using SQL for Customer Segmentation and Prediction.",
        imageSrc: "images/rfm.png",
        link: "https://github.com/okcandy/sql-tabl/blob/main/SalesRfm/SQLQuery1.sql"
    },
    {
        title: "CO2 Emissions",
        description: "Analyzing food consumption and CO2 emissions for various countries using R.",
        imageSrc: "images/co2.jpg",
        link: "https://okcandy.github.io/co2.emission/"
    },
    {
        title: "Earthquakes in Japan",
        description: "Visualizing earthquakes in Japan using R and leaflet.",
        imageSrc: "images/japan.jpg",
        link: "https://okcandy.github.io/jpn-earthquakes/"
    },
    {
        title: "Movie Revenue Analysis",
        description: "Analysis of the movie industry revenue using Python with Jupyter Notebook.",
        imageSrc: "images/movie.jpg",
        link: "https://github.com/okcandy/Movie-industry-analysis/blob/main/Movies%20Correlation%20v2.ipynb"
    },
        {
        title: "120 years of Summer Olympics",
        description: "Analysis of 120 years of summer Olympic games using R and Power BI.",
        imageSrc: "images/olympic2.jpg",
        link: "https://app.powerbi.com/view?r=eyJrIjoiYzE3YTM1ZDItMTBkOC00OTAxLTllYTctYTc3ZDYyNDI1ZGJkIiwidCI6IjVlNmQyOGNlLTRhMTAtNDk0NS1hYjgwLWQ3OTgyZDgzZjJhNSJ9&pageName=ReportSection"
    },
    {
        title: "Population and Volcano Mapping",
        description: "Mapping out the population and active volcanoes in the US using Folium.",
        imageSrc: "images/volcanoes.jpg",
        link: "https://github.com/okcandy/Population_Map/blob/master/map1.py"
    },

];

const projectCardsContainer = document.getElementById('projectCards');

// Loop through the projects cards
projects.forEach(project => {
    const card = `
    <div class="col mt-4">
        <div class="card h-100 portfolioContent">
            <img class="card-img-top" src="${project.imageSrc}" alt="Card image">
            <div class="card-body">
                <h4 class="card-title"><b>${project.title}</b></h4>
                <p class="card-text">${project.description}</p>
                <div class="text-center">
                    <a href="${project.link}" target="_blank" class="btn btn-success">View Project</a>
                </div>
            </div>
        </div>
    </div>
`;
    projectCardsContainer.innerHTML += card;
});


---

// Particle.js Initialization 

```javascript
// Initialize Particle.js with custom configuration
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80, // Number of particles
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" // <--- Change this to your desired PARTICLE COLOR (e.g., "#00BFFF" for blue)
    },
    "shape": {
      "type": "circle", // Shape of particles: "circle", "edge", "triangle", "polygon", "star", "image"
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5, // Particle opacity
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3, // Particle size
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
      "distance": 150, // Distance for lines to connect
      "color": "#ffffff", // <--- Change this for LINE COLOR (e.g., "#CCCCCC" for light gray)
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6, // Particle movement speed
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // Interaction on hover: "grab", "repulse", "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push" // Interaction on click: "push", "remove", "bubble", "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
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
  "retina_detect": true
});
