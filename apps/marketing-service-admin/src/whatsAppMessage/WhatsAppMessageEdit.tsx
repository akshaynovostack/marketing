import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const WhatsAppMessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <TextInput label="recipientNumber" source="recipientNumber" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
