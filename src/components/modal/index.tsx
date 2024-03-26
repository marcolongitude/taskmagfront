import * as React from "react";
import Box from "@mui/material/Box";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Stack,
} from "@mui/material";
import { ButtonST, TypographyST } from "@solterra/components";
import CloseIcon from "@mui/icons-material/Close";

export interface PayloadGetUser {
    id: number;
    personName: string;
    login: string;
    status: string;
    erros?: string[];
}

interface Props {
    open: boolean;
    onClose: () => void;
    users: PayloadGetUser[] | undefined;
}

interface PropsTypes {
    children: React.ReactNode;
    onClose: () => void;
}

const BootstrapDialogTitle = ({ children, onClose, ...other }: PropsTypes) => {
    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

export default function ModalST({ open, onClose, users }: Props) {
    return (
        <div>
            <Dialog
                fullWidth
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <BootstrapDialogTitle onClose={onClose}>
                    {"Detalhes do usuário"}
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <DialogContentText id="alert-dialog-description">
                        <Stack>
                            {users?.length &&
                                users.map((user) => (
                                    <Box>
                                        <TypographyST
                                            gutterBottom
                                            variant="body2"
                                        >
                                            Nome: {user.personName}
                                        </TypographyST>
                                        <TypographyST
                                            gutterBottom
                                            variant="body2"
                                        >
                                            Usuário: {user.login}
                                        </TypographyST>
                                        <TypographyST
                                            gutterBottom
                                            variant="body2"
                                        >
                                            Status: {user.status}
                                        </TypographyST>
                                    </Box>
                                ))}
                        </Stack>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Box mt={1} mb={1}>
                        <ButtonST
                            disableElevation
                            variant="contained"
                            onClick={onClose}
                            endIcon={<CloseIcon />}
                        >
                            Fechar
                        </ButtonST>
                    </Box>
                </DialogActions>
            </Dialog>
        </div>
    );
}
