import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import {ToolbarContainer, TotalTransactions} from './TransactionsToolbarStyles';

const TransactionsToolbar = ({ totalTransactions }) => {
    return (
      <ToolbarContainer>
        <SearchInput />
        <TotalTransactions>
          Total Transactions: <span>{totalTransactions}</span>
        </TotalTransactions>
      </ToolbarContainer>
    );
  };

  export default TransactionsToolbar;