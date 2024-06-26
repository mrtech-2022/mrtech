import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import coverImg from '/assets/Cover.png';
import camera from '/assets/Camera2.jpg';

const Gallery = () => {
	return (
		<div className="h-screen">
			<SectionTitle title="Gallery" />
			<div className="grid md:grid-cols-2 gap-5 m-5 md:m-10 place-items-center">
				<img className="w-96 md:w-[500px] h-56" src={coverImg} alt="" />
				<img className="w-96 md:w-[500px] h-56" src={camera} alt="" />
			</div>
		</div>
	);
};

export default Gallery;
