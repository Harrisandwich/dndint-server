const Pass = () => ({ status: 'Pass' })
const Warning = msg => ({ status: 'Warning', msg })
const Fail = msg => ({ status: 'Fail', msg })

export const hasName = campaign => (
  campaign.name
    ? Pass()
    : Fail('A campaign must have a name')
)

export const hasIntro = campaign => (
  campaign.intro
    ? Pass()
    : Warning('No introduction found. This is fine if you wish to use your own')
)

export const hasDescription = campaign => (
  campaign.description
    ? Pass()
    : Warning('No description found.')
)

export const hasMap = campaign => (
  campaign.map
    ? Pass()
    : Fail('No map specified. A campaign requires a reference to a valid map object')
)

/*
  validates the map specified
  TODO: Finish map validation so it can be used here
*/
export const hasValidMap = campaign => campaign

hasValidMap.requires = 'hasMap'

export const hasAct = campaign => (
  campaign.acts && campaign.acts.length > 0
    ? Pass()
    : Fail('No acts found. At least on act is required to run a campaign')
)
