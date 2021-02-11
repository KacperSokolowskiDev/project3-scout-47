import React from "react";
import { useFormikContext } from "formik";
import { Button } from "react-native"

// import Button from "../AppButton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <Button title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
