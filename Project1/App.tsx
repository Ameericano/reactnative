import { SafeAreaView } from "react-native-safe-area-context"
import FirstScreen from "./src/screens/FirstScreen"
import SecondScreen from "./src/screens/SecondScreen"
import AddImage from "./src/screens/ThirdScreen"
import ImageScreen from "./src/screens/ImageScreen"

const App = () => {
  return (
    <SafeAreaView style = {{flex: 1}}>
      <ImageScreen></ImageScreen>
    </SafeAreaView>
  )
}

export default App;