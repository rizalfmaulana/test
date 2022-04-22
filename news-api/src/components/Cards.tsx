import { Badge, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { changeDateTime } from "../config/changeDateTime";
import { IArticles } from "../types/news";

const Cards: React.FC<IArticles> = ({ author, content, description, publishedAt, source, title, url, urlToImage }) => {
  return (
    <Card className="p-2">
      <CardImg alt={title} src={urlToImage} top width="100%" height="300px" />
      <CardBody>
        <span className="mb-2 text-uppercase text-secondary fw-bold d-inline-block" style={{ fontSize: "12px" }}>
          {source.name}
        </span>
        <CardTitle className="fw-bold" tag="h5">
          {title}
        </CardTitle>
        <CardText className="fs-6 text-secondary">{description}</CardText>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column">
            <span style={{ fontSize: "11px" }}>{author || "no name"}</span>
            <span style={{ fontSize: "11px" }}>{changeDateTime(publishedAt)}</span>
          </div>
          <Badge color="info" target="_blank" href={url} className="text-decoration-none py-2 px-5">
            Detail
          </Badge>
        </div>
      </CardBody>
    </Card>
  );
};

export default Cards;
