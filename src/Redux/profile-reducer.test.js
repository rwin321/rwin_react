import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, my name is Ervin', likesCount: 20},
        {id: 2, message: 'It\'s is my 1st post!', likesCount: 11},
        {id: 3, message: 'Business Conference', likesCount: 12},
        {id: 4, message: 'Trip to my sweety', likesCount: 13}
    ]
}

test('state.posts array must be incremented', () => {
    // 1.state dataз
    // 2. action
    let action = addPost('rwin_just_win')
    let newState = profileReducer(state, action)
    //3.expectations
    expect(newState.posts.length).toBe(5)
});

test('added newPost text must be correct', () => {
    // 1.state data
    // 2. action
    let action = addPost('rwin_just_win')
    let newState = profileReducer(state, action)
    //3.expectations
    expect(newState.posts[4].message).toBe('rwin_just_win')
});

test('state.posts array must be decremented', () => {
    // 1.state data
    // 2. action
    let action = deletePost(3)
    let newState = profileReducer(state, action)
    //3.expectations
    expect(newState.posts.length).toBe(3)
});