import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const sendDataForm = async (orderDetails = {}, form, serviceId, templateId, publicKey, message) => {
    try {
        // Send data via EmailJS
        const res = await emailjs.send(serviceId, templateId, orderDetails, publicKey);
        if (res.status === 200) {
            // Reset form upon success
            form.reset();
            Swal.fire({
                title: "Your order placed Successfully!",
                text: "Thank you for shopping",
                icon: "success",
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                    `
                },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                    `
                }
            });
        }
    } catch (error) {
        toast.error('Error occurred while sending the order.');
        console.log(error); // Debugging the error
    }
};
