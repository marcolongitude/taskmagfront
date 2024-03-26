import { Grid, Stack } from "@mui/material";
import { FormLoginST } from "./components/formLogin";
import { PreLoader } from "../../components/preLoader";
import { useHooks } from "../../hooks";
import { useSubmit } from "./hooks/useSubmit";
import ImageBackLogin from "../../assets/images/Project_69-06.jpg";

export const LoginST = () => {
	const { goTo } = useHooks();
	const { isLoading, submit } = useSubmit({ goTo });

	return (
		<>
			{isLoading && <PreLoader loading={isLoading} />}
			{!isLoading && (
				<Grid
					width={"100%"}
					height={"100vh"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					container
					rowSpacing={2}
					direction={{
						xs: "column",
						sm: "row",
						md: "row",
						lg: "row",
						xl: "row",
					}}
				>
					<Grid item xs={8}>
						<Stack justifyContent={"center"} alignItems={"center"}>
							<img
								src={ImageBackLogin}
								style={{
									width: "850px",
									height: "850px",
									objectFit: "contain",
									background: "transparent",
								}}
							/>
						</Stack>
					</Grid>
					<Grid item xs={4}>
						<FormLoginST submit={submit} />
					</Grid>
				</Grid>
			)}
		</>
	);
};
