const participants = [
  {
    id: 'abeae3a7-cf59-4512-98d0-16b2c3b77852',
    role: 'Named driver',
    liabilityStatus: 'Fault',
    noClaimsBonusAllowed: 'Disallowed',
    person: {
      firstNames: 'AB',
      lastName: 'DEF',
    },
  },

  {
    id: 'abeae3a7-cf59-4512-98d0-16b2c3b77851',
    role: 'Policyholder',
    liabilityStatus: 'Fault',
    noClaimsBonusAllowed: 'Disallowed',
    person: {
      firstNames: 'BC',
      lastName: 'ABC',
    },
  },

  {
    id: 'abeae3a7-cf59-4512-98d0-16b2c3b77853',
    role: 'New driver',
    liabilityStatus: 'Fault',
    noClaimsBonusAllowed: 'Disallowed',
    person: {
      firstNames: 'Robert',
      lastName: 'GHI',
    },
  },
];

const byLastName = (p1, p2) =>
  p1.person.lastName.localeCompare(p2.person.lastName);
let participantsForDVLA = [];

// const byLastAuthDriver = (p1, p2) => {
//   return p1.isLastAuthorisedDriver ? -1 : p2.isLastAuthorisedDriver ? 1 : 0
// }

const byFirstNames = (p1, p2) =>
  p1.person.firstNames.localeCompare(p2.person.firstNames);
const byLastAuthDriver = (
  p1,
  p2,
) => (p1.isLastAuthorisedDriver ? -1 : p2.isLastAuthorisedDriver ? 1 : 0);

const toDVLAParticipants = (participant) => ({
  participantID: participant.id,
  participantRole: participant.role,
  isLastAuthorisedDriver:
    participant.id === 'abeae3a7-cf59-4512-98d0-16b2c3b77853'
})






const result = participants.sort(byFirstNames)
  .sort(byLastName)
  .map(toDVLAParticipants)
  .sort(byLastAuthDriver);

console.log('result', result);
