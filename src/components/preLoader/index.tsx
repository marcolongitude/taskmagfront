import Box from "@mui/material/Box";
import { PreLoaderST } from "@solterra/components";
import LogoSolTerra from "../../assets/logoSolterra.png";

interface Props {
    loading: boolean;
}

export const PreLoader = ({ loading }: Props) => {
    return (
        <Box
            width={"100%"}
            height={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            sx={{
                position: "fixed",
                right: 0,
                bottom: 0,
                top: 0,
                left: 0,
                zIndex: 1201,
                width: "100%",
                height: "100%",
                backdropFilter: "blur(4px)",
            }}
        >
            <Box>
                <img
                    src={LogoSolTerra}
                    style={{
                        width: "170px",
                        height: "170px",
                        objectFit: "cover",
                        background: "transparent",
                        marginBottom: "215px",
                    }}
                />
            </Box>
            <Box>
                <PreLoaderST open={loading} />
            </Box>
        </Box>
    );
};
