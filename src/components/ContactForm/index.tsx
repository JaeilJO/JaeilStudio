import { BsFillSendFill } from "react-icons/bs";
import Button from "../atoms/Button";
import S from "./index.styled";
import ContactInput from "./ContactInput";

function ContactForm() {
  return (
    <S.Form>
      <ContactInput placeholder="Please enter your Name" title="Name" />
      <ContactInput placeholder="Please enter your E-mail" title="E-mail" />

      <Button
        text={"Submit"}
        font_size={"sub_title_03"}
        font_weight={"light"}
        icon={<BsFillSendFill />}
      />
    </S.Form>
  );
}

export default ContactForm;
