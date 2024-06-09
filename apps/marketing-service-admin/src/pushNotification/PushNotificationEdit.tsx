import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PushNotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="recipient" source="recipient" type="email" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
