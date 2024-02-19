import React, { useState, useRef } from 'react';
import type { BaseSelectRef } from 'rc-select';
import { Select } from 'antd';

import './index.less';

const { Option } = Select;

interface CustomSelectProps {
  options: { value: string; label: string }[];
  placeholder?: string;
  onChange?: (value: string[]) => void;
  width?: string | number;
  displayText?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  onChange,
  width = '200px',
  displayText = 'Please select',
}) => {
  const selectRef = useRef<BaseSelectRef>(null);
  const [selectedCount, setSelectedCount] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (value: any) => {
    setSelectedCount(value.length);
    if (onChange) {
      onChange(value);
    }
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
    <div
      className="custom-select"
      onClick={() => {
        setOpen(true);
        selectRef.current?.focus(); // 调用 focus 方法使 Select 组件获取焦点
      }}
      onBlur={() => setOpen(false)}
      style={{ width, position: 'relative' }}>
      <Select
        mode="multiple"
        ref={selectRef}
        style={{ width: '100%' }}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        open={open}
        tagRender={handleTagRender}
        dropdownStyle={{ marginTop: 0 }}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      {selectedCount > 0 && (
        <div
          style={{
            backgroundColor: '#f5222d',
            color: '#fff',
            boxShadow: 'none',
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
          }}>
          {selectedCount}
        </div>
      )}
      <div className="selected-count">
        <span>{displayText}</span>
      </div>
    </div>
  );
};

export default CustomSelect;
