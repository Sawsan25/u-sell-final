// add validation messages
/**
 * @param {string} validateType type of validation.
 * @param {*} validateValue value of validation.
 */
const getMessage = (validateType, validateValue) => {
  const msgs = {
    required: "Gereklidir",
    minLength: `${validateValue} karakterden büyük olmalı`,
  };
  return msgs[validateType];
};

// add validations
/**
 * @param {string} dataValue any value.
 * @param {string} validateKey type of validation.
 * @param {string} validateValue value of validation.
 */
const checkValidate = (dataValue, validateKey, validateValue) => {
  if (
    validateKey === "required" &&
    (!dataValue || (typeof dataValue === "string" && dataValue.trim() === ""))
  ) {
    return getMessage(validateKey);
  }
  if (validateKey === "minLength" && dataValue.trim().length < validateValue) {
    return getMessage(validateKey, validateValue);
  }
  return "";
};

export const validate = (dataObj, validateObj) => {
  let errorsObj = {};
  for (let key in validateObj) {
    for (let type in validateObj[key]) {
      const msg = checkValidate(dataObj[key], type, validateObj[key][type]);
      if (msg) {
        errorsObj = {
          ...errorsObj,
          [key]: msg,
        };
        break;
      }
    }
  }
  return errorsObj;
};
