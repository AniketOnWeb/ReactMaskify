export default class CommonManipulators {
  static isArray = (value) => {
    return (Array.isArray && Array.isArray(value)) || value instanceof Array;
  };

  static convertMaskToPlaceholder = (
    mask = emptyArray,
    placeholderChar = "_"
  ) => {
    if (!CommonManipulators.isArray(mask)) {
      throw new Error(
        "Text-mask:convertMaskToPlaceholder; The mask property must be an array."
      );
    }

    if (mask.indexOf(placeholderChar) !== -1) {
      throw new Error(
        "Placeholder character must not be used as part of the mask. Please specify a character " +
          "that is not present in your mask as your placeholder character.\n\n" +
          `The placeholder character that was received is: ${JSON.stringify(
            placeholderChar
          )}\n\n` +
          `The mask that was received is: ${JSON.stringify(mask)}`
      );
    }

    return mask
      .map((char) => {
        return char instanceof RegExp ? placeholderChar : char;
      })
      .join("");
  };

  static isString = (value) => {
    return typeof value === "string" || value instanceof String;
  };

  static isNumber = (value) => {
    return (
      typeof value === "number" && value.length === undefined && !isNaN(value)
    );
  };

  static isNil = (value) => {
    return typeof value === "undefined" || value === null;
  };

  static processCaretTraps = (mask) => {
    const strCaretTrap = "[]";

    const indexes = [];

    let indexOfCaretTrap;
    while (
      ((indexOfCaretTrap = mask.indexOf(strCaretTrap)), indexOfCaretTrap !== -1)
    ) {
      // eslint-disable-line
      indexes.push(indexOfCaretTrap);

      mask.splice(indexOfCaretTrap, 1);
    }

    return { maskWithoutCaretTraps: mask, indexes };
  };
}
