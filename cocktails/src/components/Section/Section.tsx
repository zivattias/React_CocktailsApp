import Sheet from "@mui/joy/Sheet";

function Section(props: any): JSX.Element {
    return (
        <Sheet
            sx={{
                width: "100%",
                height: "auto",
            }}
            data-name={props.name}
        >
            {props.children}
        </Sheet>
    );
}

export default Section;
