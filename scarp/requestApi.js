const request = require("request-promise");

exports.download = (url) =>
  new Promise((resolve, reject) => {
    const options = {
      url,
      encoding: null,
    };
    request(options)
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });

exports.getRequest = (url) =>
  new Promise((resolve, reject) => {
    const options = {
      url,
    };
    request(options)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      });
  });
