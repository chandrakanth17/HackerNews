# HackerNews
Hackes app

#Steps to use app
Clone the repo
Run `yarn`
run `yarn run dev` to start local env
run `yarn test` to see test files
run `yarn run build` for production build


App Live in https://hackernewsassignment.herokuapp.com/

For App to show the content please do enable insecure content in browser

# Steps to enable
- Click on the lock icon => site settings => Scroll to last => Insecure content => Allow 
and Reload the page. 

# Reason to Enable insecure content
App is currently using Algolia api to fetch news feed and app is hosted under https, whereas algolia is under http of which browser throws `mixed content` error and does not allow the page to make the request.
