import { NextPage } from 'next';
import { Avatar } from '@mui/material';
import MainLayout from '../components/Layout/Mainlayout';

const IndexPage: NextPage = () => {
  return (
    <MainLayout title="Homepage">
      <div tw="h-screen flex justify-center items-center">
        <Avatar>H</Avatar>
        <Avatar>N</Avatar>
        <Avatar>OP</Avatar>
      </div>
    </MainLayout>
  );
};

export default IndexPage;
