import * as React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export default function PostCardMain({ post }) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={post.imageUrl}
        title="Image title"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.price}€ {post.weight}cm
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/post/${post._id}`}>View</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
