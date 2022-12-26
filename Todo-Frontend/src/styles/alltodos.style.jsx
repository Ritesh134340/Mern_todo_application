import styled from "styled-components";

import {Link} from "react-router-dom";
export const NavLink=styled(Link)`
    text-decoration:none;
    color:green;
    line-height: 35px;
   
`

export const AllTodoWrapper=styled.div`
    width:100%;
    height:80vh;
   .pagination-wrapper{
    width:85%;
    margin:auto;
    border:1px solid transparent;
    text-align: center;
   }
`