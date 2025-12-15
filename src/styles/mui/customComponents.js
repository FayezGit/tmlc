import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const MyCard = styled(Card)(({ theme }) => ({
  borderRadius: "25px",
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0 0 8px 4px #00000010",
}));

export const CustomCard = ({ name, image, description }) => (
  <MyCard sx={{}}>
    <CardMedia sx={{ height: 300 }} image={image} title={name} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </MyCard>
);

// Make a Custom Button Here
