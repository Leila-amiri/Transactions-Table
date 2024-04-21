import { useState, useCallback } from "react";
import { getCategoryName, getMerchantName } from "../utils/dataHelpers";

// Custom hook for managing and filtering transaction data based on a search term.
const useSearch = (transactionsData, merchants, categories) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactionsData);

  // Memoized function to filter transactions based on various fields.
  const filterTransactions = useCallback(
    (term) => {
      if (!term) return transactionsData;

      return transactionsData.filter((transaction) => {
        const merchantName = getMerchantName(merchants,transaction.merchant)?.toLowerCase();
        const teamMemberName = transaction.team_member.toLowerCase();
        const categoryName = getCategoryName(categories,transaction.category)?.toLowerCase();
        const budgetName = transaction.budget.toLowerCase();

        return (
          merchantName.includes(term) ||
          teamMemberName.includes(term) ||
          categoryName.includes(term) ||
          budgetName.includes(term) ||
          transaction.amount.toString().includes(term) ||
          transaction.gst.toString().includes(term)
        );
      });
    },
    [transactionsData, merchants, categories]
  );

  // Handles updates to the search term and filters transactions accordingly.
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const results = filterTransactions(term);
    setFilteredTransactions(results);
  };

  return {
    searchTerm,
    setSearchTerm,
    filteredTransactions,
    handleSearch,
  };
};

export default useSearch;