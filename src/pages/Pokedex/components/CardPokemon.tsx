import { IonCard, IonImg } from "@ionic/react";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import "../Tab1.css";
import PokemonInfo from "./PokemonInfo";
const CardPokemon = ({ url, name }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data }: any = useFetch(`${url}`);
  return (
    <>
      {data ? (
        <>
          <IonCard onClick={() => setIsOpen(true)}>
            <IonImg src={data.sprites.front_default}></IonImg>
          </IonCard>
          <PokemonInfo
            name={name}
            data={data}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </>
      ) : null}
    </>
  );
};

export default CardPokemon;
