import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Data from "../assets/Bollywood.js";
import "../css/Grid.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#343a40",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {Data.map((item, index) => (
          <div className="h2-grid">
      
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Item>
                artist: <p className="artist">{item.artist}</p>
                album: <p className="album">{item.album}</p>
               year: <p className="year">{item.year}</p>
              </Item>
            </Grid>
          </div>
        ))}
      </Grid>
    </Box>
  );
}
