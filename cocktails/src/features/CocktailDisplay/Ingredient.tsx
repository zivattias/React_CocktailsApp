import { styled } from "@mui/material/styles";

const IngredientElement = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: "5px 10px",
    fontSize: "10px",
    fontWeight: "bold",
    marginRight: "0.25em",
    display: "inline-block",
    borderRadius: "15px",
    marginBottom: "0.25em",
}));

export default function Ingredient(props: any) {
    return <IngredientElement>{props.ingredient}</IngredientElement>;
}
