import {
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import useFetch from "../../hooks/useFetch";
import CardPokemon from "./components/CardPokemon";
import "./Tab1.css";

const Tab1: React.FC = () => {
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
        </IonHeader>
        <IonGrid>
          <IonRow>
            {data
              ? data.results.map((pokemon: any, index: any) => (
                  <IonCol key={index} size="3" size-md="4" size-lg="2">
                    <CardPokemon name={pokemon.name} url={pokemon.url} />
                  </IonCol>
                ))
              : null}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
