import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../Utils/fetchData";

import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({setExercise, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(bodyPartData);
      //console.log(bodyPartData);
    };

    fetchExerciseData();
  }, []);

  const handleClick = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchExercise = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );

      setSearch("");
      setExercise(searchExercise);

      console.log(exerciseData);
    }
  };

  return (
    <Stack alignItems="center" mt="35px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "30px",
          },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercise <br />
        You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "14px",
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            height: "56px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2526",
            color: "white",
            textTransform: "none",
            width: {
              lg: "175px",
              xs: "15px",
            },
            fontSize: {
              lg: "20px",
              xs: "14px",
            },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleClick}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}
      >
        <HorizontalScrollbar bodyParts={bodyParts} bodyPart = {bodyPart} setBodyPart = {setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
