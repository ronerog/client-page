import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "./HomePage.css";

export function HomePage() {
    
    return (
      <>
      <div className="page-conteudo">
      <Card sx={{ maxWidth: 275 }}>
      <CardContent>
      PAGOS
      </CardContent>
      <CardActions>
        <Button size="small">Ver Boletos</Button>
      </CardActions>
      </Card>
      <Card sx={{ maxWidth: 275 }}>
      <CardContent>
      ABERTOS
      </CardContent>
      <CardActions>
        <Button size="small">Ver Boletos</Button>
      </CardActions>
      </Card>
      <Card sx={{ maxWidth: 275 }}>
      <CardContent>
      VENCIDOS
      </CardContent>
      <CardActions>
        <Button size="small">Ver Boletos</Button>
      </CardActions>
      </Card>
      </div>
      </>
      );
}