import React from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";

import { 
	FaUserAlt,
	FaLock,
  } from 'react-icons/fa'

export function HomePage() {
    
    return (
      <>
      <div className="page-conteudo">


		<div className="app-header-actions">

			<span><FaUserAlt /></span>
			<h1>Olá, Flávio Pereira!</h1>			
		
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
								<span>Boletos em Aberto: <number className="number">9</number></span>
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
								<span>Boletos Pagos: <number className="number">70</number></span>
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
								<span>Boletos Vencidos: <number className="number">3</number></span>
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