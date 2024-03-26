import { Box, Typography } from "@mui/material";

type Props = {
	title: string;
	value: string | number;
	fullWidth?: boolean;
};

export const FieldTextData = ({ title, value, fullWidth = false }: Props) => {
	return (
		<Box
			width={"100%"}
			display={"flex"}
			justifyContent={fullWidth ? "flex-start" : "space-between"}
			alignItems={"center"}
		>
			<Typography
				sx={{ marginRight: "8px" }}
				variant="body1"
				color="text.primary"
				component="span"
			>
				{title}:
			</Typography>
			<Typography variant="body1" color="text.secondary" component="span">
				{value}
			</Typography>
		</Box>
	);
};
