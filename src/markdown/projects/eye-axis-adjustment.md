---
slug: "/projects/eye-axis-adjustment"
title: "Eye Axis Adjustment"
start_date: "2018/2"
end_date: "2018/5"
repo: "https://github.com/Zehua-Chen/eye-axis-adjustment.git"
role: "Full Stack Developer"
overview: "Eye Axis Adjustment is a web app that detects if your eyes
are misaligned"
---

Eye Axis Adjustment was a project built during CS 196 Spring 2018. It aims to
diagnose eyes axis misalignment through computer vision.

# What I Did

In the project, my job was to

- build a web front end that takes a series of photos of the user's eyes through
  the webcam,
- build a server that send frontend's photos to computer vision algorithm
  written by other team members to perform diagnosis and then report the result
  back to the frontend.

To take the image, I did the following in order:

1. Request web cam access using `navigator.getUserMedia()`
2. Render web cam's video stream to a video html element
3. Render the content of the video element ino a canvas element
4. Export content from the canvas element to images

The frontend is built using Angular 5, under the advise of the course
assistants. We build the backend using python & Flask as it would be easier to
communicate with the computer vision code this way, which was already written in
python.

# What I Learned

- Pros and cons of Angular vs React
- Basics of writing a web server in Flack
- How to work with webcam related API in browsers
- Gained experience working with programmers from a different specialization
  (computer vision)
