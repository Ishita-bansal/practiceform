import  React from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux";
import { TablePagination} from "@mui/material";
import {useState} from "react";
import { styled } from "@mui/system";

const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
   
      '& .MuiTablePagination-toolbar': {
        '& > p': {
          display: "flex",
          justifyContent: "space-between",
          fontSize: "1.15rem",
          paddingTop: "10px",
          color: "grey",
          fontWeight: 600,
        },
      },
      '& .MuiTablePagination-select	':{
         backgroundColor:'grey'
      }
 }));
function Tabledashboard(){
     const [page,setPage] = useState(0);
     const [rowsPerPage , setrowsPerPage] = useState(5);

    const userdetails = useSelector((state)=>state?.Registerreduce) ;
     console.log("useDetails====>",userdetails);
     const userdata = userdetails.registerUser || [];

     console.log("user data =====>",userdata);
    
      const onChangePage = (event , nextPage)=>{
         console.log('nextPage==>',nextPage)
        setPage(nextPage)
      }

      const onChangeRowsPerPage = (event) =>{
         console.log('event==>',event)
         // setrowsPerPage(parseInt(event.target.value, 10));

      //   console.log("target=====>",event.target.value);
      //    setrowsPerPage(event.target.value);
      }
     return(
      <div style={{ height:"100vh",paddingTop:"15px", backgroundColor:"#3f5efb", display:"flex",justifyContent:"center",alignItems:"flex-start"}}>
         <TableContainer component={Paper} style={{width:"1600px",display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
               <Table >
                  <TableHead>
                     <TableRow>
                         <TableCell style={{fontSize:"20px",fontWeight:"bolder"}} align="center">Name</TableCell>
                         <TableCell style={{fontSize:"20px",fontWeight:"bolder"}} align="center">Email</TableCell>
                         <TableCell style={{fontSize:"20px",fontWeight:"bolder"}} align="center">Password</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                  {userdata.slice(page * rowsPerPage ,page * rowsPerPage + rowsPerPage).map((user) => (
                     <TableRow key={user.email}>
                        <TableCell style={{fontSize:"15px",fontWeight:"bolder"}} align="center">{user.username}</TableCell>
                        <TableCell style={{fontSize:"15px",fontWeight:"bolder"}}  align="center">{user.email}</TableCell>
                        <TableCell style={{fontSize:"15px",fontWeight:"bolder"}}  align="center">{user.password}</TableCell>
                    </TableRow>
                        ))}
                  </TableBody>
               </Table>
            <div>
            <StyledTablePagination 
               rowsPerPageOptions={[2,5,10,15,25]}
                count={userdata.length} 
                rowsPerPage={rowsPerPage} 
                page={page} 
                onPageChange={onChangePage}
               //  onChangeRowsPerPage={(event,value)=>console.log(event,value)}
            //  onChangeRowsPerPage = {onChangeRowsPerPage} 
                onChange={(event, value) => console.log(value)}

                />
           </div>
         </TableContainer>
      </div>
    )
}

export default Tabledashboard;