export default function PreviewCard(props) {
  return (
    <div className={"preview__card " + props.className}>
      <div className="card-header row hr-center space-between">
        <p>{props.name || "Equipments"}</p>
        <span>→</span>
      </div>
    </div>
  );
}
