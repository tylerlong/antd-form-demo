import React from 'react';
import { Form, Input, Typography } from 'antd';
import { auto } from '@tylerlong/use-proxy/lib/react';

import { Store } from './store';

const { Title, Text } = Typography;

const App = (props: { store: Store }) => {
  const { store } = props;
  const initialValues = { count: store.count };
  const render = () => {
    return (
      <>
        <Title>Untitled App</Title>
        <Text>{store.count}</Text>
        <Form initialValues={initialValues} key={store.count}>
          <Form.Item name="count">
            <Input></Input>
          </Form.Item>
        </Form>
      </>
    );
  };
  return auto(render, props);
};

export default App;
