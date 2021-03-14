import styled from '@emotion/styled'

export const StyledSearchContainer = styled.div`
    width: 40%;
    position: relative;
    /* top: 50%; */
    left: 30%;
`

export const StyledSearchInner = styled.div`
    width: 100%;
    position: relative;
    display: flex;
`

export const StyledSearchInput = styled.input`
    width: 100%;
    border: 3px solid #00B4CC;
    border-right: none;
    padding: 5px;
    height: 20px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9DBFAF;

    focus {
        color: #00B4CC;
    }
`

export const StyledSearchButton = styled.button`
    width: 40px;
    height: 36px;
    border: 1px solid #00B4CC;
    background: #00B4CC;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
`