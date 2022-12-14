import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import CardPokemonInfo from "./CardPokemonInfo";

const PokemonInfo = ({ data, name, isOpen, setIsOpen }: any) => {
  console.log(data);
  return (
    <>
      <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start" onClick={() => setIsOpen(false)}>
              <IonButton>Cancel</IonButton>
            </IonButtons>
            <IonTitle>{name.toUpperCase()}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding" fullscreen>
          <CardPokemonInfo name={name} data={data} />
        </IonContent>
      </IonModal>
    </>
  );
};

export default PokemonInfo;
