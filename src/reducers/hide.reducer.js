


export default function hide (hiding="hidden",action){


    if(action.type === "HIDE") {
        var hide = "hidden"; 
        return hide;
    } else if (action.type === "SHOW") {
          hide = "visible"
        return hide; 
    } else {
        return hiding;
    }
}