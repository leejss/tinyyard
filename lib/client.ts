import { storyblokInit, apiPlugin } from "@storyblok/react";
import { API_TOKEN } from "lib/constants";
import { getStoryblokApi } from "@storyblok/react";

storyblokInit({
  accessToken: API_TOKEN,
  use: [apiPlugin],
});
const ApiClient = getStoryblokApi();

console.log(API_TOKEN);
console.log(ApiClient);

export default ApiClient;
