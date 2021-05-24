const fs = require('fs');

function escreveArquivo(arquivo, texto) {
  fs.writeFileSync(`${__dirname}/${arquivo}`, texto);

  return 'Ok';
}

module.exports = escreveArquivo;