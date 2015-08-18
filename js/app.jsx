var React = require('react')

var Header = React.createClass({
  render: function() {
    return (
      <nav>
        <button> Holds menu image </button>
        <a><button> Log in/Sign up </button></a>
        <a href="www.lifehacker.com">
          <img src="https://i.kinja-img.com/gawker-media/image/upload/s--yunzN4cw--/c_fit,fl_progressive,q_80,w_600/ul0yvekahmv1qmfirdmt.png" />
        </a>
      </nav>
    )
  }
})

var Aside = React.createClass({
  render: function() {
    return (
      <aside>
        <p><strong>Popular</strong> from all blogs</p>
        <img>Images</img>
      </aside>
    )
  }
})

var BlogPosts = React.createClass({
  render: function() {
    return (
      <section>
        <div>
          <h3>Use TransferWise To Send Money Internationally</h3>
          <p>
            Surprise surprise.  Your bank is not being transparent with you when it comes to fees for tasks like sending money internationally.
          </p>
        </div>
        <div>
          <h3>The Physician's Daily Bag</h3>
          <p>
            Being a physician is tough work, and for Everyday Carry reader Lee, that means keeping an organized bag filled with the essentials.
          </p>
        </div>
      </section>
    )
  }
})

var App = React.createClass({
  render: function() {
    return (
      <main>
        <Header />
        <Aside />
        <BlogPosts />
      </main>
    )
  }
})

React.render(<App />, document.body)
