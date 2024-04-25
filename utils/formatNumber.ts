export const formatNumber = (digit: number) => {
    return new Intl.NumberFormat('fr-Fr').format(digit)
}