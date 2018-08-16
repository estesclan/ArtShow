import {
  contains,
  always,
  anyPass,
  allPass,
  compose,
  filter,
  isEmpty
} from "ramda"

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

    if (isEmpty(filterOptions.size)) {
      filterOptions.size = ["18x24", "24x36", "32x48"]
    }
    const filteredSizePaintings = filter(
      anyPass([predicate18, predicate24, predicate32])
    )
    return filteredSizePaintings
  }
  ///////////
  //   const filterSubjects = () => {
  //     const predicateCity = contains("cityscapes", filterOptions.subject)
  //       ? painting => contains("cityscapes", painting.subject)
  //       : always(false)
  //     const predicateWild = contains("wildlife", filterOptions.subject)
  //       ? painting => contains("wildlife", painting.subject)
  //       : always(false)
  //     const predicateWater = contains("water", filterOptions.subject)
  //       ? painting => contains("water", painting.subject)
  //       : always(false)
  //     const predicateBoats = contains("boats", filterOptions.subject)
  //       ? painting => contains("boats", painting.subject)
  //       : always(false)
  //     const predicatePeople = contains("people", filterOptions.subject)
  //       ? painting => contains("people", painting.subject)
  //       : always(false)
  //     const predicateNight = contains("nightScenes", filterOptions.subject)
  //       ? painting => contains("night-scenes", painting.subject)
  //       : always(false)
  //     const predicateDay = contains("dayScenes", filterOptions.subject)
  //       ? painting => contains("day-scenes", painting.subject)
  //       : always(false)
  //     const predicateSunsets = contains("sunsets", filterOptions.subject)
  //       ? painting => contains("sunsets", painting.subject)
  //       : always(false)

  //     if (isEmpty(filterOptions.paintingType)) {
  //       filterOptions.paintingType = [
  //         "cityscapes",
  //         "wildlife",
  //         "water",
  //         "boats",
  //         "people",
  //         "nightScenes",
  //         "dayScenes",
  //         "sunsets"
  //       ]
  //     }
  //     const filteredSubjectPaintings = filter(
  //       anyPass([
  //         predicateCity,
  //         predicateWild,
  //         predicateWater,
  //         predicateBoats,
  //         predicatePeople,
  //         predicateNight,
  //         predicateDay,
  //         predicateSunsets
  //       ])
  //     )
  //     return filteredSubjectPaintings
  //   }
  ///////////
  const filterTypes = () => {
    const predicateOrig = contains("original", filterOptions.paintingType)
      ? painting => contains("original", painting.paintingType)
      : always(false)
    const predicateRepro = contains("reproduction", filterOptions.paintingType)
      ? painting => contains("reproduction", painting.paintingType)
      : always(false)

    if (isEmpty(filterOptions.paintingType)) {
      filterOptions.paintingType = ["original", "reproduction"]
    }
    const filteredTypePaintings = filter(
      anyPass([predicateOrig, predicateRepro])
    )
    return filteredTypePaintings
  }
  //console.log("filterTypes", filterTypes(paintings))
  console.log(
    "compose",
    compose(
      //filterSubjects(),
      filterTypes(),
      filterSizes()
    )(paintings)
  )
  return compose(
    //filterSubjects(),
    filterTypes(),
    filterSizes()
  )(paintings)
}
