// import { makeStyles } from "@mui/material";
// import { MuiStyledOptions, styled } from "@mui/system";
// import React from "react";
// const StyledPTag = styled("p")(({ tagStyles :  }) => ({
//   fontFamily: 'Montserrat , "sans-serif"',
//   ...tagStyles,
// }));
// const StyledListItem = styled("li")(({ tagStyles }) => ({
//   fontFamily: 'Montserrat , "sans-serif"',
//   textIndent: "-17px",
//   ...tagStyles,
// }));

// const useStyles = makeStyles({
//   tagStyles: (props: { styles: MuiStyledOptions; } ) => props.styles,
// });

// const Text: React.FC<{
//   type: "h1" | "h2" | "p" | "li";
//   text: string;
// }> = ({ type, text, ...styles }) => {
//   if (type === "h1") {
//     return <h1>{text}</h1>;
//   }
//   if (type === "h2") {
//     return <h2>{text}</h2>;
//   }
//   if (type === "li") {
//     return <StyledListItem tagStyles={styles}>{text}</StyledListItem>;
//   }
//   if (type === "p") {
//     return <StyledPTag tagStyles={styles}>{text}</StyledPTag>;
//   }
//   return <div>{text}</div>;
// };

// export default Text;

import React from 'react'

interface indexProps {

}

export const index: React.FC<indexProps> = ({}) => {
    return (<div></div>);
}
export default index