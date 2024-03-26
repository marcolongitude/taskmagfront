import { useEffect, useState } from "react";
import { ListSubheader, styled } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { TypographyST } from "@solterra/components";

const MUICollapse = styled(Collapse)`
  & .MuiCollapse-vertical {
    display: flex;
    flex-direction: column;
  }
`;

interface CollapseMenuProps {
  primary: string;
  children: React.ReactNode;
  show: boolean;
}
export const CollapseMeu = ({ primary, children, show }: CollapseMenuProps) => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (!open && !show) {
      setOpen(true);
    }
  }, [show]);

  return (
    <>
      {show && (
        <ListSubheader
          onClick={() => setOpen(!open)}
          sx={{ cursor: "pointer" }}
        >
          <TypographyST variant="body1" color="primary">
            {primary}
          </TypographyST>
        </ListSubheader>
      )}
      <MUICollapse in={open}>{children}</MUICollapse>
    </>
  );
};
