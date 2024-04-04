import  React from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux";
import { TablePagination } from "@mui/material";
import {useState} from "react";
function Tabledashboard(){
     const [page,setPage] = useState(0);
     const [rowsPerPage , setrowsPerPage] = useState(2);

    const userdetails = useSelector((state)=>state?.Registerreduce) ;
    //  console.log("useDetails====>",userdetails);
     const userdata = userdetails.registerUser || [];

    //  console.log("user data =====>",userdata);
    
      const onChangePage = (event , nextPage)=>{
        setPage(nextPage)
      }

      const onChangeRowsPerPage = (event) =>{
        console.log("target=====>",event.target.value);
         setrowsPerPage(event.target.value);
      }

     return(
         <TableContainer component={Paper} style={{backgroundColor:"#f2f2f2"}}>
               <Table>
                  <TableHead>
                     <TableRow>
                         <TableCell align="center">Name</TableCell>
                         <TableCell align="center">Email</TableCell>
                         <TableCell align="center">Password</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                  {userdata.slice(page * rowsPerPage ,page * rowsPerPage + rowsPerPage).map((user) => (
                     <TableRow key={user.email}>
                        <TableCell align="center">{user.username}</TableCell>
                        <TableCell align="center">{user.email}</TableCell>
                        <TableCell align="center">{user.password}</TableCell>
                    </TableRow>
                        ))}
                  </TableBody>
               </Table>
               <TablePagination rowsPerPageOptions={[2,5,10,15,25]}
                count={userdata.length} 
                rowsPerPage={rowsPerPage} 
                page={page} 
                onChangePage={onChangePage}
                onChangeRowsPerPage={onChangeRowsPerPage} />
         </TableContainer>
    )
}

export default Tabledashboard;