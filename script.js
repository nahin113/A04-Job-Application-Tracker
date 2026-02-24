let all = document.querySelector("#all-ftr");
let interview = document.querySelector("#intrv-ftr");
let rejected = document.querySelector("#rjct-ftr");
let allSection = document.querySelector("#All");
let interviewSection = document.querySelector("#Interview");
let rejectedSection = document.querySelector("#Rejected");

let section = 'ALL'

// All Section

function availableJobs() {
  const cnt = document.querySelector("#available-jobs");

  if (section === "ALL") {
    cnt.innerText = `${jobs.length} jobs`;
  }

  if (section === "INTERVIEW") {
    cnt.innerText = `${interviewList.length} of ${jobs.length} jobs`;
  }

  if (section === "REJECTED") {
    cnt.innerText = `${rejectedList.length} of ${jobs.length} jobs`;
  }
}


all.addEventListener("click", () => {
  if (allSection.classList.contains("hidden")) {
    allSection.classList.remove("hidden");
    section = 'ALL'
  }

  if (!interviewSection.classList.contains("hidden")) {
    interviewSection.classList.add("hidden");
  }

  if (!rejectedSection.classList.contains("hidden")) {
    rejectedSection.classList.add("hidden");
  }

  renderJobs();
  document.querySelector("#available-jobs").innerText = `${jobs.length} jobs`;
});

// Interview Section

interview.addEventListener("click", () => {
  if (!allSection.classList.contains("hidden")) {
    allSection.classList.add("hidden");
  }

  if (interviewSection.classList.contains("hidden")) {
    interviewSection.classList.remove("hidden");
    if (interviewList.length > 0) renderInterviewJobs();
    section = 'INTERVIEW'
  }

  if (!rejectedSection.classList.contains("hidden")) {
    rejectedSection.classList.add("hidden");
  }

  renderJobs();
  renderInterviewJobs();

  document.querySelector(
    "#available-jobs"
  ).innerText = `${interviewList.length} of ${jobs.length} jobs`;
});

// Rejected Section

rejected.addEventListener("click", () => {
  if (!allSection.classList.contains("hidden")) {
    allSection.classList.add("hidden");
  }

  if (!interviewSection.classList.contains("hidden")) {
    interviewSection.classList.add("hidden");
  }

  if (rejectedSection.classList.contains("hidden")) {
    rejectedSection.classList.remove("hidden");
    if (rejectedList.length > 0) renderRejectedJobs();
    section = 'REJECTED'
  }

  renderJobs();
  renderRejectedJobs();

  document.querySelector(
    "#available-jobs"
  ).innerText = `${rejectedList.length} of ${jobs.length} jobs`;
});

const jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    state: "NOT APPLIED",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    state: "NOT APPLIED",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    state: "NOT APPLIED",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    state: "NOT APPLIED",
    description:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    state: "NOT APPLIED",
    description:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    state: "NOT APPLIED",
    description:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
  },
  {
    id: 7,
    companyName: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    state: "NOT APPLIED",
    description:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
  },
  {
    id: 8,
    companyName: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    state: "NOT APPLIED",
    description:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
  },
];
const interviewList = [];
const rejectedList = [];

const allJobContainer = document.querySelector("#All .job-container");
const interviewJobContainer = document.querySelector(
  "#Interview .job-container"
);
const rejectedJobContainer = document.querySelector("#Rejected .job-container");

document.querySelector("#total-info p").innerText = jobs.length;

function renderJobs() {
    availableJobs()
     if (jobs.length === 0) {
         allJobContainer.innerHTML = `
         <div class=" px-6 py-28 flex justify-center items-center flex-col">
         <img class="w-[100px]" src="./jobs.png" alt="">
         <h1 class="font-semibold text-[24px] text-[#002C5C]">No jobs available</h1>
         <h1 class="text-[#64748B]">Check back soon for new job opportunities</h1>
         </div>
         `;
        } else {
            
            allJobContainer.innerHTML = "";
    for (const job of jobs) {
      allJobContainer.innerHTML += `
        <div data-id="${job.id}" class="job-card p-6 bg-[#FFFFFF] space-y-5 rounded-lg">
            <div class="card-title flex justify-between items-center">
              <div class="left">
                <h2 class="text-[#002C5C] font-semibold text-[18px]">${job.companyName}</h2>
                <h2 class="text-[#64748B]">${job.position}</h2>
              </div>
              <div class="right">
                <button id="delete-btn" class="btn btn-default rounded-full text-[#64748B]"><i class="fa-regular fa-trash-can"></i></button>
              </div>
            </div>
            <p class="text-[14px] text-[#64748B]">${job.location} • ${job.type} • ${job.salary}</p>
            <button class="btn btn-default bg-base-300 font-medium text-[14px]">${job.state}</button>
            <p class="text-[#323B49] text-[14px]">${job.description}</p>
            <div class="card-buttons gap-2">
              <button id='interview-btn' class="btn btn-outline btn-deafult font-semibold text-[#10B981]">INTERVIEW</button>
              <button id='rejected-btn' class="btn btn-outline btn-deafult font-semibold text-[#EF4444]">REJECTED</button>
            </div>
          </div>
        `;
    }
  }
}

