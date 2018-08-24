# Better Browser History
Better Browser History is a lightweight Google Chrome Extension to help manage websites that you or your workplace may deem not safe for the workplace.

## Install
1. Download or clone this repo
2. Open Google Chrome and navigate to `chrome://extensions`
3. In the top left corner click on the button that says `Load Unpacked`
4. Navigate to where you downloaded or cloned this repo into and with a single left mouse click choose either the `dev` or `build` directory and choose `open` in the bottom left
5. You're done

## Usage
### Blacklist Websites
1. Navigate to almost any page, e.g. http://www.example.com/, and you should now see a new extension labeled with a capital `B`
2. Single left mouse click the extensions (the capital `B`)
3. Add the domain name of any website, e.g. `example`
4. Navigate back to `http://www.example.com`
5. Check Google Chrome's browser history, `CTRL + h`
6. `http://www.example.com` will no longer show up in your Google Chrome browser history

### Whitelist Websites (remove from blacklist)
1. Right click the extension (the capital `B`)
2. Single left mouse click on any website you may have added to the blacklist
3. This website will now begin to show up in your Google Chrome browser history

## FAQ
Q. Websites aren't being removed from my Google Chrome browser history  
A. There is a bug that has been around since 2014 that prevents the Google Chrome Extensions API from altering the browsers history unless history sync has been turned off in the browser

## Contributors
<img alt="Brandon Benefield - Repo Maintainer" src="https://avatars0.githubusercontent.com/u/29239201?v=4" width="100">