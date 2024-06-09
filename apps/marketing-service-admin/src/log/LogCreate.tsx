import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <TextInput label="status" source="status" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
