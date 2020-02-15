import React from "react";

import AdminPageEventsList from "../components/AdminPageEventsList/AdminPageEventsList";

class AdminPageEventsListContainer extends React.Component {
  state = {
    events: [
      {
        id: "1 million",
        general: {
          personName: "G",
          name: "GayPartyInTheForest",
          description: "This is a gay party in the forest for you",
          date: "12.01.2020",
          maxMembers: "1 000 000",
          currentMembers: "1 000 000"
        },
        other: {
          place: "Forest",
          amountOfClients: "17"
        }
      },
      {
        id: 0,
        general: {
          personName: "G",
          name: "Cartoon",
          description: "This is a gay party in the forest for you",
          date: "12.01.2020",
          maxMembers: "20",
          currentMembers: "15"
        },
        other: {
          place: "Forest",
          amountOfClients: "17"
        }
      },
      {
        id: 1,
        general: {
          personName: "M",
          name: "party-in-forest",
          description: "There is a party in the forest :)",
          date: "12.01.2021",
          maxMembers: "30",
          currentMembers: "15"
        },
        other: {
          place: "Minsk",
          amountOfClients: "17"
        }
      },

      {
        id: 2,
        general: {
          personName: "R",
          name: "Boom-party",
          description: "There is a birthday",
          date: "34.67.-9810",
          maxMembers: "2",
          currentMembers: "11"
        },
        other: {
          place: "Berlin",
          amountOfClients: "12"
        }
      },
      {
        id: 4,
        general: {
          personName: "C",
          name: "Calculator",
          description: "Calculate me",
          date: "Shto eto?",
          maxMembers: "20",
          currentMembers: "10"
        },
        other: {
          place: "City",
          amountOfClients: "17"
        }
      },
      {
        id: 5,
        general: {
          personName: "S",
          name: "Snake Cloak",
          description: "Biology",
          date: "12.12",
          maxMembers: "2",
          currentMembers: "12"
        },
        other: {
          place: "Max",
          amountOfClients: "7"
        }
      }
    ]
  };
  render() {
    return <AdminPageEventsList events={this.state.events} />;
  }
}

export default AdminPageEventsListContainer;
