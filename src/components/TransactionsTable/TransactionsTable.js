import React from "react";
import PropTypes from "prop-types";
import useTransactionData from "../../hooks/useTransactionData";
import {
  StyledTable,
  StyledHeadCell,
  StyledRow,
  StyledCell,
  StatusBadge,
} from "./TransactionsTableStyles";

function TransactionsTable({ transactions, categories, merchants }) {
  const data = useTransactionData(transactions, categories, merchants);
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledHeadCell>Status</StyledHeadCell>
          <StyledHeadCell>Date</StyledHeadCell>
          <StyledHeadCell>Merchant Name</StyledHeadCell>
          <StyledHeadCell>Team Member</StyledHeadCell>
          <StyledHeadCell>Category</StyledHeadCell>
          <StyledHeadCell>Amount</StyledHeadCell>
          <StyledHeadCell>GST</StyledHeadCell>
          <StyledHeadCell>Budget</StyledHeadCell>
          <StyledHeadCell>Receipt</StyledHeadCell>
          <StyledHeadCell>Billable</StyledHeadCell>
        </tr>
      </thead>
      <tbody>
        {data.map((transaction) => (
          <StyledRow key={transaction.id}>
            <StyledCell>
              <StatusBadge status={transaction.status}>
                {transaction.formattedStatus}
              </StatusBadge>
            </StyledCell>
            <StyledCell>{transaction.formattedDate}</StyledCell>
            <StyledCell>{transaction.merchantName}</StyledCell>
            <StyledCell>{transaction.team_member}</StyledCell>
            <StyledCell>{transaction.categoryName}</StyledCell>
            <StyledCell>{transaction.formattedAmount}</StyledCell>
            <StyledCell>{transaction.formattedGST}</StyledCell>
            <StyledCell>{transaction.budget}</StyledCell>
            <StyledCell>
              <input type="checkbox" checked={transaction.receipt} readOnly />
            </StyledCell>
            <StyledCell>
              <input type="checkbox" checked={transaction.billable} />
            </StyledCell>
          </StyledRow>
        ))}
      </tbody>
    </StyledTable>
  );
}

TransactionsTable.propTypes = {
  transactions: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  merchants: PropTypes.array.isRequired,
};

export default TransactionsTable;
