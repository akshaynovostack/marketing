import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="status" source="status" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
