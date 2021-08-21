
  const letterPositions = function(sentence) {
    const results = {};
    for(letters of sentence)
    {
        results[letters] = [];

    }
    
    for(let b in results)
    {
        for(let a = 0; a < sentence.length; a++)
        {
            if(b === sentence[a])
            {
                results[b].push(a);
                    }
        }
    }
    return results;
  };
  module.exports = letterPositions;
  