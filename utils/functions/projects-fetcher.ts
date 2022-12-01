import axios from "axios";

const projectFetcher = {
  addProject: async (formData) => {
    let response = await axios({
      url: "/api/project",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data: formData
    });
    if (response.data.message == "Success"){
      return true
    }
    return false
  }
}

export default projectFetcher