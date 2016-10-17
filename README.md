                          ____        _ _     _    _____           _                 
                         |  _ \      (_) |   | |  / ____|         | |                
                         | |_) |_   _ _| | __| | | (___  _   _ ___| |_ ___ _ __ ___  
                         |  _ <| | | | | |/ _` |  \___ \| | | / __| __/ _ \ '_ ` _ \ 
                         | |_) | |_| | | | (_| |  ____) | |_| \__ \ ||  __/ | | | | |
                         |____/ \__,_|_|_|\__,_| |_____/ \__, |___/\__\___|_| |_| |_|
                                                          __/ |                      
                                                         |___/                       
                                                         
# Description
This is a boilerplate buildsystem to get you up and running 

# Installing Global npm packages
- bower
- nodemon

# Project Configuration
- src : config/index.js
- fields :
    
    - env : (choice:development, production) (default: "development")
    - host : (default: '0.0.0.0')
    - port : (default: 8081)
    - project : title, author, description
    - browserSync : port, ui 
    - server : engine (choice: html, pug) (default: pug)

# Features
- Version Control : GIT 
- Package Manager : npm, bower
- Web Framework : Express
- Templating Engine : Pug
    