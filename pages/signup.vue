<template>
  <div class="sign-up">
    <home-header />
    <div class="hero-sign-up wf-section">
      <div class="contain">
        <div class="div-block-136">
          <div class="div-block-135">
            <h1 class="headings change">Signup</h1>
          </div>
          <div>
            <div class="sub-hero-texts change-color">
              Complete the 3 step to get started
            </div>
          </div>
        </div>
      </div>
    </div>
    <span style="opacity: 0; position: absolute; z-index: -1">{{
      formSections.length
    }}</span>
    <div class="signup-content wf-section">
      <div class="contain">
        <div class="signup-hero-holder">
          <!----<div class="complete-steps-holder">
            <div class="register-icon-side-line completed">
              <div class="sign-img-holder completed">
                <img
                  src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/640c6d0290971b52cbfb7ed0_persona.svg"
                  loading="lazy"
                  alt=""
                  class="image-34"
                />
              </div>
              <div class="text completed">Personal Info</div>
            </div>
            <div class="register-icon-side-line completed">
              <div class="sign-img-holder completed">
                <img
                  src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/640c923090971bfca9fde69a_Vector-5.svg"
                  loading="lazy"
                  alt=""
                  class="image-34"
                />
              </div>
              <div class="text completed">Residential Address</div>
            </div>
            <div class="register-icon-side-line">
              <div class="sign-img-holder active">
                <img
                  src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/640c6ff6db7cbc28b9e9244b_office-icon%201.svg"
                  loading="lazy"
                  alt=""
                  class="image-34"
                />
              </div>
              <div class="text completed">Nationality</div>
            </div>
            <div class="register-icon-side-line">
              <div class="sign-img-holder">
                <img
                  src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/640c6fe090971b812efbb680_Group-3.svg"
                  loading="lazy"
                  alt=""
                  class="image-34"
                />
              </div>
              <div class="text">Contact/Account Info</div>
            </div>
            <div class="register-icon-side-line">
              <div class="sign-img-holder">
                <img
                  src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/640c728f38ea4d7027d9cd9e_timetable-icon%201.svg"
                  loading="lazy"
                  alt=""
                  class="image-34"
                />
              </div>
              <div class="text">Next of King</div>
            </div>

            <div class="register-icon-side-line off">
              <div class="sign-img-holder">
                <img
                  src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/640c70054379a3146923b282_suitcase-outline-icon%201.svg"
                  loading="lazy"
                  alt=""
                  class="image-34"
                />
              </div>
              <div class="text">Authentication Info</div>
            </div>
          </div>-->
          <div class="form-holder w-form">
            <div>
              <div class="form-register-holder">
                <div class="register-rate-holder">
                  <div class="register-rate-completing-holder">
                    <div
                      :class="`register-rate-complete check-${formPage}`"
                    ></div>
                    <div class="register-rate-uncomplete"></div>
                  </div>
                  <div class="register-rate-completed-holder">
                    <div class="register-rate-completed">
                      {{ Math.ceil((100 * (formPage + 1)) / 3) }}%
                    </div>
                  </div>
                </div>
                <div class="form-section-holder">
                  <div v-if="formPage == 0" class="each-register-holder">
                    <div class="register-top-heading-holder">
                      <h1 class="register-top-heading">Personal Info</h1>
                    </div>
                    <div class="register-content-holder">
                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            First <span>*</span>
                          </div>
                        </div>
                        <input
                          type="text"
                          class="registration-input w-input"
                          maxlength="256"
                          placeholder="First Name "
                          v-model="firstName"
                          required=""
                          @keyup="setFormSection('firstName', firstName)"
                        />
                      </div>
                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            Middle Name <span>*</span>
                          </div>
                        </div>
                        <input
                          type="text"
                          class="registration-input w-input"
                          maxlength="256"
                          placeholder="Middle Name "
                          v-model="middleName"
                          required=""
                          @keyup="setFormSection('middleName', middleName)"
                        />
                      </div>
                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            Last Name <span>*</span>
                          </div>
                        </div>
                        <input
                          type="text"
                          class="registration-input w-input"
                          maxlength="256"
                          placeholder="Last Name "
                          v-model="lastName"
                          required=""
                          @keyup="setFormSection('lastName', lastName)"
                        />
                      </div>
                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            Username <span>*</span>
                          </div>
                        </div>
                        <input
                          type="text"
                          class="registration-input w-input"
                          maxlength="256"
                          placeholder="Username "
                          v-model="username"
                          required=""
                          @keyup="setFormSection('username', username)"
                        />
                      </div>
                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            Date of birth <span>*</span>
                          </div>
                        </div>
                        <input
                          type="date"
                          class="registration-input w-input"
                          v-model="dob"
                          @change="setFormSection('dob', dob)"
                        />
                      </div>
                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            Source of Income <span>*</span>
                          </div>
                        </div>
                        <div class="dropdown-container">
                          <h3
                            class="drop-tittle"
                            @click="showIncomeList = !showIncomeList"
                          >
                            {{ income }}
                          </h3>
                          <img
                            src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/640ef5208af4c82cd4ea99f0_triangle-top-left-icon%201.svg"
                            loading="lazy"
                            alt=""
                            class="image-35"
                            @click="showIncomeList = !showIncomeList"
                          />
                          <ul
                            role="list"
                            class="drop-down-list"
                            v-if="showIncomeList"
                          >
                            <li
                              v-for="(item, int) in incomeArray"
                              :key="int"
                              class="drop-down-each-list"
                              @click="selectIncomeType(item)"
                            >
                              <div class="dropdown-each-list-item">
                                {{ item }}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            Gender <span>*</span>
                          </div>
                        </div>
                        <div class="register-mark-box-container">
                          <div class="register-mark-box-holder">
                            <div class="register-input-text-holder">
                              <div class="register-input-text-holder">
                                <div class="register-mark-box-texts">Male</div>
                              </div>
                            </div>
                            <div
                              @click="setGender('Male')"
                              class="register-mark-box"
                              :class="{ active: gender == 'Male' }"
                            ></div>
                          </div>
                          <div class="register-mark-box-holder">
                            <div class="register-input-text-holder">
                              <div class="register-input-text-holder">
                                <div class="register-mark-box-texts">
                                  Female
                                </div>
                              </div>
                            </div>
                            <div
                              @click="setGender('Female')"
                              class="register-mark-box"
                              :class="{ active: gender == 'Female' }"
                            ></div>
                          </div>
                          <div class="register-mark-box-holder">
                            <div class="register-input-text-holder">
                              <div class="register-input-text-holder">
                                <div class="register-mark-box-texts">
                                  Others
                                </div>
                              </div>
                            </div>
                            <div
                              @click="setGender('Others')"
                              class="register-mark-box"
                              :class="{ active: gender == 'Others' }"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else-if="formPage == 1" class="each-register-holder">
                    <div class="register-top-heading-holder">
                      <h1 class="register-top-heading">Residential Address</h1>
                    </div>
                    <div class="register-content-holder">
                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            Address <span>*</span>
                          </div>
                        </div>
                        <input
                          type="text"
                          class="registration-input w-input"
                          maxlength="256"
                          placeholder="Enter Address 1"
                          required=""
                          v-model="residentAddress"
                          @keyup="
                            setFormSection('residentAddress1', residentAddress)
                          "
                        />
                      </div>

                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            Zip code <span>*</span>
                          </div>
                        </div>
                        <input
                          type="text"
                          class="registration-input w-input"
                          maxlength="256"
                          placeholder="Enter Zip Code"
                          required=""
                          v-model="residentZipCode"
                          @keyup="
                            setFormSection('residentZipCode', residentZipCode)
                          "
                        />
                      </div>
                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            State <span>*</span>
                          </div>
                        </div>
                        <input
                          type="text"
                          class="registration-input w-input"
                          maxlength="256"
                          placeholder="Enter State"
                          required=""
                          v-model="residentState"
                          @keyup="
                            setFormSection('residentState', residentState)
                          "
                        />
                      </div>
                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            Country <span>*</span>
                          </div>
                        </div>
                        <div class="dropdown-container">
                          <h3
                            class="drop-tittle"
                            @click="showCountryList = !showCountryList"
                          >
                            {{ residentCountry }}
                          </h3>
                          <img
                            src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/640ef5208af4c82cd4ea99f0_triangle-top-left-icon%201.svg"
                            loading="lazy"
                            alt=""
                            class="image-35"
                            @click="showCountryList = !showCountryList"
                          />
                          <ul
                            role="list"
                            class="drop-down-list"
                            v-if="showCountryList"
                          >
                            <li
                              v-for="(country, int) in countryArray"
                              :key="int"
                              class="drop-down-each-list"
                              @click="selectResidentCountry(country)"
                            >
                              <div class="dropdown-each-list-item">
                                {{ country }}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-else-if="formPage == 2" class="each-register-holder">
                    <div class="register-top-heading-holder">
                      <h1 class="register-top-heading">Comfirmation</h1>
                    </div>
                    <div class="profile-img-container">
                      <div class="profile-content-holder">
                        <div class="profile-img-holder">
                          <img
                            :src="avatar"
                            loading="lazy"
                            alt=""
                            class="image-37"
                          />
                        </div>
                        <label for="profile" class="edit-holder">
                          <img
                            src="/images/edit-gray.svg"
                            loading="lazy"
                            alt=""
                          />
                          <input
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            id="profile"
                            class="input-file"
                            @change="setProfile"
                          />
                        </label>
                      </div>
                      <div class="profile-top-header-holder">
                        <h1 class="register-top-heading">Upload Picture</h1>
                      </div>
                    </div>
                    <div class="register-content-holder">
                      <div class="register-form-holder full">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts center">
                            {{ idName }}
                          </div>
                        </div>
                        <label for="identity" class="upload-file-img-holder">
                          <img
                            src="/images/document.svg"
                            loading="lazy"
                            alt=""
                            class="image-38"
                          />
                          <input
                            type="file"
                            class="input-file"
                            id="identity"
                            @change="setIdImage"
                            accept=".png, .jpg, .jpeg"
                          />
                        </label>
                      </div>
                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            Select Type of Identity <span>*</span>
                          </div>
                        </div>
                        <div class="dropdown-container">
                          <h3
                            @click="showIdList = !showIdList"
                            class="drop-tittle"
                          >
                            {{ identity }}
                          </h3>
                          <img
                            src="https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/640ef5208af4c82cd4ea99f0_triangle-top-left-icon%201.svg"
                            loading="lazy"
                            alt=""
                            class="image-35"
                            @click="showIdList = !showIdList"
                          />
                          <ul
                            role="list"
                            class="drop-down-list"
                            v-if="showIdList"
                          >
                            <li
                              @click="setId(id)"
                              v-for="(id, int) in ids"
                              :key="int"
                              class="drop-down-each-list"
                            >
                              <div class="dropdown-each-list-item">
                                {{ id }}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            Email <span>*</span>
                          </div>
                        </div>
                        <input
                          type="email"
                          class="registration-input w-input"
                          v-model="email"
                          placeholder="Enter Email"
                          required=""
                          @keyup="setFormSection('email', email)"
                        />
                      </div>
                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            Phone Number<span>*</span>
                          </div>
                        </div>
                        <input
                          type="text"
                          class="registration-input w-input"
                          v-model="phoneNumber"
                          placeholder="Enter Phone Number 1"
                          required=""
                          @keyup="setFormSection('phoneNumber1', phoneNumber)"
                        />
                      </div>

                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            Password <span>*</span>
                          </div>
                        </div>
                        <input
                          type="password"
                          class="registration-input w-input"
                          v-model="password"
                          placeholder="Enter Password"
                          required=""
                          @keyup="setFormSection('password', password)"
                        />
                      </div>
                      <div class="register-form-holder">
                        <div class="register-input-text-holder">
                          <div class="register-input-texts">
                            Confirm Password <span>*</span>
                          </div>
                        </div>
                        <input
                          type="password"
                          class="registration-input w-input"
                          v-model="cPassword"
                          placeholder="Enter Confirm Password"
                          required=""
                          @keyup="setFormSection('cPassword', cPassword)"
                          @keypress.enter="processUserData"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="showMsg" class="msg" :class="{ error: !colour }">
                  {{ msg }}
                </div>
                <div v-if="signup" class="msg" :class="{ error: !colour }">
                  Congratulations your registration is successfull, kindly wait
                  while we verify your details via your email.
                </div>
                <div class="register-button-holder">
                  <div
                    v-if="formPage > 0"
                    class="arrow-holder"
                    @click="switchForm('prev')"
                  >
                    <img
                      src="/images/cheveron-left.svg"
                      loading="lazy"
                      alt=""
                      class="image-36"
                    />
                  </div>
                  <div class="div-block-150">
                    <span
                      v-if="formPage == 2"
                      :class="{ active: complete }"
                      @click="processUserData"
                      class="register-submit-button w-button"
                    >
                      <span v-show="!onRequest">Submit</span>
                      <span v-show="onRequest">Processing...</span>
                    </span>
                    <span
                      @click="switchForm('next')"
                      v-else
                      :class="{ active: complete }"
                      class="register-submit-button w-button"
                      >Next</span
                    >
                  </div>
                  <div
                    v-if="formPage < 2"
                    class="arrow-holder"
                    @click="switchForm('next')"
                  >
                    <img
                      src="/images/cheveron-right.svg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <home-footer />
  </div>
