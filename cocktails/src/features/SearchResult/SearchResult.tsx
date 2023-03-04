import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CocktailDisplay from "../CocktailDisplay/CocktailDisplay";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function SearchResults(props: any) {
    const results = props.results;
    return (
        <div>
            <Modal
                open={props.open}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style }}>
                    <Typography>Search results for "{props.query}"</Typography>
                    {results.map((result: any) => (
                        <CocktailDisplay
                            key={result["idDrink"]}
                            cocktailData={result}
                        ></CocktailDisplay>
                    ))}
                    <Button onClick={() => props.handleClose(false)}>
                        Close
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
