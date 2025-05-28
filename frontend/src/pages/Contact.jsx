import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      
      // Show success toast
      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 3000,
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // Show error toast
      toast.error("Failed to send message. Try again later.", {
        position: "top-center",
        autoClose: 3000,
      });

      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Toast Container for notifications */}
      <ToastContainer />

      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-4">Feel free to reach out for any queries or support.</p>

      <div className="bg-gray-100 p-6 rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              placeholder="Your Name" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              placeholder="Your Email" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md" 
              placeholder="Your Message" 
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>

      <h2 className="text-2xl font-semibold mt-6">Connect With Us</h2>
      <ul className="text-gray-700">
        <li>Email: support@blogApp.com</li>
        <li>Twitter: @blogApp</li>
        <li>LinkedIn: linkedin.com/help/blogApp</li>
      </ul>
    </div>
  );
};

export default Contact;
