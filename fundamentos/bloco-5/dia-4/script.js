function adicionaTitulo() {
  let corpo = document.querySelector('body');
  let titulo = document.createElement('h1');
  titulo.innerText = "Lorem Ipsum";
  titulo.className = "titulo"
  corpo.appendChild(titulo);
}
adicionaTitulo();

function adicionaTexto() {
  let corpo = document.querySelector('body');
  let paragrafo1 = document.createElement('p');
  paragrafo1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit elit, pharetra lobortis velit eu, convallis condimentum purus. Duis mi felis, pellentesque et ullamcorper sit amet, tristique ut tortor. Donec egestas magna risus, a iaculis nibh egestas vel. Integer sed nibh at ligula mollis rhoncus sed sed ex. Sed dictum, dui eget facilisis porta, dui risus pretium eros, a vestibulum orci augue vel diam. Vivamus malesuada quis ante eget pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean eget lorem ipsum."
  paragrafo1.className = "paragrafo";
  corpo.appendChild(paragrafo1);

  let paragrafo2 = document.createElement('p');
  paragrafo2.innerText = "Sed luctus facilisis erat, convallis ultricies justo vulputate ut. Morbi consequat felis sem, nec finibus orci porttitor rutrum. Nam ante magna, bibendum eget erat id, ultrices euismod sem. In hac habitasse platea dictumst. Donec consectetur dictum velit pretium porttitor. Maecenas sit amet metus id dui accumsan ullamcorper eget non risus. Nulla facilisi. Morbi condimentum, magna vel convallis consequat, est enim vulputate tortor, eleifend tristique odio quam sed ligula. Nulla facilisi. Praesent vel nulla felis. Praesent urna lorem, venenatis ultricies eleifend sed, tempus in lectus. Morbi et rutrum nisi, in ornare ex. Ut mollis risus enim, et lacinia tortor rhoncus vitae."
  paragrafo2.className = "paragrafo";
  corpo.appendChild(paragrafo2);

  let paragrafo3 = document.createElement('p');
  paragrafo3.innerText = "Phasellus id pretium dui. Aliquam iaculis vel purus at tempor. Suspendisse maximus purus leo, et pulvinar risus tristique ut. Quisque cursus tempus sapien, sed imperdiet massa. Vestibulum dapibus quam blandit, rhoncus risus a, sodales ante. Aenean mollis id lorem rhoncus ultricies. Phasellus placerat, libero a porta condimentum, turpis nisl iaculis tellus, ut cursus justo eros at erat. Aenean hendrerit dapibus purus eget placerat. Mauris laoreet neque vel mauris posuere finibus a non diam. Aenean in sem non ex elementum dapibus. Maecenas erat mi, semper vel nunc ultrices, consequat consectetur orci. Duis porta imperdiet mi. Nam magna quam, iaculis in ultricies sit amet, varius ut purus.";
  paragrafo3.className = "paragrafo";
  corpo.appendChild(paragrafo3);
}
adicionaTexto();

