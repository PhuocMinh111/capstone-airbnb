import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styled from "styled-components";
export default function Loader() {
  return (
    <Wrapper>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
