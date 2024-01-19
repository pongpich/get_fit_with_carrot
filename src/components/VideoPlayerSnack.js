import React, { useRef, useEffect, useState } from "react";
import Hls from "hls.js";
import { useSelector, useDispatch } from "react-redux";
import {
  hidePopupVideoPlayer,
  updatePlaytime,
  setHidePopupVideoPlayerSnack,
  updatePlaytimeLastWeek,
  updatePlaytimeLastWeekSelected,
} from "../redux/exerciseVideos";
import {
  completeVideoPlayPercentage,
  minimumVideoPlayPercentage,
  updateFrequency,
} from "../constants/defaultValues";

const VideoPlayerSnack = ({ url }) => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false); // เพิ่ม state สำหรับตรวจสอบว่าวีดีโอถูกดูจบหรือไม่
  const [videoCurrDuration, setVideoCurrDuration] = useState(0); // เพิ่ม state สำหรับเก็บระยะเวลาที่เล่นไปของวีดีโอ
  const [videoDuration, setVideoDuration] = useState(0); // เพิ่ม state สำหรับเก็บความยาวของวีดีโอ
  const [prevPlayTime, setPrevPlayTime] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video && url) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url); // ใช้ URL ที่ถูกส่งเข้ามาใน props
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          //video.play();
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = url; // ใช้ URL ที่ถูกส่งเข้ามาใน props
        video.addEventListener("canplay", () => {
          // video.play();
        });
      }

      video.addEventListener("ended", () => {
        setVideoEnded(true); // กำหนดว่าวีดีโอถูกดูจบ
      });

      video.addEventListener("loadedmetadata", () => {
        const videoDuration = video.duration; // ความยาวของวีดีโอ (ในวินาที)
        console.log(`ความยาวของวีดีโอ: ${videoDuration} วินาที`);
        setVideoDuration(videoDuration);
      });

      video.addEventListener("timeupdate", () => {
        setVideoCurrDuration(video.currentTime); // อัปเดตระยะเวลาที่คลิปถูกเล่นไป
      });
    }
  }, [url]);

  const handleVideoClose = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      // และอื่น ๆ ที่คุณต้องการให้เกิดขึ้นเมื่อปิดวีดีโอ
    }
    //สั่ง set ตัวแปรใน redux และให้หน้า videoList ไปเช็ีคจากตัวแปรนั้นเพื่อซ่อน popup
    dispatch(setHidePopupVideoPlayerSnack(true));
  };

  return (
    <div>
      <video id="videoPlayer" ref={videoRef} controls />

      <img
        alt=""
        src="../assets/img/thumb/close.png"
        className="close"
        onClick={handleVideoClose}
      ></img>
    </div>
  );
};

export default VideoPlayerSnack;
