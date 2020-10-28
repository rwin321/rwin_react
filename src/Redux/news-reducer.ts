
let initialState = {
    news: [
        { id: 1, newsTitle: 'Iphone 12 is on sale! Come on, do not waste any' +
                ' minute!', newsBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime mollitia neque non rem rerum sit.'},
        { id: 2, newsTitle: 'Iphone 12 is on sale! Come on, do not waste any' +
                ' minute!' , newsBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime mollitia neque non rem rerum sit.'},
        { id: 3, newsTitle: 'Iphone 12 is on sale! Come on, do not waste any' +
                ' minute!' , newsBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime mollitia neque non rem rerum sit.'},
        { id: 4, newsTitle: 'Iphone 12 is on sale! Come on, do not waste any' +
                ' minute!',  newsBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime mollitia neque non rem rerum sit.'},
        { id: 5, newsTitle: 'Iphone 12 is on sale! Come on, do not waste any' +
                ' minute!' , newsBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime mollitia neque non rem rerum sit.'}
    ] as Array<newsData>
}

type newsData = {
    id: number,
    newsTitle: string,
    newsBody: string
}

const newsReducer = (state = initialState, action: any) => {

    return state;
}

export default newsReducer