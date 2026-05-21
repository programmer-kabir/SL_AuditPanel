import React, { useEffect, useState } from "react";
import useCustomerInstallmentCards from "../useCustomerInstallmentCards";
import useCustomerInstallmentPayments from "../Customers/useCustomerInstallmentPayments";
import useCompanyExpenses from "../Expenses/useCompanyExpenses";
import useUsers from "../useUsers";

const useDashboardData = () => {
  const [dailyInstallments, setDailyInstallments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // 🔹 Custom hooks (already fetching data)
  const {
    customerInstallmentCards,
    isCustomerInstallmentsCardsLoading,
    isCustomerInstallmentsCardsError,
  } = useCustomerInstallmentCards();
  const { isUsersError, isUsersLoading, users } = useUsers();
  const {
    customerInstallmentPayments,
    isCustomerInstallmentsPaymentsLoading,
    isCustomerInstallmentsPaymentsError,
  } = useCustomerInstallmentPayments();



  const { companyExpenses, isCompanyExpensesLoading, isCompanyExpensesError } =
    useCompanyExpenses();

  // 🔹 Fetch daily installments (manual API)
  useEffect(() => {
    const fetchDailyInstallments = async () => {
      try {
        const res = await fetch(
          "https://auditing.supplylinkbd.com/apis/DailyInstallments/getDailyInstallments.php",
        );
        const data = await res.json();
        setDailyInstallments(data.data || []);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDailyInstallments();
  }, []);

  // 🔹 Combined loading state
  const isLoading =
    isCustomerInstallmentsCardsLoading ||
    isCustomerInstallmentsPaymentsLoading ||
    
    isCompanyExpensesLoading ||
     isUsersLoading||
    loading;

  // 🔹 Combined error state
  const isError =
    isCustomerInstallmentsCardsError ||
    isCustomerInstallmentsPaymentsError ||
    
    isCompanyExpensesError ||
     isUsersError||
    error;
const roleStats = React.useMemo(() => {
  const stats = {
    total: 0,
    customer: 0,
    investor: 0,
    staff: 0,
    manager: 0,
    admin: 0,
    developer: 0,
  };

  if (!Array.isArray(users)) return stats;

  stats.total = users.length;

  users.forEach((u) => {
    const roles = Array.isArray(u.roles) ? u.roles : [];

    if (roles.includes("customer")) stats.customer++;
    if (roles.includes("investor")) stats.investor++;
    if (roles.includes("staff")) stats.staff++;
    if (roles.includes("manager")) stats.manager++;
    if (roles.includes("admin")) stats.admin++;
    if (roles.includes("developer")) stats.developer++;
  });

  return stats;
}, [users]);
  return {
    customerInstallmentCards,
    customerInstallmentPayments,
    companyExpenses,
    dailyInstallments,
    isLoading,
    isError,
    users,
    roleStats
  };
};

export default useDashboardData;
