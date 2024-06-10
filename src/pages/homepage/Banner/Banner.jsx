import IntroVideo from '../../../assets/intro.mp4';
const Banner = () => {
	return (
		<div>
			<video src={IntroVideo} autoPlay loop muted></video>
			<video src={IntroVideo} autoPlay loop muted></video>
		</div>
	);
};

export default Banner;
