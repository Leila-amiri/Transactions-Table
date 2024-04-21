import styled from "styled-components";

export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 40px;

  @media (min-width: 1400px) {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
`;

export const TotalTransactions = styled.div`
  flex: 2;
  text-align: left;
  font-size: 16px;
  margin-top: 20px;
  color: grey;
  & span {
    font-weight: bold;
    color: #333;
  }

  @media (min-width: 1400px) {
    text-align: right;
    margin-top: 0px;
    font-size: 18px;
  }
`;
