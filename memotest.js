const fichas = [
    {
        nombre: 'Aigialosaurus',
        img:'img/aigialosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Aigialosaurus',
    },
    {
        nombre:'Allosaurus',
        img:'img/allosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Allosaurus',
    },
    {
        nombre:'Antarctopelta',
        img:'img/antarctopelta.png',
        link: 'https://es.wikipedia.org/wiki/Antarctopelta_oliveroi',
    },
    {
        nombre:'Apatosaurus',
        img:'img/apatosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Apatosaurus',
    },
    {
        nombre:'Archaeopteryx',
        img:'img/archaeopteryx.png',
        link: 'https://es.wikipedia.org/wiki/Archaeopteryx',
    },
    {
        nombre:'Australovenator',
        img:'img/australovenator.png',
        link:'https://es.wikipedia.org/wiki/Australovenator_wintonensis',
    },
    {
        nombre:'brachiosaurus',
        img:'img/brachiosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Brachiosaurus_altithorax',
    },
    {
        nombre:'coelophysis',
        img:'img/coelophysis.png',
        link: 'https://es.wikipedia.org/wiki/Coelophysis',
    },
    {
        nombre:'cryolophosaurus',
        img:'img/cryolophosaurus.png',
        link: 'https://es.wikipedia.org/wiki/Cryolophosaurus_ellioti',
    },
    {
        nombre:'diamantinasaurus',
        img:'img/diamantinasaurus.png',
        link:'https://es.wikipedia.org/wiki/Diamantinasaurus_matildae',
    },
    {
        nombre:'dilophosaurus',
        img:'img/dilophosaurus.png',
        link:'https://es.wikipedia.org/wiki/Dilophosaurus_wetherilli',
    },
    {
        nombre:'liopleurodon',
        img:'img/liopleurodon.png',
        link:'https://es.wikipedia.org/wiki/Liopleurodon',
    },
    {
        nombre:'plesiosaurus',
        img:'img/plesiosaurus.png',
        link:'https://es.wikipedia.org/wiki/Plesiosaurus',
    },
    {
        nombre:'saltasaurus',
        img:'img/saltasaurus.png',
        link:'https://es.wikipedia.org/wiki/Saltasaurus',
    },
    {
        nombre:'spinosaurus',
        img:'img/spinosaurus.png',
        link:'https://es.wikipedia.org/wiki/Spinosaurus',
    },
    {
        nombre:'stegosaurus',
        img:'img/stegosaurus.png',
        link:'https://es.wikipedia.org/wiki/Stegosaurus',
    },
    {
        nombre:'therizinosaurus',
        img:'img/therizinosaurus.png',
        link:'https://es.wikipedia.org/wiki/Therizinosaurus',
    },
    {
        nombre:'triceratops',
        img:'img/triceratops.png',
        link:'https://es.wikipedia.org/wiki/Triceratops',
    },
    {
        nombre:'tyrannosaurusrex',
        img:'img/tyrannosaurusrex.png',
        link:'https://es.wikipedia.org/wiki/Tyrannosaurus_rex',
    },
    {
        nombre:'velociraptor',
        img:'img/velociraptor.png',
        link:'https://es.wikipedia.org/wiki/Velociraptor',
    }
];
console.log(fichas);

gameGrid = fichas.concat(fichas);

const contenedor = document.getElementById('contenedor');

const backgroundImage = document.createElement('div');
backgroundImage.setAttribute('class', 'backg');
contenedor.appendChild(backgroundImage);

const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
contenedor.appendChild(grid);

gameGrid.forEach(item => {
    const ficha = document.createElement('div');
    ficha.classList.add('ficha');
    ficha.dataset.nombre =item.nombre;
    ficha.style.backgroundImage = `url(${item.img})`;
    grid.appendChild(ficha);
})

gameGrid.sort(() => 0.5 - Math.random());


