import React from "react";
import { Buntton as ContainerButton } from "./styles";

function Buntton({children, ... props}){

    return <ContainerButton {...props}>{children}</ContainerButton>
}

export default Buntton