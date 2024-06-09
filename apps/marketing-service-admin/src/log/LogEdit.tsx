import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <TextInput label="status" source="status" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
