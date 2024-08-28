import { Helmet } from "react-helmet";

const Career = () => {
    return (
        <div className="m-24 h-screen">
            <Helmet>
                <title>Career - MR Tech</title>
            </Helmet>
            <div className="bg-textPrimary p-8 text-center text-white">
                <h1 className="text-3xl font-bold my-2">Career</h1>
                <p>
                    Currently there are no job opportunity available. Stay with us for further opportunity
                </p>
            </div>
        </div>
    );
};

export default Career;