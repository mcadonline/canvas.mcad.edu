interface CourseParts {
  dept: string;
  courseNumber: number;
  section: number;
}

const toCourseParts = (courseId: string): CourseParts => {
  const [dept, courseNumber, section] = courseId.replace(/\s+/, " ").split(" ");

  return {
    dept,
    courseNumber: Number.parseInt(courseNumber, 10),
    section: Number.parseInt(section, 10)
  };
};

const courseByNumber = (a: Course, b: Course): number => {
  return a.courseNumber - b.courseNumber;
};

const courseBySection = (a: Course, b: Course): number => {
  return b.section - a.section;
};

const courseByDept = (a: Course, b: Course): number => {
  if (a.dept < b.dept) return -1;
  if (a.dept > b.dept) return 1;
  return 0;
};

interface Course {
  courseId: string;
  dept: string;
  courseNumber: number;
  section: number;
  courseName: string;
  instructor: string;
}

const createCourse = ([courseId, courseName, instructor]: string[]): Course => {
  const { dept, courseNumber, section } = toCourseParts(courseId);
  return {
    courseName,
    courseId,
    dept,
    courseNumber,
    section,
    instructor
  };
};

// TODO: pull this data directly from Canvas
export default [
  ["SD 6500 20", "Fundamentals of Sustainable Design", "Deann Garcia"],
  ["CSDE 9478 20", "Motion Illustration", "Annelise Capossella"],
  ["GWD  7460 20", "UX Design", "Matthew Luken"],
  ["GWD  6610 20", "Web Development", "James Johnson"],
  ["IDM  6611 20", "Web Dev: HTML", "James Johnson"],
  ["IDM  6612 20", "Web Dev: CSS", "James Johnson"],
  ["IDM  6613 20", "Web Dev: Topics and Projects", "James Johnson"],
  ["SD   7010 20", "Sustainable Design Practicum", "Denise DeLuca"],
  ["SD   7021 20", "Graduate Sustainability Thesis Project 1", "Denise DeLuca"],
  ["SD   7022 20", "Graduate Sustainability Thesis Project 2", "Denise DeLuca"],
  ["CSID 6631 20", "PHP and MySQL", "TBD"],
  ["HS   3317 20", "Myth, Ritual, and Symbolism", "Dawn Pankonien"],
  ["SD   6510 20", "Systems Thinking", "Curt McNamara"],
  ["VC   4207 20", "Graphic Design Essentials", "Erika Hutchings"],
  ["CSID 6632 20", "Developing WordPress Themes", "TBD"],
  [
    "AH 2103 01",
    "Applied Arts and Designed Objects",
    "Gretchen Gasterland-Gustafsson"
  ]
]
  .map(createCourse)
  .sort(courseBySection)
  .sort(courseByNumber)
  .sort(courseByDept)
  .map(c => [c.courseId, c.courseName, c.instructor]);
