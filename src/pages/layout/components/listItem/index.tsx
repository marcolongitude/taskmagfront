import { TypographyST } from "@solterra/components";
import {
  MUIListItem,
  MUIListItemButton,
  MUIListItemIcon,
  MUIListItemText,
} from "./styled";

interface ListItemProps {
  text: string;
  icon: React.ReactNode;
  navigate: () => void;
  selected: boolean;
  open: boolean;
  badge?: string;
}
export const ListItens = ({
  text,
  icon,
  navigate,
  selected,
  open,
}: ListItemProps) => {
  return (
    <MUIListItem>
      <MUIListItemButton
        open={true}
        selected={selected}
        onClick={() => navigate()}
      >
        <MUIListItemIcon>{icon}</MUIListItemIcon>
        <MUIListItemText
          primary={
            <TypographyST variant="body2" color="primary">
              {text}
            </TypographyST>
          }
          open={open}
        />
      </MUIListItemButton>
    </MUIListItem>
  );
};
