import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer exvEqmKa0F3J5EAgng-WIuYgxBDBTHqAiB_jmkYc1N28bH-0D6zgvoA1zzqEh_gU0pz-vsoaOghemVlAGECoY7hFq4F0UmgtP8RdYTbfxpkS1QgSBx-NGrYh_qUUXnYx'
    }
});