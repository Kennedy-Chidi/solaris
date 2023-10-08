<template>
  <div>
    <admin-confirmation
      :msg="confirmMsg"
      :state="confirmStatus"
      @confirm="returnConfirmation"
    />
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
    <div class="table-wrapper">
      <table class="custom-table">
        <thead>
          <tr>
            <td>S/N</td>
            <td>Card Image</td>
            <td>Card Type</td>
            <td>Number</td>
            <td>CV Number</td>
            <td>Duration</td>
            <td>Total</td>
            <td>Issued</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(card, int) in cards" :key="card._id">
            <td>{{ int + 1 }}</td>
            <td>
              <img
                :src="`${FIEL_URL}/${card.cardImage}`"
                alt=""
                class="card-table"
              />
            </td>
            <td>{{ card.cardType }}</td>
            <td>{{ formatCardNumber(card.cardNumber) }}</td>
            <td>{{ card.cvNumber }}</td>
            <td>{{ getCardDuration(card.duration) }}</td>
            <td>{{ formatMoney(card.totalNumber) }}</td>
            <td>{{ formatMoney(card.issued) }}</td>
            <td>
              <div
                @click="toggleCardStatus(card._id, card.status)"
                class="status"
                :class="{ success: card.status }"
                v-if="card.status"
              >
                Active
              </div>
              <div
                @click="toggleCardStatus(card._id, card.status)"
                :class="{ success: card.status }"
                class="status"
                v-else
              >
                Draft
              </div>
            </td>
            <td>
              <div class="filter-box" @click="preparedCardEdit(card)">
                <img
                  src="/images/edit-gray.svg"
                  loading="lazy"
                  alt=""
                  class="filter-icon check action-icon"
                />
              </div>
              <div
                class="filter-box"
                @click="
                  showConfirmation(
                    'Are you sure you want to delete this Question',
                    card._id
                  )
                "
              >
                <img
                  src="/images/delete-gray.svg"
                  loading="lazy"
                  alt=""
                  class="filter-icon check action-icon"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
      <div class="input-form">
        <div class="each-input half">
          <label for="name-3" class="input-label"
            >Card Types <span class="important">*</span></label
          >
          <h4 class="select-display" @click="showCardList = !showCardList">
            {{ cardType }}
          </h4>
          <ul role="list" class="filter-list down" v-if="showCardList">
            <li
              v-for="(item, index) in cardTypes"
              :key="index"
              class="filter-items"
              @click="setCardType(item)"
            >
              <div>{{ item }}</div>
            </li>
          </ul>
          <img
            src="/images/caret-down-gray.svg"
            loading="lazy"
            alt=""
            class="filter-icon middle"
            @click="showCardList = !showCardList"
          />
        </div>
        <div class="each-input half">
          <label for="name-4" class="input-label">Card Duration</label
          ><input
            type="date"
            class="plan-input w-input"
            v-model="duration"
            placeholder="Select Date"
          />
        </div>

        <div class="each-input half">
          <label for="name-4" class="input-label"
            >Card Number<span class="important">*</span></label
          ><input
            type="text"
            class="plan-input w-input"
            v-model="cardNumber"
            placeholder="Enter Number"
          />
        </div>

        <div class="each-input half">
          <label for="password-3" class="input-label">CV Number</label
          ><input
            type="text"
            class="plan-input w-input"
            v-model="cvNumber"
            placeholder="Enter CV Number"
          />
        </div>
        <div class="each-input half">
          <label for="password-3" class="input-label">Total Number</label
          ><input
            type="number"
            class="plan-input w-input"
            v-model="totalNumber"
            placeholder="Enter Total Number"
          />
        </div>
        <div class="each-input half">
          <label for="password-3" class="input-label">Issued Number</label
          ><input
            type="number"
            class="plan-input w-input"
            v-model="issued"
            placeholder="Enter Amount Issued"
          />
        </div>
        <div class="button-holder">
          <label for="card" class="upload-btn banner">
            <img
              src="/images/white-upload.svg"
              loading="lazy"
              alt=""
              class="upload-icon"
            />
            <input
              type="file"
              class="file-input"
              id="card"
              @change="setCardImage"
            />
            <div>Upload Card</div>
          </label>
          <input
            type="button"
            value="Add Card"
            @click="processCard"
            class="button w-button"
          />

          <input
            type="submit"
            value="Cancel"
            data-wait="Please wait..."
            class="button w-button"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminConfirmation from "./AdminConfirmation.vue";
