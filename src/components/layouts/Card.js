import React from "react";

const Card = props => {
  const { title, bordered, style, content } = props;
  return (
    <Card title={title} bordered={bordered} style={style}>
      {content}
    </Card>
  );
};

export default Card;
