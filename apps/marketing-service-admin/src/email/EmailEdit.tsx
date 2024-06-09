import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const EmailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="body" multiline source="body" />
        <TextInput label="recipient" source="recipient" type="email" />
        <TextInput label="subject" source="subject" />
      </SimpleForm>
    </Edit>
  );
};
