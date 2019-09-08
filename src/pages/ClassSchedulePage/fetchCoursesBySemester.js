import { groupBy } from "ramda";

function toArray(termYearDict) {
  return Object.keys(termYearDict).map(termYearKey => {
    const coursesInTermYear = termYearDict[termYearKey];
    const [term, year] = termYearKey.split(" ");
    return {
      term,
      year,
      courses: coursesInTermYear
    };
  });
}

/**
 *
 * @param {termsWithCourses[]} termsArray - array of
 * terms with courses. Each
 */
function byStartDate(term1, term2) {
  const courses1 = term1.courses;
  const courses2 = term2.courses;

  // what if there are no courses in a terms array
  // this should not happen
  if (courses1.length < 0 || courses2.length < 0) {
    throw new Error("termsArray contains a term without courses");
  }

  // use the first course start date
  // this may not be the earliest start date,
  // but terms are non-overlapping so
  // any date in term 1 should work
  // to compare with any date in term 2.
  const startDate1 = new Date(courses1[0].startDate);
  const startDate2 = new Date(courses2[0].startDate);

  return startDate1 - startDate2;
}

function byCourseName(course1, course2) {
  const name1 = course1.courseName;
  const name2 = course2.courseName;
  if (name1 < name2) return -1;
  if (name2 > name1) return 1;
  return 0;
}

export default async function fetchCourses() {
  const courses = await fetch(`https://ol-support.mcad.edu/api/courses`)
    .then(res => res.json())
    .catch(err => {
      console.error(err.message);
      throw err;
    });

  const termYear = ({ term, year }) => `${term} ${year}`;

  const termYearDict = groupBy(termYear, courses);

  const termYearArray = toArray(termYearDict);

  const sortedTermYearArray = termYearArray.sort(byStartDate);

  return sortedTermYearArray.map(termYear => ({
    ...termYear,
    courses: termYear.courses.sort(byCourseName)
  }));
}
