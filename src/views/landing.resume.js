import JobCard from "./landing.resume.card";
import jobs from "./landing.resume.data";
import { resumeStyles as styles } from "./landing.resume.styles";

const Resume = () => (
  <section css={styles.container} id="resume">
    {jobs.map((job) => (
      <JobCard key={job.id} {...job} />
    ))}
  </section>
);

export default Resume;
