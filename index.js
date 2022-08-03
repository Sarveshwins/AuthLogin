/**
 * @format
 */

// export { default as FaceBookLogIn } from "./src/FaceBook"
import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
//import Shake from "@shakebugs/react-native-shake";

AppRegistry.registerComponent(appName, () => App);