import React from 'react'
import { Link } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from "styled-components";

export const Header = () => {
    return (
        <HeaderWrapper>
            <AppName onClick={() => window.location.reload()}>
                <span>OMDB Movie Search</span>
            </AppName>
            <div>
                <LinkWrapper href="https://github.com/hudsonmcmanus/OMDB-Movie-Search" target="_blank" sx={{ m: 20 }}>
                    <Github sx={{ color: "white" }} fontSize="large" />
                </LinkWrapper>
                <LinkWrapper href="https://www.linkedin.com/in/hudsonmcmanus/" target="_blank" sx={{ m: 20 }}>
                    <LinkedIn
                        sx={{ color: "white" }} fontSize="large" />
                </LinkWrapper>
            </div>
        </HeaderWrapper>
    )
}

const LinkWrapper = styled(Link)`
  margin-right: 50px !important;

  @media (max-width: 768px) {
    margin-right: 25px !important;
  }`;

const Github = styled(GitHubIcon)`
  &:hover {
      color: rgb(26, 29, 41);
  }`;

const LinkedIn = styled(LinkedInIcon)`
  &:hover {
      color: rgb(26, 29, 41);
  }`;

const AppName = styled.div`
  cursor: pointer;
  color: #ccc;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  content: "hello";

  &:hover {
    color: rgb(26, 29, 41);
  };

  @media (max-width: 768px) {
     span {
      display: none;
    };
     &:after {
      content: 'Moive Search';
    };
  };
`;

const HeaderWrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #090b13ed;
  color: #ccc;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  font-size: 25px;
  font-weight: bold;
`;
