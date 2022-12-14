import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCol,
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
} from "@ionic/react";

const CardPokemonInfo = ({ name, data }: any) => {
  return (
    <>
      <IonCard>
        <IonCardContent>
          <IonRow>
            <IonCol size="8">
              <IonCardTitle className="namePokemonCard">
                {name.toUpperCase()}
              </IonCardTitle>
            </IonCol>
            <IonCol size="4">
              <IonImg
                className="imgPokemonCard"
                src={data.sprites.front_default}
                alt={name}
              ></IonImg>
            </IonCol>
            <IonCol size="12">
              <IonList>
                <IonItem>
                  <IonLabel slot="start">Experiancia base:</IonLabel>
                  <IonLabel slot="end">{data.base_experience}</IonLabel>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default CardPokemonInfo;
