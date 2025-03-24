"use client";
import { fetchPhotos } from "@/lib/api";
import theme from "@/lib/theme";
import { MarsImage } from "@/lib/types";
import { Box, Button, ImageList, useMediaQuery } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ImageCard from "@/components/molecules/ImageCard/ImageCard";

export default function Home() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [page, setPage] = useState(1);
  const [deletedIds, setDeletedIds] = useState<MarsImage["id"][]>([]);

  const { data, isLoading, isError, isFetching } = useQuery<MarsImage[]>({
    queryKey: ["marsPhotos"],
    queryFn: () => fetchPhotos(),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  const [images, setImages] = useState<MarsImage[]>([]);

  useEffect(() => {
    if (data) {
      const newImages = data
        .slice(0, page * 12)
        .filter((item) => !deletedIds.includes(item.id));
      setImages(newImages);
    }
  }, [data, page, deletedIds]);

  if (isLoading || isFetching) {
    return <>Loading</>;
  }

  if (isError) {
    return <>Error</>;
  }

  const handleDelete = (id: MarsImage["id"]) => {
    setDeletedIds((prev) => [...prev, id]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflowY: "scroll",
      }}
    >
      <Box sx={{ marginTop: 16, paddingX: 2 }}>
        <ImageList variant="quilted" cols={isSmallScreen ? 1 : 3} gap={6}>
          {images.map((item, idx) => (
            <ImageCard data={item} key={idx} handleDelete={handleDelete} />
          ))}
        </ImageList>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            py: {
              xs: 2,
              lg: 8,
            },
          }}
        >
          <Button
            variant="contained"
            size="large"
            fullWidth={isSmallScreen}
            onClick={() => setPage((prev) => prev + 1)}
            sx={{
              px: {
                lg: 20,
              },
            }}
          >
            CARGAR MAS
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
