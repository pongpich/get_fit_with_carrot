import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createExerciseSnack } from "../redux/exerciseVideos";
import {
  convertSecondsToMinutes,
  convertFormatTime,
  calculateWeekInProgram,
} from "../helpers/utils";

const VideoExerciseSnack = () => {
  const dispatch = useDispatch();
  const { videoExerciseSnack, week } = useSelector(({ exerciseVideos }) =>
    exerciseVideos ? exerciseVideos : ""
  );

  const [exerciseSnack, setExerciseSnack] = useState(
    videoExerciseSnack && JSON.parse(videoExerciseSnack[0].video)
  );
  const [weekSnack, setWeekSnack] = useState(week);

  useEffect(() => {
    setExerciseSnack(
      videoExerciseSnack && JSON.parse(videoExerciseSnack[0].video)
    );
  }, [videoExerciseSnack]);

  console.log("exerciseSnack", exerciseSnack);

  return (
    <>
      <div className="">
        {/*  {this.state.autoPlayCheck ? (
                <div className="trailer" id={`popupVDOList`}>
                  <div>
                    {videoUrl3 ? (
                      <VideoPlayerListByteArk
                        url={videoUrl3}
                        day_number={focusDay}
                        video_number={selectedVDO && selectedVDO.order}
                        selectedVDO={selectedVDO}
                        lastWeekVDO_click={lastWeekVDO_click}
                        lastWeekVDOAll={lastWeekVDOAll}
                        lastWeekStart={lastWeekStart}
                        selectExerciseVideoLastWeek={
                          selectExerciseVideoLastWeek
                        }
                      />
                    ) : (
                      <>
                        <video
                          ref="videoPlayerList"
                          src={videoUrl}
                          id="videoPlayerList"
                          controls
                          controlsList="nodownload"
                          disablePictureInPicture
                        ></video>
                        <img
                          alt=""
                          src="../assets/img/thumb/close.png"
                          className="close"
                          onClick={() => this.closeList()}
                        ></img>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="trailer" id={`popupVDO`}>
                  <div>
                    {videoUrl3 ? (
                      <VideoPlayerByteArk
                        url={videoUrl3}
                        day_number={focusDay}
                        video_number={selectedVDO && selectedVDO.order}
                        selectedVDO={selectedVDO}
                        lastWeekVDO_click={lastWeekVDO_click}
                        lastWeekVDOAll={lastWeekVDOAll}
                        lastWeekStart={lastWeekStart}
                        selectExerciseVideoLastWeek={
                          selectExerciseVideoLastWeek
                        }
                      />
                    ) : (
                      <>
                        <video
                          ref="videoPlayer"
                          src={videoUrl}
                          id="videoPlayer"
                          controls
                          controlsList="nodownload"
                          disablePictureInPicture
                        ></video>
                        <img
                          alt=""
                          src="../assets/img/thumb/close.png"
                          className="close"
                          onClick={() => this.toggle()}
                        ></img>
                      </>
                    )}
                  </div>
                </div>
              )} */}

        <table className="table table-responsive">
          <div>
            <div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="">
                    <span
                      className="mr-5 ml-3"
                      style={{
                        fontSize: "16px",
                        float: "left",
                        color: "grey",
                      }}
                    >
                      {" "}
                      รวมเวลาฝึกทั้งหมด {/* {timesExercise} */} นาที
                    </span>
                    {/* {todayExercise && this.checkDayPlaytime(todayExercise) && (
                      <div
                        className="mb-3"
                        style={{
                          fontSize: "16px",
                          cursor: "pointer",
                          color: "#F45197",
                          textDecoration: "underline",
                        }}
                        onClick={() => this.editVDO()}
                        aria-hidden="true"
                      >
                        <img
                          className="mr-2"
                          src={`../assets/img/edit.png`}
                          width="30px"
                          height="30px"
                        />
                        แก้ไขวีดีโอ
                      </div>
                    )} */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="col-lg-12 col-md-4 col-12">
                    <div className="mt-1" style={{ float: "right" }}>
                      <span
                        className="mr-2"
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "grey",
                        }}
                      >
                        เล่นอัตโนมัติ
                      </span>
                      <label
                        className="switch"
                        /*  onClick={() => this.autoPlayCheck()} */
                      >
                        <input
                          type="checkbox"
                          className="danger"
                          id="autoPlayCheck"
                        ></input>
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <tbody>
            {exerciseSnack &&
              exerciseSnack.map((item, index) => {
                /*          const minuteLabel =
                  item.duration < 20
                    ? convertFormatTime(item.duration)
                    : convertSecondsToMinutes(item.duration);
 */

                return (
                  <div className="row" key={index}>
                    <div className="checkCompleteVideo mt-3 col-lg-2 col-md-1 col-2">
                      {index === 0 && (
                        <h6 className="firstVideoStartText">เริ่มกันเลย!</h6>
                      )}
                      {/* {item.play_time &&
                      item.duration &&
                      item.play_time / item.duration >=
                        completeVideoPlayPercentage ? (
                        <span
                          className="dot"
                          style={{ backgroundColor: "#F45197" }}
                        >
                          <h5
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%,-50%)",
                              color: "white",
                            }}
                          >
                            <i className="fa fa-check fa-lg"></i>
                          </h5>
                        </span>
                      ) : (
                        <span className="dot">
                          <h3
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%,-50%)",
                            }}
                          >
                            {index + 1}
                          </h3>
                        </span>
                      )}
                      {index === todayExercise.length - 1 ? (
                        <div className="vl" style={{ height: "0%" }}></div>
                      ) : (
                        <div className="vl"></div>
                      )}
                      {index === todayExercise.length - 1 && (
                        <h6 className="lastVideoEndText">สำเร็จแล้ว!</h6>
                      )} */}
                    </div>
                    <div className="mt-3 mb-1 col-lg-8 col-md-11 col-10">
                      <div className="videoItem border shadow">
                        {/*  {this.state.autoPlayCheck && (
                          <img
                            className="play_button"
                            src="../assets/img/thumb/play_button2.png"
                            width="100px"
                            onClick={() => this.toggleList(index)}
                          ></img>
                        )}
                        {!this.state.autoPlayCheck && (
                          <img
                            className="play_button"
                            src="../assets/img/thumb/play_button2.png"
                            width="100px"
                            onClick={() => this.toggle(item)}
                          ></img>
                        )} */}
                        <div className="videoThumb">
                          <div className="containerThumb">
                            <img
                              className="img-fluid"
                              src={`${item.thumbnail}`}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="videoDetail">
                          <div className="videoDuration mt-3">
                            <h6>
                              <i
                                className="fa fa-clock-o fa-1x mr-2"
                                aria-hidden="true"
                              ></i>
                              {/*   {minuteLabel} */} นาที
                            </h6>
                          </div>
                          <hr
                            className=""
                            style={{ width: "100%", marginTop: "40px" }}
                          ></hr>
                          <div className="videoName">
                            <p
                              style={{
                                color: "grey",
                                marginBottom: "0px",
                                marginTop: "0px",
                              }}
                            >
                              {" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default VideoExerciseSnack;
