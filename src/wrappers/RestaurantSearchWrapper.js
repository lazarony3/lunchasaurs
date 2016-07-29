import React from 'react'

export default class RestaurantSearchWrapper extends React.Component {
    constructor(props) {
     super(props);
     this.render = this.render.bind(this);
     this.searchForRestaurants = this.searchForRestaurants.bind(this);

     this.searchForRestaurants();
    }

    render() {
        return (
            <div></div>
        )
    }


    searchForRestaurants () {
        var self = this;

        var keys = {
          consumerKey:	'qZJ5SgUknXvL_UEYpJkDNw',
          consumerSecret:	'hs2MRu_muu0azvrrMDQzRYOkEgM',
          token:	'hfUVaPMokexYPCAaant7WgNha-CiS5rQ',
          tokenSecret:	's-MLxiwHm89KZbV2B630TQ8Jr9w'
        }

        // var oauth = new OAuth.OAuth(
        //   'https://api.twitter.com/oauth/request_token',
        //   'https://api.twitter.com/oauth/access_token',
        //   'your application consumer key',
        //   'your application secret',
        //   '1.0A',
        //   null,
        //   'HMAC-SHA1'
        // );

        // this.serverRequest = $.get(this.props.source, function (result) {
        //   var lastGist = result[0];
        //   this.setState({
        //     username: lastGist.owner.login,
        //     lastGistUrl: lastGist.html_url
        //   });
        // }.bind(this));

        // $.get( 'https://api.yelp.com/v2/search?term=food&location=San+Francisco',
        //   function (data) {
        //     console.log(data);
        //   }
        // );
    };
}
