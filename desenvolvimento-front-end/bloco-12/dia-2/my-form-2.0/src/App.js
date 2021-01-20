import React from 'react';
import './App.css';

const estados = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'Ceará', 'Distrito Federal']

class App extends React.Component {
  constructor(props) {
    super()

    this.handlerChange = this.handlerChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: 'São Paulo',
      tipo: '',
      resumoCurriculo: '',
      cargo: '',
      descricaoCargo: '',
    };
  }

  handlerChange({ target }) {
    let { name, value } = target
    if (name === 'nome') value = value.toUpperCase();
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <main>
        <h1>Formulário em React</h1>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <div>
            Nome:
            <input type="text" name="nome" maxLength="40" value={this.state.nome} onChange={this.handlerChange} required />
          </div>
          <div>
            Email:
            <input type="text" name="email" maxLength="50" value={this.state.email} onChange={this.handlerChange} required />
          </div>
          <div>
            CPF:
            <input type="text" name="cpf" maxLength="11" value={this.state.cpf} onChange={this.handlerChange}  required />
          </div>
          <div>
            Endereço:
            <input type="text" name="endereco" maxLength="200" value={this.state.endereco} onChange={this.handlerChange} required />
          </div>
          <div>
            Cidade:
            <input type="text" name="cidade" maxLength="28" value={this.state.cidade} onChange={this.handlerChange} required />
          </div>
          <div>
            Estado:
            <select name="estado" value={this.state.estado} onChange={this.handlerChange} required>
              {estados.map((estado, key) => 
                <option key={key}>{estado}</option>
              )}
            </select>
          </div>
          <div>
            Tipo:
            <label>
              Casa
              <input type="radio" name="tipo" value={this.state.tipo} onChange={this.handlerChange} checked />
            </label>
            <label>
              Apartamento
              <input type="radio" name="tipo" value={this.state.tipo} onChange={this.handlerChange} />
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Último Emprego</legend>
          <div>
            Resumo do Currículo:
            <textarea name="resumoCurriculo" maxLength="1000" value={this.state.resumoCurriculo} onChange={this.handlerChange} required  />
          </div>
          <div>
            Cargo:
            <textarea name="cargo" maxLength="40" value={this.state.cargo} onChange={this.handlerChange} required  />
          </div>
          <div>
            Descrição do Cargo:
            <textarea name="descricaoCargo" maxLength="500" value={this.state.descricaoCargo} onChange={this.handlerChange} required  />
          </div>
        </fieldset>
        <button>Montar Currículo</button>
        <button>Limpar Currículo</button>
      </main>
    );
  }
}

export default App;
