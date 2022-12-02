import axios from "axios";

const projectFetcher = {
  addProject: async (formData) => {
    let response = await axios({
      url: "/api/projects",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data: formData
    });
    return response
  }
}

export default projectFetcher