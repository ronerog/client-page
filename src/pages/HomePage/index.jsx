import Pagos from '../components/Grafico/Pagos';
import Vencidos from '../components/Grafico/Vencidos';
import Vencer from '../components/Grafico/Vencer';
import Header from '../components/Header';
import "./styles.css";

export function HomePage() {
    
    return (
      <>
            <header>
                  <Header />
            </header>
            <div className='row'>
            <div className='card'>
            <div className='graficos'>
            <Pagos />
            </div>
            </div>
            <div className='card2'>
            <div className='graficos'>
            <Vencidos />
            </div>
            </div>
            <div className='card2'>
            <div className='graficos'>
            <Vencer />
            </div>
            </div>
            </div>
            <footer id="rodape">
            <p>&copy; Feito por C2Sistemas</p>
            </footer>
       </>
      );
}