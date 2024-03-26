import { useState } from "react";

export const useHooksLogin = () => {
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return {
        open,
        handleDrawerOpen,
        handleDrawerClose,
    };
};
