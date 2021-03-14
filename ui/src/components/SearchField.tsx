import React, { ChangeEvent } from "react"
import { StyledSearchButton, StyledSearchContainer, StyledSearchInner, StyledSearchInput } from "./styled/StyledSearchField"

export interface SearchFieldProps {
    onChange: (ev: ChangeEvent<HTMLInputElement>) => void
    value: string | undefined
}

export const SearchField: React.FC<SearchFieldProps> = ({onChange, value}) => {
    return (
        <StyledSearchContainer>
            <StyledSearchInner>
                <StyledSearchInput type="text" placeholder="What are you looking for?" onChange={onChange} value={value} />
                <StyledSearchButton type="submit">
                    <i className="fa fa-search"></i>
                </StyledSearchButton>
            </StyledSearchInner>
        </StyledSearchContainer>
    )
}