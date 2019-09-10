export interface People {
    eid: number;
    name: string;
    rid: number;
    supervisee: People[] | null;
  }

export class UserInfoService {
  // people: People[] = [
  //   {eid: 36, name: 'Peter Ye', rid: 1, employee: null},
  //   {eid: 37, name: 'Raj Shah', rid: 1, employee: null},
  //   {eid: 59, name: 'Oludotun (Dotun) Adeoye', rid: 1, employee: null},
  //   {
  //     eid: 28,
  //     name: 'Michael Nandlall',
  //     rid: 3,
  //     employee: [
  //       {eid: 36, name: 'Peter Ye', rid: 1, employee: null},
  //       {eid: 37, name: 'Raj Shah', rid: 1, employee: null},
  //     ]
  //   },
  //   {
  //     eid: 29,
  //     name: 'Satpreet Sudan',
  //     rid: 3,
  //     employee: [
  //       {eid: 59, name: 'Oludotun (Dotun) Adeoye', rid: 1, employee: null}
  //     ]
  //   },
  //   {
  //     eid: 2,
  //     name: 'Ana Cristina Moreira',
  //     rid: 4,
  //     employee: [
  //     {eid: 28, name: 'Michael Nandlall', rid: 3, employee: null},
  //     {eid: 29, name: 'Satpreet Sudan', rid: 3, employee: null}
  //     ]
  //   }
  // ];
}
