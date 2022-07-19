

function Profile(props) {
  return (
    <div>

      <h1>{props.fullName}</h1>
      <h2>{props.bio} - {props.profession}</h2>
      <img src={props.imge} width="1000"  />

    </div>
  )
}

export default Profile