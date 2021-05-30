---
slug: "/projects/cpp-json"
title: "cpp-json"
start_date: "2019/1"
end_date: "2019/8"
repo: "https://github.com/Zehua-Chen/cpp-json"
role: "Sole Developer"
overview: "Header-Only C++ JSON Parser"
---

# Table of Contents

1. [What I Did](#did)
2. [What I Learned](#learned)

# What I Did <a name="did"></a>

In Mechmania 2018, my team encountered with some issues parsing JSON in Unity.
We couldn't figure out how to use a package from NuGet, nor the built in Unity
JSON parsing supports all the features we wanted. So during winter break of
2018-2019, I started to experiment on a JSON parser.

I started out with analyzing the pattern of JSON's token and referencing
[json.org](https://www.json.org/json-en.html), then draw a state machine on how
it can be parsed. Then I started to write actual code in C++.

It was not my initial goal to make the library header only, since I was only
going to work with `char` and hence there is no need for template. But I
recalled my learning from high school on native Windows development and realized
that some platform's native char type is `wchar_t`, which can be different from
`char`. As a result I decided to make it a header only library

## Unit Testing

In a previous course, we used `catch2` for unit testing our C++ code. However, I
wanted to try something different here,
[gtest](https://github.com/google/googletest.git). The API was very straight
forward, but the downloading it into the repo has proven cumbersome.

1. I started with using git submodules, but later I learned this can result in
   download duplication on the client site.
2. Then I tried shell script. Yet some commands are not universal
3. Finally I found a solution that is both cross platform and avoid duplication,
   CMake's
   [FetchContent](https://cmake.org/cmake/help/latest/module/FetchContent.html)
   module.

# What I Learned <a name="learned"></a>

- Experiences with coping with different char type of C++ using templates
- Hands on knowledge of building a parser
- Better understanding of JSON
- More experience with google test
- How to manage dependencies with CMake
