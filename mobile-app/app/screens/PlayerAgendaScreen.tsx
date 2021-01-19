import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import {LocaleConfig} from 'react-native-calendars';




LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
    today: 'Aujourd\'hui'
  };
  LocaleConfig.defaultLocale = 'fr';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};

const Schedule: React.FC = () => {
    const [items, setItems] = useState({});
    
    const loadItems = (day) => {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!items[strTime]) {
              items[strTime] = [];
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                let types = ["match", "training"]
                let type = types[Math.floor(Math.random() * types.length)];
                items[strTime].push({
                  name: 'Item for ' + strTime + ' #' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150)),
                  type
                });
              }
            }
          }
          const newItems = {};
          Object.keys(items).forEach((key) => {
            newItems[key] = items[key];
          });
          console.log(newItems)
          setItems(newItems);
        }, 1000);
      };
    
      const renderItem = (item) => {
          console.log(item);
          console.log(item.type);
        let color = ""
        let label = ""
        let backgroundColor= ""
        if(item.type === "training"){
          label= "E"
          color= "white"
          backgroundColor= "#37DE9B"
        }
        if(item.type === "match"){
            label="M"
            color= "white"
            backgroundColor="#99F3BD"
        }
        if(item.type === "rendez-vous"){
            label="RDV"
            color="white"
            backgroundColor="#D2F6BD"
        }
        if(item.type === "Staff"){
            label="S"
            color="white"
            backgroundColor="#F6F7D4"
        }

        return (
          <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
            <Card>
              <Card.Content>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text>{item.name}</Text>
                  <Avatar.Text label={label}
                  color={color} style={{backgroundColor:backgroundColor}}/>
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        );
      };
    return (
    <View style={{flex: 1}} > 
        <Agenda 
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2021-01-25'}
        renderItem={renderItem}
        />
    </View>
    );
};

export default Schedule;
