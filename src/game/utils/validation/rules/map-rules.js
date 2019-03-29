const Pass = () => ({ status: 'Pass' })
const Warning = msg => ({ status: 'Warning', msg })
const Fail = msg => ({ status: 'Fail', msg })

export const hasName = map => (
  map.name
    ? Pass()
    : Fail('A map must have a name')
)

export const hasDescription = map => (
  map.description
    ? Pass()
    : Warning('This map is missing an description')
)
