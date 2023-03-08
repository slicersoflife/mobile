import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { registerRootComponent } from "expo";
import { Image } from "react-native";

import { Login, Signup, FriendList } from "@pages";

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{
        uri: "https://toppng.com/uploads/preview/favorite-pizza-emoji-1156312532506gn1ygxni.png",
      }}
    />
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Slice of Life"
            component={FriendList}
            options={{
              headerTintColor: "yellow",
              headerStyle: { backgroundColor: "tomato" },
              headerRight: () => <LogoTitle />,
            }}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default registerRootComponent(App);
