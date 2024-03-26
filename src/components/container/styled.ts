import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const ContainerST = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const LinkST = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: normal;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #3c4153;
    font-style: italic;
  }
`;
