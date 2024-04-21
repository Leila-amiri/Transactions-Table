import React from "react";
import App from "../App";
import { render, screen } from "@testing-library/react";
import useSearch from "../hooks/useSearch";
import TransactionsToolbar from "../components/TransactionsToolbar/TransactionsToolbar";
import TransactionsTable from "../components/TransactionsTable/TransactionsTable";
import transactionsData from "../data/transactions.json";

jest.mock("../hooks/useSearch");
jest.mock("../components/TransactionsToolbar/TransactionsToolbar");
jest.mock("../components/TransactionsTable/TransactionsTable");

describe("App Component Tests", () => {
  beforeEach(() => {
    useSearch.mockReturnValue({
      searchTerm: "",
      handleSearch: jest.fn(),
      filteredTransactions: transactionsData,
    });

    TransactionsToolbar.mockImplementation(
      ({ searchTerm, handleSearch, totalTransactions }) => (
        <div>TransactionsToolbar - Total Transactions: {totalTransactions}</div>
      )
    );

    TransactionsTable.mockImplementation(({ transactions }) => (
      <table>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.formattedStatus || tx.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders the title and transactions components correctly", () => {
    render(
      <App categories={[]} merchants={[]} transactions={transactionsData} />
    );
    const heading = screen.getByRole("heading", { name: "Transactions" });
    const transactionsToolbar = screen.getByText(
      /TransactionsToolbar - Total Transactions:/
    );

    expect(heading).toBeTruthy();
    expect(transactionsToolbar).toBeTruthy();
  });

  // Example for detailed transaction status checks
  describe("Transaction Status Integration Tests", () => {
    it("should show transaction status when it is complete", () => {
      const completeTransactions = transactionsData.filter(
        ({ status }) => status === "complete"
      );
      useSearch.mockReturnValue({
        searchTerm: "",
        handleSearch: jest.fn(),
        filteredTransactions: completeTransactions,
      });
      render(
        <App categories={[]} merchants={[]} transactions={transactionsData} />
      );
      completeTransactions.forEach((tx) => {
        const statusTexts = screen.getAllByText("Complete", { exact: false });
        expect(statusTexts.length).toBeGreaterThan(0);
      });
    });

    it("should show transaction status when it is incomplete", () => {
      const incompleteTransactions = transactionsData.filter(
        ({ status }) => status === "incomplete"
      );
      useSearch.mockReturnValue({
        searchTerm: "",
        handleSearch: jest.fn(),
        filteredTransactions: incompleteTransactions,
      });
      render(
        <App categories={[]} merchants={[]} transactions={transactionsData} />
      );
      const statusTexts = screen.getAllByText("Incomplete", { exact: false });
      expect(statusTexts.length).toBe(incompleteTransactions.length); // Check if the count matches
    });
  });
});
