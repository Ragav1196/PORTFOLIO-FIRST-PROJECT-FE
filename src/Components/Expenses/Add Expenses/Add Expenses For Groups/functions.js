//   FUNCTION TO FIND SEARCH RESULTS
export function SearchNames(e, frndsLst, setSearch) {
  const Letter = e.target.value.toLowerCase();
  const LetterLength = Letter.length;

  function SearchLetter() {
    if (LetterLength > 0) {
      const result = [];

      frndsLst.map((data) => {
        const LowerCaseData = data.toLowerCase();
        const NamesSplitArr = [];
        const nameLength = LowerCaseData.length;

        for (let j = 0; j < nameLength; j += LetterLength) {
          const NamesInLetters = LowerCaseData.substring(j, j + LetterLength);
          NamesSplitArr.push(NamesInLetters);
        }

        for (let i = 0; i < NamesSplitArr.length; i++) {
          if (Letter === NamesSplitArr[i]) {
            result.push(data);
            return 0;
          }
        }
        return 0;
      });
      setSearch(result);
    } else {
      setSearch([]);
    }
  }
  SearchLetter();
}

// TO DELETE A FRIENDS NAME FROM THE "addFriend" USESTATE
export function DeleteFrndName(data, addFriend, setAddFriend) {
  let frndsList = [];
  frndsList.push(...addFriend);
  const newArr = frndsList.filter((FrndName) => FrndName !== data);
  setAddFriend(newArr);
}
