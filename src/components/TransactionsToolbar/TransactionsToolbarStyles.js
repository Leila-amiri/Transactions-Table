import styled from "styled-components";

export const ToolbarContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
  align-items: center;
`;

export const TotalTransactions = styled.div`
  flex: 2;
  text-align: right;
  font-size: 18px;
  color: grey;
  & span {
    font-weight: bold;
    color: #333;
  }
`;
