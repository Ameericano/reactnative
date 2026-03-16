import { SafeAreaView } from "react-native-safe-area-context"
import FirstScreen from "./src/screens/FirstScreen"
import SecondScreen from "./src/screens/SecondScreen"
import AddImage from "./src/screens/ThirdScreen"
import ImageScreen from "./src/screens/ImageScreen"
import FourthScreen from "./src/screens/FourthScreen"

const App = () => {
  return (
    <SafeAreaView style = {{flex: 1}}>
      <FourthScreen></FourthScreen>
    </SafeAreaView>
  )
}

export default App;