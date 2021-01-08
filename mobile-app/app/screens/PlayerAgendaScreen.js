import React, { Component } from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Agenda,
  Calendar,
  ClaendarList,
  LocaleConfig,
} from "react-native-calendars";

const PREFIX = "native.calendar";
const currentDate = Date().toString();

const testID = {
  CHANGE_MONTH_LEFT_ARROW: `${PREFIX}.CHANGE_MONTH_LEFT_ARROW`,
  CHANGE_MONTH_RIGHT_ARROW: `${PREFIX}.CHANGE_MONTH_RIGHT_ARROW`,
  SELECT_DATE_SLOT: `${PREFIX}.SELECT_DATE_SLOT`,
  CALENDAR_KNOB: `${PREFIX}.CALENDAR_KNOB`,
  STATIC_HEADER: "STATIC_HEADER",
  AGENDA_CALENDAR_KNOB: `${PREFIX}.AGENDA_CALENDAR_KNOB`,
  HEADER_MONTH_NAME: "HEADER_MONTH_NAME",
  RESERVATION_DATE: `${PREFIX}.RESERVATION_DATE`,
  HEADER_DAY_NAMES: `${PREFIX}.DAY_NAMES`,
  WEEK_NUMBER: `${PREFIX}.WEEK_NUMBER`,
  HEADER_LOADING_INDICATOR: `${PREFIX}.HEADER_LOADING_INDICATOR`,
  agenda: {
    CONTAINER: "agenda",
    ITEM: "item",
  },
};

const agendaTest = {
  CONTAINER: "agenda",
  ITEM: "item",
};

export default class PlayerAgendaScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {},
    };
  }

  render() {
    return (
      <Agenda
        testID={agendaTest.CONTAINER}
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={currentDate}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach((key) => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems,
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        testID={agendaTest.ITEM}
        style={[styles.item, { height: item.height }]}
        onPress={() => Alert.alert(item.name)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
