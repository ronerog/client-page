import React from 'react';
import "./HomePage.css";

export function HomePage() {
    
    return (
      <>
      <div className="page-conteudo">

      <div className="app">

		<div className="app-header-actions">

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
							<i className="ph-lightning-light"></i>
							<h3>
                <span>Boletos em aberto</span>
								<span>Boletos em aberto</span>
							</h3>
						</div>
						<a href="#">
							<span>Visualizar boletos</span>
						</a>
					</article>
					<article className="tile">
						<div className="tile-header">
							<i className="ph-fire-simple-light"></i>
							<h3>
								<span>Boletos Pagos</span>
								<span>Boletos Pagos</span>
							</h3>
						</div>
						<a href="#">
							<span>Visualizar boletos</span>
							
						</a>
					</article>
					<article className="tile">
						<div className="tile-header">
							<i className="ph-file-light"></i>
							<h3>
								<span>Boletos Vencidos</span>
								<span>Boletos Vencidos</span>
							</h3>
						</div>
						<a href="#">
							<span>Visualizar boletos</span>
							
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
								<dd>Pagamento</dd>
							</div>
						</dl>
						<div className="transfer-number">
							- R$ 550
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
								<dd>Pagamento</dd>
							</div>
						</dl>
						<div className="transfer-number">
							- R$ 120
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
								<dd>Pagamento</dd>
							</div>
						</dl>
						<div className="transfer-number">
							- R$ 70
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</div>
</div>
      </>
      );
}