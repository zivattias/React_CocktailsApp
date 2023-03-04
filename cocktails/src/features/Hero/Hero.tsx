import heroImage from "../../assets/images/heroImage.webp";
import SearchCocktailBox from "../SearchCocktailBox/SearchCocktailBox";
import { Grid } from "@mui/material";

export default function Hero(props: any): JSX.Element {
    return (
        <Grid
            container
            direction="row"
            sx={{
                flexGrow: 1,
                backgroundImage: `url(${heroImage})`,
                height: "calc(100vh - 132px)",
                maxWidth: "100vw",
                backgroundSize: "cover",
                backgroundPosition: "0% 70%",
                overflow: "hidden",
            }}
        >
            <Grid
                item
                xs={12}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <SearchCocktailBox></SearchCocktailBox>
            </Grid>
        </Grid>
    );
}
