# Development Set-up
## Prerequisites
* Node.js Package Manager
* WSL 2

## Instructions
1. Open your Ubuntu command line (or distribution of your choice)
2. Install cURL (a tool used for downloading content from the internet in the command-line) with: `sudo apt-get install curl`
3. Install nvm, with: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
4. Install both the current and stable LTS versions of Node.js. In a later step, you'll learn how to switch between active versions of Node.js with an nvm command. 
`nvm install --lts`
`nvm install --lts`
5. Verify that Node.js is installed and the currently default version with: `node --version`. Then verify that you have npm as well, with: `npm --version`
3. Run the following command to install other packages:
`npm install`
`npm run client-install`
3. Run the following command to use the program:
`npm run dev`
