---
sidebar: auto
---
# Timetable Algorithm

The algorithm behind VIAtimetable that helps UofT students plan their courses by generating a optimal timetable.

The timetable planner allows students to enter their course load and get back a timetable that fits their needs. The functions for the timetable planner are: 
- How early students wish to start and end classes
- What days students would like to take off
- What times students would prefer gap time and breaks
- Preference on the delievery method (if the options are available)

## Implementation of the Timetable Algorithm
<!---eitheramount  oto reduve therecduvce the computation
- Introduce what the timetable algorithm is for
- Tell a story about the algorithm evo by takinglves
- Have a heading for each optimization in the roadmap
- Start with base conflict check -> invalid times -> idle time max/min -> locked courses
--->
The timetable algorithm takes in a set of course and generate if possible, a valid timetable with the earliest time available. Then the user can optimize the timetable to fit their preference.

The algorithm starts out by seperating the courses into fall and winter terms and generate a timetable for each term.
(_The reason to having functions to generate timetable with only practicals and tutorials is simply because there are courses with only such sections_)

The generating algorithm is quite complicated and the concept will be demonstrated below.

### Constraints:

For the timetable to know which time interval is locked, we treat the interval as a course section. So the algorithm will take in consider of the locked time and will not place any other course section into the space.

Since lock sections of a course is determined, the algorithm filters out to only  the section locked, so it takes the highest priority in the timetable since its the only section available.

As the algorithm adds the course from beginning of the course list to the end, applying preference of online or in-person of the courses will be sorting the list.

### Algorithm:

_Developer note: The algorithm may seems complicated with all the nested loop and recursive calls, but it is mainly similar code for lecture sections, practical secions, and tutorial secions. So once you understand how it works for the first layer, then the rest is the same._

**Recursive Case:**
The algorithm starts from searching for the first appearance of a course with lecture section. While such course is not the last course in the list (if it does, the index will be -1), for each lecture section in the course (_.some() function call_), a list containning the current combination of sections (now is empty) will append the section. 
In the end of this case we will call the function itself again with the first lecture section being recorded and with a starting index from the course. This index will make the next search on course with lectures searching after the current course.

**Base Case:**
Now we are at the last course with the lecture sections, we can now start to put the sections we stored previously with the current course's section into the timetable. Then the algorithm will check if this is a valid timetable or not by looking for conflict, if it does appear to have atleast one conflict between 2 sections, then we will reset the timetable to empty and adds the next lecture section of this course into the list and check again(If all section of this course conflicts with the previous added sections from other courses, then it will adds the next section from the last course before the current one). 

Now we got a timetable with lecture section which is good! We can move on to practical sections, if there are any in the courses, or tutorial sections. Adding the practical and tutorial sections works excactly the same as the lecture sections, but when we are reseting the timetable, we will be reseting to the one with only lecture sections instead of an empty timetable.

Once the algorithm finds a timetable that includes every type of sections from all the courses, it will stop the iteration and return. The timetable is defined as a local variable in the whole function and its being updated through the above process, so we will return this timetable after all. 