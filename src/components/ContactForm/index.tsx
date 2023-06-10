import { BsFillSendFill } from "react-icons/bs";
import Button from "../atoms/Button";
import S from "./index.styled";
import ContactInput from "./ContactInput";

function ContactForm() {
  return (
    <S.Form>
      <ContactInput
        placeholder="Please enter your Name"
        title="Name"
        type="input"
      />
      <ContactInput
        placeholder="Please enter your E-mail"
        title="E-mail"
        type="input"
      />
      <ContactInput
        placeholder="Please enter your Message"
        title="Message"
        type="textarea"
      />

      <Button
        text={"Submit"}
        font_size={"sub_title_02"}
        font_weight={"light"}
        icon={<BsFillSendFill />}
      />
    </S.Form>
  );
}

export default ContactForm;
