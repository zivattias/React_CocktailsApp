import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import Ingredient from "./Ingredient";

export default function CocktailDisplay(props: any) {
    const [isHovered, setIsHovered] = useState(false);

    const filteredKeys = Object.keys(props.cocktailData).filter((key) => {
        return (
            key.includes("strIngredient") && props.cocktailData[key] !== null
        );
    });

    const filteredValues = filteredKeys.map((key) => {
        return props.cocktailData[key];
    });

    const handleMouse = () => {
        setIsHovered(!isHovered);
    };

    return (
        <Box
            sx={{
                padding: "1em",
                marginBottom: "0.75em",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                background: "rgba(255, 255, 255, 0.25)",
                borderRadius: "25px",
                transition:
                    "transform 0.1s ease-in-out, box-shadow 0.15s ease-in-out",
                boxShadow: isHovered
                    ? "0px 10px 15px rgba(0, 0, 0, 0.3)"
                    : "none",
                transform: isHovered ? "translateY(-5px)" : "none",
            }}
            onMouseEnter={handleMouse}
            onMouseLeave={handleMouse}
        >
            <Link
                style={{ textDecoration: "none" }}
                to={`/cocktail/${props.cocktailData["strDrink"].toLowerCase()}`}
                state={{
                    cocktailData: props.cocktailData,
                    ingredients: filteredValues,
                }}
            >
                <Typography
                    color="common.black"
                    variant="h6"
                    sx={{
                        display: "block",
                        marginBottom: "0.25em",
                        marginRight: "auto",
                        width: "auto",
                    }}
                >
                    {props.cocktailData["strDrink"]}
                </Typography>
            </Link>
            {filteredValues.map((ingredient) => (
                <Ingredient
                    key={ingredient}
                    ingredient={ingredient}
                ></Ingredient>
            ))}
        </Box>
    );
}
