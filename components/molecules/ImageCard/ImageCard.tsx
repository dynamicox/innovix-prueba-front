import { MarsImage } from "@/lib/types";
import Delete from "@mui/icons-material/Delete";
import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import React from "react";

interface ImageCardProps {
  data: MarsImage;
  handleDelete: (id: MarsImage["id"]) => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({ data, handleDelete }) => {
  return (
    <ImageListItem key={data.id}>
      <img
        srcSet={`${data.img_src}?w=400&h=400&fit=crop&auto=format&dpr=2 2x`}
        src={`${data.img_src}?w=400&h=400&fit=crop&auto=format`}
        alt={data.rover.name}
        loading="lazy"
        title={`${data.id}`}
      />
      <ImageListItemBar
        title={data.rover.name}
        subtitle={data.id}
        actionIcon={
          <IconButton
            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
            aria-label={`info about ${data.rover}`}
            onClick={() => handleDelete(data.id)}
          >
            <Delete />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};

export default ImageCard;
