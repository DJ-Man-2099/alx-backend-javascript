export default (mathFunction) => {
  let value;
  const message = 'Guardrail was processed';
  try {
    value = mathFunction();
  } catch (error) {
    value = String(error);
  }
  return [value, message];
};
