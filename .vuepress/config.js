module.exports = {
    title: "VIAplanner Docs",
    description:
        "We're unifying UofT's course data, and using it to build tools such as a course guide and timetable planner.",
    themeConfig: {
        logo: "/logo.png",
        nav: [
            { text: "Home", link: "/" },
            {
                text: "VIAtimetable",
                items: [
                    { text: "Front End", link: "/via-timetable/front-end/" },
                    { text: "API", link: "/via-timetable/api/" },
                    { text: "Algorithm", link: "/via-timetable/algorithm/" },
                    { text: "State Management", link: "/via-timetable/state-management/"},
                ],
            },
            { text: "VIAcalendar", link: "/via-calendar/" },
            { text: "VIAevent", link: "/via-event/" },
            { text: "Application", link: "https://viaplanner.ca/" },
            { text: "Github Repo", link: "https://github.com/VIAplanner" },
        ],
    },
};
