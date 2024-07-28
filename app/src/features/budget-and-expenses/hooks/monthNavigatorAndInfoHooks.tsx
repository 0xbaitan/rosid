import useMemoize from "@/hooks/useMemoize";
import { useStoreDispatch, useStoreSelector } from "@/store/hooks";
import { useCallback } from "react";
import { monthNavigatorAndInfoActions } from "../reducers/monthNavigatorAndInfoReducer";
import { getThreeLetterMonth } from "../util/monthNavigatorAndInfoUtil";
import Months from "../enums/months";

export function useCurrentYear() {
  const currentYear = useStoreSelector(
    (store) => store.budgetAndExpenses.monthNavigatorAndInfo.currentYear
  );
  return useMemoize(currentYear);
}

export function useCurrentMonth() {
  const currentMonth = useStoreSelector(
    (store) => store.budgetAndExpenses.monthNavigatorAndInfo.currentMonth
  );
  return useMemoize(currentMonth);
}

export function useAmtBudgeted() {
  const amtBudgeted = useStoreSelector(
    (store) => store.budgetAndExpenses.monthNavigatorAndInfo.amtBudgeted
  );
  return useMemoize(amtBudgeted);
}

export function useAmtExpended() {
  const amtExpended = useStoreSelector(
    (store) => store.budgetAndExpenses.monthNavigatorAndInfo.amtExpended
  );
  return useMemoize(amtExpended);
}

export function useCurrency() {
  const currency = useStoreSelector(
    (store) => store.budgetAndExpenses.monthNavigatorAndInfo.currency
  );
  return useMemoize(currency);
}

export function useSetCurrentYear() {
  const dispatch = useStoreDispatch();
  const useSetCurrentYear = useCallback(
    (dateOrMonth: Date | number) => {
      const year =
        dateOrMonth instanceof Date ? dateOrMonth.getFullYear() : dateOrMonth;
      return dispatch(monthNavigatorAndInfoActions.setCurrentYear(year));
    },
    [dispatch]
  );
  return useSetCurrentYear;
}

export function useSetCurrentMonth() {
  const dispatch = useStoreDispatch();
  const useSetCurrentYear = useCallback(
    (dateOrMonth: Date | number) => {
      const month =
        dateOrMonth instanceof Date ? dateOrMonth.getMonth() : dateOrMonth;
      dispatch(monthNavigatorAndInfoActions.setCurrentMonth(month));
    },
    [dispatch]
  );
  return useSetCurrentYear;
}

export function useSetAmtBudgeted() {
  const dispatch = useStoreDispatch();
  const setAmtBudgeted = useCallback(
    (amtBudgeted: number) => {
      dispatch(monthNavigatorAndInfoActions.setAmtBudgeted(amtBudgeted));
    },
    [dispatch]
  );
  return setAmtBudgeted;
}

export function useSetAmtExpended() {
  const dispatch = useStoreDispatch();
  const setAmtExpended = useCallback(
    (amtExpended: number) => {
      dispatch(monthNavigatorAndInfoActions.setAmtExpended(amtExpended));
    },
    [dispatch]
  );
  return setAmtExpended;
}

export function useSetCurrency() {
  const dispatch = useStoreDispatch();
  const setCurrency = useCallback(
    (currency: string) => {
      dispatch(monthNavigatorAndInfoActions.setCurrency(currency));
    },
    [dispatch]
  );
  return setCurrency;
}

export function useCurrentMonthThreeLetterCode() {
  const currentMonth = useCurrentMonth();
  const code = getThreeLetterMonth(currentMonth);
  return useMemoize(code);
}

export function useMoveToNextMonth() {
  const currentMonth = useCurrentMonth();
  const currentYear = useCurrentYear();

  const setCurrentMonth = useSetCurrentMonth();
  const setCurrentYear = useSetCurrentYear();

  const moveToNextMonth = useCallback(() => {
    let nextMonth = currentMonth + 1;
    let year = currentYear;
    if (nextMonth > Months.DECEMBER) {
      nextMonth = Months.JANUARY;
      year = year + 1;
    }
    setCurrentMonth(nextMonth);
    setCurrentYear(year);
  }, [currentMonth, currentYear, setCurrentMonth, setCurrentYear]);

  return moveToNextMonth;
}

export function useMoveToPrevMonth() {
  const currentMonth = useCurrentMonth();
  const currentYear = useCurrentYear();

  const setCurrentMonth = useSetCurrentMonth();
  const setCurrentYear = useSetCurrentYear();

  const moveToPrevMonth = useCallback(() => {
    let prevMonth = currentMonth - 1;
    let year = currentYear;
    if (prevMonth < Months.JANUARY) {
      prevMonth = Months.DECEMBER;
      year = year - 1;
    }
    console.log(prevMonth);
    console.log(year);
    setCurrentMonth(prevMonth);
    setCurrentYear(year);
  }, [currentMonth, currentYear, setCurrentMonth, setCurrentYear]);

  return moveToPrevMonth;
}
