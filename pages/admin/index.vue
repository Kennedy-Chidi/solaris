<template>
  <div class="main-wrapper home">
    <AdminNavigation />
    <div class="body-wrapper">
      <AdminTopHeader />
      <div class="content-wrapper">
        <div class="custom-card main-stats">
          <div class="stat-top">
            <div class="caption-holder">
              <div class="each-main-highlight top">
                <h2 class="highlight-title duration">
                  12/02/2022 - 11/11/2023
                </h2>
                <div class="highlight-caption">Transaction Period</div>
              </div>
              <div class="each-main-highlight">
                <h2 class="highlight-title">$80,000</h2>
                <div class="highlight-caption">Transaction Volume</div>
              </div>
              <div class="each-main-highlight">
                <h2 class="highlight-title">$40,000</h2>
                <div class="highlight-caption">Current Balance</div>
              </div>
              <a href="#" class="main-btn w-button">View Users</a>
            </div>
            <div class="stats-holder">
              <h3 class="chart-title">Deposits Vs Withdrawal Chart</h3>
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1785663ea220b6f2d2f34_line-graph-excel.png"
                loading="lazy"
                alt=""
                class="chart-img"
              />
            </div>
          </div>
          <div class="stat-bottom">
            <div class="each-coin-stat">
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg"
                loading="lazy"
                alt=""
                class="coin-stat-img"
              />
              <div>
                <div>Bitcoin Balance</div>
                <h3 class="coin-title">$6,000</h3>
              </div>
            </div>
            <div class="each-coin-stat">
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737948a58b7255a6e0e9_ethereum-eth-logo.svg"
                loading="lazy"
                alt=""
                class="coin-stat-img"
              />
              <div>
                <div>Ethereum Balance</div>
                <h3 class="coin-title">$6,000</h3>
              </div>
            </div>
            <div class="each-coin-stat">
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg"
                loading="lazy"
                alt=""
                class="coin-stat-img"
              />
              <div>
                <div>TRC20 Balance</div>
                <h3 class="coin-title">$6,000</h3>
              </div>
            </div>
            <div class="each-coin-stat">
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ad78aac69ab065aca_dogecoin-doge-logo.svg"
                loading="lazy"
                alt=""
                class="coin-stat-img"
              />
              <div>
                <div>Dogecoin Balance</div>
                <h3 class="coin-title">$6,000</h3>
              </div>
            </div>
            <div class="each-coin-stat">
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ad78aac69ab065aca_dogecoin-doge-logo.svg"
                loading="lazy"
                alt=""
                class="coin-stat-img"
              />
              <div>
                <div>Dogecoin Balance</div>
                <h3 class="coin-title">$6,000</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-card pie-chart-holder">
          <div class="donut-chart">
            <img
              src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f17bd70b3cfe4ddc1434d3_pie.png"
              loading="lazy"
              sizes="(max-width: 767px) 300px, (max-width: 991px) 25vw, (max-width: 1279px) 21vw, 22vw"
              srcset="
                https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f17bd70b3cfe4ddc1434d3_pie-p-500.png 500w,
                https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f17bd70b3cfe4ddc1434d3_pie.png       505w
              "
              alt=""
            />
          </div>
          <div class="pie-stats">
            <div class="each-pie-stat">
              <h3 class="heading">40<sup>%</sup></h3>
              <div class="each-pie-label">
                <div class="label-color"></div>
                <div>Bitcoin</div>
              </div>
            </div>
            <div class="each-pie-stat">
              <h3 class="heading">40<sup>%</sup></h3>
              <div class="each-pie-label">
                <div class="label-color"></div>
                <div>Bitcoin</div>
              </div>
            </div>
            <div class="each-pie-stat">
              <h3 class="heading">40<sup>%</sup></h3>
              <div class="each-pie-label">
                <div class="label-color"></div>
                <div>Bitcoin</div>
              </div>
            </div>
            <div class="each-pie-stat">
              <h3 class="heading">40<sup>%</sup></h3>
              <div class="each-pie-label">
                <div class="label-color"></div>
                <div>Bitcoin</div>
              </div>
            </div>
          </div>
        </div>
        <div class="trx-card">
          <div class="tx-card-title">Total Deposits</div>
          <div class="tx-flex">
            <img
              src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f18162e1e45a44f1442f8c_column-chart-line-icon%201.svg"
              loading="lazy"
              alt=""
              class="tx-img"
            />
            <h4 class="tx-card-value">
              $45,000
              <span class="tx-date"><br />Last: Thu 5th Jun, 2022</span>
            </h4>
          </div>
        </div>
        <div class="trx-card withdraw">
          <div class="tx-card-title">Total Withdrawals</div>
          <div class="tx-flex">
            <img
              src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f18254f2b8ff803231951a_stock-market-icon%201.svg"
              loading="lazy"
              alt=""
              class="tx-img"
            />
            <h4 class="tx-card-value">
              $45,000
              <span class="tx-date"><br />Last: Thu 5th Jun, 2022</span>
            </h4>
          </div>
        </div>
        <div class="trx-card active-depo">
          <div class="tx-card-title">Active Deposits</div>
          <div class="tx-flex">
            <img
              src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f18c7669cfc0f135400b4f_growth-icon%201.svg"
              loading="lazy"
              alt=""
              class="tx-img"
            />
            <h4 class="tx-card-value">
              $45,000
              <span class="tx-date"><br />Last: Thu 5th Jun, 2022</span>
            </h4>
          </div>
        </div>
        <div class="trx-card pending-widthdraw">
          <div class="tx-card-title">Pending Withdrawals</div>
          <div class="tx-flex">
            <img
              src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f18c1e8c2e214d4b13be49_decrease-graph-recession-icon%201.svg"
              loading="lazy"
              alt=""
              class="tx-img"
            />
            <h4 class="tx-card-value">
              $45,000
              <span class="tx-date"><br />Last: Thu 5th Jun, 2022</span>
            </h4>
          </div>
        </div>
        <div class="custom-card pie-chart-holder">
          <h4 class="activites">Recent Activies</h4>
          <div class="each-activity">
            <div class="activity-title">Deposit</div>
            <div class="activity-coin">
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg"
                loading="lazy"
                alt=""
                class="activity-img"
              />
              <div class="activity-line"></div>
            </div>
            <div class="activity-value">
              <h4 class="activity-amount">$12.00</h4>
              <div class="activity-time">12/06/2022 9:04 AM</div>
            </div>
          </div>
          <div class="each-activity">
            <div class="activity-title">Withdrawal</div>
            <div class="activity-coin">
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg"
                loading="lazy"
                alt=""
                class="activity-img"
              />
              <div class="activity-line"></div>
            </div>
            <div class="activity-value">
              <h4 class="activity-amount">$12.00</h4>
              <div class="activity-time">12/06/2022 9:04 AM</div>
            </div>
          </div>
          <div class="each-activity">
            <div class="activity-title">Deposit</div>
            <div class="activity-coin">
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b8708f697be43_tron-trx-logo.svg"
                loading="lazy"
                alt=""
                class="activity-img"
              />
              <div class="activity-line"></div>
            </div>
            <div class="activity-value">
              <h4 class="activity-amount">$12.00</h4>
              <div class="activity-time">12/06/2022 9:04 AM</div>
            </div>
          </div>
          <div class="each-activity">
            <div class="activity-title">Deposit</div>
            <div class="activity-coin">
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg"
                loading="lazy"
                alt=""
                class="activity-img"
              />
              <div class="activity-line"></div>
            </div>
            <div class="activity-value">
              <h4 class="activity-amount">$12.00</h4>
              <div class="activity-time">12/06/2022 9:04 AM</div>
            </div>
          </div>
        </div>
        <div class="custom-card main-stats">
          <h4 class="min-table-title">All Users</h4>
          <div class="table-caption">
            For actions please
            <a href="#" class="custom-link">click users</a> page
          </div>
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
            <div class="each-filter-option search">
              <div class="filter-page">Search Name</div>
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7c16726c9a6581fd2_search-icon%201.svg"
                loading="lazy"
                alt=""
                class="filter-icon"
              />
            </div>
          </div>
          <div class="table-label">
            <div>
              <strong>Results</strong>: 10 <strong>Page</strong> 1 of 12
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
            <div class="each-filter-option">
              <img
                src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7700f683bb23f0908_triangle-bottom-arrow-icon%201.svg"
                loading="lazy"
                alt=""
                class="filter-icon drop"
              />
              <h4 class="filter-label">Send Email</h4>
              <ul role="list" class="filter-list hide">
                <li class="filter-items"><div>All Users</div></li>
                <li class="filter-items"><div>Active</div></li>
                <li class="filter-items"><div>Suspended</div></li>
                <li class="filter-items"><div>Blocked</div></li>
              </ul>
            </div>
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
              <div class="filter-page">Suspend</div>
              <div class="filter-box">
                <img
                  src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1da205a0b87bc129e0ee4_remove-member-icon%201.svg"
                  loading="lazy"
                  alt=""
                  class="filter-icon check"
                />
              </div>
            </div>
            <div class="each-filter-option min">
              <div class="filter-page">Approve</div>
              <div class="filter-box">
                <img
                  src="https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1db68393797590894bada_join-icon%201.svg"
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
        </div>
      </div>
      <AdminFooter />
    </div>
    <div class="confirm-action hide">
      <div class="confirm-box">
        <div>Are you sure you want to delete this item?</div>
        <div class="confirm-holder">
          <a href="#" class="button w-button">Yes</a
          ><a href="#" class="button w-button">No</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminFooter from "../../components/admin/AdminFooter.vue";
import AdminNavigation from "../../components/admin/AdminNavigation.vue";
import AdminTopHeader from "../../components/admin/AdminTopHeader.vue";

export default {
  components: { AdminNavigation, AdminTopHeader, AdminFooter },
};
</script>

<style>
.content-wrapper {
  margin-bottom: 20px;
}
</style>
