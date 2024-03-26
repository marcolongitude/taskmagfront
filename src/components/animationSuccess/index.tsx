import { Box, LinearProgress, Stack } from "@mui/material";
import { TypographyST } from "@solterra/components";
import Lottie from "lottie-react";
import Success from "../../assets/animations/json/Success.json";
import { useHooks } from "../../hooks";
import { useEffect } from "react";

interface Props {
    urlRedirect?: string;
    seconds?: number;
}

export const AnimationSuccess = ({ urlRedirect = "", seconds = 3 }: Props) => {
    const { goTo } = useHooks();

    useEffect(() => {
        setTimeout(() => {
            goTo(urlRedirect);
        }, seconds * 1000);
    }, [goTo, urlRedirect, seconds]);

    return (
        <>
            <LinearProgress color="success" />
            <Stack
                mt={6}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <TypographyST>Salvando dados</TypographyST>
                <Box width={250}>
                    <Lottie animationData={Success} loop={true} />
                </Box>
            </Stack>
        </>
    );
};
