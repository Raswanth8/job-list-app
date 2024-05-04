import axios from "axios";

async function fetchjobDetails() {
  try {
    const response = await axios.post(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        offset: 0,
        limit: 150,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchjobDetails;
