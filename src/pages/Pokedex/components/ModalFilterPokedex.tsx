import { IonModal, IonContent } from "@ionic/react";
import SelectsFilterPokedex from "./SelectsFilterPokedex";
const ModalFilterPokedex = ({ modal, trigger }: any) => {
  return (
    <>
      <IonModal
        ref={modal}
        trigger={trigger}
        initialBreakpoint={0.75}
        breakpoints={[0, 0.25, 0.5, 0.75]}
      >
        <IonContent className="ion-padding">
          <SelectsFilterPokedex />
        </IonContent>
      </IonModal>
    </>
  );
};

export default ModalFilterPokedex;
