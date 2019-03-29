const Pass = () => ({ status: 'Pass' })
const Warning = msg => ({ status: 'Warning', msg })
const Fail = msg => ({ status: 'Fail', msg })

/*
  Checks if an item exists in the DnD api
  if not, the fields are validated
*/
export const isCustom = item => item

export const hasName = item => (
  item.name
    ? Pass()
    : Fail('A map must have a name')
)

export const hasDescription = item => (
  item.description
    ? Pass()
    : Warning('This item is missing an description')
)
