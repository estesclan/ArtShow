import { contains, always, anyPass, allPass, compose, filter } from "ramda"

export default (paintings, filterOptions) => {
  console.log({ filterOptions })
  console.log({ paintings })
  const filterSizes = () => {
    const predicate18 = contains("18x24", filterOptions.size)
      ? painting => contains("18x24", painting.sizes)
      : always(false)
    const predicate24 = contains("24x36", filterOptions.size)
      ? painting => contains("24x36", painting.sizes)
      : always(false)
    const predicate32 = contains("32x48", filterOptions.size)
      ? painting => contains("32x48", painting.sizes)
      : always(false)
    const filteredSizePaintings = filter(
      anyPass([predicate18, predicate24, predicate32])
    )
    return filteredSizePaintings
  }
  ///////////
  const filterTypes = () => {
    const predicateOrig = contains("original", filterOptions.paintingType)
      ? painting => contains("original", painting.paintingType)
      : always(false)
    const predicateRepro = contains("reproduction", filterOptions.paintingType)
      ? painting => contains("reproduction", painting.paintingType)
      : always(false)
    const filteredTypePaintings = filter(
      anyPass([predicateOrig, predicateRepro])
    )
    return filteredTypePaintings
  }
  //console.log("filterTypes", filterTypes(paintings))
  console.log(
    "compose",
    compose(
      filterTypes(),
      filterSizes()
    )(paintings)
  )
  return compose(
    filterTypes(),
    filterSizes()
  )(paintings)
}
