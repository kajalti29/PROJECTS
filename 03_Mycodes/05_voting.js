// ✅ Q4: Voting Eligibility

function canVote(age){
    if(age >= 18){
        return "voting";
    }else{
        return "Non voting";
    }
}

console.log(canVote(14));
