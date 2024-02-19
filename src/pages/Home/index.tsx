import React from 'react';
import { Button, Select } from 'antd';
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
      <Button onClick={handleClick}>测试</Button>
      <Select
        style={{
          width: 200,
        }}
        defaultValue={1}
        options={[{ value: 1, label: '测试A' }]}
      />
      <CustomSelect />
    </div>
  );
};

export default Home;
