class ListItem extends React.Component {

    render() {

      let verifiedAcc;
      let iconRT;
      let iconFav;

        if(this.props.tweet.user.verified === true) {
          verifiedAcc = (<img src="twitter_verified.jpg" className="verf-icon"/>);
      } else {
          verifiedAcc = (<p></p>);
      };

      if(this.props.tweet.retweeted === true) {
        iconRT = (<i className="fas fa-retweet" style={yesRT}>{this.props.tweet.retweet_count}</i>);
      } else {
        iconRT = (<i className="fas fa-retweet">{this.props.tweet.retweet_count}</i>);
      };

      if (this.props.tweet.favorited === true) {
        iconFav = (<i className="far fa-heart" style={yesFav} data-container="body" data-toggle="popover" data-placement="top" data-content="Like">{this.props.tweet.favorite_count}</i>);
      } else {
        iconFav = (<i className="far fa-heart" data-container="body" data-toggle="popover" data-placement="top" data-content="Like">{this.props.tweet.favorite_count}</i>);
      };

        return (
          <div className="main">
              <div className="profile-pic">
                <img src={this.props.tweet.user.profile_image_url} />
              </div>
              <div className="user-details">
                {this.props.tweet.user.name} @{this.props.tweet.user.screen_name} {verifiedAcc} {moment(this.props.tweet.created_at).fromNow()}
                <li>{this.props.tweet.text}</li>
              </div>
              <div className="icons">
                <span className="retweet-icon">{iconRT}</span>
                <span className="fav-icon">{iconFav}</span>
              </div>
          </div>
        );
    }
}



class Tweets extends React.Component {

    render() {

        let tweetElements = this.props.items.map( item => {
                return <ListItem tweet={item}></ListItem>;
                            });


        return (
           <ul> {tweetElements}</ul>
        );
    }
}


class Header extends React.Component {

    render() {

        return (
            <div>
                <div className="large-profile-pic">
                    <img src={this.props.items[0].user.profile_image_url} />
                </div>
                <h1> {this.props.items[0].user.name}</h1>
           </div>
        );
    }
}



var yesRT = {
  color: "green"
};

var yesFavr = {
    color: "red"
};


ReactDOM.render(
    <div>
    <h1>Twitter</h1>
      <Header items={tweets} />
       <Tweets items={tweets} />

    </div>,
    document.getElementById('root')
);
