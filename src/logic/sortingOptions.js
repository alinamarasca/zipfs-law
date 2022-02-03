const sortResults = () => {
  const hightToLowOccurrence = arr => {
    const sorted = arr.sort((a, b) => (a.occurrences > b.occurrences ? 1 : -1));
    return sorted;
  };

  const lowToHighOccurrence = arr => {
    const sorted = arr.sort((a, b) => (a.occurrences < b.occurrences ? 1 : -1));
    return sorted;
  };

  const alphabeticalOrder = arr => {
    const sorted = arr.sort((a, b) => (a.word > b.word ? 1 : -1));
    return sorted;
  };
};

export default sortResults;
