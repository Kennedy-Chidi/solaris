<template>
  <div class="main-wrapper blog">
    <admin-navigation />
    <div class="body-wrapper">
      <admin-top-header />
      <div class="content-wrapper">
        <div class="custom-card plan">
          <h4 class="page-title">Blog Page</h4>
          <div class="table-filters">
            <div class="each-filter-option">
              <div class="filter-page">Filter</div>
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7700f683bb23f0908_triangle-bottom-arrow-icon%201.svg"
                loading="lazy"
                alt=""
                class="filter-icon drop"
              />
              <h4 class="filter-label">All Users</h4>
              <ul role="list" class="filter-list hide">
                <li class="filter-items"><div>All Users</div></li>
                <li class="filter-items"><div>Active</div></li>
                <li class="filter-items"><div>Suspended</div></li>
                <li class="filter-items"><div>Blocked</div></li>
              </ul>
            </div>
            <div class="each-filter-option">
              <div class="filter-page">Sort</div>
              <h4 class="filter-label">Name</h4>
              <ul role="list" class="filter-list hide">
                <li class="filter-items"><div>Reg. Date</div></li>
                <li class="filter-items"><div>Deposit</div></li>
                <li class="filter-items"><div>Suspended</div></li>
                <li class="filter-items"><div>Blocked</div></li>
              </ul>
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7700f683bb23f0908_triangle-bottom-arrow-icon%201.svg"
                loading="lazy"
                alt=""
                class="filter-icon drop"
              />
            </div>
            <div class="each-filter-option">
              <div class="filter-page">Results</div>
              <h4 class="filter-label input">10</h4>
              <div class="filter-box">
                <img
                  src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f6007a954c77c293682c_check-mark-icon%201.svg"
                  loading="lazy"
                  alt=""
                  class="filter-icon check"
                />
              </div>
            </div>
          </div>
          <div class="table-label">
            <div>
              <strong class="bold-text">Results</strong>: 10
              <strong class="bold-text-2">Page</strong> 1 of 12
            </div>
            <ul role="list" class="min-table-pagination">
              <li class="pagination-item">
                <img
                  src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1982bc1672608295369ae_arrow-thin-chevron-left-icon.svg"
                  loading="lazy"
                  alt=""
                  class="pagination-img"
                />
              </li>
              <li class="pagination-item"><div>1</div></li>
              <li class="pagination-item active"><div>2</div></li>
              <li class="pagination-item"><div>3</div></li>
              <li class="pagination-item">
                <img
                  src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1982b466e626df4567c6d_arrow-thin-chevron-right-icon.svg"
                  loading="lazy"
                  alt=""
                  class="pagination-img"
                />
              </li>
            </ul>
          </div>
          <div class="table-actions">
            <div class="each-filter-option min">
              <div class="filter-page">Delete</div>
              <div class="filter-box">
                <img
                  src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1da3b461fa0e7e3c7163c_trash-bin-icon%201.svg"
                  loading="lazy"
                  alt=""
                  class="filter-icon check"
                />
              </div>
            </div>
            <div class="each-filter-option min">
              <div class="filter-page">Bulk</div>
              <div class="filter-box">
                <img
                  src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1dbeaad117e09c9d6ba7c_select-all-icon%201.svg"
                  loading="lazy"
                  alt=""
                  class="filter-icon check"
                />
              </div>
            </div>
          </div>
          <div class="input-wrapper w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              method="get"
              class="input-form"
            >
              <div class="each-input">
                <label for="name-4" class="input-label"
                  >Category<span class="important">*</span></label
                ><input
                  type="text"
                  class="plan-input w-input"
                  maxlength="256"
                  name="name-3"
                  data-name="Name 3"
                  placeholder=""
                  id="name-3"
                />
              </div>
              <div class="each-input">
                <label for="email-3" class="input-label"
                  >Caption<span class="important">*</span></label
                ><input
                  type="email"
                  class="plan-input w-input"
                  maxlength="256"
                  name="email-2"
                  data-name="Email 2"
                  placeholder=""
                  id="email-2"
                />
              </div>
              <div class="each-input">
                <label for="password-3" class="input-label"
                  >Title <span class="important">*</span></label
                ><input
                  type="password"
                  class="plan-input w-input"
                  maxlength="256"
                  name="password-2"
                  data-name="Password 2"
                  placeholder=""
                  id="password-2"
                />
              </div>
              <div class="each-input">
                <label for="password-3" class="input-label"
                  >Author <span class="important">*</span></label
                ><input
                  type="password"
                  class="plan-input w-input"
                  maxlength="256"
                  name="password-2"
                  data-name="Password 2"
                  placeholder=""
                  id="password-2"
                />
              </div>
              <div class="each-input auto">
                <label for="password-2" class="input-label"
                  >Tags <span class="important">*</span></label
                ><input
                  type="text"
                  class="plan-input w-input"
                  maxlength="256"
                  name="password-2"
                  data-name="Password 2"
                  placeholder="Write tag and press Enter"
                  id="password-2"
                />
              </div>
              <div class="each-input content">
                <label for="field-3" class="input-label">Plan Description</label
                ><textarea
                  placeholder="Plan Description"
                  maxlength="5000"
                  id="field-2"
                  name="field-2"
                  data-name="Field 2"
                  class="plan-input w-input"
                ></textarea>
              </div>
              <div class="button-holder">
                <div class="upload-btn button">
                  <img
                    src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f449ac84aa271eca71d2_upload-outbox-line-icon%201.svg"
                    loading="lazy"
                    alt=""
                    class="upload-icon"
                  />
                  <div>Upload Image</div>
                </div>
                <input
                  type="submit"
                  value="Add User"
                  data-wait="Please wait..."
                  class="button w-button"
                /><input
                  type="submit"
                  value="Cancel"
                  data-wait="Please wait..."
                  class="button w-button"
                />
              </div>
            </form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <Instruction />
      </div>
      <admin-footer />
    </div>
  </div>
</template>

<script>
import Instruction from "../../components/admin/Instruction.vue";

export default { components: { Instruction } };
</script>

<style></style>
