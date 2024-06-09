import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const WhatsAppMessageCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="message" multiline source="message" />
        <TextInput label="recipientNumber" source="recipientNumber" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
