## Angular Getting Started - Web mail client  

### Step 0 - Baseline

1. Download / Install Node.js :  
   https://nodejs.org/en/download/
    
   This will give you both node and npm

2. Install Angular-CLI

   `$ npm install -g @angular/cli`
   
   verify:
   ```
   $ ng --version
       _                      _                 ____ _     ___
      / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
     / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
    / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
   /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                  |___/
   @angular/cli: 1.4.9
   node: 6.11.4
   os: darwin x64

   ```
   === Success!!
   
### Step 1 - Initialize new project with Angular-CLI

1. Initialize project
    
   `$ ng new angular-mail --style=scss`
   
   Creates project directory, initializes git project, with common project defaults, including:
   - src directory with a single page, app module and app component
   - unit test configuration with jasmine and karma
   - e2e test configuration with protractor
   - configuration files for typescript
   - installs all required libraries
   
2. Verify project

   `$ ng serve --open`
   
   Starts the development server and opens a browser on the index page
   
3. Run some unit tests
  
   `$ ng test`
   
   Watches for file changes and re-runs tests
