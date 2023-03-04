import { Box, Typography, Button, IconButton, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function DetailedCocktail(props: any): JSX.Element {
    const cocktailData = props.cocktailData;
    const ingredients = props.ingredients;
    console.log(ingredients);
    return (
        // <Box
        //     sx={{
        //         padding: "1em",
        //         margin: "auto",
        //         width: "75%",
        //         height: "80vh",
        //         border: "1px solid rgba(255, 255, 255, 0.16)",
        //         background: "rgba(255, 255, 255, 0.5)",
        //         borderRadius: "25px",
        //     }}
        // >
        //     <Typography variant="h2">{cocktailData.strDrink}</Typography>
        //     {ingredients.map((ingredient: string) => {
        //         return <Typography>{ingredient}</Typography>;
        //     })}
        // </Box>
        <Box
            sx={{
                padding: "1em",
                margin: "auto",
                width: "75%",
                height: "80vh",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                background: "rgba(255, 255, 255, 0.5)",
                borderRadius: "25px",
            }}
        >
            <Typography variant="h2">{cocktailData.strDrink}</Typography>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "1em",
                    marginTop: "2em",
                }}
            >
                {ingredients.map((ingredient: string, index: number) => {
                    const measure = cocktailData[`strMeasure${index + 1}`];
                    return (
                        <Box
                            key={ingredient}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "0.5em 1em",
                                border: "1px solid rgba(255, 255, 255, 0.16)",
                                background: "rgba(255, 255, 255, 0.25)",
                                borderRadius: "25px",
                            }}
                        >
                            <Typography>{ingredient}</Typography>
                            <Typography>{measure}</Typography>
                        </Box>
                    );
                })}
            </Box>
            <Typography
                variant="body1"
                sx={{ marginTop: "2em", marginBottom: "2em" }}
            >
                <span style={{ fontWeight: "bold" }}>Instructions:</span>{" "}
                {cocktailData.strInstructions}
            </Typography>
            <img
                src={cocktailData.strDrinkThumb}
                alt={cocktailData.strDrink}
                style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "30%",
                }}
            />
            {cocktailData.strVideo && (
                <Button
                    color="success"
                    variant="contained"
                    component={Link}
                    href={cocktailData.strVideo}
                    sx={{
                        marginRight: "1em",
                    }}
                >
                    Make {cocktailData.strDrink}
                </Button>
            )}
            <Button variant="contained" component={RouterLink} to="/">
                Home
            </Button>
        </Box>
    );
}
