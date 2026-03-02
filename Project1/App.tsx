import { SafeAreaProvider } from "react-native-safe-area-context"
import FirstScreen from "./src/screens/FirstScreen"
import SecondScreen from "./src/screens/SecondScreen"

const App = () => {
  return (
    <SafeAreaProvider>
      <SecondScreen></SecondScreen>
    </SafeAreaProvider>
  )
}

export default App;