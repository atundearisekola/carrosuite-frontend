import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Tabs, Button } from "antd";
import ListAssets from "./ListAssets";
import { FETCH_ASSET } from "../../../../actions/types";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../../../spinner/Spinner";
import {LoadAssets} from "../../../../actions/AssetAction"
const { TabPane } = Tabs;

const Assets = () => {
  // LoadAssets();
  const dispatch = useDispatch();
  const { Allassets,loading } = useSelector((state) => state.assets);
  console.log("all asseer here ::",Allassets);
  
  useEffect(() => {
    const getAssets = () => {
      dispatch({ type: FETCH_ASSET });
    };
    getAssets();
  }, []);
 
  return (
    <Tabs defaultActiveKey="staffs" size="large">
      <TabPane tab="Assets" key="assets">
        {loading ? <Spinner /> : <ListAssets assets={Allassets} />}
      </TabPane>
    </Tabs>
  );
};

export default Assets;
