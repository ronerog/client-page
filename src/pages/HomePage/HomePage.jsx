
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./HomePage.css";

import { 
	FaUserAlt,
	FaLock,
  } from 'react-icons/fa'

export function HomePage() {

	const [abertos, setAbertos] = useState();
	const [nome, setNome] = useState();
	const [pagos, setPagos] = useState();
	const [acordos, setAcordos] = useState();
	const [vencidos, setVencidos] = useState();
	const [valor, setValor] = useState();

	useEffect(() => {
		async function fetchData() {
		  const abertosRequest = fetch(`http://jiapi-wpp.vps-kinghost.net:3003/abertos?DataBaseName=sigef_web_${banco}&MAT=11000`);
		  const pagosRequest = fetch(`http://jiapi-wpp.vps-kinghost.net:3003/pagos?DataBaseName=sigef_web_${banco}&MAT=11000`);
		  const acordosRequest = fetch(`http://jiapi-wpp.vps-kinghost.net:3003/acordos?DataBaseName=sigef_web_${banco}&MAT=11000`);
		  const vencidosRequest = fetch(`http://jiapi-wpp.vps-kinghost.net:3003/vencidos?DataBaseName=sigef_web_${banco}&MAT=11000`);
	  
		  const [abertosResponse, pagosResponse, acordosResponse, vencidosResponse] = await Promise.all([abertosRequest, pagosRequest, acordosRequest, vencidosRequest]);
		  
		  const abertosResult = await abertosResponse.json();
		  const pagosResult = await pagosResponse.json();
		  const acordosResult = await acordosResponse.json();
		  const vencidosResult = await vencidosResponse.json();
	  
		  setAbertos(abertosResult);
		  setPagos(pagosResult);
		  setAcordos(acordosResult);
		  setVencidos(vencidosResult);
		}

		async function loadUser(){
			const banco = localStorage.getItem('api')
            const request = await fetch(`http://jiapi-wpp.vps-kinghost.net:3003/searchmat?DataBaseName=sigef_web_${banco}&MAT=11000`)
            const result = await request.json();
			const nome = result.map((cliente) => cliente.CLI_NOME) 
            setNome(nome)
		}

		async function loadValor(){
			const ultimos = pagos.slice(pagos.length - 3)
			const valores = ultimos.map((cliente) => cliente.CAR)

			//"CAR_MES": 4,
			//"CAR_ANO": 2020,
			//"CAR_VALOR_BAIXADO": 25.2,
		}
	  
		fetchData();
		loadUser();
	  }, []);
    
    return (
      <>
      <div className="page-conteudo">


		<div className="app-header-actions">

			<span><FaUserAlt /></span>
			<h1>Olá, {nome}!</h1>			
		
		</div>

	<div className="app-body">
		<div className="app-body-main-content">
			<section className="service-section">
				<h2>Serviços</h2>
				<div className="service-section-header">
	
				</div>
				<div className="mobile-only">
				</div>
				<div className="tiles">
					<article className="tile">
						<div className="tile-header">
							<h3>
								<span>Boletos em Aberto: <number className="number">{abertos?.length}</number></span>
							</h3>
						</div>
						<a href="#">
						<Link className='link' to="/boletos">
							<span>Visualizar boletos</span>
							</Link>
						</a>
					</article>
					<article className="tile">
						<div className="tile-header">
							<h3>
								<span>Boletos Pagos: <number className="number">{pagos?.length}</number></span>
							</h3>
						</div>
						<a href="#">
						<Link className='link' to="/boletos">
							<span>Visualizar boletos</span>
							</Link>
							
						</a>
					</article>
					<article className="tile">
						<div className="tile-header">
							<h3>
								<span>Boletos Vencidos: <number className="number">{vencidos?.length}</number></span>
							</h3>
						</div>
						<a href="#">
						<Link className='link' to="/boletos">
							<span>Visualizar boletos</span>
							</Link>
						</a>
					</article>
				</div>
				<div className="service-section-footer">
					<p>Os serviços são pagos de acordo com o estado atual da moeda e tarifa.</p>
				</div>
			</section>
			<section className="transfer-section">
				<div className="transfer-section-header">
					<h2>Últimos pagamentos</h2>
				</div>
				<div className="transfers">
					<div className="transfer">
						
						<dl className="transfer-details">
							<div>
								<dt>Março</dt>
								<dd>Mês</dd>
							</div>
							<div>
								<dt>28 Mar. 21</dt>
								<dd>Vencimento</dd>
							</div>
							<div>
								<dt>25 Mar. 21</dt>
								<dd>Pagamento </dd>
							</div>
						</dl>
						<div className="transfer-number">
							: R$ 550,00
						</div>
					</div>
					<div className="transfer">
						
						<dl className="transfer-details">
            <div>
								<dt>Março</dt>
								<dd>Mês</dd>
							</div>
							<div>
								<dt>28 Mar. 21</dt>
								<dd>Vencimento</dd>
							</div>
							<div>
								<dt>25 Mar. 21</dt>
								<dd>Pagamento </dd>
							</div>
						</dl>
						<div className="transfer-number">
							: R$ 120,00
						</div>
					</div>
					<div className="transfer">
						
						<dl className="transfer-details">
            <div>
								<dt>Março</dt>
								<dd>Mês</dd>
							</div>
							<div>
								<dt>28 Mar. 21</dt>
								<dd>Vencimento</dd>
							</div>
							<div>
								<dt>25 Mar. 21</dt>
								<dd>Pagamento </dd>
							</div>
						</dl>
						<div className="transfer-number"> : R$ 70,00
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>

</div>
      </>
      );
}