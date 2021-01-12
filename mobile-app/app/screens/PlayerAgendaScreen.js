import { addDays, format } from "date-fns";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Agenda } from "react-native-calendars";

// type Item = {
//   name: string;
//   cookies: boolean;
// };

// type Post = {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// };

const PlayerAgendaScreen = () => {
  const [items, setItems] = useState({});

  useEffect(() => {
    // run once
    console.log(items);
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log("format reçu");
      console.log(data);
      const mappedData = data.map((post, index) => {
        const date = addDays(new Date(), index);

        return {
          ...post,
          date: format(date, "yyyy-MM-dd"),
        };
      });
      console.log(mappedData);
      const reduced = mappedData.reduce((acc: {}, currentItem) => {
        const { date, ...coolItem } = currentItem;

        acc[date] = [coolItem];

        return acc;
      }, {});
      console.log("bon format");
      console.log(reduced);
      setItems(reduced);
    };

    getData();
  }, []);

  const renderItem = (item) => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
        <Text>{item.cookies ? `🍪` : `😋`}</Text>
      </View>
    );
  };
  const markedDates = {
    "2021-01-04": { startingDay: true, color: "green", selected: true },
    "2021-01-05": {
      selected: true,
      endingDay: true,
      color: "green",
      textColor: "gray",
    },
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Agenda
        items={items}
        markedDates={markedDates}
        renderItem={renderItem}
        markingType={"period"}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: "white",
    margin: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default PlayerAgendaScreen;
