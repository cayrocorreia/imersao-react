import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  
  const vlrIniciais = {
  nome: '',
  descricao: '',
  cor:'',
  }
  const [categorias, setCategorias] = useState(['tst']);
  const[values, setValues] = useState(vlrIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,

    });
  }
  // funcao para capturar as mudanças do obj
  function handleChange(infEvento){
    //"abrindo" e atribuindo o valor a var 
    const { getAttribute, value } = infEvento.target;
    setValue(
      getAttribute('name'),
      value
      );
    }


  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handlerSubmit(infEvento) {
        infEvento.preventDefault();
        setCategorias([
          //está "espalhando" o valor que esta na lista categorias 
          ...categorias,
          values
        ]);

        setValues({vlrIniciais})

      
      }}>

        <FormField 
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}         
        />

        
<FormField 
          label="Descricao"
          type="??"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

{/* 
       <div>
        <label>
          Descrição:
          <textarea
            type="text"
            value={values.descricao}
            name="descricao"
            onChange={handleChange}
          />
        </label>
        </div>  */}

<FormField 
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        
        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>  

          )})}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
