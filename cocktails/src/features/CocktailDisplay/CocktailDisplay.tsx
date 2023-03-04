import { Typography, Box } from "@mui/material";
import Ingredient from "./Ingredient";

export default function CocktailDisplay(props: any) {
    const filteredKeys = Object.keys(props.cocktailData).filter((key) => {
        return (
            key.includes("strIngredient") && props.cocktailData[key] !== null
        );
    });

    const filteredValues = filteredKeys.map((key) => {
        return props.cocktailData[key];
    });

    return (
        <Box>
            <Typography>{props.cocktailData["strDrink"]}</Typography>
            {filteredValues.map((ingredient) => <Ingredient ingredient={ingredient}></Ingredient>)}
        </Box>
    );
}
