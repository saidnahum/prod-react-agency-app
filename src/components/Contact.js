import React from 'react';
import styled from 'styled-components';

import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

const Container = styled.div`
   height: 94%;
   background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`;

const Wrapper = styled.div`
   height: 100%;
   padding: 20px;
   display: flex;
   align-items: center;

   @media only screen and (max-width: 480px){
      flex-direction: column;
   }
`;

const FormContainer = styled.div`
   width: 50%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   @media only screen and (max-width: 480px){
      width: 100%;
   }
`;

const Title = styled.h1`
   margin: 50px;
   margin-top: 0;

   @media only screen and (max-width: 480px){
      margin: 20px;
   }
`;

const Form = styled.form`
   height: 250px;
   display: flex;
   align-items: center;
   justify-content: center;

   @media only screen and (max-width: 480px){
      flex-direction: column;
   }
`;

const LeftForm = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-right: 20px;

   @media only screen and (max-width: 480px){
      height: 50%;
      margin-right: 0;
   }
`;

const Input = styled.input`
   width: 200px;
   padding: 20px;
   
   @media only screen and (max-width: 480px){
      padding: 5px;
   }
`;

const TextArea = styled.textarea`
   width: 200px;
   height: 60%;
   padding: 20px;

   @media only screen and (max-width: 480px){
      padding: 5px;
      margin-top: 20px;
   }
`;

const Button = styled.button`
   border: none;
   padding: 15px;
   background-color: darkblue;
   color: white;
   font-size: 20px;
   border-radius: 10px;
   margin-top: 20px;
   cursor: pointer;

   @media only screen and (max-width: 480px){
      padding: 5px;
      font-size: 14px;
   }
`;

const RightForm = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   @media only screen and (max-width: 480px){
      height: 50%;
   }
`;

const AddresContainer = styled.div`
   width: 50%;
   display: flex;
   flex-direction: column;
   align-items: center;

   @media only screen and (max-width: 480px){
      width: 100%;
      margin-top: 20px;
   }
`;

const AddressItem = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 50px;

   @media only screen and (max-width: 480px){
      margin-bottom: 10px;
   }
`;

const Icon = styled.img`
   width: 30px;
   margin-right: 20px;

   @media only screen and (max-width: 480px){
      width: 15px;
   }
`;

const Text = styled.span`
   font-size: 30px;
   margin-right: 15px;

   @media only screen and (max-width: 480px){
      font-size: 14px;
   }
`;

const Contact = () => {
   return (
      <Container>
         <Wrapper>
            <FormContainer>
               <Title>Questions? <br /> Let's Get In Touch</Title>
               <Form>
                  <LeftForm>
                     <Input placeholder='Your Name' />
                     <Input placeholder='Your Email' />
                     <Input placeholder='Subject' />
                  </LeftForm>

                  <RightForm>
                     <TextArea placeholder='Your message' />
                     <Button>Send</Button>
                  </RightForm>
               </Form>
            </FormContainer>

            <AddresContainer>
               <AddressItem>
                  <Icon src={Map}/>
                  <Text>Av. Universidad 172 CDMX</Text>
               </AddressItem>
               <AddressItem>
                  <Icon src={Phone}/>
                  <Text>+52 5569478414</Text>
                  <Text>+52 5394478414</Text>{" "}
               </AddressItem>
               <AddressItem>
                  <Icon src={Send}/>
                  <Text>contact@pixelweb.ml</Text>
               </AddressItem>
            </AddresContainer>
         </Wrapper>
      </Container>
   )
}

export default Contact;