import React from "react"
import { StyledDashboard } from "./styled/StyledDashboard"


export const Dashboard: React.FC = ({children}) => {
    return <StyledDashboard>
        {children}
    </StyledDashboard>
}