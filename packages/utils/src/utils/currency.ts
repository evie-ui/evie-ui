export const CurrencyHelpers = {
  format(money: number | null | undefined): string | undefined {
    if (!money) return undefined;

    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(money);
  },
};
