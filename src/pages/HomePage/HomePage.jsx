import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "./HomePage.css";

import { 
  FaFileInvoiceDollar
} from 'react-icons/fa'

export function HomePage() {
    
    return (
      <>
      <div className="page-conteudo">
        <div className="div-boletos">
      <Card sx={{ minWidth: 300 }}>
      <CardContent>
      <FaFileInvoiceDollar /> Pagos: 10
      </CardContent>
      <CardActions>
        <Button size="small">Ver Boletos</Button>
      </CardActions>
      </Card>
      <Card sx={{ minWidth: 300 }}>
      <CardContent>
      <FaFileInvoiceDollar /> Vencidos: 5
      </CardContent>
      <CardActions>
        <Button size="small">Ver Boletos</Button>
      </CardActions>
      </Card>
      </div>
      <div className='card-dados'>
      <Card sx={{ minWidth: 300 }}>
      <CardContent>
       Olá, Flávio
      </CardContent>
      <CardActions>
        <Button size="small">Ver Boletos</Button>
      </CardActions>
      </Card>
      </div>
      <div className='card-ultimo-boleto'>
      <Card sx={{ maxWidth: 500 }}>
      <CardContent>
       Mês: MAIO
       <br></br>
       PAGO
      </CardContent>
      <CardActions>
        <Button size="small">Ver Boletos</Button>
      </CardActions>
      </Card>
      </div>
      </div>
      </>
      );
}