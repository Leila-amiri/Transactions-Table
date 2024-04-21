import styled from "styled-components";

const statusColors = {
  complete: {
    color: "#005f00",
    background: "#e1f4cb", // Light green background for 'complete' status
  },
  pending: {
    color: "#252424",
    background: "#b6b3b3", // Light grey background for 'pending' status
  },
  exported: {
    color: "#011c32",
    background: "#c3e0f7", // Light blue background for 'exported' status
  },
  incomplete: {
    color: "#542901",
    background: "#fac8a4", // Light red background for 'incomplete' status
  },
};

export const StyledTable = styled.table`
  width: 100%;
  border: 1px solid #ddd;
  border-collapse: collapse;
  margin-top: 20px;
  padding: 0 20px;
  white-space: nowrap;
  box-shadow: rgba(50, 50, 93, 0.1) 0px 7px 14px 0px, rgba(0, 0, 0, 0.07) 0px 3px 6px 0px;
  overflow-x: auto;
`;

export const StyledHeadCell = styled.th`
  background-color: #f3f3f3;
  color: rgb(19, 31, 46);
  font-size: 18px;
  font-weight: 500;
  padding: 12px 15px;
  text-align: left;
`;

export const StyledRow = styled.tr`
  &:hover {
    background-color: #f9f9f9;
  }
`;

export const StyledCell = styled.td`
  padding: 12px 15px;
  border: 1px solid #ddd;
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 5px 15px;
  border-radius: 5px;
  color: ${({ status }) => statusColors[status]?.color || "#000"}; // Default to black if undefined
  background-color: ${({ status }) => statusColors[status]?.background || "#fff"}; // Default to white if undefined
`;