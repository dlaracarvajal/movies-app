import { NativeBaseProvider } from "native-base";
import StackNav from "./src/components/StackNav";
import { StatusBar } from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle="light-content" />
      <StackNav />
    </NativeBaseProvider>
  );
};

export default App;
