##node tutorials from freecodecamp

Node Express

##built-in modules

-OS
-PATH
-FS
-HTTP

#HTTP

-Brief intro
-cover in details later(Next Section)

##npm - global command, comes with node



##npm --version

##local dependency - use it only in this particular project
##npm i <pacakageName>

##global dependency - use it in any project
##npm install -g <packageName>
##sudo npm install -g <packageName> (mac)


##package.json - manifest file(stores important info about project/package)

##manual approach(create package,json in the root,create properties etc)
##npm init (step by step,press enter to skip)
##npm init - y(everything default)

##nodeman is a dev dependency not simplw dependency

##npm i nodemon --save-dev
##or npm i nodemon -D

##to update npm Run npm install -g npm

##upcoming topics @2.25
--EVENT LOOP, ASYNC PATTERNS,EVENTS EMITTER AND STREAMS
--MAIN CONCEPTS
--PRE-BUILT CODEGIT STATUS


##javascript is synchronous and single threaded

##EVENTS
--event - driven programming
--used heavily in node.js
--event is big part of nodejs,nodejs internally use events

--emit and on
--once emit is called after on,another emit after on is not called because emit is already called