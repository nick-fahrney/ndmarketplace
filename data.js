// users service with a single method
// requests array of users from a third-party api via axios
export function getData() {
  const axios = window.axios;
  return axios.get("./ExampleData.json").then((response) => {
    return response.data.data;
    // can just switch out the url in get for relative path to json file
  });
}
