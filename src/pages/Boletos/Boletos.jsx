
import Sidebar from "../components/SideBar/SideBar"
import Table from "../components/Table/Table"
import './Boletos.css'


export function Boletos() {



    const DATA1 = [
        {Situação: 'Pago', Vencimento: '01/01/2023', Valor: 'R$ 16,00', Pago: '16,00', Parcela: '1'},
        {Situação: 'Pago', Vencimento: '01/02/2023', Valor: 'R$ 16,00', Pago: '16,00', Parcela: '2'},
        {Situação: 'Pago', Vencimento: '01/03/2023', Valor: 'R$ 16,00', Pago: '16,00', Parcela: '3'},
        {Situação: 'Pago', Vencimento: '01/04/2023', Valor: 'R$ 16,00', Pago: '16,00', Parcela: '4'},
        {Situação: 'Pago', Vencimento: '01/05/2023', Valor: 'R$ 16,00', Pago: '16,00', Parcela: '5'},
        {Situação: 'Pago', Vencimento: '01/06/2023', Valor: 'R$ 16,00', Pago: '16,00', Parcela: '6'},
        {Situação: 'Pago', Vencimento: '01/07/2023', Valor: 'R$ 16,00', Pago: '16,00', Parcela: '7'},
        {Situação: 'Pago', Vencimento: '01/08/2023', Valor: 'R$ 16,00', Pago: '16,00', Parcela: '8'},
        {Situação: 'Pago', Vencimento: '01/09/2023', Valor: 'R$ 16,00', Pago: '16,00', Parcela: '9'},
        {Situação: 'Pago', Vencimento: '01/10/2023', Valor: 'R$ 16,00', Pago: '16,00', Parcela: '10'},
        {Situação: 'Pago', Vencimento: '01/11/2023', Valor: 'R$ 16,00', Pago: '16,00', Parcela: '11'},
        {Situação: 'Pago', Vencimento: '01/12/2023', Valor: 'R$ 16,00', Pago: '16,00', Parcela: '13'},
        {Situação: 'Vencido', Vencimento: '01/01/2024', Valor: 'R$ 16,00', Pago: '16,00', Parcela: '14'},
        {Situação: 'A vencer', Vencimento: '01/02/2024', Valor: 'R$ 16,00', Pago: '16,00', Parcela: '15'},
        {Situação: 'A vencer', Vencimento: '01/03/2024', Valor: 'R$ 16,00', Pago: '16,00', Parcela: '16'},
        {Situação: 'A vencer', Vencimento: '01/04/2024', Valor: 'R$ 16,00', Pago: '16,00', Parcela: '17'},

    ]
    return (
        <>
        <Sidebar />
                <div>
                        <Table data={DATA1} />
                </div>
        </>
    )
}
