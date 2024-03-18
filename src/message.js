let message = {
  error: (messages) => {
    let message = "";
    for (let m of messages) {
      message += `<p class="error-message">${m}</p>`;
    }
    return message;
  },

  info: (messages) => {
    let message = "";
    for (let m of messages) {
      message += `<p class="info-message">${m}</p>`;
    }
    return message;
  },

  normal: (messages) => {
    let message = "";
    for (let m of messages) {
      message += `<p style="text-align: center">${m}</p>`;
    }
    return message;
  },
};

export default message;
