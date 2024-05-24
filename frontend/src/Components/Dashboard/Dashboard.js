import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import History from "../../History/History";
import { InnerLayout } from "../../styles/Layouts";
import { dollar } from "../../utils/Icons";
import Chart from "../Chart/Chart";

function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {dollar} {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {dollar} {totalExpenses()}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {dollar} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <h2 className="salary-title">
              Min <span>Salary</span>Max
            </h2>
            <div className="salary-item">
              <p>${Math.min(...incomes.map((item) => item.amount))}</p>
              <p>${Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
            <h2 className="salary-title">
              Min <span>Expense</span>Max
            </h2>
            <div className="salary-item">
              <p>${Math.min(...expenses.map((item) => item.amount))}</p>
              <p>${Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  .stats-con {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    .chart-con {
      background: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 1.5rem;
      width: calc(50% - 1rem);
      min-height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .amount-con {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 2rem;

        .income,
        .expense {
          background: #f0f8ff;
          border: 1px solid #c1e5f8;
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;

          p {
            font-size: 1.5rem;
            font-weight: 600;
            color: #007bff;
          }
        }

        .balance {
          background: #e6ffe6;
          border: 1px solid #b3ffb3;
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;

          p {
            font-size: 2rem;
            font-weight: 700;
            color: #28a745;
          }
        }
      }
    }

    .history-con {
      background: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 1.5rem;
      width: calc(50% - 1rem);

      h2 {
        margin-bottom: 1rem;
        font-size: 1.8rem;
        color: #333;
      }

      .salary-title {
        font-size: 1.2rem;
        color: #666;

        span {
          font-size: 1.5rem;
          color: #333;
        }
      }

      .salary-item {
        margin-top: 1rem;
        background: #f0f8ff;
        border: 1px solid #c1e5f8;
        border-radius: 8px;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          font-weight: 600;
          font-size: 1.3rem;
          color: #007bff;
        }
      }
    }
  }
`;

export default Dashboard;
