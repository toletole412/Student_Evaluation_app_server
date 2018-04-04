//for test
const student = [
  {
    "fullName": "A",
    "colorCode": "Yellow"
  },
  {
    "fullName": "B",
    "colorCode": "Green"
  },
  {
    "fullName": "C",
    "colorCode": "Red"
  }
]


export const color = () => {
  	let colourCode;
    const number = Math.random()

  	if (number <= 0.19 && number > 0)
  		return colourCode = 'Green'
  	else if (number <= 0.47 && number > 0.19)
  		return colourCode = 'Yellow'
  	else if (number <= 1 && number > 0.47)
  		return colourCode = 'Red'

	return colourCode;
}

export const filterByColour = (student) => {
  let code = color()

  if ('colorCode' in student && student.colorCode === code) {
	   return true;
	} else {
	   return false;
	}
}

export const studentByColor = student.filter(filterByColour)

export const randomStudent = (studentByColor) => {
	return studentByColor[Math.floor(Math.random() * studentByColor.length)]
}
