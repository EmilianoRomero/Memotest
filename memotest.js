const fichas = [{
        nombre: 'Aigialosaurus',
        img: 'img/aigialosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Aigialosaurus',
    },
    {
        nombre: 'Allosaurus',
        img: 'img/allosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Allosaurus',
    },
    {
        nombre: 'Antarctopelta',
        img: 'img/antarctopelta.png',
        link: 'https://es.wikipedia.org/wiki/Antarctopelta_oliveroi',
    },
    {
        nombre: 'Apatosaurus',
        img: 'img/apatosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Apatosaurus',
    },
    {
        nombre: 'Archaeopteryx',
        img: 'img/archaeopteryx.png',
        link: 'https://es.wikipedia.org/wiki/Archaeopteryx',
    },
    {
        nombre: 'Australovenator',
        img: 'img/australovenator.png',
        link: 'https://es.wikipedia.org/wiki/Australovenator_wintonensis',
    },
    {
        nombre: 'brachiosaurus',
        img: 'img/brachiosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Brachiosaurus_altithorax',
    },
    {
        nombre: 'coelophysis',
        img: 'img/coelophysis.png',
        link: 'https://es.wikipedia.org/wiki/Coelophysis',
    },
    {
        nombre: 'cryolophosaurus',
        img: 'img/cryolophosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Cryolophosaurus_ellioti',
    },
    {
        nombre: 'diamantinasaurus',
        img: 'img/diamantinasaurus.png',
        link: 'https://es.wikipedia.org/wiki/Diamantinasaurus_matildae',
    },
    {
        nombre: 'dilophosaurus',
        img: 'img/dilophosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Dilophosaurus_wetherilli',
    },
    {
        nombre: 'liopleurodon',
        img: 'img/liopleurodon.png',
        link: 'https://es.wikipedia.org/wiki/Liopleurodon',
    },
    {
        nombre: 'plesiosaurus',
        img: 'img/plesiosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Plesiosaurus',
    },
    {
        nombre: 'saltasaurus',
        img: 'img/saltasaurus.png',
        link: 'https://es.wikipedia.org/wiki/Saltasaurus',
    },
    {
        nombre: 'spinosaurus',
        img: 'img/spinosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Spinosaurus',
    },
    {
        nombre: 'stegosaurus',
        img: 'img/stegosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Stegosaurus',
    },
    {
        nombre: 'therizinosaurus',
        img: 'img/therizinosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Therizinosaurus',
    },
    {
        nombre: 'triceratops',
        img: 'img/triceratops.png',
        link: 'https://es.wikipedia.org/wiki/Triceratops',
    },
    {
        nombre: 'tyrannosaurus rex',
        img: 'img/tyrannosaurusrex.png',
        link: 'https://es.wikipedia.org/wiki/Tyrannosaurus_rex',
    },
    {
        nombre: 'velociraptor',
        img: 'img/velociraptor.png',
        link: 'https://es.wikipedia.org/wiki/Velociraptor',
    }
];
console.log(fichas);

const gameGrid = fichas
    .concat(fichas)
    .sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 3000;

const tablero = document.getElementById('tablero');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
tablero.appendChild(grid);

gameGrid.forEach(item => {
    const {
        nombre,
        img
    } = item;

    const ficha = document.createElement('div');
    ficha.classList.add('ficha');
    ficha.dataset.name = nombre;

    const front = document.createElement('div');
    front.classList.add('front');
    front.style.backgroundImage = `url(${'img/Canvas01.png'})`;

    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${img})`;

    const texto = document.createElement('H2');
    texto.id = 'elnombre';
    texto.classList.add('elnombre');
    texto.textContent = `${nombre}`;
    back.appendChild(texto);

    grid.appendChild(ficha);
    ficha.appendChild(front);
    ficha.appendChild(back);
});

const match = () => {
    const selected = document.querySelectorAll('.selected');
    selected.forEach(ficha => {
        ficha.classList.add('match')
    });
};

const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll('.selected');
    selected.forEach(ficha => {
        ficha.classList.remove('selected');
    });
};

grid.addEventListener('click', event => {

    const clicked = event.target;

    if (
        clicked.nodeName === 'SECTION' ||
        clicked === previousTarget ||
        clicked.parentNode.classList.contains('selected') ||
        clicked.parentNode.classList.contains('match')
    ) {
        return;
    }

    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            console.log(firstGuess);
            clicked.parentNode.classList.add('selected');
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            console.log(secondGuess);
            clicked.parentNode.classList.add('selected');
        }

        if (firstGuess && secondGuess) {
            if (firstGuess === secondGuess) {
                setTimeout(match, delay);
                soundOnMatch();
            }
            setTimeout(resetGuesses, delay);
        }
        previousTarget = clicked;
    }
});

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  };

  function soundOnMatch() {
    const mySound = new sound('Raptorcall.mp3');
    if (firstGuess === secondGuess) {
        mySound.play();
        return;
    }
}