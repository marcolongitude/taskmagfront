import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AvatarMenu } from "./components/avatarMenu";
import { RouteMenu } from "../../router/interface";
import { AppBar, Button, Stack, Typography } from "@mui/material";
import { useHooks } from "../../hooks";
import { ErrorHandling } from "../../components/errorHandling";

interface LayoutProps {
	children: React.ReactNode;
	menu: RouteMenu[];
}

export const Layout = (props: LayoutProps) => {
	const { goTo, userData } = useHooks();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	return (
		<Box sx={{ display: "flex" }} flexDirection={"column"}>
			<CssBaseline />
			<AppBar component={"nav"}>
				<Toolbar>
					<Stack
						direction="row"
						justifyContent={"space-between"}
						alignItems={"center"}
						paddingBottom={1}
						paddingTop={1}
						width={"100%"}
					>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: "none" } }}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6">Tarefas MAG</Typography>
						<Box>
							{props.menu.map((category) => (
								<Box
									sx={{
										display: { xs: "none", sm: "block" },
									}}
								>
									{category.menu.map((menu) => (
										<>
											<Button
												onClick={() =>
													goTo(menu.navigate || "")
												}
												sx={{ color: "#fff" }}
											>
												{menu.text}
											</Button>
										</>
									))}
								</Box>
							))}
						</Box>
						<Box
							display="flex"
							alignItems="center"
							flexDirection={"column"}
							gap={1}
						>
							<Box
								display={"flex"}
								alignItems={"center"}
								component={"div"}
							>
								<Typography>{userData.name_users}</Typography>
								<AvatarMenu />
							</Box>
						</Box>
					</Stack>
				</Toolbar>
			</AppBar>
			<Stack
				flex={1}
				justifyContent={"center"}
				alignItems={"center"}
				alignSelf={"center"}
				width={"100%"}
			>
				<ErrorHandling />
				<Box width={"70%"} mt={8}>
					{props.children}
				</Box>
			</Stack>
		</Box>
	);
};
