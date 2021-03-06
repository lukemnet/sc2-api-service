import responseSchema from '../../../schemas/response/index';
import {
  str,
  arr,
  obj,
  oneOfStr,
  num,
  oneOfNum,
} from '../../../helpers/schema';

const localizedGameModes = [
  'Archon',
  '1v1 Bronze',
  '1v1 Silver',
  '1v1 Gold',
  '1v1 Platinum',
  '1v1 Diamond',
  '1v1 Master',
  '1v1 Grandmaster',
  '2v2 Bronze',
  '2v2 Silver',
  '2v2 Gold',
  '2v2 Platinum',
  '2v2 Diamond',
  '2v2 Master',
  '2v2 Random Bronze',
  '2v2 Random Silver',
  '2v2 Random Gold',
  '2v2 Random Platinum',
  '2v2 Random Diamond',
  '2v2 Random Master',
  '3v3 Bronze',
  '3v3 Silver',
  '3v3 Gold',
  '3v3 Platinum',
  '3v3 Diamond',
  '3v3 Master',
  '3v3 Random Bronze',
  '3v3 Random Silver',
  '3v3 Random Gold',
  '3v3 Random Platinum',
  '3v3 Random Diamond',
  '3v3 Random Master',
  '4v4 Bronze',
  '4v4 Silver',
  '4v4 Gold',
  '4v4 Platinum',
  '4v4 Diamond',
  '4v4 Master',
  '4v4 Random Bronze',
  '4v4 Random Silver',
  '4v4 Random Gold',
  '4v4 Random Platinum',
  '4v4 Random Diamond',
  '4v4 Random Master',
];

const regions = [1, 2, 3, 5];

const ranks = [
  'BRONZE',
  'SILVER',
  'GOLD',
  'PLATINUM',
  'DIAMOND',
  'MASTER',
  'GRANDMASTER',
];

const races = ['terran', 'zerg', 'protoss', 'random'];

const member = {
  ...obj,
  properties: {
    name: str,
    playerId: str,
    region: oneOfNum(regions),
  },
};

const showCaseMember = {
  ...obj,
  properties: {
    favoriteRace: oneOfStr(races),
    name: str,
    playerId: str,
    region: oneOfNum(regions),
  },
};

const showCaseTeam = {
  ...obj,
  properties: {
    localizedGameMode: oneOfStr(localizedGameModes),
    members: {
      ...arr,
      items: showCaseMember,
    },
  },
};

const ladderMembership = {
  ...obj,
  properties: {
    ladderId: str,
    localizedGameMode: str,
    rank: num,
  },
};

const showCaseEntry = {
  ...obj,
  properties: {
    ladderId: str,
    team: showCaseTeam,
    leagueName: oneOfStr(ranks),
    localizedDivisionName: str,
    rank: num,
    wins: num,
    losses: num,
  },
};

const placement = {
  ...obj,
  properties: {
    localizedGameMode: oneOfStr(localizedGameModes),
    members: {
      ...arr,
      items: member,
    },
    gamesRemaining: num,
  },
};

const bnetData = {
  showCaseEntries: {
    ...arr,
    items: showCaseEntry,
  },
  placementMatches: {
    ...arr,
    items: placement,
  },
  allLadderMemberships: {
    ...arr,
    items: ladderMembership,
  },
};

export default {
  response: responseSchema(bnetData),
};
