import React from "react";
import "../style/Remotejob.css";

const jobs = [
  { name: "FLEXJOBS", description: "FlexJobs(opens in a new tab) has over 50 remote work categories, with pre-screened positions ranging from freelance gigs, to part-time work, to full-time jobs, with remote careers varying from entry-level to executive. The virtual job board currently hosts more than 20,000 working from home job and digital nomad job postings.", link: "http://www.flexjobs.com/", image: "https://www.flexjobs.com/blobcontent/flexjobs/images/fj-logo.svg" },
  { name: "JUSTREMOTE", description: "JustRemote(opens in a new tab) covers many job verticals and remote work, including: Development, Marketing and Design, HR, and Customer Success positions. You can filter roles by location, and their virtual job board clearly highlights whether positions have specific country or time overlap requirements.", link: "https://justremote.co/", image: "data:image/png;base64,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KIt4COLhrgC2tpb63yZKtLaaqUVqRaRJ2eTke0Qn4owA+D44OTnROjn5vQZp9h4AHR9ndPqUyR0BoI9rEeIeMOD75j/08r8A3YEHjuMNvAkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAlkaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA2LTA3VDExOjM5OjA5KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTExLTAzVDIxOjM0OjQyWiIgeG1wOk1vZGlmeURhdGU9IjIwMTktMTEtMDNUMjE6MzQ6NDJaIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphNzcxODE0OC0wN2YxLTQwMGEtOTU4NS0wZGEzNDNhOWUwNmQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxYTM1ZjQ4NS1jZDkzLTdmNDQtYmVmMC01ZGM3M2QwZDdmNzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjY2QxMmYyMC0wOWMzLTRlMDYtODEzYy03MDViZjQ1MzA5NTAiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJEaXNwbGF5Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjY2QxMmYyMC0wOWMzLTRlMDYtODEzYy03MDViZjQ1MzA5NTAiIHN0RXZ0OndoZW49IjIwMTgtMDYtMDdUMTE6Mzk6MDkrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmUzNjQ3NjUtZTIxNC00MDUxLWFkMTQtMTRiMzc1NTdkNDgxIiBzdEV2dDp3aGVuPSIyMDE4LTA2LTA3VDExOjM5OjU1KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjRkY2YwNTA1LTM3ZTctNDJlYS05Y2NiLWNjYjkxZDVjYmVmZiIgc3RFdnQ6d2hlbj0iMjAxOC0wNi0wN1QxMTozOTo1NSswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphNzcxODE0OC0wN2YxLTQwMGEtOTU4NS0wZGEzNDNhOWUwNmQiIHN0RXZ0OndoZW49IjIwMTktMTEtMDNUMjE6MzQ6NDJaIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmZlMzY0NzY1LWUyMTQtNDA1MS1hZDE0LTE0YjM3NTU3ZDQ4MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpjY2QxMmYyMC0wOWMzLTRlMDYtODEzYy03MDViZjQ1MzA5NTAiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjY2QxMmYyMC0wOWMzLTRlMDYtODEzYy03MDViZjQ1MzA5NTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4xsbJ1AAAO7UlEQVRo3s1bCVQUZxL+5+C+xURg1SDgFVzXMy7xBDS7XomRZDeCghrfBhdjnvcRr5goIggmQUQRvOJtvCP3ZQweMXk+BXSjiUm4GWaGue/prWoOZ4Zm6CEmsd9rnen+u/76+q/6quqfgtTW1pKbN2+SS5cukW+//ZacPHmSXLhwgRw6dIjcunWL7Ny5k3z++ef09dOnT5MvvviCXL16leTk5JA9e/bQz2VlZZGMjAx6HN7b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" },
  { name: "VIRTUAL VOCATIONS", description: "Virtual Vocations’(opens in a new tab) jobs board features telecommuting positions in job fields like technical writing and paralegal and is run by an entirely remote team. In addition to their jobs board, the site’s blog has great tips.", link: "http://www.virtualvocations.com/", image: "https://www.virtualvocations.com/images/logo-orange.png" },
  { name: "REMOTIVE", description: "Remotive(opens in a new tab) is a bi-monthly newsletter for job seekers interested in working remotely that includes a robust list of remote positions broken down by job categories — sales, support, product engineering, marketing, etc. — making it easy to find the specific kind of job you’re looking for.", link: "https://remotive.com/", image: "https://remotive.com/remotive_website_layout/static/src/brand/SVG/wordmark_H_orange.svg" },
  { name: "JOBSPRESSO", description: "Jobspresso(opens in a new tab) features a wide range of curated jobs in tech, marketing, customer support, and more. You can search their virtual job board for openings and post your resume to be searched and seen by potential employers.", link: "https://jobspresso.co/", image: "https://jobspresso.co/wp-content/uploads/2015/05/cropped-Jobspresso-logo-2-cropped1.png" },
  { name: "REMOTE.CO", description: "Remote.co(opens in a new tab) hand-curates their list of remote jobs and allows you to search or browse by job type. These listings and job categories include: customer service positions, design opportunities, developer jobs, recruiter and HR roles, sales jobs, and other online remote jobs (including writers, managers, and marketers).", link: "https://remote.co/remote-jobs/", image: "https://remoteco.s3.amazonaws.com/wp-content/uploads/2019/04/Rco_logo_2x.png" },
];

const RemoteJobs = () => {
  return (
    <div className="remote-jobs">
      <h1 className="title">Remote Jobs</h1>
      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <img src={job.image} alt={job.name} className="job-image" />
            <h2 className="job-name">{job.name}</h2>
            <p className="job-description">{job.description}</p>
            <a href={job.link} target="_blank" rel="noopener noreferrer" className="job-link">Visit Website</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemoteJobs;