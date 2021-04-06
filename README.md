# CSE3311-TEAM-8

# Project Vision
# To design a music player application that delivers a dynamic learning experience on traditional physics subjects.

-----------------
Getting Started
-----------------
Step 1: Install nodejs on your machine. Note: Download node version 12 or higher. 
        Use link: https://nodejs.org/en/download/  

Step 2: Next, open your terminal and install expo-cli.

        Command for Windows and Mac: npm i -g expo-cli
        Additional: For Mac - If permissions are not configured, use command: sudo npm i -g expo-cli 

Step 3: Now install Expo Client(Andriod) or Expo Go(iOS) on your phone from Appstore or Playstore.  

Step 4: Text Editor. You can download any text editor you like. Our team used Visual Studio, so the instructions are specifically for VS Code. 
        For any other editors, the instructions are similar. 

Now that we have set up the development environment, let's dive into the creation of expo project. 

Step 5: In the terminal, use command: expo init ProjectName  
        ProjectName is to be replaced with your actual project name. The command creates a new expo project with initial javascript files.  

Step 6: The above command asks to choose a template between Managed workflow OR Bare workflow. 
        For this project, we will use Managed workflow. So, select 'blank' under Managed workflow. 
         
Step 7: Now, in the terminal open the newly created project folder: cd ProjectName 
        And open it in your text editor (VS code in our case) with command: code . 

Step 8: Now from the GitHub repository, copy the contents of App.js file into the existing App.js file in VS code.
        Create a new Header.js file in your VS code and copy the contents of Header.js from GitHub into the newly created file.
        Lastly, download all the pictures(.jpg), all the songs (Song 1 to 11, .mp3 files), and lyrics.json file from GitHub and upload it into the assets folder in VS code.
        
        Note:
        “In VS code” means the left explorer window with the list of files and folders. You could also go into the actual project through File Explorer and change the files.
        Header.js should be in the same location as App.js,
        All the pictures, songs, and lyrics.json should be in the assets folder.

Step 9: For the project, we had to install additional packages.  
        In the terminal of VS code, use command: 
        yarn add @react-native-community/slider  
        OR 
        npm install @react-native-community/slider --save 

        If using iOS, install cocoapods using command: npx pod-install
        
        The above command installs a package for a slider bar for showing the progress in played music.  
        
        Next, you need to install expo-av
        In the terminal of VS code, use command:  expo install expo-av
        
        The above command installs expo audio API and allows you to implement audio playback and recording in your app.

Step 10: In the text editor, click on view and then click on terminal. This should open the terminal inside your text editor.  

Step 11: In the terminal (opened in text editor), use command: npm start 

         This should start Metro Bundler on your browser. The Metro Bundler gives you options on where you want to run the app (emulator or browser or actual device).
         The easiest way would be to open it in a browser but because the app was designed for smaller phone screen, it won't look pretty. 
         Step 3 asks to install Expo Client or Expo Go on your phone, so further instructions will be on how to run the app in you android or iOS device.   

Step 12: Using your personal device is much easier than emulator. 

        For Android: Open Expo Client and scan the QR code shown in the Metro Bundler (from Step 11). This will run the app and take you to the home screen.  

        For iOS: Open camera and scan the QR code. This will open Expo Go, run the app, and take you to the home screen.  

 
Enjoy “Physics Rocks”
