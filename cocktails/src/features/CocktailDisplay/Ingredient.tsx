import { styled } from "@mui/material/styles";

const IngredientElement = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: "5px",
    fontSize: "10px",
    marginLeft: ".25em",
    display: "inline-block",
    borderRadius: "15px",
}));

export default function Ingredient(props: any) {
    return <IngredientElement>{props.ingredient}</IngredientElement>;
}
