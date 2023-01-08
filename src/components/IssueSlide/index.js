import ListItem from "../ListItem";

import "./index.css";

const IssueSlide = (props) => {
  const { slideData } = props;
  const slideObject = slideData[0];
  const slideListItems = slideData[1];
  const { slideName, slideUrl } = slideObject;

  return (
    <div className="issue-slide-bg-container">
      <a className="list-anchor" href={slideUrl}>
        {slideName}
      </a>
      <ul className="issue-list-container">
        {slideListItems.map((eachListItem) => (
          <ListItem listItem={eachListItem} key={eachListItem.id} />
        ))}
      </ul>
    </div>
  );
};

export default IssueSlide;
