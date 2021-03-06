import axios from "axios";
const LOGIN_USER_KEY = "LOGIN_USER_KEY";

var baseURL;
baseURL = "https://dreamlinebussiness-backend.herokuapp.com/";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    if (localStorage.getItem(LOGIN_USER_KEY)) {
      config.headers.common["Authorization"] = JSON.parse(
        localStorage.getItem(LOGIN_USER_KEY)
      ).token;
    }

    return config;
  },
  (err) => {
    console.error(err);
  }
);

export default class API {
  getPosts = async () => {
    const posts = await api
      .get("/posts/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return posts;
  };
  addPost = async (name, body, image) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("body", body);
    formData.append("image", image);
    const savedPost = await api
      .post("/posts/add/", formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return savedPost;
  };
  deletePost = async (id) => {
    const response = await api
      .delete("/posts/delete/" + id + "/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return response;
  };
  // ///////////////////////////////////////////////////////////
  // Users
  // //////////////////////////////////////////////////////////

  signIn = async (email, password) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const user = await api
      .post("/user/signin/", formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return user;
  };

  signUp = async (username, email, password) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    const newUser = await api
      .post("/user/signup/", formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return newUser;
  };

  // ///////////////////////////////////////////////////////////
  // Background Image
  // ///////////////////////////////////////////////////////////

  getBackgroundimages = async () => {
    const bimages = await api
      .get("/background-images/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return bimages;
  };
  // /////////////////////////////////////////////////////////////
  // Generated Background
  // /////////////////////////////////////////////////////////////

  postUserbackground = async (params = {}) => {
    const formData = new FormData();

    for (const key in params) {
      formData.append(key, params[key]);
    }

    return api
      .post("/user-backgrounds/add/", formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  getUserbackgrounds = async () => {
    return api
      .get("/user-backgrounds/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
  getUserbackground = async (id) => {
    const response = await api
      .get("/user-backgrounds/images/" + id + "/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return response;
  };
}
