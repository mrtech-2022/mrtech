import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

export const sendDataForm = async (orderDetails = {}, form, serviceId, templateId, publicKey, message) => {
    try {
        // Send data via EmailJS
        const res = await emailjs.send(serviceId, templateId, orderDetails, publicKey);
        if (res.status === 200) {
            // Reset form upon success
            form.reset();
            toast.success(message, {
                style: {
                    backgroundColor: '#333',
                    color: '#fff',
                    fontWeight: 'bold',
                },
            });
        }
    } catch (error) {
        toast.error('Error occurred while sending the order.');
        console.log(error); // Debugging the error
    }
};
