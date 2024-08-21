
const SectionTopStyle = ({ title, content, backgroundImage }) => {
    return (
        <div
            className="relative about bg-cover bg-no-repeat bg-center mx-4 md:mx-10 mt-28 p-12"
            style={{
                backgroundImage: `url('${backgroundImage}')`,
            }}
        >
            {/* Overlay for reducing background image opacity */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative z-10 text-white bg-gray-100 bg-opacity-30 p-6 md:p-10">
                <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default SectionTopStyle;
