import { Fragment } from "react";
const Audio = () => {
  return (
    <Fragment>
      <audio id="audio1">
        <source src="assets/audio/1.mp3" />
      </audio>
      <audio id="audio2">
        <source src="assets/audio/2.mp3" />
      </audio>
    </Fragment>
  );
};
export default Audio;
