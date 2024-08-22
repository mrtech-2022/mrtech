import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import coverImg from '/assets/Cover.png';
import camera from '/assets/Camera2.jpg';
import SectionTopStyle from '../../../components/SectionTopStyle/SectionTopStyle';

const Gallery = () => {
	return (
		<div className="">
			<SectionTopStyle
				title="Gallery"
				content="This is our gallery where you can get all our activity images. Visit and enjoy."
				backgroundImage="https://i.ibb.co/4RtjnRn/gallery.jpg"
			/>
			<h1 className="text-4xl md:text-5xl mt-20 font-bold m-8 ml-4 sm:ml-10 border-l-[13px] border-textSecondary p-3">
				Company Images
			</h1>
			<div className="grid md:grid-cols-2 gap-5 m-5 md:m-10 place-items-center">
				<img className="w-96 md:w-[500px] h-56" src={coverImg} alt="" />
				<img className="w-96 md:w-[500px] h-56" src={camera} alt="" />
			</div>
		</div>
	);
};

export default Gallery;
