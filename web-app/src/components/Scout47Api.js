import axios from "axios";
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJmaXJzdG5hbWUiOiJLYWNwZXIiLCJsYXN0bmFtZSI6IlNva29sb3dza2kiLCJlbWFpbCI6ImtzQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJGFyZ29uMmkkdj0xOSRtPTQwOTYsdD0zLHA9MSRUUkYyVlF4LzYxaFpac1RreERqVU0xL2pyTGdHb3IrS1JuVGI5V0RITWs4JDhKZ2lPbTJOQld3RzJhUFpCUWMxaTZUNWNFeVdESXpibkVPWnRBQmlseTQiLCJ0ZWxlcGhvbmUiOjEyMzUsInBpY3R1cmUiOiJodHRwczovL2kucHJhdmF0YXIuY2MvMzAwIiwiY3JlYXRlZEF0IjoiMjAyMS0wMi0xMCIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMTAiLCJQcml2aWxlZ2UiOnsiaWQiOjQsInJvbGUiOiJzY291dCIsImFnZUdyYWRlIjpbMjAwNSwyMDA0LDIwMDZdLCJjcmVhdGVkQXQiOiIyMDIxLTAyLTEwIiwidXBkYXRlZEF0IjoiMjAyMS0wMi0xMCIsIlVzZXJJZCI6NH19LCJpYXQiOjE2MTI5ODA2OTgsImV4cCI6MTYxMzAwMjI5OH0.E9E2zofBwW0yJ4dBVh3s616lyhGQguYWhz2f2Dpc-2U`;

class Scout47Api {
  constructor() {
    this.port = 5000;
    this.apiPath = "api";
    this.remote = "localhost";
    this.token = null;
    this.url = `http://${this.remote}:${this.port}/${this.apiPath}`;
  }

  setAccessToken = (token) => {
    console.log("in acces tooken", token);
    this.headers = { Authorization: `Bearer ${token}` };
    // return this.token = token
  };

  getUserPlayers = async () => {
    // console.log("in get user players");
    try {
      const { data } = await axios.get(`${this.url}/players`, {
        headers: this.headers,
      });
      console.log("ro", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  getMyTopPlayers = async () => {
    try {
      const { data } = await axios.get(`${this.url}/players`, {
        headers: this.headers,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  login = async (email, password) => {
    console.log("login");
    try {
      const data = await axios({
        method: "post",
        url: `${this.url}/users/login`,
        data: {
          email,
          password,
        },
      });
      console.log(data);
      return data;
      //set local storage
    } catch (error) {
      console.log(error);
    }
  };

  getMe = async () => {
    try {
      const { data } = await axios.get(`${this.url}/users/1`, {
        headers: this.headers,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  getPlayer = async (id) => {
    try {
      const { data } = await axios.get(
        `${this.url}/players/${id}/evaluations`,
        { headers: this.headers }
      );
      return data[0];
    } catch (error) {
      console.log(error);
    }
  };

  uploadSchoolReport = async (file, playerId) => {
    console.log("in call");
    const data = new FormData();
    const { obj, user, name, author } = file;
    data.append("file", obj);
    data.append("user", user);
    data.append("name", name);
    data.append("author", author);
    try {
      const result = await axios({
        method: "put",
        url: `${this.url}/players/${playerId}`,
        headers: this.headers,
        data,
      });

      return result;
    } catch (error) {
      console.log(error);
    }
  };
}

export default Scout47Api;
