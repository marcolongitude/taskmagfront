import DialogActions from "@mui/material/DialogActions";

interface Props {
    children: React.ReactNode;
}
export const ModalFooter = ({ children }: Props) => {
    return <DialogActions>{children}</DialogActions>;
};
