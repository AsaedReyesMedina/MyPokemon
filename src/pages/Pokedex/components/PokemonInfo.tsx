import {
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonImg,
  IonModal,
  IonSkeletonText,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";

const PokemonInfo = ({ data, name, isOpen, setIsOpen }: any) => {
  const [isLoad, setIsLoad] = useState(false);
  setTimeout(() => {
    setIsLoad(true);
    console.log("hola");
  }, 2000);
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
          <IonCard>
            {isLoad ? (
              <IonImg src={data.sprites.front_default} alt={name}></IonImg>
            ) : (
              <IonThumbnail slot="start">
                <IonSkeletonText animated={true}></IonSkeletonText>
              </IonThumbnail>
            )}
          </IonCard>
        </IonContent>
      </IonModal>
    </>
  );
};

export default PokemonInfo;
