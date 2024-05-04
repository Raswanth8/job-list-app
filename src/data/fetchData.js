import axios from "axios";

async function fetchjobDetails() {
  try {
    const response = await axios.post(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {}
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchjobDetails;
