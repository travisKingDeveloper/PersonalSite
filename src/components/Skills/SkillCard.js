import {Box, CircularProgress, CircularProgressLabel} from "@chakra-ui/react";

export default function ({ skillPercent }) {
    return <Box p={5} shadow='md' borderWidth="1px" width="180px">
        <CircularProgress value={skillPercent}>
            <CircularProgressLabel>{skillPercent}%</CircularProgressLabel>
        </CircularProgress>
    </Box>

}
