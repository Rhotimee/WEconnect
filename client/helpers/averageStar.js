export default function averageReviews (businessReviews) {
  let total = 0;
  businessReviews.forEach(review => {
    total = total + review.star
  });
   if (total === 0){
     return 0
   }
    const average = total / businessReviews.length
    return average
}
