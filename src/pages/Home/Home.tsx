import { IonPage } from "@ionic/react";

import HomeLanding from "@components/Layouts/LandingLayouts/HomeLanding";



const Home: React.FC = () => {
  return (
    <IonPage>
      {/* landing page view in layouts */}
      <HomeLanding />
    </IonPage>
  );
};

export default Home;
