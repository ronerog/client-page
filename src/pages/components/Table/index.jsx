import React from "react";
import { Grid, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import "./styles.css";

const Row = ({ record }) => {
  const keys = Object.keys(record);
  return (
    <TableRow>
      {keys.map((key) => (
        <TableCell key={key}>{record[key]}</TableCell>
      ))}
    </TableRow>
  );
};

export default function CustomTable({ data }) {
  const keys = Object.keys(data[0]);

  return (
    <TableContainer className="TableContainer">
      <Table>
        <TableHead>
          <TableRow>
            {keys.map((key) => (
              <TableCell key={key}>{key}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((record) => (
            <Row record={record} key={record.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}