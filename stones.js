
const comments = [
  {"nom": "Carla Martínez", "coment": "La pàgina web és molt clara i fàcil de navegar."},
  {"nom": "Pere González", "coment": "M'agrada el disseny de la pàgina, però podríeu afegir més contingut."},
  {"nom": "Marta Ribera", "coment": "He trobat la informació que buscava, però el temps de càrrega és lent."},
  {"nom": "Joan Pons", "coment": "És una web molt completa, amb explicacions detallades."},
  {"nom": "Núria Soler", "coment": "Estaria bé incloure més recursos visuals com vídeos i infografies."},
  {"nom": "Sergi Ferrer", "coment": "Tot està molt ben estructurat, però a vegades em perdo entre tants enllaços."},
  {"nom": "Laia Vila", "coment": "L'estètica és agradable, però podríeu millorar la cerca interna."},
  {"nom": "Oriol Vidal", "coment": "La informació està molt actualitzada i és rellevant."},
  {"nom": "Clara Font", "coment": "M'ha agradat trobar respostes ràpides a les meves preguntes."},
  {"nom": "Albert Roca", "coment": "Potser caldria reduir la publicitat per no distreure els usuaris."},
  {"nom": "Eva Duran", "coment": "El lloc és bo, però la versió mòbil es podria optimitzar millor."},
  {"nom": "Pol Sànchez", "coment": "La navegació és fluïda, però alguns enllaços estan trencats."},
  {"nom": "Júlia Ferran", "coment": "L'apartat de preguntes freqüents és molt útil."},
  {"nom": "Raül Puig", "coment": "Molt contingut interessant, però falten exemples pràctics."},
  {"nom": "Sílvia Roig", "coment": "Els articles estan ben redactats i són fàcils de llegir."},
  {"nom": "Arnau Bosch", "coment": "M'ha ajudat molt a resoldre els meus dubtes tècnics."},
  {"nom": "Gemma Esteve", "coment": "Podríeu incloure un apartat de notícies actualitzades."},
  {"nom": "David Serra", "coment": "La web és bona, però trobo a faltar més eines interactives."},
  {"nom": "Mireia Pascual", "coment": "Els tutorials són útils, però estaria bé tenir més guies visuals."},
  {"nom": "Francesc Martí", "coment": "He trobat tot el que buscava, però algunes pàgines són lentes."},
  {"nom": "Neus Prat", "coment": "Crec que les seccions es podrien organitzar millor."},
  {"nom": "Lluís Gil", "coment": "L'ús de colors és molt encertat i fa la lectura agradable."},
  {"nom": "Laura Ventura", "coment": "Seria genial tenir una secció de fòrums per a la comunitat."},
  {"nom": "Andreu Mora", "coment": "La web és completa, però podríeu simplificar la interfície."},
  {"nom": "Rosa Casals", "coment": "Els recursos educatius estan molt ben presentats."},
  {"nom": "Josep Vidal", "coment": "Estaria bé afegir més contingut multimèdia."},
  {"nom": "Paula Blanch", "coment": "Tot correcte, però millorar la velocitat de la web seria ideal."},
  {"nom": "Jordi Pascual", "coment": "M'ha agradat la secció de consells pràctics."},
  {"nom": "Aina Arqués", "coment": "Els textos són clars, però alguns enllaços redirigeixen malament."},
  {"nom": "Miquel Vives", "coment": "Molt bon recurs per als estudiants i professionals."},
  {"nom": "Helena Bernat", "coment": "És una pàgina informativa amb dades molt ben estructurades."},
  {"nom": "Ramon Puig", "coment": "He trobat alguns errors tipogràfics, però el contingut és bo."},
  {"nom": "Anna Costa", "coment": "Els gràfics ajuden a entendre millor els conceptes."},
  {"nom": "Marc Sala", "coment": "Podríeu afegir una secció de preguntes freqüents més extensa."},
  {"nom": "Elisenda Lozano", "coment": "La pàgina és útil, però trobo a faltar una cerca més precisa."},
  {"nom": "Xavier Rovira", "coment": "El disseny és intuïtiu, però podríeu millorar la responsivitat."},
  {"nom": "Berta Domènech", "coment": "El contingut és de qualitat, però podríeu ampliar els temes."},
  {"nom": "Roger Torra", "coment": "La interfície és senzilla, però potser massa minimalista."},
  {"nom": "Carles Coll", "coment": "Molt recomanable per a qui busqui informació específica."},
  {"nom": "Cristina Montalbán", "coment": "És una web molt ben cuidada, però es podria actualitzar més sovint."},
  {"nom": "Lídia Borràs", "coment": "Els vídeos explicatius són una gran addició."},
  {"nom": "Arnau Borràs", "coment": "He trobat el que buscava, però alguns temes podrien ser més profunds."},
  {"nom": "Sònia Ferrer", "coment": "Estaria bé afegir referències acadèmiques als articles."},
  {"nom": "Aleix Cano", "coment": "La pàgina és molt professional i ben estructurada."},
  {"nom": "Guillem Rovira", "coment": "Els esquemes visuals ajuden molt a la comprensió."},
  {"nom": "Sandra Casas", "coment": "El contingut és de qualitat, però les fonts d'informació no són clares."},
  {"nom": "Martí Fuster", "coment": "Potser caldria un apartat de notícies actualitzades."},
  {"nom": "Mònica Llop", "coment": "La informació és útil, però falten més exemples pràctics."},
  {"nom": "Bruno Saura", "coment": "M'agrada molt el disseny modern de la pàgina."},
  {"nom": "Anna Alsina", "coment": "El contingut és bo, però algunes seccions són difícils de trobar."},
  {"nom": "Nil Prat", "coment": "El menú de navegació és clar, però algunes pàgines no funcionen bé."},
  {"nom": "Carme Mas", "coment": "És un lloc web molt complet, amb informació ben organitzada."},
  {"nom": "Josep Monfort", "coment": "Els tutorials són molt útils, però l'idioma no sempre és clar."},
  {"nom": "Pau Serra", "coment": "Seria útil tenir un apartat de descàrregues de recursos."},
  {"nom": "Àngels Esteve", "coment": "És una web fàcil d'utilitzar, però el disseny podria millorar."},
  {"nom": "Eric Pujol", "coment": "M'agrada la secció de preguntes freqüents, és molt completa."},
  {"nom": "Glòria Pont", "coment": "Molt bona explicació dels temes, tot molt ben detallat."},
  {"nom": "Jaume Navarro", "coment": "Els enllaços interns fan que sigui fàcil trobar informació relacionada."},
  {"nom": "Blanca Riera", "coment": "El contingut està ben escrit, però algunes pàgines tenen errades."},
  {"nom": "Albert Balaguer", "coment": "Seria bo tenir una versió de la web en més idiomes."},
  {"nom": "Marina Ortiz", "coment": "Molt fàcil de navegar, però falten seccions amb resums breus."},
  {"nom": "Toni Vidal", "coment": "La web és clara, però l'apartat de descàrregues és complicat de trobar."},
  {"nom": "Sònia Gil", "coment": "M'ha agradat la secció de consells pràctics i tutorials."},
  {"nom": "Andreu Puig", "coment": "Estaria bé afegir més informació sobre temes recents."},
  {"nom": "Miquel Serra", "coment": "Tot correcte, però els gràfics podrien ser més interactius."},
  {"nom": "Noemí Riera", "coment": "És una web intuïtiva, amb bons apartats d'explicacions detallades."},
  {"nom": "Bernat Bosch", "coment": "Potser caldria més interacció amb els usuaris, com comentaris o fòrums."},
  {"nom": "Ariadna Ruiz", "coment": "L'organització del contingut és clara, però la cerca podria millorar."},
  {"nom": "Manel Parés", "coment": "M'ha ajudat molt a entendre millor alguns temes complicats."},
  {"nom": "Núria Fàbregas", "coment": "La pàgina és útil, però trobo a faltar exemples visuals."},
  {"nom": "Arnau Prats", "coment": "Els gràfics estan molt ben fets, però podríeu incloure més casos pràctics."},
  {"nom": "Laura Soler", "coment": "La pàgina és clara, però a vegades el temps de càrrega és llarg."},
  {"nom": "Carles Puig", "coment": "Bons continguts, però el menú de navegació és una mica confús."},
  {"nom": "Helena Blanch", "coment": "Estic molt satisfeta amb la informació trobada, molt completa."},
  {"nom": "Júlia Ortega", "coment": "El disseny és atractiu, però els textos podrien ser més curts."},
  {"nom": "Oriol Vila", "coment": "He trobat molt interessant la secció de recomanacions."},
  {"nom": "Marta Miquel", "coment": "Podríeu afegir una secció de preguntes més freqüents amb temes nous."},
  {"nom": "David Rosell", "coment": "La pàgina és molt útil, però la barra de cerca és poc precisa."},
  {"nom": "Clàudia Navarro", "coment": "Bona web, però es podria millorar la part visual."},
  {"nom": "Àlex Simó", "coment": "La pàgina està molt ben estructurada i és fàcil de navegar."},
  {"nom": "Sara Cerdà", "coment": "Seria útil afegir més guies pas a pas en vídeo."},
  {"nom": "Toni Bertran", "coment": "La informació és clara i concisa, molt recomanable."},
  {"nom": "Laura Capdevila", "coment": "M'ha agradat molt l'apartat de consells i recomanacions."},
  {"nom": "Roger Palau", "coment": "La pàgina és completa, però la càrrega de vídeos és lenta."},
  {"nom": "Marina Valls", "coment": "La web és clara, però podríeu afegir un xat per a suport."},
  {"nom": "Xavier Casals", "coment": "Bona web, amb molta informació rellevant i ben explicada."},
  {"nom": "Miquel Torras", "coment": "Els articles són molt útils, però falten més guies."},
  {"nom": "Elena Bonet", "coment": "La navegació és senzilla, però a vegades costa trobar certs temes."},
  {"nom": "Jordi Rovira", "coment": "Seria útil tenir una versió més resumida de cada secció."},
  {"nom": "Núria Martí", "coment": "La web està molt bé, però podríeu actualitzar més sovint la informació."},
  {"nom": "Ramon Clavell", "coment": "M'agrada el disseny net i clar de la web, molt intuïtiva."},
  {"nom": "Anna Roca", "coment": "Els gràfics interactius són una gran addició, molt útils."},
  {"nom": "Martí Dalmau", "coment": "Tot correcte, però podríeu afegir més seccions amb casos reals."}
]


