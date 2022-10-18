const tipCalculator = (qualityService, totalCost) => {
  switch (qualityService) {
      case 'horrible':
      return totalCost * .0;
      case 'bad':
      return totalCost * .05;
      case 'so-so':
      return totalCost * .10;
      case 'average':
      return totalCost * .15;
      case 'good':
      return totalCost * .20;
      case 'excellent':
      return totalCost * .30;
      case 'best ever':
      return totalCost * .50;
      default:
      return 'Must enter one of the seven adjectives to describe the service and a cost for the total bill.'
  } 
}


console.log(tipCalculator('bad', 100)) //should return 5

console.log(tipCalculator('best ever', 100)) //should return 50
