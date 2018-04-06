//random student logic

export const colour = () => {
  	let colourCode;
    const number = Math.random()

  	if (number <= 0.19 && number > 0)
  		return colourCode = 'green'
  	else if (number <= 0.47 && number > 0.19)
  		return colourCode = 'yellow'
  	else if (number <= 1 && number > 0.47)
  		return colourCode = 'red'

	return colourCode;
}


export const group = []

export const filterByColour = (batch) => {
  let code = colour()
	console.log(code)
   return batch.students.map(student => student.evaluations
     .sort()
     .slice(-1)
     .map(a => a.colourCode)[0]
     .includes(code)
      ? group.concat(student)
      : null)
}


export const random = (batch) => {
   return filterByColour(batch).filter(function(n){ return n != undefined })
   [Math.floor(Math.random() * filterByColour(batch).filter(function(n){ return n != undefined }).length)]
 }



//percentage logic
const total = (batch) => {
  return batch.students.map(student => student.evaluations
     .sort()
     .slice(-1)
     .map(a => a.colourCode)[0])
   }

export const redP = (batch) => {
  return total(batch).filter(a => a.length === 3).length/total(batch).length
}

export const yellowP = (batch) => {
  return total(batch).filter(a => a.length === 6).length/total(batch).length
}

export const greenP = (batch) => {
  return total(batch).filter(a => a.length === 5).length/total(batch).length
}
