export default function personReducer(pre, action){
    switch(action.type){
        case 'update':{
            const{prev,current} = action;
            return{
                ...pre, mentors: pre.mentors.map((mentor) => {
                    if (mentor.name === prev) {
                      return { ...mentor, name: current }
                    } else {
                      return mentor
                    }
                  })
            }
        }
        case 'add' : {
            const {addName,addTitle} = action;
            return{
                ...pre, mentors: [{ name: addName, title: addTitle }, ...pre.mentors]
            }
        }
        case 'delete': {
            const{delName} = action;
            return {
                ...pre, mentors: pre.mentors.filter((mentor) =>
                    (mentor.name !== delName)
                )
            }
        }
        default : {
            throw Error(`알 수 없는 타입: ${action.type}`)
        }
    }
}