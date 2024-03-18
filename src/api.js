import { API_URL, NavigatorOnline } from "./store";
import message from "./message";
import { initCompiler } from "sass";

const errNoInternet = message.error(["not connected to the internet 😔"]);
const errNoApi = message.error(["could not connect to the API...😔"]);

const fetchMethods = { get: "get", post: "post" };
const credentialModes = { omit: "omit", include: "include" };

const responses = {
  httpOk: 200,
  apiOk: 2000,
  notConfirmed: 4006,
};

let navigatorOnline;
NavigatorOnline.subscribe((value) => {
  navigatorOnline = value;
});

const fetchFunc = async (path, method, body, creds) => {
  let options = { method: method, credentials: creds };
  if (body != null) {
    options.body = JSON.stringify(body);
  }

  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/${path}`, options)
      .then((response) => response.json())
      .then((result) => {
        if (
          result.code == responses.apiOk ||
          (result.code == responses.notConfirmed && path == "register")
        ) {
          resolve(result.message);
        } else {
          reject(message.error([result.message]));
        }
      })
      .catch(() => {
        if (!navigatorOnline) {
          reject(errNoInternet);
        } else {
          reject(errNoApi);
        }
      });
  });
};

let api = {
  isLoggedIn: async () => {
    return new Promise((resolve, reject) => {
      fetch(`${API_URL}/ping`, {
        method: fetchMethods.get,
        credentials: "include",
      })
        .then((response) => {
          if (response.status == 200) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(() => {
          if (!navigatorOnline) {
            reject(errNoInternet);
          } else {
            reject(errNoApi);
          }
        });
    });
  },

  register: async (email, password) => {
    return fetchFunc(
      "register",
      fetchMethods.post,
      { email: email, password: password },
      credentialModes.omit,
    );
  },

  login: async (email, password) => {
    return fetchFunc(
      "login",
      fetchMethods.post,
      { email: email, password: password },
      credentialModes.include,
    );
  },

  logout: async () => {
    return fetchFunc(
      "logout",
      fetchMethods.post,
      null,
      credentialModes.include,
    );
  },

  confirm: async (code) => {
    return fetchFunc(
      "confirm?code=" + code,
      fetchMethods.post,
      null,
      credentialModes.omit,
    );
  },

  resendCode: async (email, password) => {
    return fetchFunc(
      "newconfirmationcode",
      fetchMethods.post,
      { email: email, password: password },
      credentialModes.omit,
    );
  },

  reset: async (email) => {
    return fetchFunc(
      "sendresetlink?email=" + email,
      fetchMethods.post,
      null,
      credentialModes.omit,
    );
  },

  changePassword: async (oldPassword, newPassword) => {
    return fetchFunc(
      "changepass",
      fetchMethods.post,
      { old: oldPassword, new: newPassword },
      credentialModes.include,
    );
  },

  changePasswordReset: async (email, password, code) => {
    return fetchFunc(
      "resetpass",
      fetchMethods.post,
      { email: email, password: password, code: code },
      credentialModes.omit,
    );
  },

  deleteAccount: async (email, password) => {
    return fetchFunc(
      "delete",
      fetchMethods.post,
      { email: email, password: password },
      credentialModes.include,
    );
  },

  refreshCookie: async () => {
    return fetchFunc(
      "refresh",
      fetchMethods.post,
      null,
      credentialModes.include,
    );
  },

  getCourses: async () => {
    return fetchFunc("courses", fetchMethods.get, null, credentialModes.omit);
  },

  getProfessors: async () => {
    return fetchFunc(
      "professors",
      fetchMethods.get,
      null,
      credentialModes.omit,
    );
  },

  getScores: async () => {
    return fetchFunc("scores", fetchMethods.get, null, credentialModes.omit);
  },

  getScoresByProfessorUUID: async (uuid) => {
    return fetchFunc(
      "scores/prof/" + uuid,
      fetchMethods.get,
      null,
      credentialModes.omit,
    );
  },

  getScoresByCourse: async (code) => {
    return fetchFunc(
      "scores/coursecode/" + code,
      fetchMethods.get,
      null,
      credentialModes.omit,
    );
  },

  getCoursesByCodeLike: async (code) => {
    return fetchFunc(
      "scores/coursecodelike/" + code,
      fetchMethods.get,
      null,
      credentialModes.omit,
    );
  },

  getCoursesByNameLike: async (name) => {
    return fetchFunc(
      "scores/coursenamelike/" + name,
      fetchMethods.get,
      null,
      credentialModes.omit,
    );
  },

  getCoursesByProfessorNameLike: async (name) => {
    return fetchFunc(
      "scores/profnamelike/" + name,
      fetchMethods.get,
      null,
      "omit",
    );
  },

  grade: async (code, uuid, teaching, coursework, learning) => {
    return fetchFunc(
      "courses/grade",
      fetchMethods.post,
      {
        code: code,
        uuid: uuid,
        teaching: parseFloat(teaching),
        coursework: parseFloat(coursework),
        learning: parseFloat(learning),
      },
      credentialModes.include,
    );
  },
};

export default api;
