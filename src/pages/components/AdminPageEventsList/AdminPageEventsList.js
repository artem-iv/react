import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const AdminPageEventsList = ({ rows }) => {
  console.log(rows);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">userId</TableCell>
            <TableCell align="left">id</TableCell>
            <TableCell align="left">title</TableCell>
            <TableCell align="left">completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.userId}</TableCell>
              <TableCell align="left">
                {row.completed ? "true" : "false"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminPageEventsList;
