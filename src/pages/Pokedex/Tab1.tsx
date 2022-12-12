import {
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonImg,
  IonSearchbar,
} from "@ionic/react";
import { filterOutline } from "ionicons/icons";
import { useRef } from "react";
import useFetch from "../../hooks/useFetch";
import CardPokemon from "./components/CardPokemon";
import ModalFilterPokedex from "./components/ModalFilterPokedex";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const { data }: any = useFetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=2000"
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pokedex</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle slot="" size="large">
              Pokedex
            </IonTitle>
            <IonButtons slot="end">
              <IonImg
                src="https://img.icons8.com/color/30/null/pokedex.png"
                alt="pokedex"
              ></IonImg>
            </IonButtons>
          </IonToolbar>
          <IonToolbar className="toolbarSearch">
            <IonSearchbar
              class="searchbarPokedex"
              placeholder="Busca un pokemon"
            ></IonSearchbar>
            <IonButtons id="open-modal-filter" slot="end">
              <IonIcon className="iconFilter" icon={filterOutline}></IonIcon>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {data
              ? data.results.map((pokemon: any, index: any) => (
                  <IonCol key={index} size="2" size-md="4" size-lg="2">
                    <CardPokemon name={pokemon.name} url={pokemon.url} />
                  </IonCol>
                ))
              : null}
          </IonRow>
        </IonGrid>
        <ModalFilterPokedex modal={modal} trigger="open-modal-filter" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
