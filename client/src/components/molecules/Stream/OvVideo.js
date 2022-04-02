import React, { useEffect, useRef, useState } from "react";
import "./StreamComponent.css";
import * as tmPose from "@teachablemachine/pose";

function OvVideoComponent({
  user,
  mutedSound,
  answerAttack,
  answerDefence,
  isEnd,
  isStart,
  start,
  attack,
  defence,
}) {
  const videoRef = useRef(null);
  const modelURL = `/models/gyeorugi/model.json`;
  const metadataURL = `/models/gyeorugi/metadata.json`;

  const [model, setModel] = useState(undefined);
  const [webCamElement, setWebCamElement] = useState(undefined);

  useEffect(() => {
    console.log("!!useEffect");
    if (user && user.streamManager && !!videoRef) {
      user.getStreamManager().addVideoElement(videoRef.current);
    }

    if (user && user.streamManager.session && !!videoRef) {
      user.streamManager.session.on("signal:userChanged", (event) => {
        const data = JSON.parse(event.data);
        if (data.isScreenShareActive !== undefined) {
          user.getStreamManager().addVideoElement(videoRef.current);
        }
      });
    }

    getWebcam((stream) => {
      videoRef.current.srcObject = stream;
      // setWebCamElement(videoRef.current);
    });
  }, []);

  useEffect(() => {
    console.log("!!user", user);
    if (user && !!videoRef) {
      user.getStreamManager().addVideoElement(videoRef.current);
    }
  }, [user]);

  const getWebcam = (callback) => {
    try {
      const constraints = {
        video: true,
        audio: false,
      };
      navigator.mediaDevices.getUserMedia(constraints).then(callback);
    } catch (err) {
      console.log(err);
      return undefined;
    }
  };

  const setWebcam = async () => {
    let m = await tmPose.load(modelURL, metadataURL);
    setModel(() => m);
    const size = 200;
    const flip = true;
    let webcam = await new tmPose.Webcam(size, size, flip);
    setWebCamElement(() => webcam);
  };

  const setReady = async () => {
    await webCamElement.setup();
    await webCamElement.play();

    let cnt = 0;
    if (!isStart) {
      while (cnt < 5) {
        cnt += await isReady();
      }
      start();
    }
  };

  const isReady = async () => {
    webCamElement.update(); // update the webcam frame
    const { posenetOutput } = await model.estimatePose(webCamElement.canvas);
    const prediction = await model.predictTopK(posenetOutput, 1);
    const className = prediction[0].className;
    const probability = prediction[0].probability;
    if (className === "Basic Ready Stance" && probability >= 0.8) {
      console.log(className, probability);
      return 1;
    }
    return 0;
  };

  const analyzeImage = async () => {
    webCamElement.update(); // update the webcam frame
    const { posenetOutput } = await model.estimatePose(webCamElement.canvas);
    const prediction = await model.predictTopK(posenetOutput, 1);
    const className = prediction[0].className;
    const probability = prediction[0].probability;
    console.log(className, probability);
    if (probability >= 0.8) return className;
    return "";
  };

  const run = () => {
    let totalCnt = 0;
    // let maxProbability = 0.0;
    // let testSum = 0.0;
    let prevMotion = "";
    let difCnt = 0;
    let prevCnt = 0;
    const loop = setInterval(async () => {
      if (++totalCnt === 11 * 20) {
        clearInterval(loop);
      }
      let curMotion = await analyzeImage();
      if (curMotion !== "" && curMotion === prevMotion) {
        prevCnt++;
        difCnt = 0;
        if (prevCnt === 3) {
          if (answerAttack.includes(curMotion)) {
            attack(curMotion);
          } else if (answerDefence.includes(curMotion)) {
            defence(curMotion);
          }
        }
      } else {
        difCnt++;
        if (difCnt === 3) {
          prevCnt = 1;
          prevMotion = curMotion;
          difCnt = 0;
        }
      }
    }, 50);
  };

  useEffect(() => {
    console.log("!!isStart", isStart);
    if (isStart && !isEnd) {
      console.log("겨루기 시작!");
      run();
    }
  }, [isStart]);

  useEffect(() => {
    console.log("!!WebCamElement, model", webCamElement, model);
    if (webCamElement !== undefined && model !== undefined) {
      setReady();
    }
  }, [webCamElement, model]);

  useEffect(() => {
    console.log("!!isEnd", isEnd);
    if (!isEnd) setWebcam();
  }, [isEnd]);

  return (
    <video
      autoPlay={true}
      id={"video-" + user.getStreamManager().stream.streamId}
      ref={videoRef}
      muted={mutedSound}
    />
  );
}

export default OvVideoComponent;