import { useMemo } from "react";
import {
  getCategoryName,
  getMerchantName,
  formatDate,
  formatCurrency,
} from "../utils/dataHelpers";

const useTransactionData = (transactions, categories, merchants) => {
  return useMemo(() => {
    return transactions.map((transaction) => {
      const formattedStatus = transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1);
      return {
        ...transaction,
        formattedStatus,
        merchantName: getMerchantName(merchants, transaction.merchant),
        categoryName: getCategoryName(categories, transaction.category),
        formattedDate: formatDate(transaction.date),
        formattedAmount: formatCurrency(transaction.amount),
        formattedGST: formatCurrency(transaction.gst),
      };
    });
  }, [transactions, categories, merchants]);
};

export default useTransactionData;