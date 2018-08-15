import { contains, always, anyPass, allPass, compose, filter } from "ramda"

export default (paintings, filterOptions) => {
  const filterSizes = () => {
    const predicate18 = contains("18x24", filterOptions)
      ? painting => contains("18x24", painting.sizes)
      : always(false)
    const predicate24 = contains("24x36", filterOptions)
      ? painting => contains("24x36", painting.sizes)
      : always(false)
    const predicate32 = contains("32x48", filterOptions)
      ? painting => contains("32x48", painting.sizes)
      : always(false)
    const filteredSizePaintings = filter(
      anyPass([predicate18, predicate24, predicate32])
    )
    return filteredSizePaintings
  }
  return compose(filterSizes())(paintings)
}
