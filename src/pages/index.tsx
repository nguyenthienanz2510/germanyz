import { NextPage } from 'next';
import { Avatar } from '@mui/material';
import tw from 'twin.macro';

const IndexPage: NextPage = () => {
  return (
    <div tw='h-screen flex justify-center items-center'>
      <Avatar>H</Avatar>
      <Avatar>N</Avatar>
      <Avatar>OP</Avatar>
    </div>
  );
};

export default IndexPage;
