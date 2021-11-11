import React, { useState } from 'react';
import styled from 'styled-components';
import How from '../img/how.png';
import MiniCard from './MiniCard';
import Icon from '../img/play.png';

const Container = styled.div`
   display: flex;
   height: 100%;
   align-items: center;
`;

const Left = styled.div`
   width: 50%;
   position: relative;
`;

const Image = styled.img`
   display: ${({open}) => open && "none"};
   width: 66%;
   margin-top: 155px;
   margin-left: 200px;
`;

const Video = styled.video`
   display: ${({open}) => !open && "none"};
   height: 300px;
   position: absolute;
   top: 0;
   bottom: 0;
   right: 0;
   margin: auto;
`;

const Right = styled.div`
   width: 30%;
`;

const Wrapper = styled.div`
   padding: 50px;
   display: flex;
   flex-direction: column;
`;

const Title = styled.h1`

`;

const Desc = styled.p`
   font-size: 20px;
   margin-top: 20px;
   color: #555;
`;

const CardContainer = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 50px;
`;

const Button = styled.button`
   width: 180px;
   border: none;
   border-radius: 10px;
   background-color: darkblue;
   color: white;
   font-size: 20px;
   padding: 15px;
   margin-top: 50px;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;

`;

const IconPlay = styled.img`
   width: 20px;
   margin-right: 10px;
`;

const Service = () => {

   const [open, setOpen] = useState(false);

   return (
      <Container>
         <Left>
            <Image src={How} open={open}/>
            <Video 
               open={open}
               autoPlay
               loop
               controls
               src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
            />
         </Left>

         <Right>
            <Wrapper>
               <Title>Simple process to start</Title>
               <Desc>
                  We provide digital experience services to startups and small
                  businesses to looking for a partner of their digital media, design &
                  development, lead generation and communications requirents. We work
                  with you, not for you. Although we have a great resources.
               </Desc>

               <CardContainer>
                  <MiniCard/>
                  <MiniCard/>
                  <MiniCard/>
               </CardContainer>
               <Button onClick={() => setOpen(true)}>
                  <IconPlay src={Icon}/> How it works
               </Button>
            </Wrapper>
         </Right>
      </Container>
   )
}

export default Service;