const form = document.getElementById("myForm");
const commentCont = document.getElementById("commentContainer");
const audioPlayer = document.getElementById('audioPlayer');
            

// Add an event listener to handle the form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  commentCont.innerHTML = '<div class="comentari"><h3>'+form.elements['name'].value+'</h3><p>'+form.elements['comment'].value+'</p></div>'+""+commentCont.innerHTML
});

function AddComment(name, com){
  commentCont.innerHTML = '<div class="comentari"><h3>'+name+'</h3><p>'+com+'</p></div>'+""+commentCont.innerHTML
}

function AddComents(){
  for (let index = 0; index < 5; index++) {
    const c = comments[Math.floor(Math.random() * comments.length)];
    AddComment(c.nom, c.coment);
  }
}

function UpdateViews() {
  const view = document.getElementById("views");
  const startDate = new Date("2024-07-01T08:30:00");
  const endDate = new Date();
  const diffInMilliseconds = Math.abs(endDate - startDate);
  const diffInMinutes = Math.floor(diffInMilliseconds / 60000);
  view.innerHTML = diffInMinutes * 5 + "";
}

function PageLoop() {
  setInterval(() => {
    UpdateViews();
  }, 1000);
}
function CommentLoop() {
  setInterval(() => {
    const c = comments[Math.floor(Math.random() * comments.length)];
    AddComment(c.nom, c.coment);
  }, 20000);
}

function PonteActivation(){
  console.log("pressssss");
  const miDiv = document.getElementById('ponte');
  miDiv.classList.toggle('mostrar');
  audioPlayer.play();
}

AddComents();
PageLoop();
CommentLoop();
