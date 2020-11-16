function adcionaEstados(estados) {
  let container = document.getElementById('container');
  for (let i = 0; i < estados.length; i += 1) {
    estadoItem = document.createElement('option');
    estadoItem.innerText = estados[i];
    container.appendChild(estadoItem);
  }
}
adcionaEstados(['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']);

function montaCurriculo() {
  let botao = document.getElementById('montar-curriculo');
  let curriculoFinalizado = document.getElementById('curriculo-finalizado');
  botao.addEventListener('click', function () {
    let forms = document.getElementById('forms');
    curriculoFinalizado.innerText = forms.innerText;
  })
}