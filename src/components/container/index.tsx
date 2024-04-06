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
<<<<<<< HEAD
						<Typography color="text.secondary" key={routeTo}>
=======
<<<<<<< HEAD
						<Typography color="text.secondary" key={routeTo}>
=======
						<Typography color="secondary" key={routeTo}>
>>>>>>> main
>>>>>>> branch 'main' of git@github.com:marcolongitude/taskmagfront.git
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
<<<<<<< HEAD
				<Typography variant="h4" noWrap color="text.primary">
=======
<<<<<<< HEAD
				<Typography variant="h4" noWrap color="text.primary">
=======
				<Typography variant="h4" noWrap color="secondary">
>>>>>>> main
>>>>>>> branch 'main' of git@github.com:marcolongitude/taskmagfront.git
					{title}
				</Typography>
			</Box>
			{children}
		</ContainerST>
	);
};
