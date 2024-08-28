import { Helmet } from "react-helmet";
import useServices from "../../hooks/useServices";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from 'sweetalert2'

const AllServices = () => {
    const axiosPublic = useAxiosPublic();

    const [services, refetch] = useServices();

    // const makeAdmin = async (email) => {
    //     Swal.fire({
    //         title: `Want to make admin - ${email}`,
    //         text: "",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, Make Admin!",
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             const result = await axiosSecure.patch(`makeAdmin/${email}`);
    //             console.log(result);
    //             if (result.data.modifiedCount) {
    //                 refetch();
    //                 Swal.fire({
    //                     title: `${email} is now Admin`,
    //                     text: "",
    //                     icon: "success",
    //                 });
    //             }
    //         }
    //     });
    // };

    const deleteservice = async (id, name) => {
        Swal.fire({
            title: `Are you sure? want to delete service- ${name}`,
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await axiosPublic.delete(`services/${id}`);
                // console.log(result);
                if (result.data.deletedCount) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });
                }
            }
        });
    };

    return (
        <div>
            <Helmet>
                <title>All Services -Doc House</title>
            </Helmet>
            <h1 className="text-4xl m-9 font-bold border-l-8 border-[#F7A582] p-3">
                All services: {services.length}
            </h1>
            <div className="overflow-x-auto bg-white md:p-10 rounded-lg m-4 md:m-10">
                <table className="table bg-white">
                    {/* head */}
                    <thead>
                        <tr className="text-lg">
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            {/* <th>Role</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service, index) => (
                            <tr key={service._id}>
                                <th>{index + 1}</th>
                                <td>{service.name}</td>
                                <td>
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img
                                            //   className="rounded-full "
                                            src={service.image}
                                            alt="Image"
                                        />
                                    </div>
                                </td>
                                {/* <td></td> */}

                                <td>
                                    <button
                                        onClick={() => deleteservice(service._id, service.name)}
                                        className="btn bg-red-700 text-white  hover:bg-red-600"
                                    >
                                        Delete service
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllServices;