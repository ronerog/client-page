
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
          const abertosRequest = fetch('http://jiapi-wpp.vps-kinghost.net:3003/abertos?DataBaseName=sigef_web_teste&MAT=11000');
          const pagosRequest = fetch('http://jiapi-wpp.vps-kinghost.net:3003/pagos?DataBaseName=sigef_web_teste&MAT=11000');
          const acordosRequest = fetch('http://jiapi-wpp.vps-kinghost.net:3003/acordos?DataBaseName=sigef_web_teste&MAT=11000');
          const vencidosRequest = fetch('http://jiapi-wpp.vps-kinghost.net:3003/vencidos?DataBaseName=sigef_web_teste&MAT=11000');
      
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

      const handleFiltroMesChange = (event) => {
        const novoFiltroMes = event.target.value;
        setFiltroMes(novoFiltroMes);
      };

      const handleRenderMonth = () => {
        if (filtroMes === '') {
        return pagos;
        } else {
        const mes = pagos && pagos.filter((boleto) => boleto.CAR_MES === filtroMes)
        console.log(mes);
        return mes;
        }
      }

    //  TODOS QUE TIVEREM O novoFiltroMes === renderizem

    //"CAR_VALOR_PARCELA": 28,
    //"CAR_SITUACAO": 0,
    //"CAR_MES": 2,
    //"CAR_ANO": 2024,
    //"CAR_CODIGO_BARRAS": "10493963700000028002736195000100040000331964",
    //"CAR_DT_VENCIMENTO": "Mon Mar 25 2024 00:00:00 GMT-0300 (Brasilia Standard Time)",
    //COLOCAR BOTÃO DE IMPRIMIR, VER COMO COLOCAR EM PDF O BOLETO
    // COLOCAR FILTRO POR DATA DE VENCIMENTO E POR BOLETO PAGO, ABERTO, VENCIDO, ACORDO E TODOS ORDENADO POR DATA DE VENCIMENTO
    const data = [
        {mensalidade: '1'}
    ]

    return (
        <>
            <div className="page-conteudo">
            <div>
                <label htmlFor="filtroMes">Filtrar por mês: </label>
                <select id="filtroMes" value={filtroMes} onChange={handleFiltroMesChange}>
                <option value="">Todos</option>
                <option value="2">Fevereiro</option>
                <option value="3">Março</option>
                <option value="4">Abril</option>
                <option value="5">Maio</option>
                <option value="6">Junho</option>
                <option value="7">Julho</option>
                <option value="8">Agosto</option>
                <option value="9">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
                </select>
            </div>
                
                {abertos && <Table data={() => {handleRenderMonth}} />}</div>
        </>
    )
}
