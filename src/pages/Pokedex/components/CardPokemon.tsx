import React from "react";
import { IonCard, IonImg, IonText } from "@ionic/react";
import useFetch from "../../../hooks/useFetch";
import "../Tab1.css";
const CardPokemon = ({ name, url }: any) => {
  const { data }: any = useFetch(`${url}`);
  data ? console.log(data) : console.log(null);
  return (
    <>
      {data ? (
        <>
          <IonCard>
            <IonImg src={data.sprites.front_default}></IonImg>
            <IonText>{name}</IonText>
          </IonCard>
        </>
      ) : null}
    </>
  );
};

export default CardPokemon;
