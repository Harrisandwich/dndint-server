const Pass = () => ({ status: 'Pass' })
const Warning = msg => ({ status: 'Warning', msg })
const Fail = msg => ({ status: 'Fail', msg })

export const hasName = character => (
  character.name
    ? Pass()
    : Fail('A character must have a name')
)

export const hasIntroduction = character => (
  character.introduction
    ? Pass()
    : Warning('This character is missing an introduction')
)
