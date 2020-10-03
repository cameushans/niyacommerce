export default function count (count = 0,action){
    if(action.type === "INCREASE") {
        var newCount = count + 1
        return newCount; 
    } else if (action.type === "DECREASE") {
         newCount = count - 1
        return newCount; 
    } else {
        return count;
    }
}