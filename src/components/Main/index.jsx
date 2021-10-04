function Main(props) {
  return (
    <div>
      HOME
      <div>
        {props.userData.firstName} {props.userData.lastName}
      </div>
    </div>
  );
}

export default Main;
