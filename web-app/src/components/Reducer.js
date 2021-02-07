export const initialState = {
  isAuth: false,
  user: null,
  playing: false,
  item: null,
  players: [],
  top_players: null,
  token: null,
  api: null,
  player: {},
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_USER":
      localStorage.setItem("user", JSON.stringify(action.user));
      localStorage.setItem("token", JSON.stringify(action.token));
      return {
        ...state,
        isAuth: true,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_MY_PLAYERS":
      return {
        ...state,
        players: action.players,
      };

    case "SET_TOP_PLAYERS":
      return {
        ...state,
        top_players: action.top_players,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SCOUT47":
      return {
        ...state,
        api: action.api,
      };

    case "SET_PLAYER":
      return {
        ...state,
        player: action.player,
      };
    default:
      return state;
  }
};

export default reducer;
