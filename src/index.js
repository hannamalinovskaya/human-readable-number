module.exports = function toReadable (n) {
  var string = n.toString (), units, tens,scales, start, end, chunks,chunksLen, chunk, ints, i, word, words, and = 'and';
  sting = string.replace(/[, ]/g,"");
  if(parseInt( string )===0){
      return 'zero';
  }
  units = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  units = [ '','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  scales = [ '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion'];
  start = string.length;
  chunks =[];
  while (start>0){
      end=start;
      chunks.push( string.slice((start =Math.max(0, start - 3)),end));
      chunksLen= chunks.length;
      if (chunksLen> scales.length){
          return '';
      }
      words = [];
      for ( i=0, i< chunksLen; i++ ;) {
          chunk =parseInt(chunks[i]);
          if (chunk){
              ints = chunk [i].split('').reverse ().map ( parseFloat);
          }
          if (ints[1]===1){
              ints [0]+=10;
          }
          if ((word=scales[i])){
              words.push(word);
          }
          if((word=units [ints[0]])){
              words.push(word);
          }
          if ((word=tens [ints[1]])){
              words.push (word);
          }
          if (ints[0]|| ints[1]){
              if (ints[2]||! i && chunksLen){
                  words.push (and);
              }
          }
          if ((word=units [ints[2]])){
              words.push (word+ 'hundreed');
          }
      }
  }
  return words.reverse().join('');
}

