import {
  IonCard,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
const SelectsFilterPokedex = () => {
  return (
    <>
      <IonCardTitle>Filtrar por:</IonCardTitle>
      <IonCard className="cardFilterPokemon">
        <IonList>
          <IonItem>
            <IonLabel>Región:</IonLabel>
            <IonSelect placeholder="seleccionar" multiple={true}>
              <IonSelectOption value="apples">Apples</IonSelectOption>
              <IonSelectOption value="oranges">Oranges</IonSelectOption>
              <IonSelectOption value="bananas">Bananas</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Color:</IonLabel>
            <IonSelect placeholder="seleccionar" multiple={true}>
              <IonSelectOption value="apples">Apples</IonSelectOption>
              <IonSelectOption value="oranges">Oranges</IonSelectOption>
              <IonSelectOption value="bananas">Bananas</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Estadisticas:</IonLabel>
            <IonSelect placeholder="seleccionar" multiple={true}>
              <IonSelectOption value="apples">Apples</IonSelectOption>
              <IonSelectOption value="oranges">Oranges</IonSelectOption>
              <IonSelectOption value="bananas">Bananas</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Juegos:</IonLabel>
            <IonSelect placeholder="seleccionar" multiple={true}>
              <IonSelectOption value="apples">Apples</IonSelectOption>
              <IonSelectOption value="oranges">Oranges</IonSelectOption>
              <IonSelectOption value="bananas">Bananas</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </IonCard>
    </>
  );
};

export default SelectsFilterPokedex;
