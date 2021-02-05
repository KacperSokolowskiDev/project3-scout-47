import axios from "axios";
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJmaXJzdG5hbWUiOiJQaWVycmUiLCJsYXN0bmFtZSI6IkdpZGRpbyIsImVtYWlsIjoicGdAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkYXJnb24yaSR2PTE5JG09NDA5Nix0PTMscD0xJEJRZndldHVqM2J0YS81ZzNKUmJTSHFSelN5dXFPVFpYdXRQYTB3Vk80MVUkcjQwS0UycXVCck5hcWYydUZycVJTRjVVK1NYRzRyYUxmdXN1MGVFekZSZyIsInRlbGVwaG9uZSI6MTIzNDUsImNyZWF0ZWRBdCI6IjIwMjEtMDItMDQiLCJ1cGRhdGVkQXQiOiIyMDIxLTAyLTA0IiwiUHJpdmlsZWdlIjp7ImlkIjo0LCJyb2xlIjoibWFuYWdlciIsImFnZUdyYWRlIjpbIioiXSwiY3JlYXRlZEF0IjoiMjAyMS0wMi0wNCIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMDQiLCJVc2VySWQiOjR9fSwiaWF0IjoxNjEyNDUwNzk4LCJleHAiOjE2MTI0NzIzOTh9.xXcBvP66lgTOzPYXDdZoqgAQRMKxkQLGyM76AEU4rHA`;

class Scout47Api {
  constructor() {
    this.port = 5000;
    this.apiPath = "api";
    this.remote = "localhost";
    this.url = `http://${this.remote}:${this.port}/${this.apiPath}`;
    this.headers = { Authorization: `Bearer ${token}` };
  }

  getUserPlayers = async () => {
    console.log("in get user players");
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
      return data;
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
        url: `${this.url}/players/${playerId}/`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data,
      });

      return result;
    } catch (error) {
      console.log(error);
    }
  };
}

export default Scout47Api;
