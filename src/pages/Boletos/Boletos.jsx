
import React, { useState, useEffect } from "react";
import Table from "../components/Table/Table"
import './Boletos.css'



export function Boletos() {

    const [abertos, setAbertos] = useState();
    const [pagos, setPagos] = useState();
    const [acordos, setAcordos] = useState();
    const [vencidos, setVencidos] = useState();
    const [filtroMes, setFiltroMes] = useState(null);

    useEffect(() => {
        async function fetchData() {
          const abertosRequest = fetch('http://jiapi-wpp.vps-kinghost.net:3003/abertos?DataBaseName=sigef_teste_api&MAT=11000');
          const pagosRequest = fetch('http://jiapi-wpp.vps-kinghost.net:3003/pagos?DataBaseName=sigef_teste_api&MAT=11000');
          const acordosRequest = fetch('http://jiapi-wpp.vps-kinghost.net:3003/acordos?DataBaseName=sigef_teste_api&MAT=11000');
          const vencidosRequest = fetch('http://jiapi-wpp.vps-kinghost.net:3003/vencidos?DataBaseName=sigef_teste_api&MAT=11000');
      
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
      
        fetchData();
      }, []);

         
        // const anosDisponiveis = [];
        // const anoAtual = new Date().getFullYear();
      
        // for (let ano = 2000; ano <= anoAtual; ano++) {
        //   anosDisponiveis.push(ano);
        // }

        const pagosFilter = pagos?.map(({ CAR_VALOR_PARCELA, CAR_SITUACAO, CAR_MES, CAR_ANO, CAR_CODIGO_BARRAS, CAR_DT_VENCIMENTO }) =>
         ({  Mês: CAR_MES,
          Ano: CAR_ANO,
          Situação: CAR_SITUACAO,
          Valor: `R$${CAR_VALOR_PARCELA}`,
          Vencimento: CAR_DT_VENCIMENTO,
          'Código de Barras': CAR_CODIGO_BARRAS,
        }));
        
 
    //  TODOS QUE TIVEREM O novoFiltroMes === renderizem

    //"CAR_VALOR_PARCELA": 28,
    //"CAR_SITUACAO": 0,
    //"CAR_MES": 2,
    //"CAR_ANO": 2024,
    //"CAR_CODIGO_BARRAS": "10493963700000028002736195000100040000331964",
    //"CAR_DT_VENCIMENTO": "Mon Mar 25 2024 00:00:00 GMT-0300 (Brasilia Standard Time)",
    //COLOCAR BOTÃO DE IMPRIMIR, VER COMO COLOCAR EM PDF O BOLETO
    // COLOCAR FILTRO POR DATA DE VENCIMENTO E POR BOLETO PAGO, ABERTO, VENCIDO, ACORDO E TODOS ORDENADO POR DATA DE VENCIMENTO
    // const data = [
    //     {Mês: '1', Ano: '2023', Situação: 'Pago', Valor: 'R$ 25,00', Vencimento: '25, Mar 2024', Codigo: "10493963700000028002736195000100040000331964"},
    //     {Mês: '2', Ano: '2023', Situação: 'Pago', Valor: 'R$ 25,00', Vencimento: '25, Mar 2024', Codigo: "10493963700000028002736195000100040000331964"},
    //     {Mês: '3', Ano: '2023', Situação: 'Pago', Valor: 'R$ 25,00', Vencimento: '25, Mar 2024', Codigo: "10493963700000028002736195000100040000331964"},
    //     {Mês: '4', Ano: '2023', Situação: 'Pago', Valor: 'R$ 25,00', Vencimento: '25, Mar 2024', Codigo: "10493963700000028002736195000100040000331964"},
    //     {Mês: '5', Ano: '2023', Situação: 'Pago', Valor: 'R$ 25,00', Vencimento: '25, Mar 2024', Codigo: "10493963700000028002736195000100040000331964"},
    //     {Mês: '6', Ano: '2023', Situação: 'Pago', Valor: 'R$ 25,00', Vencimento: '25, Mar 2024', Codigo: "10493963700000028002736195000100040000331964"},
    //     {Mês: '7', Ano: '2023', Situação: 'Pago', Valor: 'R$ 25,00', Vencimento: '25, Mar 2024', Codigo: "10493963700000028002736195000100040000331964"},
    //     {Mês: '8', Ano: '2023', Situação: 'Pago', Valor: 'R$ 25,00', Vencimento: '25, Mar 2024', Codigo: "10493963700000028002736195000100040000331964"},
    //     {Mês: '9', Ano: '2023', Situação: 'Pago', Valor: 'R$ 25,00', Vencimento: '25, Mar 2024', Codigo: "10493963700000028002736195000100040000331964"},
    //     {Mês: '10', Ano: '2023', Situação: 'Pago', Valor: 'R$ 25,00', Vencimento: '25, Mar 2024', Codigo: "10493963700000028002736195000100040000331964"}
    // ]

    return (
        <>
            <div className="page-conteudo">
            <div className="form-header">
            <h2>Boletos</h2>
            <p>* Os serviços são pagos de acordo com o estado atual da moeda e tarifa.</p>
            </div>
                <div className="tabela">
                {pagos && vencidos && abertos && <Table data={pagosFilter} />}
                </div>
                
                </div>
        </>
    )
}
