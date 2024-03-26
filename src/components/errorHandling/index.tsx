import { useSelector } from "react-redux";
import { RootState } from "../../features";
import React, { useEffect } from "react";
import {
    AppBar,
    Box,
    Dialog,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Slide,
    Toolbar,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export const ErrorHandling = () => {
    const error = useSelector((state: RootState) => state.error.response);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (error.data.errors.length > 0) {
            setOpen(true);
        }
    }, [error]);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            fullScreen
            sx={{ height: "40%" }}
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: "relative" }} color="warning">
                <Toolbar variant="regular" sx={{ width: "100%" }}>
                    <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                    >
                        Ops! Algo deu errado!
                    </Typography>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <List>
                {error.data.errors.map((item, key) => (
                    <Box key={key}>
                        <ListItem>
                            <ListItemText primary="Erro" secondary={item} />
                        </ListItem>
                        <Divider />
                    </Box>
                ))}
            </List>
        </Dialog>
    );
};
