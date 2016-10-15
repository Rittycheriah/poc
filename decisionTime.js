class Job {
  constructor(salary, team, leadership, mentorship, growthOpp, officeLocation, healthBenefits) {
    this.salary = salary;
    this.team = team;
    this.leadership = leadership;
    this.mentorship = mentorship;
    this.growthOpp = growthOpp;
    this.officeLocation = officeLocation;
    this.healthBenefits = healthBenefits;
  }
}

function decisionTime(job) {
  let score = 0;

  for (key in job) {
    score = job][key] + score;
  }

  return score;
};
