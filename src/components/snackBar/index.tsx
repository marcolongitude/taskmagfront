import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Box } from "@mui/material";

interface Props {
  message: string;
  open: boolean;
  color?: "success" | "info" | "warning" | "error";
  variant?: "filled" | "standard" | "outlined";
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function MessageStack({
  message,
  variant = "filled",
  color = "success",
  open,
}: Props) {
  return (
    <Box sx={{ zIndex: "1100" }}>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert variant={variant} severity={color} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
