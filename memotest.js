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
        nombre: 'Brachiosaurus',
        img: 'img/brachiosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Brachiosaurus_altithorax',
    },
    {
        nombre: 'Coelophysis',
        img: 'img/coelophysis.png',
        link: 'https://es.wikipedia.org/wiki/Coelophysis',
    },
    {
        nombre: 'Cryolophosaurus',
        img: 'img/cryolophosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Cryolophosaurus_ellioti',
    },
    {
        nombre: 'Diamantinasaurus',
        img: 'img/diamantinasaurus.png',
        link: 'https://es.wikipedia.org/wiki/Diamantinasaurus_matildae',
    },
    {
        nombre: 'Dilophosaurus',
        img: 'img/dilophosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Dilophosaurus_wetherilli',
    },
    {
        nombre: 'Liopleurodon',
        img: 'img/liopleurodon.png',
        link: 'https://es.wikipedia.org/wiki/Liopleurodon',
    },
    {
        nombre: 'Plesiosaurus',
        img: 'img/plesiosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Plesiosaurus',
    },
    {
        nombre: 'Saltasaurus',
        img: 'img/saltasaurus.png',
        link: 'https://es.wikipedia.org/wiki/Saltasaurus',
    },
    {
        nombre: 'Spinosaurus',
        img: 'img/spinosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Spinosaurus',
    },
    {
        nombre: 'Stegosaurus',
        img: 'img/stegosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Stegosaurus',
    },
    {
        nombre: 'Therizinosaurus',
        img: 'img/therizinosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Therizinosaurus',
    },
    {
        nombre: 'Triceratops',
        img: 'img/triceratops.png',
        link: 'https://es.wikipedia.org/wiki/Triceratops',
    },
    {
        nombre: 'Tyrannosaurus rex',
        img: 'img/tyrannosaurusrex.png',
        link: 'https://es.wikipedia.org/wiki/Tyrannosaurus_rex',
    },
    {
        nombre: 'Velociraptor',
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
let delay = 2400;

//CREAR TABLERO
function crearTablero() {
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
    clickingFichas(grid);
};
crearTablero()

const match = () => {
    const selected = document.querySelectorAll('.selected');
    selected.forEach(ficha => {
        ficha.classList.add('match')
        //console.log('Ey! Hay un match');
        //soundOnMatch(); Sonido y mensaje llegan tarde
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

function clickingFichas(grid) {
    grid.addEventListener('click', event => {
        const clicked = event.target;
        if (
            clicked.nodeName === 'SECTION' ||
            clicked === previousTarget ||
            clicked.parentNode.classList.contains('selected') ||
            clicked.parentNode.classList.contains('match')
        ) {
            console.log('here i am!'); //QUÉ HACE ESTA?
            //--> SALTA CUANDO CLICKEO LAS FICHAS YA SALIDAS!!! LAS FICHAS QUE YA TIENEN CLASS match
            return;
        }
        if (count < 2) {
            count++;
            if (count === 1) {
                firstGuess = clicked.parentNode.dataset.name;
                console.log(firstGuess);
                clicked.parentNode.classList.add('selected');
                console.log("primera ficha seleccionada!");
                soundOnClick();
            } else {
                secondGuess = clicked.parentNode.dataset.name;
                console.log(secondGuess);
                clicked.parentNode.classList.add('selected');
                console.log('segunda ficha seleccionada!');
                soundOnClick();
            }
            if (firstGuess && secondGuess) {
                if (firstGuess === secondGuess) {
                    setTimeout(match, delay);
                    //Se produce un match -- Sonido con delay
                    console.log('Ey! Hay un match');
                }
                setTimeout(resetGuesses, delay);
                //Executes a function, after waiting a specified number of milliseconds.
                //setTimeout(function, milliseconds);
                //Acá el sonido y el mensaje llegan a tiempo con el match!
                soundOnMatch();
                finDelJuego(grid); //LLAMA A FIN DEL JUEGO DESPUÉS DE CADA JUGADA - SIIIIII!!!!
            }
            previousTarget = clicked;
        }
    });
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
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

function soundOnClick() {
    const mySound = new sound('DinosaurFootstep.mp3');
    mySound.play();
    return;
}


const finDelJuego = (grid) => {
    let fichasL = fichas.length;
    let referencia = ((fichasL - 1) * 2);
    console.log(fichasL);
    console.log(referencia);
    var matches = document.querySelectorAll('.match');
    let matchesL = matches.length;
    console.log(matches);
    console.log(matches.length); //QUE DEVUELVA LA CANTIDAD DE ELEMENTOS CON .match
    matches.forEach(ficha => {
        ficha.classList.contains('match');
    });
    if (matchesL == referencia) {
        console.log('fin del juego'); //QUE DISPARE FIN DEL JUEGO!!! - SIIIIII!!!

        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.id = 'popup';

        const finish = document.createElement('div');
        finish.id = 'cancel';
        finish.className = 'cancel';
        finish.innerHTML = 'Cerrar';

        const restart = document.createElement('button');
        restart.id = 'restart';
        restart.className = 'restart';
        restart.innerHTML = 'Comenzar nuevo juego';

        const congrats = document.createElement('H1');
        congrats.className = 'congrats';
        congrats.innerHTML = '¡Muy bien hecho!';

        const popupimg = document.createElement('img');
        popupimg.className = 'popupimg';
        popupimg.style.backgroundImage = `url(${'img/dancingdino.gif'})`;

        popup.appendChild(finish);
        popup.appendChild(restart);
        popup.appendChild(congrats);
        popup.appendChild(popupimg);

        grid.appendChild(popup);

        openPopUp();
        console.log('openPopUp es disparada!');


        function openPopUp() {
            document.querySelector('.popup').style.display = 'grid';
            console.log('openPopUp funciona!');
            soundOnFinish();
            //.parentNode.removeChild(popup);
        };

        function soundOnFinish() {
            const mySound = new sound('dinosuargrowl.mp3');
            mySound.play();
            return;
        }

        document.getElementById('cancel').addEventListener('click', function () {
            window.close();
            console.log('cerrar Ventana funciona!');
        });

        document.getElementById('restart').addEventListener('click', function () {
            document.querySelector('.grid').style.display = 'none';
            console.log('startNewGame funciona!');
            location.reload();
            //crearTablero();
        });
    }
};