import { NextPage } from 'next'
import { Avatar } from '@mui/material'
import MainLayout from '../components/Layout/Mainlayout'

const IndexPage: NextPage = () => {
  return (
    <MainLayout title="Homepage">
      <div className="w-10 h-10 bg-red-500 dark:bg-blue-500"></div>
      <h1 className='text-primary'>Heading 1</h1>
      <h2>Heading 2</h2>
      <div className="h-screen flex justify-center items-center">
        <Avatar>H</Avatar>
        <Avatar>N</Avatar>
        <Avatar>OP</Avatar>
      </div>
    </MainLayout>
  )
}

export default IndexPage
