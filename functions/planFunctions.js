class ValidatePlans {
  constructor(
    planName,
    planPeriod,
    planDuration,
    planPercentage,
    planMinimum,
    planMaximum
  ) {
    this.planName = planName.trim();
    (this.planPeriod = planPeriod.trim()),
      (this.planDuration = planDuration),
      (this.planPercentage = planPercentage),
      (this.planMinimum = planMinimum),
      (this.planMaximum = planMaximum);

    this.name = false;
    this.period = false;
    this.duration = false;
    this.percentage = false;
    this.minimum = false;
    this.maximum = false;
  }

  validateName() {
    this.name = this.planName == null || this.planName == "" ? false : true;
    return this;
  }
  validatePeriod() {
    this.period =
      this.planPeriod == null ||
      this.planPeriod == "" ||
      this.planPeriod == "Select"
        ? false
        : true;
    return this;
  }
  validateDuration() {
    this.duration =
      this.planDuration == 0 || this.planDuration == "" ? false : true;
    return this;
  }
  validatePercentage() {
    this.percentage =
      this.planPercentage == 0 || this.planPercentage == "" ? false : true;
    return this;
  }
  validateMinimum() {
    this.minimum =
      this.planMinimum == null || this.planMinimum == "" ? false : true;
    return this;
  }
  validateMaximum() {
    this.maximum =
      this.planMaximum == null || this.planMaximum == "" ? false : true;
    return this;
  }

  checkErrors() {
    if (!this.name) {
      return "Please fill in the name of this plan";
    }
    if (!this.period) {
      return "Please select a period for this plan";
    }
    if (!this.duration) {
      return "Please fill in a duration for this plan";
    }
    if (!this.percentage) {
      return "Please fill in a percentage for this plan";
    }
    if (!this.minimum) {
      return "Please fill in a value for minimum deposit for this plan";
    }
    if (!this.maximum) {
      return "Please insert 0, if your want maximum deposit to be unlimited";
    } else {
      return "success";
    }
  }
}

export default ValidatePlans;
