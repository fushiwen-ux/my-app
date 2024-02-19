import React from 'react';
import { Button, Select, Space } from 'antd';
import CustomSelect from '../SelectButton';
// import Button from '../TestButton';
import './index.less';

const Home: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple home page.</p>
      <div className="test-less">
        <p>测试less</p>
      </div>
      {/* <Button text="测试" onClick={handleClick} /> */}
      <Space>
        <Button onClick={handleClick}>测试</Button>
        <Select
          style={{
            width: 200,
          }}
          defaultValue={1}
          options={[{ value: 1, label: '测试A' }]}
        />
        <CustomSelect
          displayText="测试占位符"
          options={Array.from({ length: 3 }, (_, index) => ({
            value: `${index}`,
            label: `${index}`,
          }))}
        />
      </Space>
    </div>
  );
};

export default Home;
