export function withContext(WrappedComponent, Context) {
  function ComponentWithContext(props) {
    return (
      <Context.Consumer>
        {(data) => {
          return <WrappedComponent context={data} {...props} />;
        }}
      </Context.Consumer>
    );
  }

  return ComponentWithContext;
}
