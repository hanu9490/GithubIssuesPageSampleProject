import "./index.css";

const ListItem = (props) => {
  const { listItem } = props;
  const { issueName, issueUrl } = listItem;
  return (
    <div className="list-bg-container">
      <li className="list-container">
        <a className="list-item-anchor" href={issueUrl}>
          {issueName}
        </a>
      </li>
    </div>
  );
};

export default ListItem;
