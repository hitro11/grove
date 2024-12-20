import { z } from 'zod';
export declare const ExpenseSchema: z.ZodObject<{
    name: z.ZodString;
    amount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    amount: number;
}, {
    name: string;
    amount: number;
}>;
export declare const CurrencySchema: z.ZodEnum<["CAD", "CNY", "EUR", "GBP", "INR", "JPY", "USD"]>;
export declare const AccountInfoSchema: z.ZodObject<{
    currency: z.ZodEnum<["CAD", "CNY", "EUR", "GBP", "INR", "JPY", "USD"]>;
    income: z.ZodNumber;
    expenses: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        amount: number;
    }, {
        name: string;
        amount: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    currency: "CAD" | "CNY" | "EUR" | "GBP" | "INR" | "JPY" | "USD";
    income: number;
    expenses: {
        name: string;
        amount: number;
    }[];
}, {
    currency: "CAD" | "CNY" | "EUR" | "GBP" | "INR" | "JPY" | "USD";
    income: number;
    expenses: {
        name: string;
        amount: number;
    }[];
}>;
export type AccountInfo = z.infer<typeof AccountInfoSchema>;
export type Currency = z.infer<typeof CurrencySchema>;
export type Expense = z.infer<typeof ExpenseSchema>;