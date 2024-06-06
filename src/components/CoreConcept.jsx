
export default function CoreConcept(props) {
  const {title, description, image} = props
  return (
    <li>
      <img src={image} alt="Core concept" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
