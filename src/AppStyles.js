import styled from "styled-components";

export const PageContainer = styled.div`
    max-width: 1400px;
    padding: 24px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    font-family: sans-serif;
    font-size: 32px;
    font-weight: 600;
    text-align: left;
    @media (min-width: 1400px) {
      text-align: center;
    }
`;