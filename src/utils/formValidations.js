import swAlert from "@sweetalert/with-react";
import { regexEmail } from "./regexEmail";

export const formValidations = (email, password) => {
    if (email === "" || password === "") {
      return swAlert(<h2>Please fill in all fields</h2>);
    }

    if (email !== "" && !regexEmail(email)) {
      return swAlert(<h2>Please enter a valid email</h2>);
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      return swAlert(<h2>Invalid credentials</h2>);
    }
}