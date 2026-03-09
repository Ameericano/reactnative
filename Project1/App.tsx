import { SafeAreaProvider } from "react-native-safe-area-context"
import FirstScreen from "./src/screens/FirstScreen"
import SecondScreen from "./src/screens/SecondScreen"
import ThirdScreen from "./src/screens/ThirdScreen"

const App = () => {
  return (
    <SafeAreaProvider>
      <ThirdScreen></ThirdScreen>
    </SafeAreaProvider>
  )
}

export default App;