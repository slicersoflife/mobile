import { Text, View } from "react-native";
import * as React from "react";
import { Searchbar } from "react-native-paper";

export const FriendList = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View>
      <Searchbar
        placeholder="Add or search friends"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View>
        <Text>Insert FriendList page!</Text>
      </View>
    </View>
  );
};