</template>

<script>
import HomeFooter from "../components/home/HomeFooter.vue";
import HomeHeader from "../components/home/HomeHeader";
export default {
  data() {
    return {
      firstName: "",
      middleName: "",
      lastName: "",
      username: "",
      dob: "",
      income: "Select Income",
      gender: "",
      maritalStatus: "",

      showIncomeList: false,
      showCountryList: false,
      showOriginCountryList: false,
      showIdList: false,
      showCurrencyTypeList: false,

      residentAddress: "",
      residentState: "",
      residentZipCode: "",
      residentCountry: "Select Country",

      phoneNumber: "",
      email: "",

      identity: "Select Identity",
      ids: ["National ID", "Internation Passport", "Drivers Licence"],
      idName: "Upload Image File of your ID",
      avatar: "/images/avatar.svg",
      idPicture: "",

      password: "",
      cPassword: "",

      signup: false,

      incomeArray: ["Salary", "Trading", "Freelancing", "Technician"],

      formSections: [],
      availableForms: 0,
      formPage: 0,

      complete: true,

      msg: "",
      colour: false,
      showMsg: false,
      onRequest: false,
    };
  },
  methods: {
    showMessage(msg) {
      this.msg = msg;
      this.showMsg = true;
      this.onRequest = false;
      setTimeout(() => {
        this.msg = "";
        this.showMsg = false;
      }, 6000);
    },

    clearInputs() {
      this.colour = true;
      this.onRequest = false;
      this.firstName = "";
      this.middleName = "";
      this.lastName = "";
      this.username = "";
      this.dob = "";
      this.income = "Select Income";
      this.gender = "";
      this.showCountryList = false;
      this.showOriginCountryList = false;
      this.showIdList = false;
      this.showCurrencyTypeList = false;

      this.residentAddress = "";
      this.residentState = "";
      this.residentZipCode = "";
      this.residentCountry = "Select Country";

      this.phoneNumber = "";
      this.email = "";

      this.idName = "Upload Image File of your ID";
      this.identity = "Select Identity";
      this.avatar = "/images/avatar.svg";
      this.idPicture = "";

      this.password = "";
      this.cPassword = "";
    },

    formSectionArray(array, field, data) {
      if (data != "") {
        if (!array.includes(field)) {
          array.push(field);
        }
      } else {
        for (let i = 0; i < array.length; i++) {
          if (array[i] == field) {
            array.splice(i, 1);
          }
        }
      }

      return array;
    },

    setMaritalStatus(status) {
      this.maritalStatus = status;
      this.setFormSection("maritalStatus", status);
    },

    setGender(gender) {
      this.gender = gender;
      this.setFormSection("gender", gender);
    },

    selectCurrrencyType(data) {
      this.currency = data;
      this.setFormSection("currencyType", data);
      this.showCurrencyTypeList = false;
    },

    selectIncomeType(data) {
      this.income = data;
      this.setFormSection("income", data);
      this.showIncomeList = false;
    },

    setFormSection(field, data) {
      this.formSections = this.formSectionArray(this.formSections, field, data);
      if (this.formSections.length > 19) {
        this.availableForms = 4;
      } else if (this.formSections.length > 15) {
        this.availableForms = 3;
      } else if (this.formSections.length > 12) {
        this.availableForms = 2;
      } else if (this.formSections.length > 8) {
        this.availableForms = 1;
      }
    },

    selectResidentCountry(data) {
      this.residentCountry = data;
      this.setFormSection("residentCountry", data);
      this.showCountryList = false;
    },

    setIdImage(e) {
      this.idPicture = e.target.files[0];
      this.idName = this.identity.name;
      this.setFormSection("idPicture", this.idPicture);
    },

    setProfile(e) {
      const [file] = profile.files;
      this.profilePicture = file;
      this.avatar = URL.createObjectURL(file);
      this.setFormSection("profilePicture", this.profilePicture);
    },

    setId(data) {
      this.showIdList = false;
      this.identity = data;
      this.setFormSection("identity", data);
    },

    selectOriginCountry(data) {
      this.originCountry = data;
      this.showOriginCountryList = false;
      this.setFormSection("originCountry", data);
    },

    checkForm() {
      if (this.formPage == 0 && this.formSections.length > 8) {
        this.formPage++;
      } else if (this.formPage == 1 && this.formSections.length > 12) {
        this.formPage++;
      } else if (this.formPage == 2 && this.formSections.length > 15) {
        this.formPage++;
      } else if (this.formPage == 3 && this.formSections.length > 19) {
        this.formPage++;
      } else {
        this.showMessage(
          "Please fill in the marked fields to proceed to next section."
        );
      }
    },

    switchForm(data) {
      if (data == "next") {
        if (this.formPage < 4) {
          this.formPage++;
        }
      } else if (this.formPage != 0) {
        this.formPage--;
      }
    },

    checkAge(data) {
      const dobDate = new Date(data);
      const now = new Date();

      const diffMs = now.getTime() - dobDate.getTime();
      const age = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
      if (age < 18) {
        this.showMessage("You must be at least 18 years of age to sign up");
        return "no";
      }
      return age;
    },

    processUserData() {
      if (this.profilePicture == "") {
        this.onRequest = false;
        this.showMessage("Please choose a passport photograph to continue");
        return;
      }
      if (this.idPicture == "") {
        this.onRequest = false;
        this.showMessage(
          "Please upload your identification document photo to continue."
        );
        return;
      }
      if (this.dob == "") {
        this.onRequest = false;
        this.showMessage("Please choose date of birth");
        return;
      }
      if (this.password != this.cPassword) {
        this.onRequest = false;
        this.showMessage("Sorry, password do not match.");
      } else if (
        this.email == "" ||
        !this.email ||
        !/^\S+@\S+\.\S+$/.test(this.email)
      ) {
        this.onRequest = false;
        this.showMessage("Please choose provide a valid email");
        return;
      } else {
        this.onRequest = true;
        const form = new FormData();
        form.append("firstName", this.firstName);
        form.append("middleName", this.middleName);
        form.append("lastName", this.lastName);
        form.append("dob", new Date(this.dob).getTime());
        form.append("username", this.username);
        form.append("income", this.income);
        form.append("gender", this.gender);
        form.append("residentAddress", this.residentAddress);
        form.append("residentZipCode", this.residentZipCode);
        form.append("residentState", this.residentState);
        form.append("residentCountry", this.residentCountry);

        form.append("phoneNumber", this.phoneNumber);
        form.append("email", this.email);
        form.append("regDate", new Date().getTime());
        form.append("profilePicture", this.profilePicture);
        form.append("idFile", this.idPicture);
        form.append("idType", this.identity);

        form.append("password", this.password);
        form.append("cPassword", this.cPassword);
        this.createUser(form);
      }
    },

    async createUser(form) {
      try {
        const result = await this.$axios.post(`/users/signup`, form);
        this.showMessage(result.data);
        this.clearInputs();
      } catch (err) {
        // console.log(err.response);
        this.showMessage(err.response.data.message);
      }
    },

    loadScript() {
      if (!process.server) {
        let el = document.getElementById("script");

        if (el != undefined) {
          document.body.removeChild(el);
        }

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "/scripts/home.js";
        script.async = true;
        script.id = "script";
        const app = document.querySelector("#footer");
        if (app) {
          app.appendChild(script);
        } else {
          console.error("Could not find app node to append script element");
        }
      }
    },
  },
  computed: {
    countryArray() {
      return this.$store.state.registrationDetails.countries;
    },
  },
  mounted() {
    this.loadScript();
  },
  components: { HomeFooter, HomeHeader },
};
</script>

<style>
.register-rate-completing-holder {
  position: relative;
}

.register-rate-complete {
  position: absolute;
}

.register-rate-complete.check-0 {
  width: 33.33%;
}

.register-rate-complete.check-1 {
  width: 66.67%;
}

.register-rate-complete.check-2 {
  width: 100%;
}

.register-mark-box {
  cursor: pointer;
}

.drop-down-list {
  height: auto;
  max-height: 250px;
  overflow: auto;
}

.dropdown-container h3 {
  width: 100%;
}

.register-form-holder.full {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.register-form-holder.full label {
  width: auto;
  margin: 0 auto;
}

label .input-file {
  width: 0.1px;
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.register-input-texts.center {
  text-align: center;
}

.image-37 {
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
}

.arrow-holder {
  cursor: pointer;
  max-height: 30px;
}

.arrow-holder img {
  height: 100%;
}

.signup-hero-holder {
  justify-content: center;
}
</style>
