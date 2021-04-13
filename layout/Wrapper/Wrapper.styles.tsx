import styled from "styled-components";

export const WrapperStyles = styled.div`
  display: grid;
  height: 100vh;
   grid-template-rows: auto 1fr auto;
  //grid-template-columns: 5rem 1fr 3rem;
  grid-template-areas:
    "header header header" 
    "main main main" 
    "footer footer footer";
`;