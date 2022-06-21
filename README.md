# DormFinder - A Peer-Based Online Information and Rating System for Student Dormitories in UPLB
Abstract/General Summary:
	The limited mobility imposed by lockdown restrictions due to COVID-19 have made it difficult for UPLB students to scout for dormitories and lodging in Los Baños, Laguna. This study has developed a web application to give an avenue to students and those seeking lodging to find dormitories in Los Baños. It also serves as a platform for landlords and dorm owners to advertise their establishments. Information regarding COVID-19 Health and Safety practices that an establishment adheres to is provided in the website, and given at the discretion of the landlord/dorm owner. The usability of the web application was evaluated using a System Usability Scale. With ten (10) respondents, the test garnered an average SUS score of 81.5%.

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




