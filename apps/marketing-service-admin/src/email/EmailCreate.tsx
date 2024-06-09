import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EmailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="body" multiline source="body" />
        <TextInput label="recipient" source="recipient" type="email" />
        <TextInput label="subject" source="subject" />
      </SimpleForm>
    </Create>
  );
};
