import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './NewParty.css';

const NewParty = () => {
	const navigate = useNavigate();
	const [party, setParty] = useState({
		title: '',
		author: '',
		description: '',
		budget: 0
	});

	const handleInputChange = (e) => {
		setParty({
			...party,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		await axios.post('/parties', party)
			.then(res => console.log(res))
			.catch(err => console.error(err));
		navigate('/');
	};

	return (
		<div>
			<h1>Criar Festa</h1>
			<div className='container-form'>
				<form onSubmit={handleSubmit} >
					<div className="form-control">
						<label htmlFor="title">Titulo: </label>
						<input type="text" placeholder='Digite o Titulo' name='title' id='title' required value={party.title} onChange={handleInputChange} />
					</div>
					<div className="form-control">
						<label htmlFor="author">Organizador da Festa: </label>
						<input type="text" placeholder='Digite o Anfitrião' name='author' id='author' required value={party.author} onChange={handleInputChange} />
					</div>
					<div className="form-control">
						<label htmlFor="description">Descrição da Festa</label>
						<textarea type="text" placeholder='Digite a descrição da festa' name='description' id='description' required value={party.description} onChange={handleInputChange} />
					</div>
					<div className="form-control">
						<label htmlFor="budget">Orçamento para realizar a Festa</label>
						<input type="number" placeholder='Digite o orçamento' name='budget' id='budget' required value={party.budget} onChange={handleInputChange} />
					</div>
					<input type="submit" value="Salvar" className='btn-salvar'/>
				</form>
			</div>
		</div>
	);
};

export default NewParty;