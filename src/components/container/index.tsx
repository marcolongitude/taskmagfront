import { Box, Breadcrumbs, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useLocation } from "react-router-dom";
import { ContainerST, LinkST } from "./styled";
import React from "react";

interface Props {
	children: React.ReactNode;
	title: string;
}

export const Container = ({ title, children }: Props) => {
	const location = useLocation();
	const pathnames = location.pathname.split("/").filter((x) => x);

	return (
		<ContainerST>
			<Breadcrumbs
				separator={<NavigateNextIcon fontSize="small" />}
				aria-label="breadcrumb"
			>
				{pathnames.map((name, index) => {
					const routeTo = `/${pathnames
						.slice(0, index + 1)
						.join("/")}`;
					const isLast = index === pathnames.length - 1;

					return isLast ? (
						<Typography color="text.secondary" key={routeTo}>
							{name}
						</Typography>
					) : (
						<LinkST to={routeTo} key={routeTo}>
							{name}
						</LinkST>
					);
				})}
			</Breadcrumbs>
			<Box marginTop={2} marginBottom={5}>
				<Typography variant="h4" noWrap color="text.primary">
					{title}
				</Typography>
			</Box>
			{children}
		</ContainerST>
	);
};