function renderInterviewJobs() {
    availableJobs()
  if (interviewList.length === 0) {
    interviewJobContainer.innerHTML = `
        <div class=" px-6 py-28 flex justify-center items-center flex-col">
            <img class="w-[100px]" src="./jobs.png" alt="">
          <h1 class="font-semibold text-[24px] text-[#002C5C]">No jobs available</h1>
          <h1 class="text-[#64748B]">Check back soon for new job opportunities</h1>
          </div>
        `;
  } else {
    interviewJobContainer.innerHTML = "";

    for (const job of interviewList) {
      interviewJobContainer.innerHTML += `
        <div data-id="${job.id}" class="job-card p-6 bg-[#FFFFFF] space-y-5 rounded-lg">
            <div class="card-title flex justify-between items-center">
              <div class="left">
                <h2 class="text-[#002C5C] font-semibold text-[18px]">${job.companyName}</h2>
                <h2 class="text-[#64748B]">${job.position}</h2>
              </div>
              <div class="right">
                <button id="delete-btn" class="btn btn-default rounded-full text-[#64748B]"><i class="fa-regular fa-trash-can"></i></button>
              </div>
            </div>
            <p class="text-[14px] text-[#64748B]">${job.location} • ${job.type} • ${job.salary}</p>
            <button class="btn btn-default text-white bg-[#10B981] font-medium text-[14px]">${job.state}</button>
            <p class="text-[#323B49] text-[14px]">${job.description}</p>
            <div class="card-buttons gap-2">
              <button id='interview-btn' class="btn btn-outline btn-deafult font-semibold text-[#10B981]">INTERVIEW</button>
              <button id='rejected-btn' class="btn btn-outline btn-deafult font-semibold text-[#EF4444]">REJECTED</button>
            </div>
          </div>
        `;
    }
  }
  document.querySelector("#interview-info p").innerText = interviewList.length;
}

function renderRejectedJobs() {
    availableJobs()
  if (rejectedList.length === 0) {
    rejectedJobContainer.innerHTML = `
        <div class=" px-6 py-28 flex justify-center items-center flex-col">
            <img class="w-[100px]" src="./jobs.png" alt="">
          <h1 class="font-semibold text-[24px] text-[#002C5C]">No jobs available</h1>
          <h1 class="text-[#64748B]">Check back soon for new job opportunities</h1>
          </div>
        `;
  } else {
    rejectedJobContainer.innerHTML = "";

    for (const job of rejectedList) {
      rejectedJobContainer.innerHTML += `
        <div data-id="${job.id}" class="job-card p-6 bg-[#FFFFFF] space-y-5 rounded-lg">
            <div class="card-title flex justify-between items-center">
              <div class="left">
                <h2 class="text-[#002C5C] font-semibold text-[18px]">${job.companyName}</h2>
                <h2 class="text-[#64748B]">${job.position}</h2>
              </div>
              <div class="right">
                <button id="delete-btn" class="btn btn-default rounded-full text-[#64748B]"><i class="fa-regular fa-trash-can"></i></button>
              </div>
            </div>
            <p class="text-[14px] text-[#64748B]">${job.location} • ${job.type} • ${job.salary}</p>
            <button class="btn btn-default bg-[#EF4444] text-white font-medium text-[14px]">${job.state}</button>
            <p class="text-[#323B49] text-[14px]">${job.description}</p>
            <div class="card-buttons gap-2">
              <button id='interview-btn' class="btn btn-outline btn-deafult font-semibold text-[#10B981]">INTERVIEW</button>
              <button id='rejected-btn' class="btn btn-outline btn-deafult font-semibold text-[#EF4444]">REJECTED</button>
            </div>
          </div>
        `;
    }
  }

  document.querySelector("#rejected-info p").innerText = rejectedList.length;
}

renderJobs();

// Remove Section

