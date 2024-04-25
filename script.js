const menuToggle = document.querySelector(".menu-colapse");
const menuMobile = document.querySelector(".menu-area-mobile");
const imagePreview = document.querySelectorAll(".preview-image");
const modal = document.querySelector(".modal-backdrop");
const filmTitle = document.querySelector(".modal-backdrop .movie-title");
const filmDescription = document.querySelector(
  ".modal-backdrop .movie-description"
);

const filmDuration = document.querySelector(".modal-backdrop .movie-duration");
const filmGender = document.querySelector(".modal-backdrop .movie-gender");
const closeModal = document.querySelector(".modal-backdrop .close-modal");
const videoMovie = document.querySelector(".modal-backdrop iframe");
const stremMovie = document.querySelector(".modal-backdrop .movie-stream");

const films = [
  {
    key: "afterFilme",
    name: "After",
    description:
      "Tessa Young é uma jovem com uma vida simples, ótimas notas na escola, muitos amigos e um bom namorado. Todos os próximos passos de sua vida já estão planejados, mas as coisas mudam quando ela conhece um homem atraente e cheio de segredos sombrios.",
    duration: "Duração: 1h 46m",
    gender: "Gênero: Romance, melodrama, adolescente",
    stream: "Disponível: Amazon",
    trailer: "https://www.youtube.com/embed/YlmLAUr5zGY?si=P-2sQi3XFVqbvcui",
  },
  {
    key: "barbieFilme",
    name: "Barbie",
    description:
      "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
    duration: "Duração: 1h 54m",
    gender: "Gênero: Aventura, ficção, comédia",
    stream: "Disponível: Max",
    trailer: "https://www.youtube.com/embed/1S_KSjlZziM?si=4QW4TUxezUhwGBDm",
  },
  {
    key: "365diasFilme",
    name: "365 dias",
    description:
      "Laura é uma diretora de vendas que embarca em uma viagem à Sicília para salvar seu relacionamento. Lá, ela conhece Massimo, um membro da máfia siciliana, que a sequestra e lhe dá 365 dias para se apaixonar por ele.",
    duration: "Duração: 1h 56m",
    gender: "Gênero: Romance, erótico, suspense",
    stream: "Disponível: Netflix",
    trailer: "https://www.youtube.com/embed/YbiK34UhmAo?si=O0947xjGOcGpe0I_",
  },
  {
    key: "ponteFilme",
    name: "Ponte para Terabitia",
    description:
      "Jess sente-se um estranho na escola e até mesmo em sua família. Durante todo o verão ele treinou para ser o garoto mais rápido da escola, mas seus planos são ameaçados por Leslie, que vence uma corrida que deveria ser apenas para garotos.",
    duration: "Duração: 1h 36m",
    gender: "Gênero: Aventura, infantil, ação, adolescente",
    stream: "Disponível: Prime Video",
    trailer: "https://www.youtube.com/embed/K1gvmAA30I4?si=C8weKkZMSZJrAE-4",
  },
  {
    key: "minhaMaefilme",
    name: "Minha mãe é uma peça",
    description:
      "Dona Hermínia é uma senhora de meia-idade, divorciada do marido, que a trocou por uma mulher mais jovem. Hiperativa, ela não larga o pé de seus filhos Marcelina e Juliano. Um dia, após descobrir que eles a consideram chata, ela resolve sair de casa sem avisar ninguém, deixando todos preocupados. Dona Hermínia decide visitar a querida tia Zélia para desabafar suas tristezas atuais e recordar os bons tempos do passado.",
    duration: "Duração: 1h 24m",
    gender: "Gênero: Comédia",
    stream: "Disponível: Netflix, Amazon",
    trailer: "https://www.youtube.com/embed/9hyLbCV0Dxo?si=67ebwd_sJ7c286WX",
  },
  {
    key: "barracaFilme",
    name: "Barraca do Beijo",
    description:
      "O primeiro beijo de Elle vira um romance proibido com o garoto mais bonito do colégio, mas acaba colocando em risco a sua relação com seu melhor amigo.",
    duration: "Duração: 1h 45m",
    gender: "Gênero: Romance, comédia, adolescente",
    stream: "Disponível: Netflix",
    trailer: "https://www.youtube.com/embed/QIalE8-E990?si=BOSGgCnj1vmCGZRe",
  },
  {
    key: "gossipFilme",
    name: "Gossip Girl",
    description:
      "Um grupo de alunos de uma escola rica de Manhattan parece se safar de tudo, menos de uma blogueira anônima que acompanha cada passo que dão. Assista o quanto quiser. Este drama adolescente lançou vários jovens ao estrelato, como Blake Lively, Penn Badgley e Chace Crawford.",
    duration: "Duração: 3 Temporadas",
    gender: "Gênero: Adolescente, romance, drama comédia",
    stream: "Disponível: Netflix",
    trailer: "https://www.youtube.com/embed/6eCoR6vmNzQ?si=dQKjoKpXHsksiE91",
  },
  {
    key: "chosenfilme",
    name: "The Chosen",
    description:
      "Em uma nova adaptação dos acontecimentos da Bíblia, na Galileia do século I, Jesus de Nazaré (Jonathan Roumie), um homem simples e de uma família humilde de carpinteiros, auxilia as pessoas à sua volta, independente de suas crenças, origens e aparência.",
    duration: "Duração: 3 Temporadas",
    gender: "Gênero: Drama, obra da epoca",
    stream: "Disponível: Netflix",
    trailer: "https://www.youtube.com/embed/2Y9Wc_waDNs?si=aqhx2AJkjdcarfi3",
  },
  {
    key: "wolfilme",
    name: "Teen Wolf",
    description:
      "O jovem Scott McCall (Tyler Posey) é estudante do ensino médio no colégio fictício de Beacon Hills e vive como um garoto comum, passando por problemas naturais da juventude. Ao ir caminhar na floresta em busca de um suposto corpo morto, o menino é mordido por um lobisomem.",
    duration: "Duração: 6 Temporadas",
    gender: "Gênero: Adolescente, ação, aventura, terror, sobrenatural",
    stream: "Disponível: Google Play",
    trailer: "https://www.youtube.com/embed/BmHM5eUp9w4?si=r4KbSyVnayzN3G60",
  },
  {
    key: "youFlme",
    name: "You",
    description:
      "Baseado em um best-seller, intitulado no Brasil de Você, a série acompanha Joe (Badgley), um gerente de uma livraria que se apaixona loucamente por Guinevere Beck (Elizabeth). Um romance com ares dos mais clássicos na verdade esconde uma paixão obsessiva, cheia de mentiras e falsas promessas.",
    duration: "Duração: 4 Temporadas",
    gender: "Gênero: Misterio, suspense, romance, suspense psicologico",
    stream: "Disponível: Netflix",
    trailer: "https://www.youtube.com/embed/WoV4O0Jfm8U?si=ChBD5SDxu-HD1L85",
  },
  {
    key: "sabrinaFlme",
    name: "Mundo Sombria de Sabrina",
    description:
      "Magia e rebeldia se misturam quando a meio bruxa e meio humana Sabrina Spellman fica dividida entre a vida de adolescente e o legado de sua família, a Igreja da Noite.",
    duration: "Duração: 4 Temporadas",
    gender: "Gênero: Terror, suspense, magia",
    stream: "Disponível: Netflix",
    trailer: "https://www.youtube.com/embed/xHFcrGzbvVY?si=G_ipyoHkXKivG6sA",
  },
  {
    key: "wandinhaFlme",
    name: "Wandinha",
    description:
      "Inteligente, sarcástica e apática, Wandinha Addams pode estar meio morta por dentro, mas na Escola Nunca Mais ela vai fazer amigos, inimigos e investigar assassinatos.",
    duration: "Duração: 1 Temporadas",
    gender: "Gênero: Terror, fantasia, comedia de terror",
    stream: "Disponível: Netflix",
    trailer: "https://www.youtube.com/embed/4vi6ZWe_3Yc?si=1K6MkPH-VpXLB6Ja",
  },
  {
    key: "superbadFilme",
    name: "SuperBad",
    description:
      "Os adolescentes Seth e Evan têm grandes esperanças para uma festa de formatura. Eles pretendem beber e conquistar as garotas para que eles possam se tornar parte da turma mais popular da escola, mas a ansiedade de separação e dois policiais entediados complicam missão dos amigos.",
    duration: "Duração: 1h 59m",
    gender: "Gênero: Comédia, adolescente",
    stream: "Disponível: Netflix",
    trailer: "https://www.youtube.com/embed/r6DInjXIyjU?si=o20LMHZaB0oXlNYT",
  },
  {
    key: "itFilme",
    name: "It a Coisa",
    description:
      "Um grupo de crianças se une para investigar o misterioso desaparecimento de vários jovens em sua cidade. Eles descobrem que o culpado é Pennywise, um palhaço cruel que se alimenta de seus medos e cuja violência teve origem há vários séculos.",
    duration: "Duração: 1h 59m",
    gender: "Gênero: Terror, adolescente",
    stream: "Disponível: Max",
    trailer: "https://www.youtube.com/embed/gJrX5BtFGps?si=Qk6vKoVPHxig_6i0",
  },
  {
    key: "branquelasFilme",
    name: "As branquelas",
    description:
      "Depois que seu último trabalho resultou em fiasco, dois agentes afro-americanos do FBI decidem fazer se passar por duas jovens loiras da alta-sociedade, com a intenção de descobrir quem está tentando seqüestrá-las.",
    duration: "Duração: 1h 49m",
    gender: "Gênero: Comédia, ficção policial",
    stream: "Disponível: Netflix, Amazon, Max",
    trailer: "https://www.youtube.com/embed/seoJIPLLWp0?si=DVVLgWFJa0wA7-pE",
  },
  {
    key: "cidadeHomensFilme",
    name: "Cidade dos Homens",
    description:
      "Amigos de infância, Acerola e Laranjinha estão se aproximando dos 18 anos. Acerola cria seu filho sozinho, já que a mãe vai trabalhar em São Paulo. Laranjinha tenta encontrar seu pai, sumido há muito tempo. Eventualmente, Laranjinha o encontra e fica sabendo que ele acabou de cumprir uma pena de 15 anos na cadeia. À medida que verdades do passado surgem, os dois amigos têm sua amizade testada.",
    duration: "Duração: 1h 46m",
    gender: "Gênero: Ação, suspense, ficção policial",
    stream: "Disponível: Disney Plus, Claro Video",
    trailer: "https://www.youtube.com/embed/M6FabnIndBU?si=UKuVA6_7JIeDapoj",
  },
  {
    key: "tropaFilme",
    name: "Tropa de Elites",
    description:
      "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.",
    duration: "Duração: 1h 55m",
    gender: "Gênero: Aventura, ação, documentario, ficção policial, crime",
    stream: "Disponível: Netflix",
    trailer: "https://www.youtube.com/embed/A6W-nNPl1T8?si=zg8hHAIV1q44MGZ2",
  },

  {
    key: "furyFilme",
    name: "Fury: Coração de Ferro",
    description:
      "Durante o final da Segunda Guerra Mundial, o sargento Don Wardaddy lidera um grupo de apenas cinco soldados norte-americanos encarregado de aniquilar os nazistas. Em um tanque de guerra Sherman, os homens enfrentam uma missão mortal. Apesar da desvantagem numérica, falta de armas e um soldado inexperiente, Wardaddy e seus homens se movimentam em um ataque espetacular no coração da Alemanha nazista.",
    duration: "Duração: 2h 14m",
    gender: "Gênero: Guerra, aventura, ação, antiguerra",
    stream: "Disponível: Netflix",
    trailer: "https://www.youtube.com/embed/pMz5faFTVYA?si=Nj-_7N4vzHIWdYIO",
  },
  {
    key: "laCasaFilme",
    name: "La Casa de Papel",
    description:
      "Oito ladrões fazem reféns e fecham-se dentro da Casa Nacional da Moeda de Espanha, enquanto um génio do crime manipula a polícia para executar o seu plano.",
    duration: "Temporadas: 5 Temporadas",
    gender: "Gênero: Assalto, ação",
    stream: "Disponível: Netflix",
    trailer: "https://www.youtube.com/embed/iS5xXr-GOnM?si=vrvVGczqzRiEmR3g",
  },
  {
    key: "strangerFilme",
    name: "Stranger Things",
    description:
      "Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina.",
    duration: "Temporadas: 4 Temporadas",
    gender: "Gênero: Terror suspense",
    stream: "Disponível: Netflix",
    trailer: "https://www.youtube.com/embed/mnd7sFt5c3A?si=TGOIvhlDoaDnHU7X",
  },
  {
    key: "cidadeDeusFilme",
    name: "Cidade de Deus",
    description:
      "A Série -Baseada na obra do escritor Paulo Lins, o spin-off se passa vinte anos depois dos acontecimentos do longa-metragem, no começo dos anos 2000. A partir das memórias de Buscapé (Alexandre Rodrigues), a produção retrata o impacto dos conflitos entre policiais, traficantes e milicianos na vida dos moradores da comunidade.",
    duration: "Temporada: 1 Temporadas",
    gender: "Gênero: Drama, crime",
    stream: "Disponível: Netflix",
    trailer: "https://www.youtube.com/embed/fZJUKixyeXM?si=Gu6fWL2vyUJqgGP4",
  },
  {
    key: "arcanjoFilme",
    name: "Arcanjo Renegao",
    description:
      "Em Arcanjo Renegado, esse é o nome do primeiro-sargento do Batalhão de Operações Especiais (Bope), vivido por Marcello Melo Jr. Ele lidera a Arcanjo, uma equipe tida como a mais bem treinada, eficaz e letal do batalhão, respeitada dentro da corporação e temida pelos bandidos.",
    duration: "Temporada: 2 Temporadas",
    gender: "Gênero: ação, suspense, ficção policial",
    stream: "Disponível: Globo Play",
    trailer: "https://www.youtube.com/embed/iEzf3p6F0wY?si=yQxxz-EdA0fgSXFy",
  },
  {
    key: "peakyFilme",
    name: "Peaky Blinders",
    description:
      "Em 1919, um infame gangue de Birmingham é liderado pelo cruel Tommy Shelby, um patrão do crime determinado a conquistar o mundo a qualquer preço. Veja tudo o que quiser. Melhor Série Dramática nos BAFTA.",
    duration: "Temporada: 6 Temporadas",
    gender: "Gênero: Crime, suspense, drama",
    stream: "Disponível: Netflix",
    trailer: "https://www.youtube.com/embed/svmIUWMVo2Y?si=2vqg3MROo8ngo_Ru",
  },
  {
    key: "flashFilme",
    name: "Flash",
    description:
      "O investigador forense Barry Allen (Grant Gustin) sofre um acidente em seu laboratório: ele leva um banho de produtos químicos e, em seguida, é atingido por um raio. A partir disso, ele se torna capaz de canalizar os poderes do Campo de Velocidade e de se locomover com uma rapidez sobre-humana.",
    duration: "Temporada: 9 Temporadas",
    gender: "Gênero: Super-heroi, drama, ficção cientifica",
    stream: "Disponível: Netflix",
    trailer: "https://www.youtube.com/embed/figLauMgASA?si=ZqHvUPwp3HMfhHAB",
  },
];

menuToggle.addEventListener("click", () => {
  menuMobile.classList.toggle("show");
});

imagePreview.forEach((film, key) => {
  imagePreview[key].addEventListener("click", () => {
    const filmId = imagePreview[key].id;

    const filmSelected = films.find((item) => item.key === filmId);

    modal.classList.add("display-block");
    filmTitle.innerHTML = filmSelected.name;
    filmDescription.innerHTML = filmSelected.description;
    filmDuration.innerHTML = filmSelected.duration;
    filmGender.innerHTML = filmSelected.gender;
    videoMovie.src = filmSelected.trailer;
    stremMovie.innerHTML = filmSelected.stream;
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("display-block");
  videoMovie.src = "";
});
