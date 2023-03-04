import { Stack, Typography } from "@mui/material";

function Navbar(): JSX.Element {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
            sx={{
                height: "100px",
                backgroundColor: "rgba(9, 9, 13, 0.9)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            }}
            py="1em"
            px="3em"
        >
            <Typography color="common.white" variant="h2">On The Rocks</Typography>
            <Typography color="common.white" variant="h5">
                Cocktails, Ingredients & Recipes
            </Typography>
        </Stack>
    );
}

export default Navbar;
