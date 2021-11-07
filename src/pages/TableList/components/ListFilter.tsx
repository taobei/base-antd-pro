import type { ProFormInstance } from '@ant-design/pro-form';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { useRef } from 'react';

interface FormSearchParams {
  test1: string;
  test2: string;
  test3: string;
  test4: string;
}

const ListFilter = () => {
  const formRef = useRef<ProFormInstance<FormSearchParams>>();
  const onFinish = async (data: FormSearchParams) => {
    console.log('data--->', data);
  };
  return (
    <ProCard>
      <ProForm<FormSearchParams>
        formRef={formRef}
        layout="inline"
        onFinish={onFinish}
        submitter={{
          searchConfig: {
            submitText: '搜索',
            resetText: '重置',
          },
        }}
      >
        <ProFormText
          name="test1"
          label="测试1"
          fieldProps={{ maxLength: 200 }}
          rules={[{ required: true }]}
        />
        <ProFormText name="test2" label="测试2" fieldProps={{ maxLength: 200 }} />
        <ProFormText name="test3" label="测试3" fieldProps={{ maxLength: 200 }} />
        <ProFormText name="test4" label="测试4" fieldProps={{ maxLength: 200 }} />
      </ProForm>
    </ProCard>
  );
};

export default ListFilter;
