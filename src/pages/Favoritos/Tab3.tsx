import {
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";

import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pokemons favoritos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Favoritos</IonTitle>
            <IonButtons slot="end">
            <IonImg
              src="https://img.icons8.com/color/30/null/pokeball-2.png"
              alt="pokeball"
            ></IonImg>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tus favoritos aqui" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
