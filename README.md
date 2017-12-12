# Networked-Tower-Defense-Game
Multiplayer Tower Defense game ran over local networks.

## Getting Started

These instructions will get you a copy of the game up and running on your local machine

### Prerequisites

You will need to install two things to get started

#### Node.js
Node.js is an asynchronous event driven javascript runtime.
It can be downloaded here: https://nodejs.org/en/download/
Downloading Node also includes the Node Package Manager, or NPM.
NPM will be necessary installing diffrent modules that this game relies on.


#### Yarn (optional)
Yarn is a dependency management tool and pairs very well with node applications.  
It can be downloaded from https://yarnpkg.com/en/

### Installing

A step by step series of examples that tell you have to get a development env running

** Note that every command using yarn can also be done using npm.  If you don't have yarn or
do not wish to install it feel free to just replace every instance of 'yarn' with 'npm'

Open a terminal and issue the following commands:

```git clone https://github.com/kyriajohnson/Networked-Tower-Defense-Game.git
   cd Networked-Tower-Defense-Game
   yarn install
```
In order to run the game, just use
```
yarn start
```
This will start the server, which will be listening on the local host
Open two browser windows and point them to the local host. The URL is http://127.0.0.1:3000/ on windows, and http://localhost:3000/ on a Mac.
