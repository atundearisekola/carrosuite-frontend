import React, { useState } from "react";

import { AutoComplete } from "antd";

const DropdownWithSearch = props => {
  const [textValue,setTextValue ] = useState(null)
  return (
    <AutoComplete
      className={props.className}
      dataSource={props.data}
      value={textValue}
      onSelect={value => {
        setTextValue(value);
      }}
      placeholder={props.placeholder}
      filterOption={(inputValue, option) =>
        option.props.children
          .toUpperCase()
          .indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
};
export default DropdownWithSearch;
