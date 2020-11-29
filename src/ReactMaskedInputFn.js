// import React, { useEffect } from "react";
// import PropTypes from "prop-types";
// import CreateTextMaskInputElement from "./CreateTextMaskInputElement";
// import CommonManipulators from "./CommonManipulators";

// import React from "react";

// const ReactMaskedInput = (prop) => {
//   const { render, ...props } = prop;

//   delete props.mask;
//   delete props.guide;
//   delete props.pipe;
//   delete props.placeholderChar;
//   delete props.keepCharPositions;
//   delete props.value;
//   delete props.onBlur;
//   delete props.onChange;
//   delete props.showMask;

//   const onChange = (event) => {
//     props.textMaskInputElement.update();

//     if (typeof props.onChange === "function") {
//       props.onChange(event);
//     }
//   };
//   const onBlur = (event) => {
//     if (typeofprops.onBlur === "function") {
//       props.onBlur(event);
//     }
//   };

//   const setRef = (inputElement) => {
//     props.inputElement = inputElement;
//   };

//   const initTextMask = () => {
//     props.textMaskInputElement = CreateTextMaskInputElement({
//       inputElement: props.inputElement,
//       ...props,
//     });
//     props.textMaskInputElement.update(props.value);
//   };

//   useEffect(() => {
//     initTextMask();
//   }, []);

//   useEffect(() => {
//     // Getting props affecting value
//     const { value, pipe, mask, guide, placeholderChar, showMask } = props;
//     const { isNil } = CommonManipulators;

//     // Сalculate that settings was changed:
//     // - `pipe` converting to string, to compare function content
//     // - `mask` converting to string, to compare values or function content
//     // - `keepCharPositions` exludes, because it affect only cursor position
//     const settings = { guide, placeholderChar, showMask };
//     const isPipeChanged =
//       typeof pipe === "function" && typeof prevProps.pipe === "function"
//         ? pipe.toString() !== prevProps.pipe.toString()
//         : (isNil(pipe) && !isNil(prevProps.pipe)) ||
//           (!isNil(pipe) && isNil(prevProps.pipe));
//     const isMaskChanged = mask.toString() !== prevProps.mask.toString();
//     const isSettingChanged =
//       Object.keys(settings).some(
//         (prop) => settings[prop] !== prevProps[prop]
//       ) ||
//       isMaskChanged ||
//       isPipeChanged;

//     // Сalculate that value was changed
//     const isValueChanged = value !== props.inputElement.value;

//     // Check value and settings to prevent duplicating update() call
//     if (isValueChanged || isSettingChanged) {
//       initTextMask();
//     }
//   });

//   return (
//     setRef,
//     {
//       onBlur: onBlur,
//       onChange: onChange,
//       defaultValue: props.value,
//       ...props,
//     }
//   );
// };

// export default ReactMaskedInput;

// export default class ReactMaskedInput extends React.PureComponent {
//   constructor(...args) {
//     super(...args);

//     this.setRef = this.setRef.bind(this);
//     this.onBlur = this.onBlur.bind(this);
//     this.onChange = this.onChange.bind(this);
//   }

//   setRef(inputElement) {
//     this.inputElement = inputElement;
//   }

//   initTextMask() {
//     const {
//       props,
//       props: { value },
//     } = this;

//     this.textMaskInputElement = CreateTextMaskInputElement({
//       inputElement: this.inputElement,
//       ...props,
//     });
//     this.textMaskInputElement.update(value);
//   }

//   componentDidMount() {
//     this.initTextMask();
//   }

//   componentDidUpdate(prevProps) {
//     // Getting props affecting value
//     const { value, pipe, mask, guide, placeholderChar, showMask } = this.props;
//     const { isNil } = CommonManipulators;

//     // Сalculate that settings was changed:
//     // - `pipe` converting to string, to compare function content
//     // - `mask` converting to string, to compare values or function content
//     // - `keepCharPositions` exludes, because it affect only cursor position
//     const settings = { guide, placeholderChar, showMask };
//     const isPipeChanged =
//       typeof pipe === "function" && typeof prevProps.pipe === "function"
//         ? pipe.toString() !== prevProps.pipe.toString()
//         : (isNil(pipe) && !isNil(prevProps.pipe)) ||
//           (!isNil(pipe) && isNil(prevProps.pipe));
//     const isMaskChanged = mask.toString() !== prevProps.mask.toString();
//     const isSettingChanged =
//       Object.keys(settings).some(
//         (prop) => settings[prop] !== prevProps[prop]
//       ) ||
//       isMaskChanged ||
//       isPipeChanged;

//     // Сalculate that value was changed
//     const isValueChanged = value !== this.inputElement.value;

//     // Check value and settings to prevent duplicating update() call
//     if (isValueChanged || isSettingChanged) {
//       this.initTextMask();
//     }
//   }

//   render() {
//     const { render, ...props } = this.props;

//     delete props.mask;
//     delete props.guide;
//     delete props.pipe;
//     delete props.placeholderChar;
//     delete props.keepCharPositions;
//     delete props.value;
//     delete props.onBlur;
//     delete props.onChange;
//     delete props.showMask;

//     return render(this.setRef, {
//       onBlur: this.onBlur,
//       onChange: this.onChange,
//       defaultValue: this.props.value,
//       ...props,
//     });
//   }

//   onChange(event) {
//     this.textMaskInputElement.update();

//     if (typeof this.props.onChange === "function") {
//       this.props.onChange(event);
//     }
//   }

//   onBlur(event) {
//     if (typeof this.props.onBlur === "function") {
//       this.props.onBlur(event);
//     }
//   }
// }

// // ReactMaskedInput.propTypes = {
// //   mask: PropTypes.oneOfType([
// //     PropTypes.array,
// //     PropTypes.func,
// //     PropTypes.bool,
// //     PropTypes.shape({
// //       mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
// //       pipe: PropTypes.func,
// //     }),
// //   ]).isRequired,
// //   guide: PropTypes.bool,
// //   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// //   pipe: PropTypes.func,
// //   placeholderChar: PropTypes.string,
// //   keepCharPositions: PropTypes.bool,
// //   showMask: PropTypes.bool,
// // };

// ReactMaskedInput.defaultProps = {
//   render: (ref, props) => <input ref={ref} {...props} />,
// };

// export { default as ConformToMask } from "./ConformToMask";
