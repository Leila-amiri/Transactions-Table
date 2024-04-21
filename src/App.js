import React from "react";
import TransactionsTable from "./components/TransactionsTable/TransactionsTable";
import TransactionsToolbar from "./components/TransactionsToolbar/TransactionsToolbar";
import { PageContainer, Title } from "./AppStyles";

const App = ({ categories, merchants, transactions }) => (
  <PageContainer>
    <Title>Transactions</Title>
    <TransactionsToolbar totalTransactions={transactions.length} />
    <TransactionsTable
      transactions={transactions}
      categories={categories}
      merchants={merchants}
    />
  </PageContainer>
);

export default App;
