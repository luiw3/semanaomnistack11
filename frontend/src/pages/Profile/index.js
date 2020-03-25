import React,{useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FaPowerOff, FaTrashAlt} from 'react-icons/fa';

import './styles.css';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api'

export default function Profile(){
    const [incidents, setIncidents] = useState([]);

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();
    useEffect(()=>{
        api.get('profiles',{
            headers:{
                Authorization: ongId
            }
        }).then(response=> {
            setIncidents(response.data);
        })
    },[ongId]);

  async  function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization: ongId,
                }
            })

            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (err){
            alert('Erro ao deletar caso, tente novamente')
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    return (
        <div className="profile-container">
            <header>
            <img src={logoImg} alt=" Be the Hero "/>
    <span>Bem vinda {ongName}</span>

            <Link to="/incidents/new" className="button">
                Cadastrar novo caso
            </Link>
            <button onClick={handleLogout} type="button">
                <FaPowerOff size={18} color="#e02041" />
            </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incidents=>(
                     <li key={incidents.id}>
                     <strong>CASOS</strong>
                <p>{incidents.title}</p>
 
                     <strong>DESCRIÇÃO</strong>
                <p>{incidents.description}</p>
                      <strong>VALOR</strong>
                      <p>{Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(incidents.value)}</p>

                      <button onClick={()=> handleDeleteIncident(incidents.id)} type="button"> 
                      <FaTrashAlt size={20} color="#a8a8b3"/>
                      </button>
                 </li>
                ))}
            </ul>
        </div>
    )
}