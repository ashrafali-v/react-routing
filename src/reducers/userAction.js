const userActionReducer = (state={},action) =>{
    switch(userActionReducer.type){
        case 'EDIt':
         return 1;
        case 'ADD':
         return 2;
        case 'DELETE':
         return 3;
        default:
         return state;
    }

}
export default userActionReducer;