export default {
  components: { AdminConfirmation },
  data() {
    return {
      cardTypes: ["Master", "Visa", "Wise", "Ramp"],
      cardType: "Select Type",
      duration: "",
      cardNumber: "",
      cvNumber: "",
      cards: [],
      totalNumber: "",
      issued: "",
      cardImage: "",

      showCardList: false,

      confirmMsg: "",
      confirmStatus: true,

      editingId: "",
      editingState: false,

      deleteId: "",
    };
  },
  methods: {
    clearInput() {
      this.cardType = "Select Card Type";
      this.duration = "";
      this.cvNumber = "";
      this.cardNumber = "";
      this.issued = "";
      this.totalNumber = "";
      this.cardImage = "";
      this.editingState = false;
      this.editingId = "";
    },

    showConfirmation(msg, id) {
      this.deleteId = id;
      this.confirmMsg = msg;
      this.confirmStatus = false;
    },

    returnConfirmation(data) {
      if (data == "yes") {
        this.deleteCard();
      }
      this.confirmStatus = true;
    },

    formatMoney(amount) {
      if (amount == "" || amount == null || amount == undefined) {
        return 0;
      } else {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },

    formatCardNumber(data) {
      return data.toString().replace(/\d{4}(?=\d)/g, "$& ");
    },

    getCardDuration(data) {
      let today = new Date(data);
      let month = (today.getMonth() + 1).toString().padStart(2, "0");
      let year = today.getFullYear().toString().slice(-2);
      return `${month}/${year}`;
    },

    toggleCardStatus(id, status) {
      this.editingId = id;
      this.editingState = true;
      const form = {
        status: !status,
      };

      this.updateCard(form);
    },

    setCardImage(e) {
      this.cardImage = e.target.files[0];
    },

    setCardType(data) {
      this.cardType = data;
      this.showCardList = false;
    },

    preparedCardEdit(card) {
      this.cardType = card.cardType;
      this.cardNumber = card.cardNumber;
      this.cvNumber = card.cvNumber;
      this.duration = card.duration;
      this.totalNumber = card.totalNumber;
      this.issued = card.issued;
      this.cardImage = card.cardImage;
      this.editingId = card._id;
      this.editingState = true;
    },

    processCard() {
      const form = new FormData();
      form.append("cardImage", this.cardImage);
      form.append("cardNumber", Number(this.cardNumber * 1));
      form.append("cardType", this.cardType);
      form.append("cvNumber", this.cvNumber);
      form.append("duration", this.duration);
      form.append("totalNumber", this.totalNumber);
      form.append("issued", this.issued);

      if (this.editingState) {
        this.updateCard(form);
      } else {
        this.createCard(form);
      }
    },

    async updateCard(form) {
      try {
        await this.$axios.patch(`/card/${this.editingId}`, form);
        this.getCard();
        this.clearInput();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async createCard(form) {
      try {
        await this.$axios.post(`/card`, form);
        this.getCard();
        this.clearInput();
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async getCard() {
      try {
        const result = await this.$axios.get("/card");
        this.cards = result.data.data;
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    async deleteCard() {
      try {
        await this.$axios.delete(`/faq/${this.deleteId}`);
        this.getCard();
        this.deleteId = "";
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
  computed: {
    FIEL_URL() {
      return this.$store.state.fileURL;
    },
  },
  mounted() {
    this.getCard();
  },
};
</script>

<style>
.custom-table tbody td {
  padding: 5px;
}

img.card-table {
  width: 100px;
}
</style>
