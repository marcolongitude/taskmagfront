import React from "react";
import { DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TypographyST } from "@solterra/components";

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

interface Props {
	onClose: () => void;
	title: string;
}

export const ModalHeader = ({ onClose, title }: Props) => {
	return (
		<BootstrapDialogTitle onClose={onClose}>
			<TypographyST variant="h6" gutterBottom>
				{title}
			</TypographyST>
		</BootstrapDialogTitle>
	);
};
