import styled from "@emotion/styled";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge as MuiBadge,
} from "@mui/material";
import { blue } from "@mui/material/colors";

export const MUIListItem = styled(ListItem)`
  padding: 0px 0px !important;
`;

export const MUIList = styled(List)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const MUIListItemButton = styled(ListItemButton)<{ open: boolean }>`
  border-radius: 8px !important;
  display: flex;
  gap: 6px;
  min-height: 44px;
  &:hover {
    border-radius: 8px;
  }
  & .MuiTouchRipple-root .MuiTouchRipple-child {
    background-color: ${blue[500]};
  }
  &.Mui-selected {
    background-color: ${blue[50]};
  }
`;
export const MUIListItemIcon = styled(ListItemIcon)`
  margin-right: 0px !important;
  margin-left: 4px !important;
  min-width: 0px !important;
`;

export const MUIListItemText = styled(ListItemText)<{ open: boolean }>`
  // margin: 0;
  display: ${(props) => (props.open ? "block" : "none")};
`;
export const Badge = styled(MuiBadge)<{ open: boolean }>`
  bottom: ${(props) => (props.open ? "0px" : "22px")};
`;
