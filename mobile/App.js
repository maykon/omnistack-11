import "intl";
import "intl/locale-data/jsonp/pt-BR";

import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/routes";

export default function App() {
  return <AppStack />;
}
