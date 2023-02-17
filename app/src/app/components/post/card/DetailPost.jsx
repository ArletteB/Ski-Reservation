import * as React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function DetailPost({ post }) {
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
          {post.weight}cm {post.price}€ <br /> {post.style}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.comments}
        </Typography>
      </CardContent>
    </Card>
  );
}
