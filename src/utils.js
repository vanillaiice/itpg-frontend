export const formatScore = (data) => {
  data.forEach((row) => {
    if (row["scoreTeaching"] == "-1") {
      row["scoreTeaching"] = "No score...";
    }
    if (row["scoreCoursework"] == "-1") {
      row["scoreCoursework"] = "No score...";
    }
    if (row["scoreLearning"] == "-1") {
      row["scoreLearning"] = "No score...";
    }
    if (row["scoreAverage"] == "-1") {
      row["scoreAverage"] = "No score...";
    }
  });
  return data;
};

export const passwordMatch = (value, form) => {
  if (value !== form.values.password) {
    return { passwordMatch: true };
  }
};

export const validGrade = (value) => {
  if (value >= 0 && value <= 5) {
    return null;
  } else {
    return { validGrade: "grade should be between 0 and 5" };
  }
};

export const typeDelete = (value) => {
  if (value !== "delete") {
    return { typeDelete: true };
  }
};
