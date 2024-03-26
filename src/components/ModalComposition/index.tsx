import { Dialog } from "@mui/material";
import { ModalFooter } from "./ModalFooter";
import { ModalBody } from "./ModalBody";
import { ModalHeader } from "./ModalHeader";

interface Props {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
    sx?: React.CSSProperties;
}

export const ModalComposition = ({
    open,
    onClose,
    children,
    maxWidth,
    sx,
}: Props) => {
    return (
        <Dialog
            maxWidth={maxWidth}
            sx={sx}
            fullWidth
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            {children}
        </Dialog>
    );
};

ModalComposition.Root = ModalComposition;
ModalComposition.Header = ModalHeader;
ModalComposition.Body = ModalBody;
ModalComposition.Footer = ModalFooter;
