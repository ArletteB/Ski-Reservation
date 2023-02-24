import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function DetailPost({ post }) {
  return (
    <>
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
            {post.weight}cm {post.price}€ <br /> {post.style} {post.isAvailable}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.comments}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.bookings}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.shop}
          </Typography>
        </CardContent>
        <Button size="small">
          <Link to="/reservation">Réserver</Link>
        </Button>
      </Card>
    </>
  );
}
