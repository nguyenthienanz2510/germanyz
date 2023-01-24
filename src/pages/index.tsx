import { GetStaticProps } from 'next'
import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import LatestPostsContainer from '../components/MainContent/LatestPostsContainer'
import WelcomeNotification from '../components/Notification/WelcomeNotification'
import {
  GetBlogCategoriesDocument,
  GetBlogCategoriesQuery,
  GetPostsDocument,
  GetPostsQuery
} from '../generated/graphql'
import client from '../lib/apolloClient'

interface IndexPageProps {
  latestPosts: GetPostsQuery
  blogCategories: GetBlogCategoriesQuery
}

const IndexPage: React.FC<IndexPageProps> = ({
  latestPosts,
  blogCategories,
}) => {

  if (typeof window !== "undefined") {
    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v15.0'
      })
    };
  
    (function(d, s, id) {
      var js:any = d.getElementsByTagName(s)[0]
      var fjs:any = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs?.parentNode?.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  
  
  return (
    <MainLayout
      latestPosts={latestPosts}
      blogCategories={blogCategories}
      title="Home"
    >
      <LatestPostsContainer latestPosts={latestPosts} />

      <WelcomeNotification />

    <div id="fb-root"></div>
    <div id="fb-customer-chat" className="fb-customerchat">
    </div>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "611526916238214");
      chatbox.setAttribute("attribution", "biz_inbox");
    </script>

    {/* <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v15.0'
        })
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

    </script> */}

    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: latestPosts } = await client.query({
    query: GetPostsDocument,
    variables: {
      quantity: 5,
    },
  })

  const { data: blogCategories } = await client.query({
    query: GetBlogCategoriesDocument,
  })

  return {
    props: {
      latestPosts,
      blogCategories,
    },
    revalidate: 1,
  }
}

export default IndexPage