allJobContainer.addEventListener("click", (e) => {
  let deleteBtn = e.target.closest("#delete-btn");

  let card = deleteBtn.closest(".job-card");
  const cardId = Number(card.dataset.id);

  const index = jobs.findIndex((job) => job.id === cardId);
  const iIndex = interviewList.findIndex((job) => job.id === cardId);
  const rIndex = rejectedList.findIndex((job) => job.id === cardId);
  jobs.splice(index, 1);
  interviewList.splice(iIndex, 1);
  rejectedList.splice(rIndex, 1);

  renderJobs();
  renderInterviewJobs();
  renderRejectedJobs();

  document.querySelector("#total-info p").innerText = jobs.length;
  document.getElementById("head-jobs-count").innerText = jobs.length;
});
interviewJobContainer.addEventListener("click", (e) => {
  let deleteBtn = e.target.closest("#delete-btn");

  let card = deleteBtn.closest(".job-card");
  const cardId = Number(card.dataset.id);

  const index = jobs.findIndex((job) => job.id === cardId);
  const iIndex = interviewList.findIndex((job) => job.id === cardId);
//   const rIndex = jobs.findIndex((job) => job.id === cardId);
  jobs.splice(index, 1);
  interviewList.splice(iIndex, 1);
//   rejectedList.splice(rIndex, 1);

  renderJobs();
  renderInterviewJobs();
//   renderRejectedJobs();
  availableJobs()

  document.querySelector("#total-info p").innerText = jobs.length;
  document.getElementById("head-jobs-count").innerText = jobs.length;
});
rejectedJobContainer.addEventListener("click", (e) => {
  let deleteBtn = e.target.closest("#delete-btn");

  let card = deleteBtn.closest(".job-card");
  const cardId = Number(card.dataset.id);

  const index = jobs.findIndex((job) => job.id === cardId);
//   const iIndex = jobs.findIndex((job) => job.id === cardId);
  const rIndex = rejectedList.findIndex((job) => job.id === cardId);
  jobs.splice(index, 1);
//   interviewList.splice(iIndex, 1);
  rejectedList.splice(rIndex, 1);

  renderJobs();
//   renderInterviewJobs();
  renderRejectedJobs();
  availableJobs()

  document.querySelector("#total-info p").innerText = jobs.length;
  document.getElementById("head-jobs-count").innerText = jobs.length;
});

// Interview and Reject Button functionality Section

allJobContainer.addEventListener("click", (e) => {
  let interviewBtn = e.target.closest("#interview-btn");
  let card = interviewBtn.closest(".job-card");
  const cardId = Number(card.dataset.id);
  const index = jobs.findIndex((job) => job.id === cardId);
  jobs[index].state = "INTERVIEW";

  const rIndex = rejectedList.findIndex((job) => job.id === cardId);
  if (rIndex !== -1) {
    rejectedList.splice(rIndex, 1);
  }

  const exists = interviewList.some((job) => job.id === cardId);
  if (!exists) {
    interviewList.push(jobs[index]);
  }

  renderJobs();
  renderInterviewJobs();
  renderRejectedJobs();
  availableJobs()
});

allJobContainer.addEventListener("click", (e) => {
  let rejectedBtn = e.target.closest("#rejected-btn");
  let card = rejectedBtn.closest(".job-card");
  const cardId = Number(card.dataset.id);
  const index = jobs.findIndex((job) => job.id === cardId);
  jobs[index].state = "REJECTED";

  const iIndex = interviewList.findIndex((job) => job.id === cardId);
  if (iIndex !== -1) {
    interviewList.splice(iIndex, 1);
  }

  const exists = rejectedList.some((job) => job.id === cardId);
  if (!exists) {
    rejectedList.push(jobs[index]);
  }

  renderJobs();
  renderInterviewJobs();
  renderRejectedJobs();
  availableJobs()
});

interviewJobContainer.addEventListener("click", (e) => {
  let rejectedBtn = e.target.closest("#rejected-btn");
  let card = rejectedBtn.closest(".job-card");
  const cardId = Number(card.dataset.id);
  const index = jobs.findIndex((job) => job.id === cardId);
  jobs[index].state = "REJECTED";

  const iIndex = interviewList.findIndex((job) => job.id === cardId);
  if (iIndex !== -1) {
    interviewList.splice(iIndex, 1);
  }

  const exists = rejectedList.some((job) => job.id === cardId);
  if (!exists) {
    rejectedList.push(jobs[index]);
  }

  renderJobs();
  renderInterviewJobs();
  renderRejectedJobs();
  availableJobs()
});

rejectedJobContainer.addEventListener("click", (e) => {
  let interviewBtn = e.target.closest("#interview-btn");
  let card = interviewBtn.closest(".job-card");
  const cardId = Number(card.dataset.id);
  const index = jobs.findIndex((job) => job.id === cardId);
  jobs[index].state = "INTERVIEW";

  const rIndex = rejectedList.findIndex((job) => job.id === cardId);
  if (rIndex !== -1) {
    rejectedList.splice(rIndex, 1);
  }

  const exists = interviewList.some((job) => job.id === cardId);
  if (!exists) {
    interviewList.push(jobs[index]);
  }

  renderJobs();
  renderInterviewJobs();
  renderRejectedJobs();
  availableJobs()
});
