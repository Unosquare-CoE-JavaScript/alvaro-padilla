# You Don't Know JS Yet: Get Started

## Preface

In this book, we will explore 'All parts' of JS. Not only the good stuff but rather the bad as well.

## Chapter 1: What is JavaScript?

> JS is a broad and sophisticated language, with many features and capabilities.

The name 'JavaScript' is the most mistaken and misunderstood programming language. People that don't know it, will assume that it's related to 'Java'. The reason why this programming language has the word 'Java' on it, it's due to marketing, as this programming language was designed to appeal to 'Java' developers. However, the official name of the language is 'ECMAScript', which is also suffixed by the revision year (i.e. ECMAScript 2019). At the time of this writing, the official revisioned version of the language is 'ECMAScript 2022' or 'ES2022'.

> _"Java is to Javascript as ham is to hamster"_ - Jeremy Keith, 2009

TC39 is the organization in charge of reviewing and implementing the newer versions of JS. As the world of tech keeps on getting bigger, JS is being used in all sources of environments, but the only environment that dictates the direction of JS is the web. However, there is a mismatch between the JS specification (TC39's version) from the JS engines the browsers use. It is also important to mention that not all APIs are defined in JS, some of those functions and methods are added by the JS engine on the browser (i.e console.log, alert), but because some of these methods are so helpful, they are defined in every JS environment, but they are not part of JS.

DevTools is not a JS environment, this means that we cannot expect that such tools are a pure reflex of how JS programs are handled. Also because these tools vary from browser to browser many people believe that JS is a very inconsistent language, but the reality is that it is not. The console on the developer tools is just a friendly environment for JS.

JS is a multi-paradigm language. This means that a developer can structure its program using different techniques and approaches (i.e. Object Oriented). The typical paradigm levels are:

- Procedural

        Organized from top to bottom, linear progression.

- Object Oriented (OOP)

        Organized in units (classes). Classes collect logic and data.

- FP (FP)

        Organized into functions. It encourages the dev to write pure functions.

As mentioned, JS is multi-paradigm, which means we can use any of the methods described above and of course, mix and match them.

JS is backwards compatible but not forwards compatible. This means that code written 10 years ago, should be functional today, and it will be for all the time JS is still alive.

> _"We don't break the web"_ - TC39's members

JS is a compiled language! This is due to the ability of the JS engine to catch errors in the parsing phase rather than runtime.

Strict mode is a mechanism to encourage developers to write better JS programs. "use strict" should not be seen as a restriction, but rather a guide on how to optimize the program.

## Chapter 2: Surveying JS

> _"The best way to learn JS is to start writing JS"_ - Kyle Simpson

## Chapter 3: Digging the roots of JS

## Chapter 4: The Bigger Picture

## Appendix A: Exploring Further

## Appendix B: Practice, Practice, Practice!

### Practicing comparisons

#### My approach

```
const dayStart = "07:30";
const dayEnd = "17:45";
function scheduleMeeting(startTime, durationMinutes) {
    let dayStartTime = dayStart.split(":");
    let hourDayStart = dayStartTime[0];
    let minDayStart = dayStartTime[1];
    let dayEndTime = dayEnd.split(":");
    let hourDayEnd = dayEndTime[0];
    let minDayEnd = dayEndTime[1];
    let meetingStartTime = startTime.split(":");
    let hourMeetingStart = meetingStartTime[0];
    let minMeetingStart = meetingStartTime[1];
    let duration = Number(minMeetingStart) + durationMinutes;
    let addHoursMeeting = Math.floor(duration / 60);
    let addMinsMeeting = Number(durationMinutes) - addHoursMeeting * 60;
    let hourMeetingEnd = Number(hourMeetingStart) + addHoursMeeting;
    let minMeetingEnd = Number(minMeetingStart) + addMinsMeeting;
    if (hourMeetingStart < hourDayStart || (hourMeetingStart == hourDayStart && minMeetingStart < minDayStart) ||
    hourMeetingEnd > hourDayEnd || (hourMeetingEnd == hourDayEnd && minMeetingEnd > minDayEnd)) {
        return console.log(false);
    }
    return console.log(true);
}
scheduleMeeting("07:00", 15);
scheduleMeeting("07:15", 30);
scheduleMeeting("07:30", 30);
scheduleMeeting("11:30", 60);
scheduleMeeting("17:00", 45);
scheduleMeeting("17:30", 30);
scheduleMeeting("18:00", 15);
```

#### Book's suggested approach

```
const dayStart = "07:30";
const dayEnd = "17:45";
function scheduleMeeting(startTime, durationMinutes) {
    var [, meetingStartHour, meetingStartMinutes] = startTime.match(/^(\d{1,2}):(\d{2})$/) || [];
    durationMinutes = Number(durationMinutes);
    if (typeof(meetingStartHour) == "string" &&
    typeof(meetingStartMinutes) == "string") {
        let durationHours = Math.floor(durationMinutes / 60);
        durationMinutes = durationMinutes - durationHours * 60;
        let meetingEndHour = Number(meetingStartHour) + durationHours;
        let meetingEndMinutes = Number(meetingStartMinutes) + durationMinutes;
        if (meetingEndMinutes >= 60) {
            meetingEndHour = meetingEndHour + 1;
            meetingEndMinutes = meetingEndMinutes - 60;
        }
        let meetingStart = `${meetingStartHour.padStart(2, "0")}:${meetingStartMinutes.padStart(2, "0")}`;
        let meetingEnd = `${String(meetingEndHour).padStart(2, "0")}:${String(meetingEndMinutes).padStart(2, "0")}`;
        return console.log(meetingStart >= dayStart && meetingEnd <= dayEnd);
    }
    return console.log(false);
}
scheduleMeeting("7:00", 15);
scheduleMeeting("07:15", 30);
scheduleMeeting("07:30", 30);
scheduleMeeting("11:30", 60);
scheduleMeeting("17:00", 45);
scheduleMeeting("17:30", 30);
scheduleMeeting("18:00", 15);
```
