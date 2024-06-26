import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PushNotificationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="recipient" source="recipient" type="email" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
