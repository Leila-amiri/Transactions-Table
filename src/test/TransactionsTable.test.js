import React from "react";
import { render, screen } from "@testing-library/react";
import TransactionsTable from "../components/TransactionsTable/TransactionsTable";

describe("TransactionsTable", () => {
  it("renders transaction data correctly", () => {
    const transactions = [
      {
        id: "1",
        status: "complete",
        formattedStatus: "Complete",
        formattedDate: "2021-01-01",
        merchant: "1", // Assuming this is an ID that needs to match the merchants array
        team_member: "John Doe",
        category: "2",
        amount: 100.0,
        gst: 10.0,
        formattedAmount: "$100.00",
        formattedGST: "$10.00",
        budget: "Marketing",
        receipt: true,
        billable: true,
      },
    ];

    const merchants = [
      {
        id: "1",
        name: "Facebook",
      },
    ];

    render(
      <TransactionsTable
        transactions={transactions}
        categories={[]}
        merchants={merchants}
      />
    );

    expect(screen.getByText("Complete")).toBeTruthy();
    expect(screen.getByText("$100.00")).toBeTruthy();
    expect(screen.getByText("Facebook")).toBeTruthy();
  });
});
