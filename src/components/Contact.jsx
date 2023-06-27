import { Grid, Slide, Typography } from "@mui/material";
import { contactText } from "../constants/constants";
import ContactForm from "./ContactForm";
import FadeIn from "./animations/FadeIn";

export default function Contact() {
  return (
    <Grid
      item
      xs={2}
      className="m-auto w-full max-w-fit bg-slate-900 text-white text-center p-10 min-h-[600px] place-content-center place-items-center lg:max-w-none"
      id="Contact"
    >
      <div className="mt-[50px] mb-[80px] m-auto">
        <FadeIn>
          <Typography
            variant="h3"
            className="font-mono ml-8 underline underline-offset-[12px] font-bold lg:ml-0 lg:mb-[30px] "
          >
            {contactText.title}
          </Typography>

          <Typography className="ml-8 mt-5 font-[Poppins] text-lg lg:mb-[80px] lg:w-[800px] lg:m-auto ">
            {contactText.body}
          </Typography>
        </FadeIn>
      </div>

      <FadeIn>
        <ContactForm />
      </FadeIn>
    </Grid>
  );
}
