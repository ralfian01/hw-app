import { Route, RouteComponentProps } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import UsersListPage from "@components/Layouts/Coba/UsersListPage";
import UserDetailPage from "@components/Layouts/Coba/UserDetailPage";

const Coba: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonRouterOutlet>
      <Route
        exact
        path={match.url}
        component={UsersListPage}
      />
      <Route
        path={`${match.url}/users/:id`}
        component={UserDetailPage}
      />
    </IonRouterOutlet>
  );
};

export default Coba;
