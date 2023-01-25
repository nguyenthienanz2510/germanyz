const Footer = () => {
  if (typeof window !== 'undefined') {
    var chatbox = document.getElementById('fb-customer-chat')
    chatbox?.setAttribute('page_id', '611526916238214')
    chatbox?.setAttribute('attribution', 'biz_inbox')

    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v15.0',
      })
    }

    ;(function (d, s, id) {
      var js: any = d.getElementsByTagName(s)[0]
      var fjs: any = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
      fjs?.parentNode?.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  }

  return (
    <div className="h-16 dark:bg-color-bg-dark-header flex justify-center items-center">
      Footer
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  )
}

export default Footer
