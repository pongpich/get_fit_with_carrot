import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createExerciseSnack } from "../redux/exerciseVideos";

const VideoExerciseSnack = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ authUser }) => (authUser ? authUser.user : ""));

  useEffect(() => {
    console.log("user", user && user.user_id);
    console.log("9999");
    // Dispatch action (example)
    // dispatch(createExerciseSnack());
  }, []);

  return (
    <div>
      <h1>Video Exercise Snack</h1>
    </div>
  );
};

export default VideoExerciseSnack;
