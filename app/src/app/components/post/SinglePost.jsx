import PostService from "../../../setup/services/post.service";
import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import DetailPost from "./card/DetailPost";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();

  const [onePost, setOnePost] = useState([]);

  useEffect(() => {
    fetchOnePost();
  }, []);

  const fetchOnePost = async () => {
    try {
      const response = await PostService.getOne(id);
      setOnePost([response]);
      console.log(response);
    } catch (error) {
      console.log("Error fetching post", error);
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {onePost.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <DetailPost post={post} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SinglePost;
