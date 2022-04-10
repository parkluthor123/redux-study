import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {RootState} from './store/modules/shop'

const App:React.FC = () => {
  const [customer, setCustomer] = useState({
    external_id: new Date().getTime().toString(),
  })

  const sendToReducer = useDispatch();

  const sendData = (e: any)=>{
    e.preventDefault();
    sendToReducer({type:'SET_CUSTOMER', customer:customer});

  }

  const getData = (e: any)=>{
    setCustomer({...customer, [e.target.name]: e.target.value})
  }

  const getState = useSelector((state:RootState)=>{
    return state.shop
  });

  return (
    <>
      <section className="container">
        <div className="form-area">
            <form onSubmit={sendData}>
              <div className="form-item">
                <label htmlFor="nome">Nome</label>
                <input type="text" id='nome' name='nome' onChange={getData} placeholder='Digite o nome'/>
              </div>
              <div className="form-item">
                <label htmlFor="email">E-mail</label>
                <input type="text" id='email' name='email' onChange={getData} placeholder='Digite o e-mail'/>
              </div>
              <div className="form-item">
                <label htmlFor="cpf">CPF</label>
                <input type="text" id='cpf' name='cpf' onChange={getData} placeholder='Digite o CPF'/>
              </div>
              <div className="form-item">
                <label htmlFor="phone">Telefone</label>
                <input type="text" id='phone' name='phone' onChange={getData} placeholder='Digite o Telefone' maxLength={15}/>
              </div>
              <div className="form-button">
                <button type="submit">Save in state</button>
              </div>
            </form>
        </div>
        {getState.customer != null ?
          <div className="box-informations">
            <h1>Informations</h1>
            <div className="box-wrapper">
              <span>Name: <p>{getState.customer?.nome}</p></span>
              <span>E-mail: <p>{getState.customer?.email}</p></span>
              <span>CPF: <p>{getState.customer?.cpf}</p></span>
              <span>Phone: <p>{getState.customer?.phone}</p></span>
            </div>
          </div> : null
        }
      </section>
    </>
  );
}

export default App;
