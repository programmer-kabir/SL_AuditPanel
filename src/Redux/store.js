import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./Users/UsersSlice";
import customerInstallmentCardsSlice from "../Redux/Customers/InstallmentCards/InstallmentCardSlice";
import customerInstallmentPaymentsSlice from "../Redux/Customers/InstallmentPayment/InstallmentPaymentSlice";
import companyExpensesSlice from "../Redux/Expenses/companyExpensesSlice";
import staffTaskSlice from "../Redux/Staff/Tasks/staffTaskSlice";
import staffTaskPointSlice from "../Redux/Staff/StaffPoints/staffTaskPointSlice";
import CustomerGranterSlice from "../Redux/Customers/CustomerGranter/CustomerGranterSlice";
import CashDailyReportSlice from "../Redux/Cash/CashDailyReportSlice";
import CashMonthlyReportSlice from "../Redux/Cash/CashMonthlyReportSlice";
import CashYearlyReportSlice from "../Redux/Cash/CashYearlyReportSlice";
import MobileAnalyticsSlice from '../Redux/MobileInventory/MobileAnalyticsSlice'
import SupplierPaymentAnalyticsSlice from '../Redux/SupplierPayment/SupplierPaymentAnalyticsSlice'
import CashReportSlice from '../Redux/Cash/CashReporSlice'
const store = configureStore({
  reducer: {
    users: UsersSlice,
    customerInstallmentCards: customerInstallmentCardsSlice,
    customerInstallmentPayments: customerInstallmentPaymentsSlice,
    companyExpenses: companyExpensesSlice,
    staffTasks: staffTaskSlice,
    CustomerGranter: CustomerGranterSlice,
    staffTasksCreditPoints: staffTaskPointSlice,
    stockMobiles:MobileAnalyticsSlice,
    supplierPayments:SupplierPaymentAnalyticsSlice,
    CashReports:CashReportSlice
  },
});
export default store;
