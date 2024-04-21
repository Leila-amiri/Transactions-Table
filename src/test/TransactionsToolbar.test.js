import React from "react";
import { render, screen } from "@testing-library/react";
import TransactionsToolbar from "../components/TransactionsToolbar/TransactionsToolbar";

describe("TransactionsToolbar", () => {
  it("renders SearchInput and displays total transactions", () => {
    render(
      <TransactionsToolbar
        searchTerm=""
        handleSearch={() => {}}
        totalTransactions={5}
      />
    );

    expect(screen.getByRole("searchbox")).toBeTruthy(); // Check if the search input is rendered

    expect(screen.getByText("Total Transactions:")).toBeTruthy();

    // Check dynamic text part within <span>
    expect(screen.getByText("5")).toBeTruthy();
  });
});