let musicas = [
    {titulo: 'Come back to Earth',
     artista: 'Mac Miller',
     src: './music/Come back to Earth.mp3',
     img: './imgs/swimming.png'
    },
    {titulo: 'Hurt Feelings',
     artista: 'Mac Miller',
     src: './music/Hurt Feelings.mp3',
     img: './imgs/swimming.png'
    },
    {titulo: 'Whats the Use?',
     artista: 'Mac Miller',
     src: './music/Whats the Use.mp3',
     img: './imgs/swimming.png'
    },
    {titulo: 'Perfecto',
     artista: 'Mac Miller',
     src: './music/Perfecto.mp3',
     img: './imgs/swimming.png'
    },
    {titulo: 'Self Care',
     artista: 'Mac Miller',
     src: './music/Self Care.mp3',
     img: './imgs/swimming.png'
    },
    {titulo: 'Wings',
     artista: 'Mac Miller',
     src: './music/Wings.mp3',
     img: './imgs/swimming.png'
    },
    {titulo: 'Ladders',
     artista: 'Mac Miller',
     src: './music/Ladders.mp3',
     img: './imgs/swimming.png'
    },
    {titulo: 'Small Worlds',
     artista: 'Mac Miller',
     src: './music/Small Worlds.mp3',
     img: './imgs/swimming.png'
    },
    {titulo: 'Conversation Pt. 1',
     artista: 'Mac Miller',
     src: './music/Conversation Pt. 1.mp3',
     img: './imgs/swimming.png'
    },
    {titulo: 'Dunno',
     artista: 'Mac Miller',
     src: './music/Dunno.mp3',
     img: './imgs/swimming.png'
    },
    {titulo: 'Jet Fuel',
     artista: 'Mac Miller',
     src: './music/Jet Fuel.mp3',
     img: './imgs/swimming.png'
    },
    {titulo: '2009',
     artista: 'Mac Miller',
     src: './music/2009.mp3',
     img: './imgs/swimming.png'
    },
    {titulo: 'So it Goes',
     artista: 'Mac Miller',
     src: './music/So it Goes.mp3',
     img: './imgs/swimming.png'
    },
];


let musica = document.querySelector('audio');
let indexMusica = 0;
//substituir tempo de duração da música falso pela música que está tocando
let duracaoMusica = document.querySelector('.fim');
 
//modificar informações de acordo com cada música
let imagem = document.querySelector('.capa')
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')

renderizarMusica(indexMusica);

//adicionando evento de click no botão play
document.querySelector('.play').addEventListener('click', playMusic);
document.querySelector('.pause').addEventListener('click', pausarMusic);

//detectar se música tá tocando ou não 
musica.addEventListener('timeupdate', atualizarBarra)

//manipular musicas
document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0){
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0
    }
    renderizarMusica(indexMusica);
});

//substituindo músicas de uma por outra
//tb adicionar um evento que executa tais codigo quandi musica terminar de renderizar
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusic.textContent = segundosParaMinutos(Math.floor(musica.duration));
    })
}

//função para dar play na música e trocar por botão de pause
//deixando de está invisível (none) para estar visivel, substituindo por play
function playMusic(){
    musica.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.play').style.display = 'none';
}

//função para pausar a música
function pausarMusic(){
    musica.pause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.play').style.display = 'block  ';
}

//função para acompanhar barrinha da música
function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

//acompanhar tempo da música
function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos+':'+campoSegundos;
}

