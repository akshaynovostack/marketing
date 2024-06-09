import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmailList } from "./email/EmailList";
import { EmailCreate } from "./email/EmailCreate";
import { EmailEdit } from "./email/EmailEdit";
import { EmailShow } from "./email/EmailShow";
import { ConversionList } from "./conversion/ConversionList";
import { ConversionCreate } from "./conversion/ConversionCreate";
import { ConversionEdit } from "./conversion/ConversionEdit";
import { ConversionShow } from "./conversion/ConversionShow";
import { FunnelList } from "./funnel/FunnelList";
import { FunnelCreate } from "./funnel/FunnelCreate";
import { FunnelEdit } from "./funnel/FunnelEdit";
import { FunnelShow } from "./funnel/FunnelShow";
import { LogList } from "./log/LogList";
import { LogCreate } from "./log/LogCreate";
import { LogEdit } from "./log/LogEdit";
import { LogShow } from "./log/LogShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { WhatsAppMessageList } from "./whatsAppMessage/WhatsAppMessageList";
import { WhatsAppMessageCreate } from "./whatsAppMessage/WhatsAppMessageCreate";
import { WhatsAppMessageEdit } from "./whatsAppMessage/WhatsAppMessageEdit";
import { WhatsAppMessageShow } from "./whatsAppMessage/WhatsAppMessageShow";
import { PushNotificationList } from "./pushNotification/PushNotificationList";
import { PushNotificationCreate } from "./pushNotification/PushNotificationCreate";
import { PushNotificationEdit } from "./pushNotification/PushNotificationEdit";
import { PushNotificationShow } from "./pushNotification/PushNotificationShow";
import { VendorConfigList } from "./vendorConfig/VendorConfigList";
import { VendorConfigCreate } from "./vendorConfig/VendorConfigCreate";
import { VendorConfigEdit } from "./vendorConfig/VendorConfigEdit";
import { VendorConfigShow } from "./vendorConfig/VendorConfigShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"marketing_service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Email"
          list={EmailList}
          edit={EmailEdit}
          create={EmailCreate}
          show={EmailShow}
        />
        <Resource
          name="Conversion"
          list={ConversionList}
          edit={ConversionEdit}
          create={ConversionCreate}
          show={ConversionShow}
        />
        <Resource
          name="Funnel"
          list={FunnelList}
          edit={FunnelEdit}
          create={FunnelCreate}
          show={FunnelShow}
        />
        <Resource
          name="Log"
          list={LogList}
          edit={LogEdit}
          create={LogCreate}
          show={LogShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="WhatsAppMessage"
          list={WhatsAppMessageList}
          edit={WhatsAppMessageEdit}
          create={WhatsAppMessageCreate}
          show={WhatsAppMessageShow}
        />
        <Resource
          name="PushNotification"
          list={PushNotificationList}
          edit={PushNotificationEdit}
          create={PushNotificationCreate}
          show={PushNotificationShow}
        />
        <Resource
          name="VendorConfig"
          list={VendorConfigList}
          edit={VendorConfigEdit}
          create={VendorConfigCreate}
          show={VendorConfigShow}
        />
      </Admin>
    </div>
  );
};

export default App;
