import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

interface Props {
    children: React.ReactNode;
}

export const ModalBody = ({ children }: Props) => {
    return (
        <DialogContent dividers>
            <DialogContentText id="alert-dialog-description">
                {children}
            </DialogContentText>
        </DialogContent>
    );
};
