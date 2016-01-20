#  HTML5 video application
Today we're going to build a mini (ExpressJS/AngularJS (v1)) application that is supposed to show HTML5 video playback statistics. I've made a basic application with `express -H` command, and added a basic Angular setup. I haven't added any database yet. You're going to expand it. You are allowed to use Google and online sources, previous projects, etc. You're allowed to use any type of tools or technology. You may also ask for help or ask questions, like in a real world project. The main goal is not to test your knowledge, it is see how you work. We want to get an understanding of your problem solving skills, creativity and ability to gather information.

You're going to get 1 hour to work on this. I will check in the meantime how you're doing and will be around for questions. Afer that, we're going to discuss what you've built and the choices that you've made. 

## Requirements
We want to be able to know how users generally interact with a video. This way we would be able to see how our video is performing and which part of our video is most popular.

In the current application, we already have a page that contains one HTML5 video. This page needs to star tracking playback behavior. When a user plays the video (1), pauses the video (2), seeks inside the video (3) or stops the video (4), we want to track this. We want to track which event happened and at what time in the video. For example:

event | time(ms) 
-------|----------
play  | 0        
pause | 5194   
seek | 10122
play  | 10122     
stop  | 29004    

You could consider adding more fields to this, like ID, user/session ID or date.
You could also consider splitting the 'seek' event into 'seekFrom' and 'seekTo'.

On a new page, we want to show aggregated statistics of this behavior. So if 1000 users watch the video, we would get an aggregation of all 1000. There are many ways to visualize this. Keep in mind that the purpose is to get a sense of how users are using this video. We don't care about perfect statistics and standard deviations, unless you feel like building predictive algorithms and spend the whole night in the office (which is OK, it's a 24/7 office and we'll keep guard).

One way to visualize all this could be to group the video into X portions and show the amount of play/pause/seek/stop per portion of the video in a table. For example, cut the video into 20 pieces (blocks of 5% of the time) and show the aggregate numbers per piece. You could also visualize the data in a Google Graph (Area Chart?), as you can find on https://developers.google.com/chart/interactive/docs/gallery.

There are many other ways to do it and I'm not suggesting that the above suggestion is the best, and I'm also not suggesting that it's not. It's up to you.

## Let's go!
1. Connect to WiFi `WeWork` with password `P@assw0rd`
2. Get the application with `git clone git@github.com:nuntio/vivie.git FOLDER_NAME` (`FOLDER_NAME` is optional).
3. Get the dependencies with `npm install`
4. Build the stuff and the things.
5. Commit your changes to the git repository.
6. Explain your application and choices.
