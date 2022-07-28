const INITIAL_STATE = {
    toDos: [
        {
            id: 1,
            name: "study",
            time: 30
        },
        {
            id: 2,
            name: "work",
            time: 40
        }
    ]

}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default reducer;