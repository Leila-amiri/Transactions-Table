import React from "react";
import TransactionsTable from "./components/TransactionsTable/TransactionsTable";
import TransactionsToolbar from "./components/TransactionsToolbar/TransactionsToolbar";
import { PageContainer, Title } from "./AppStyles";
import useSearch from "./hooks/useSearch";

const App = ({ categories, merchants, transactionsData }) => {
  const { searchTerm, handleSearch, filteredTransactions } = useSearch(transactionsData, merchants, categories);

  return (
    <PageContainer>
      <Title>Transactions</Title>
      <TransactionsToolbar
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        totalTransactions={filteredTransactions.length}
      />
      <TransactionsTable
        transactions={filteredTransactions}
        categories={categories}
        merchants={merchants}
      />
    </PageContainer>
  );
};

export default App;