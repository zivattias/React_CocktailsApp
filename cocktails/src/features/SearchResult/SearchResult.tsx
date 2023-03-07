import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CocktailDisplay from "../CocktailDisplay/CocktailDisplay";
import { Link } from "react-router-dom";

const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 500,
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    overflowY: "hidden",
};

export default function SearchResult(props: any) {
    const results = props.results;
    console.log(results);
    return (
        <div>
            <Modal
                open={props.open}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box
                    sx={{
                        ...style,
                        backdropFilter: "blur(5px)",
                        WebkitBackdropFilter: "blur(5px)",
                        background: "rgba(255, 255, 255, 0.5)",
                        borderRadius: "25px",
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.16)",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{ marginY: "0.5em", fontWeight: "bold" }}
                    >
                        Search results for "{props.query}":
                    </Typography>
                    <Box
                        sx={{
                            overflowY: "auto",
                            height: "80%",
                            padding: "0.5em",
                        }}
                    >
                        {results.map((result: any) => (
                            <CocktailDisplay
                                key={result["idDrink"]}
                                cocktailData={result}
                            ></CocktailDisplay>
                        ))}
                    </Box>
                    <Button
                        component={Link}
                        to={"/"}
                        variant="contained"
                        color="error"
                        sx={{ marginTop: "1.5em" }}
                    >
                        Close
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
