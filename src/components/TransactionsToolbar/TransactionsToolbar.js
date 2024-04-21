import React from "react";
import PropTypes from "prop-types";
import SearchInput from "../SearchInput/SearchInput";
import {
  ToolbarContainer,
  TotalTransactions,
} from "./TransactionsToolbarStyles";

const TransactionsToolbar = ({ searchTerm, handleSearch, totalTransactions }) => {
  return (
    <ToolbarContainer>
      <SearchInput searchTerm={searchTerm} onChange={handleSearch} />
      <TotalTransactions>
        Total Transactions: <span>{totalTransactions}</span>
      </TotalTransactions>
    </ToolbarContainer>
  );
};

TransactionsToolbar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  totalTransactions: PropTypes.number.isRequired,
};

export default TransactionsToolbar;