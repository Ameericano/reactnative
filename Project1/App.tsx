import { SafeAreaProvider } from "react-native-safe-area-context"
import FirstScreen from "./src/screens/FirstScreen"

const App = () => {
  return (
    <SafeAreaProvider>
      <FirstScreen></FirstScreen>
    </SafeAreaProvider>
  )
}

export default App;