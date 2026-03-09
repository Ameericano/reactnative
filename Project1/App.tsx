import { SafeAreaView } from "react-native-safe-area-context"
import FirstScreen from "./src/screens/FirstScreen"
import SecondScreen from "./src/screens/SecondScreen"
import ThirdScreen from "./src/screens/ThirdScreen"

const App = () => {
  return (
    <SafeAreaView style = {{flex: 1}}>
      <ThirdScreen></ThirdScreen>
    </SafeAreaView>
  )
}

export default App;