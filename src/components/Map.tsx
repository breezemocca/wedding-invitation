import { Container as MapDiv, Marker, NaverMap, useNavermaps } from 'react-naver-maps';
import {Divider} from "antd";
import React, { useState } from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    textAlign: "center";
`;

const Map = () => {
  const lat= 37.4950338;
  const lon = 127.1157311;
  const navermaps = useNavermaps();


    return (
    <MapDiv style={{ width: '100%', height: '300px', }}>
        <NaverMap
        defaultCenter={new navermaps.LatLng(lat, lon)}
        defaultZoom={15}
        draggable={false}
        pinchZoom={false}
        scrollWheel={false}
        keyboardShortcuts={false}>
        <Marker defaultPosition={new navermaps.LatLng(lat, lon)} />
        </NaverMap>
    </MapDiv>
  );
};

export default Map;
