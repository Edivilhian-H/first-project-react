import React from "react";
import { ContainerIntens as Container } from "./styles"

function ContainerIntens({children, isBlur}){

    return <Container isBlur={isBlur}>{children}</Container>
}

export default ContainerIntens