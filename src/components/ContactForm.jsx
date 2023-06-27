import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import triggerAlert from "../utils/triggerAlert";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const API_KEY = import.meta.env.VITE_API_KEY;

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (
      !formState.name.trim() ||
      !formState.email.trim() ||
      !formState.message.trim()
    ) {
      triggerAlert("warn", "One or more fields are empty.");
      setLoading(false);
      return;
    }

    const templateParams = {
      from_name: formState.name,
      to_name: "Franco",
      from_email: formState.email,
      to_email: "francoit1999@gmail.com",
      message: `
      Mail: ${formState.email} 
      Message: ${formState.message}
      `,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, API_KEY).then(
      (response) => {
        setLoading(false);

        setFormState({ name: "", email: "", message: "" });

        triggerAlert(
          "success",
          "Thanks for your message! I'll be contacting you soon."
        );
      },
      (error) => {
        setLoading(false);
        triggerAlert(
          "error",
          "There was an error sending your message. Please try again in a few minutes."
        );
        console.log("ERROR", error.status, error.text);
      }
    );
  }

  return (
    <div className="ml-[40px] p-5 text-left rounded-lg bg-gradient-to-br from-sky-950 to-indigo-800  shadow-md shadow-black lg:p-10 lg:w-[900px] lg:h-[720px] lg:pt-[60px] lg:m-auto lg:mb-[60px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Name</span>
          <input
            autoComplete="off"
            maxLength={40}
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Your name"
            className="py-4 px-6 placeholder:text-secondary text-white bg-slate-950 rounded-lg outline-none border-none font-medium"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Email</span>
          <input
            type="email"
            name="email"
            maxLength={40}
            value={formState.email}
            onChange={handleChange}
            placeholder="adress@example.com"
            className="py-4 px-6 placeholder:text-secondary text-white bg-slate-950 rounded-lg outline-none border-none font-medium"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Message</span>
          <textarea
            rows={8}
            maxLength={700}
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Your message"
            className="resize-none py-4 px-6 placeholder:text-secondary text-white bg-slate-950 rounded-lg outline-none border-none font-medium"
          />
        </label>

        <Button
          type="submit"
          className="py-2 px-6 mt-[20px] rounded-xl outline-none w-fit text-white font-[Poppins] animated-upwards"
          variant="outlined"
          endIcon={loading ? <CircularProgress size={20} /> : <Send />}
        >
          {loading ? "Sending..." : "Send"}
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
