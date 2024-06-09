import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const VendorConfigEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
