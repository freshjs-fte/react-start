const getValueFromSomewhere = () => {};

export default function RenderProp(props) {
  const value = getValueFromSomewhere();

  return props.children(value);
}
