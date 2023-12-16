import * as CesiumEngine from "@cesium/engine";
import { Viewer, Entity, PointGraphics } from "./components/resium";

import * as React from "react";
import "./index.css";

const CesiumMap = () => {
  var cesiumTerrain = CesiumEngine.CesiumTerrainProvider.fromIonAssetId(1);

  return (
    <Viewer
      id={`cesiumMap`}
      baseLayer={false}
      geocoder={false}
      homeButton={false}
      infoBox={false}
      navigationInstructionsInitiallyVisible={false}
      selectionIndicator={false}
      timeline={false}
      terrainProvider={cesiumTerrain}
      targetFrameRate={15}
      requestRenderMode={true}
      fullscreenButton={true}
      maximumRenderTimeChange={Infinity}
      animation={false}
      containerProps={{
        className: `${Math.random()}`,
      }}
    >
      <Entity
        position={CesiumEngine.Cartesian3.fromDegrees(-0.09, 51.505, 100)}
      >
        <PointGraphics pixelSize={10} color={CesiumEngine.Color.YELLOW} />
      </Entity>
    </Viewer>
  );
};

export default CesiumMap;
