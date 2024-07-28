import { Category, PossiblyNull } from "@/types";

export type BudgetAndExpenseItemProps = {
  dateAdded: Date;
  spentMoney: number;
  category: Category;
};
