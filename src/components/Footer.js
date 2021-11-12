import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   height: 6%;
   background-color: #333;
   color: lightgray;
`;

const Wrapper = styled.div`
   padding: 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media only screen and (max-width: 480px){
      padding: 10px;
   }
`;

const List = styled.ul`
   padding: 0;
   margin: 0;
   list-style: none;
   display: flex;
`;

const ListItem = styled.li`
   margin-right: 20px;
   font-size: 20px;

   @media only screen and (max-width: 480px){
      margin-right: 10px;
      font-size: 12px;
   }
`;

const Copyright = styled.span`
   font-size: 20px;

   @media only screen and (max-width: 480px){
      font-size: 14px;
`;


const Footer = () => {
   return (
      <Container>
         <Wrapper>
            <List>
               <ListItem>Guide</ListItem>
               <ListItem>Support</ListItem>
               <ListItem>API</ListItem>
               <ListItem>Comunity</ListItem>
            </List>

            <Copyright>PixelWeb &copy;</Copyright>
         </Wrapper>
      </Container>
   )
}

export default Footer
