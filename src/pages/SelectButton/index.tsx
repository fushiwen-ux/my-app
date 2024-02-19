import React, { useState } from 'react';
import { Select } from 'antd';

import './index.less';

const { Option } = Select;

const CustomSelect: React.FC = () => {
  const [selectedCount, setSelectedCount] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (value: any) => {
    setSelectedCount(value.length);
  };

  const handleBlur = () => {
    setOpen(false);
  };

  const handleFocus = () => {
    setOpen(true);
  };

  const handleTagRender = (props: any) => {
    return <></>;
  };

  return (
    <div className="custom-select" onClick={() => setOpen(!open)}>
      <Select
        mode="multiple"
        style={{ width: '200px' }}
        placeholder="Please select"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        open={open}
        tagRender={handleTagRender}
        dropdownStyle={{ marginTop: 0 }}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
        {/* Add more options as needed */}
      </Select>
      <div className="selected-count">
        {selectedCount > 0 ? `Selected: ${selectedCount}` : 'Please select'}
      </div>
    </div>
  );
};

export default CustomSelect;
