import React from "react";

const Form: React.FC = () => {
  const ages: number[] = [30, 40, 50];
  const education: string[] = [
    "Less than Bachelors",
    "Bachelors Degree",
    "Masters Degree",
    "Post Graduate Diploma",
    "Ph.D",
    "Doctor / Lawyer",
  ];
  const ielts: string[] = [
    "Any combination less than L8, R7, W7, S7",
    "L8 R7 W7 S7 or higher",
  ];

  const makeMap = (item: Array<number | string>) => {
    return item.map((i: number | string) => {
      return (
        <option value={i} key={i}>
          {i}
        </option>
      );
    });
  };

  const ieltsOptions = makeMap(ielts);
  const eduOptions = makeMap(education);
  const ageOptions = makeMap(ages);

  const [age1, setAge] = React.useState("30");
  const [edu1, setEdu] = React.useState("Bachelors");
  const [ielts1, setIelts] = React.useState("less than");

  const qualify = checkQualify(age1, edu1, ielts1);

  return (
    <div>
      <form>
        <label>
          Age{" "}
          <select onChange={(e) => setAge(e.target.value)}>{ageOptions}</select>
        </label>
        <p>
          <label>
            Education{" "}
            <select onChange={(e) => setEdu(e.target.value)}>
              {eduOptions}
            </select>
          </label>
        </p>
        <p>
          <label>
            IELTS{" "}
            <select onChange={(e) => setIelts(e.target.value)}>
              {ieltsOptions}
            </select>
          </label>
        </p>
        <h1>{qualify}</h1>
      </form>
    </div>
  );
};

const checkQualify = (ages: string, edu: string, eng: string) => {
  if (ages !== "30" || edu.includes("Bachelors") || eng.includes("less than")) {
    return `It is unlikely that you will be a Permanent Resident`;
  } else {
    return `You have a chance of becoming a Permanent Resident`;
  }
};

export default Form;
