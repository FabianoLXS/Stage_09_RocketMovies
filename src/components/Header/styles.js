import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  padding: 0 80px;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-left: 9px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    
    line-height: 24px;

    span {
      display: flex;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;
`

export const Search = styled.div`
  padding: 24px;
  width: 70%;
`
export const Input = styled.div`

`

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`