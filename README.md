# **Transaction Viewer Application**

The Transaction Viewer Application provides a user-friendly interface for viewing and managing financial transaction data. This application highlights the use of modern React features and styled components to create a clean and efficient user interface.

## **Features**
- **Search Transactions**: Users can quickly filter transactions based on merchant names, categories, amounts, and more.
- **View Transaction Details**: Each transaction's details such as status, date, merchant name, amount, and applicable taxes are neatly displayed.
- **Interactive UI**: Responsive design for desktop and mobile views, ensuring accessibility and ease of use across devices.

## **Components**
This application consists of several key components:

- **`App`**: The main component that initializes and renders the application layout and integrates other components.
- **`TransactionsToolbar`**: Displays the search input and total transaction count, allowing users to filter the transactions displayed in real-time.
- **`SearchInput`**: A reusable input component for handling the filtering of transactions based on user input.
- **`TransactionsTable`**: Renders the transaction data in a tabulated format, showing various attributes of transactions.
- **`Icon`**: A utility component for rendering SVG icons.

## **Hooks**
To manage state and perform operations, the application utilizes custom React hooks:

- **`useSearch`**: Manages the search functionality, updating the list of transactions based on user input.
- **`useTransactionData`**: Processes transaction data, formatting dates, and amounts appropriately for display.

## **Utilities**
Utility functions are used to handle data transformations:

- **`getCategoryName`**: Resolves category names based on category IDs.
- **`getMerchantName`**: Retrieves merchant names from a list of merchants using merchant IDs.
- **`formatDate`**: Formats JavaScript date objects into a more human-readable string.
- **`formatCurrency`**: Formats numerical values into a currency format.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: This project was developed with Node.js version **16.20.2**.

## **Setup Instructions**

1. Clone the repository.
2. Install dependencies: `npm install`
4. Start the application: `npm start`